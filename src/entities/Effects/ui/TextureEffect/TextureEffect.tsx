import { forwardRef, useMemo } from 'react';
import { Texture, Uniform, Vector3 } from 'three';
import { Effect } from 'postprocessing';
import fragmentShader from './textureFragmentShader.glsl';
import normalTexture from '@/shared/assets/textures/interfaceNormalMap.png';
import { useTexture } from '@react-three/drei';

class TextureEffect extends Effect {
  constructor(normalMap: Texture, position: Vector3) {
    const uniforms: Map<string, Uniform<any>> = new Map();
    uniforms.set('normalMap', new Uniform(normalMap));
    uniforms.set('args', new Uniform(position));

    super('TextureEffect', fragmentShader, {
      uniforms,
    });
  }
}

interface TextureEffectComponentProps {
  position: Vector3;
}

export const TextureEffectComponent = forwardRef(({ position }: TextureEffectComponentProps, ref) => {
  const normalMap = useTexture(normalTexture) as Texture;
  const effect = useMemo(() => new TextureEffect(normalMap, position), [normalMap, position]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
