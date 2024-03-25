import { BlendFunction, Effect } from 'postprocessing';
import { forwardRef } from 'react';
import { Uniform } from 'three';

import fragmentShader from './drunkEffectShader.glsl';

type Uniforms = 'frequency' | 'amplitude' | 'offset';

class DrunkEffect extends Effect {
  constructor(frequency: number, amplitude: number, blendFunction: BlendFunction) {
    super('DrunkEffect', fragmentShader, {
      uniforms: new Map<Uniforms, Uniform>([
        ['frequency', new Uniform(frequency)],
        ['amplitude', new Uniform(amplitude)],
        ['offset', new Uniform(0)],
      ]),
      blendFunction,
    });
  }

  update(_: any, _1: any, deltatime: number) {
    this.uniforms.get('offset').value += deltatime;
  }
}

interface DrunkEffectProps {
  frequency?: number;
  amplitude?: number;
  blendFunction?: BlendFunction;
}

export const DrunkEffectComponent = forwardRef((props: DrunkEffectProps, ref) => {
  const { frequency = 2, amplitude = 0.1, blendFunction = BlendFunction.DARKEN } = props;
  const effect = new DrunkEffect(frequency, amplitude, blendFunction);
  return <primitive object={effect} ref={ref} />;
});
