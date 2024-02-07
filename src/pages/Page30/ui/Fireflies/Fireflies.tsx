import { useEffect, useRef, useState } from 'react';
import { AdditiveBlending, IUniform, Points } from 'three';
import { controls } from './firefliesControls';
import { useControls } from '@/shared/hooks/useControls';

import vertexShader from '../../shaders/fireflyVertex.glsl';
import fragmentShader from '../../shaders/fireflyFragemnt.glsl';
import { useFrame } from '@react-three/fiber';

interface FireflyUniform extends Record<string, IUniform> {
  uPixelRatio: { value: number };
  uSize: { value: number };
  uTime: { value: number };
}

const MAX_FIREFLIES = 40;

export const Fireflies = () => {
  const particlesRef = useRef<Points | null>(null);
  const [vertices, setVertices] = useState<Float32Array>();
  const [scales, setScales] = useState<Float32Array>();
  const controlValues = useControls(controls);
  const [uniforms, setUniforms] = useState<FireflyUniform>({
    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    uSize: { value: controlValues.fSize },
    uTime: { value: 0 },
  });

  useFrame((_, delta) => {
    if (!particlesRef.current) return;
    const newUniforms = { ...uniforms };
    newUniforms.uTime.value += delta;
    setUniforms(newUniforms);
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  useEffect(() => {
    const newVertices = new Float32Array(MAX_FIREFLIES * 3);
    for (let i = 0; i < controlValues.fAmount; i++) {
      newVertices[i * 3] = (Math.random() - 0.8) * 4;
      newVertices[i * 3 + 1] = Math.random() * 1.5;
      newVertices[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    setVertices(newVertices);
    const newScales = new Float32Array(MAX_FIREFLIES);
    for (let i = 0; i < controlValues.fAmount; i++) {
      newScales[i] = Math.random();
    }
    setScales(newScales);
    if (!particlesRef.current) return;
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  }, [controlValues.fAmount]);

  useEffect(() => {
    const newUniforms = { ...uniforms };
    newUniforms.uSize.value = Number(controlValues.fSize);
    setUniforms(newUniforms);
  }, [controlValues.fSize]);

  if (!vertices) return null;

  const firefliesMaterial = (
    <shaderMaterial
      transparent
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      blending={AdditiveBlending}
      depthWrite={false}
    />
  );

  const firefliesGeometry = (
    <bufferGeometry attach='geometry'>
      <bufferAttribute attach='attributes-position' array={vertices} itemSize={3} count={Number(controlValues.fAmount) * 3} />
      <bufferAttribute attach='attributes-scale' array={scales} itemSize={1} count={Number(controlValues.fAmount)} />
    </bufferGeometry>
  );

  return (
    <points ref={particlesRef}>
      {firefliesGeometry}
      {firefliesMaterial}
    </points>
  );
};
