import vertexShader from '../shaders/waterVertex.glsl';
import fragmentShader from '../shaders/waterFragment.glsl';
import { useControls } from '@/shared/hooks/useControls';
import { controls } from './waterControls';
import { useEffect, useState } from 'react';
import { Color, IUniform, Vector2, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

interface WaterUniform extends Record<string, IUniform> {
  u_Time: { value: number };

  u_BigWavesFrequency: { value: Vector2 };
  u_BigWavesElevation: { value: number };
  u_BigWavesSpeed: { value: number };

  u_depthColor: { value: Color };
  u_surfaceColor: { value: Color };
  u_colorOffset: { value: number };
  u_colorMultiplier: { value: number };
}

export const Water = () => {
  const controlValues = useControls(controls);
  const [uniforms, setUniforms] = useState<WaterUniform>({
    u_Time: { value: 0 },
    u_BigWavesElevation: { value: 0 },
    u_BigWavesFrequency: { value: new Vector2(0, 0) },
    u_BigWavesSpeed: { value: 0.75 },
    u_SmallWavesElevation: { value: 0.15 },
    u_SmallWavesFrequency: { value: 3 },
    u_SmallWavesSpeed: { value: 0.2 },
    u_SmallWavesIteration: { value: 3 },
    u_depthColor: { value: new Color('#186691') },
    u_surfaceColor: { value: new Color('#9bd8ff') },
    u_colorOffset: { value: 0.25 },
    u_colorMultiplier: { value: 2 },
  });

  useEffect(() => {
    const newUniforms = { ...uniforms };
    newUniforms.u_BigWavesFrequency.value = new Vector2(controlValues.wBigWavesFrequencyX, controlValues.wBigWavesFrequencyY);
    newUniforms.u_BigWavesElevation.value = controlValues.wBigWavesElevation;
    newUniforms.u_BigWavesSpeed.value = controlValues.wBigWavesSpeed;
    newUniforms.u_SmallWavesElevation.value = controlValues.wSmallWavesElevation;
    newUniforms.u_SmallWavesFrequency.value = controlValues.wSmallWavesFrequency;
    newUniforms.u_SmallWavesSpeed.value = controlValues.wSmallWavesSpeed;
    newUniforms.u_SmallWavesIteration.value = controlValues.wSmallWavesIteration;
    newUniforms.u_depthColor.value = new Color(controlValues.wDepthColor);
    newUniforms.u_surfaceColor.value = new Color(controlValues.wSurfaceColor);
    newUniforms.u_colorOffset.value = controlValues.wColorOffset;
    newUniforms.u_colorMultiplier.value = controlValues.wColorMultiplier;
    setUniforms(newUniforms);
  }, [controlValues]);

  useFrame((_, delta) => {
    const newUniforms = { ...uniforms };
    newUniforms.u_Time.value += delta;
    setUniforms(newUniforms);
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[2, 2, 512, 512]} />
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
    </mesh>
  );
};
