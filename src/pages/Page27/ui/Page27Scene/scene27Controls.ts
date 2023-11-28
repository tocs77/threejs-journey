import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  dot: {
    type: 'boolean',
    name: 'Dot screen',
    value: false,
  },
  glitch: {
    type: 'boolean',
    name: 'Glitch',
    value: false,
  },
  triLens: {
    type: 'boolean',
    name: 'Triangular lens',
    value: false,
  },
  rgbShift: {
    type: 'boolean',
    name: 'RGB Shift',
    value: false,
  },
  bloom: {
    type: 'boolean',
    name: 'Bloom',
    value: false,
  },
  tint: {
    type: 'boolean',
    name: 'Tint',
    value: false,
  },
  tintColor: {
    type: 'color',
    name: 'Tint color',
    value: '#ff0000',
  },
  displacement: {
    type: 'boolean',
    name: 'Displacement',
    value: false,
  },
  displacementX: {
    type: 'range',
    name: 'Displacement X',
    value: 2,
    min: -5,
    max: 5,
    step: 0.1,
  },
  displacementY: {
    type: 'range',
    name: 'Displacement Y',
    value: 1,
    min: -5,
    max: 5,
    step: 0.1,
  },
  displacementZ: {
    type: 'range',
    name: 'Displacement Z',
    value: -0.2,
    min: -1,
    max: 1,
    step: 0.1,
  },
  texture: {
    type: 'boolean',
    name: 'Texture',
    value: false,
  },
};
