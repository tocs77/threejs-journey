import { forwardRef, useMemo } from 'react';
import { Color, Uniform } from 'three';
import { Effect } from 'postprocessing';
import fragmentShader from './tintFragmentShader.glsl';

class TintEffect extends Effect {
  constructor(tint: Color) {
    super('TintEffect', fragmentShader, {
      uniforms: new Map([['tint', new Uniform(tint)]]),
    });
  }
}

interface TintEffectComponentProps {
  tint: Color;
}

export const TintEffectComponent = forwardRef(({ tint }: TintEffectComponentProps, ref) => {
  const effect = useMemo(() => new TintEffect(tint), [tint]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
