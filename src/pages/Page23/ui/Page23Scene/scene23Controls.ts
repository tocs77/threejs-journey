import { Controls } from '@/shared/hooks/useControls';
import { Shaders } from './Page23Scene';

export const controls: Controls = {
  shader: {
    type: 'options',
    name: 'Shader type',
    options: [
      'basic',
      'gradient',
      'bwGradient',
      'zebra',
      'grid',
      'plus',
      'stepGradient',
      'noise',
      'randomSquares',
      'star',
      'waves',
      'wavedCircle',
      'camo',
      'perlinLines',
      'coloredPerlin',
    ] as Shaders[],
    value: 'basic',
  },
};
