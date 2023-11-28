import { forwardRef, useMemo } from 'react';
import { Uniform, Vector3 } from 'three';
import { Effect } from 'postprocessing';
import fragmentShader from './displacementFragmentShader.glsl';

class DisplacementEffect extends Effect {
  constructor(position?: Vector3) {
    super('DisplacementEffect', fragmentShader, {
      uniforms: new Map([['args', new Uniform(position)]]),
    });
  }
}

interface DisplacementEffectComponentProps {
  position: Vector3;
}

export const DisplacementEffectComponent = forwardRef(({ position }: DisplacementEffectComponentProps, ref) => {
  const effect = useMemo(() => new DisplacementEffect(position), [position]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
