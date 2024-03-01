import { useEffect, useRef, useState } from 'react';
import { AdditiveBlending, Color, IUniform, Material, Points } from 'three';
import { useFrame } from '@react-three/fiber';

import { useControls } from '@/shared/hooks/useControls';
import { controls } from './galaxyShaderControls';
import fragmentShader from '../shaders/galaxyFragment.glsl';
import vertexShader from '../shaders/galaxyVertex.glsl';


interface GalaxyShaderProps {
  count?: number;
}

interface GalaxyUniform extends Record<string, IUniform> {
  u_PointSize: { value: number };
  u_Time: { value: number };
}

const MAX_AMOUNT = 100000;

export const GalaxyShader = (props: GalaxyShaderProps) => {
  const { count } = props;
  const controlValues = useControls(controls);
  const [vertices, setVertices] = useState<Float32Array>();
  const [colors, setColors] = useState<Float32Array>();
  const [scales, setScales] = useState<Float32Array>();
  const [randomnes, setRandomnes] = useState<Float32Array>();

  const [amount, setAmount] = useState(count || controlValues.gCount);
  const particlesRef = useRef<Points | null>(null);
  const [uniforms, setUniforms] = useState<GalaxyUniform>({
    u_PointSize: { value: 5 },
    u_Time: { value: 0 },
  });

  useEffect(() => {
    generateVerices();
  }, [amount, controlValues]);

  useFrame((_, delta) => {
    if (!particlesRef.current) return;
    const newUniforms: GalaxyUniform = { ...uniforms };
    newUniforms.u_Time.value += delta;
    setUniforms(newUniforms);
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  useEffect(() => {
    if (count) return;

    setAmount(controlValues.gCount);
    if (!particlesRef.current) return;
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.color.needsUpdate = true;
  }, [controlValues.gCount]);

  useEffect(() => {
    if (!particlesRef.current) return;
    (particlesRef.current.material as Material).needsUpdate = true;
  }, [controlValues.gSizeAttenuation]);

  useEffect(() => {
    const newUniforms = { ...uniforms };
    newUniforms.u_PointSize.value = controlValues.gPointSize;
    setUniforms(newUniforms);
  }, [controlValues]);

  const generateVerices = () => {
    if (!amount) return;
    const angle = (Math.PI * 2) / controlValues.gBranches;
    const newVertices = new Float32Array(MAX_AMOUNT * 3);
    const newColors = new Float32Array(MAX_AMOUNT * 3);
    const newScales = new Float32Array(MAX_AMOUNT * 1);
    const newRandomnes = new Float32Array(MAX_AMOUNT * 3);

    const colorInside = new Color(controlValues.gInnerColor);
    const colorOutside = new Color(controlValues.gOuterColor);

    for (let i = 0; i < amount; i++) {
      const r = (Math.abs(gaussianRandom(0, 0.5)) * controlValues.gRadius) / 2;
      const branchAngle = angle * (i % controlValues.gBranches);

      const stdev = ((r * controlValues.gRadius) / 30) * controlValues.gRandomness;
      const randomX = gaussianRandom(0, stdev);
      const randomY = gaussianRandom(0, stdev);
      const randomZ = gaussianRandom(0, stdev);

      newRandomnes[i * 3] = randomX;
      newRandomnes[i * 3 + 1] = randomY;
      newRandomnes[i * 3 + 2] = randomZ;

      newVertices[i * 3] = r * Math.cos(branchAngle);
      newVertices[i * 3 + 1] = 0;
      newVertices[i * 3 + 2] = r * Math.sin(branchAngle);

      //color
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, (5 * r) / controlValues.gRadius);
      newColors[i * 3] = mixedColor.r;
      newColors[i * 3 + 1] = mixedColor.g;
      newColors[i * 3 + 2] = mixedColor.b;
      newScales[i] = 1 + gaussianRandom(0, 0.5);
    }

    setVertices(newVertices);
    setColors(newColors);
    setScales(newScales);
    setRandomnes(newRandomnes);
    if (!particlesRef.current) return;
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.color.needsUpdate = true;
  };

  const gaussianRandom = (mean = 0, stdev = 1) => {
    const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
  };

  if (!amount) return null;
  if (!vertices || vertices.length === 0) return null;

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach='geometry'>
        <bufferAttribute attach='attributes-position' array={vertices} itemSize={3} count={amount} />
        <bufferAttribute attach='attributes-color' array={colors} itemSize={3} count={amount} />
        <bufferAttribute attach='attributes-randomnes' array={randomnes} itemSize={3} count={amount} />
        <bufferAttribute attach='attributes-scale' array={scales} itemSize={1} count={amount} />
      </bufferGeometry>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        depthWrite={false}
        blending={AdditiveBlending}
        vertexColors={true}
        uniforms={uniforms}
      />
    </points>
  );
};
