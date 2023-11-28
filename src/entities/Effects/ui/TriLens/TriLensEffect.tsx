import { forwardRef, useMemo } from 'react';

import fragmentShader from './triLensFragment.glsl';

interface TriLensEffectProps {
  fragments?: number;
}

export const TriLensEffect = forwardRef(({ fragments = 153 }: TriLensEffectProps, ref) => {
  const effect = useMemo(() => new TriangularLensEffect(fragments), [fragments]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});

import { Uniform, Vector2 } from 'three';
import { Effect } from 'postprocessing';

class TriangularLensEffect extends Effect {
  resolution: Vector2;
  fragments: number;

  constructor(fragments = 153.0) {
    const aUniform = new Uniform(false);
    const fUniform = new Uniform(Number);
    const uniforms = new Map<string, Uniform>([
      ['active', aUniform],
      ['fragments', fUniform],
    ]);
    super('TriangularLensEffect', fragmentShader, {
      uniforms,
    });

    this.resolution = new Vector2();

    this.fragments = fragments;
  }

  getFragments() {
    return this.fragments;
  }

  setFragments(fragments: number) {
    fragments = Math.floor(fragments);
    if (!this.uniforms) return;
    const uniforms = this.uniforms;
    const active = uniforms.get('active');
    if (active) active.value = fragments > 0.0;
    const fragmentsUniform = uniforms.get('fragments');
    if (fragmentsUniform) fragmentsUniform.value = fragments;

    this.fragments = fragments;
  }

  setSize(width: number, height: number) {
    this.resolution.set(width, height);
    this.setFragments(this.fragments);
  }
}
