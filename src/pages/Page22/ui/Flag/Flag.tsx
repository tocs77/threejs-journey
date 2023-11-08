import { useEffect, useRef, useState } from 'react';
import { Color, IUniform, ShaderMaterial, Texture, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';

import { useControls } from '@/shared/hooks/useControls';
import flagImg from '@/shared/assets/images/flag.png';

import vertexShader from '../../shaders/flagVertex.glsl';
import fragmentShader from '../../shaders/flagFragment.glsl';
import textureFragmentShader from '../../shaders/flagTextureFragment.glsl';
import { controls } from './flagControls';
import { useTexture } from '@react-three/drei';

interface FlagUniform extends Record<string, IUniform> {
  u_frequency: { value: Vector2 };
  u_Time: { value: number };
  u_color: { value: Color };
  u_texture: { value: Texture | null };
}

export const Flag = () => {
  const materialRef = useRef<ShaderMaterial>(null);
  const controlValues = useControls(controls);
  const [uniforms, setUniforms] = useState<FlagUniform>({
    u_frequency: { value: new Vector2(10, 10) },
    u_Time: { value: 0 },
    u_color: { value: new Color('#ffff00') },
    u_texture: { value: null },
  });

  useEffect(() => {
    const newUniforms = { ...uniforms };
    newUniforms.u_frequency = { value: new Vector2(controlValues.fFrequencyX, controlValues.fFrequencyY) };
    newUniforms.u_color = { value: new Color(controlValues.fColor) };
    materialRef.current!.uniforms = newUniforms;
    setUniforms(newUniforms);
  }, [controlValues]);

  const updateTexture = (texture: Texture | Texture[]) => {
    if (uniforms.u_texture.value) return;
    if (Array.isArray(texture)) return;
    const newUniforms = { ...uniforms };
    newUniforms.u_texture.value = texture;
    materialRef.current!.uniforms = newUniforms;
    setUniforms(newUniforms);
  };

  useTexture(flagImg, updateTexture) as Texture;

  useFrame((_, delta) => {
    const newUniforms = { ...uniforms };
    newUniforms.u_Time.value += delta;
    setUniforms(newUniforms);
  });

  const plane = (
    <mesh position={[1, 0, 0]} scale-y={2 / 3}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <rawShaderMaterial
        ref={materialRef}
        key={controlValues.fFrequencyX + controlValues.fFrequencyY + controlValues.fColor + String(controlValues.fTexture)}
        vertexShader={vertexShader}
        fragmentShader={controlValues.fTexture ? textureFragmentShader : fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
  return plane;
};
