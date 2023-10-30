import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  dirLightFolder: {
    type: 'folder',
    name: 'Directional light',
    controls: {
      dlIntensity: {
        type: 'range',
        name: 'Intensity',
        value: 1,
        min: 0,
        max: 10,
        step: 0.001,
      },
      dlX: {
        type: 'range',
        name: 'Position X',
        value: 0.25,
        min: -5,
        max: 5,
        step: 0.1,
      },
      dlY: {
        type: 'range',
        name: 'Position Y',
        value: 2,
        min: -5,
        max: 5,
        step: 0.1,
      },
      dlZ: {
        type: 'range',
        name: 'Position Z',
        value: -2.25,
        min: -5,
        max: 5,
        step: 0.1,
      },
    },
  },
  helmetFolder: {
    type: 'folder',
    name: 'Helmet',
    controls: {
      hRotation: {
        type: 'range',
        name: 'Rotation',
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        value: 0,
      },
    },
  },
  envIntencity: {
    type: 'range',
    name: 'Env map intensity',
    min: 0,
    max: 10,
    step: 0.01,
    value: 5,
  },
  castShadow: {
    type: 'boolean',
    name: 'Cast shadow',
    value: true,
  },
  receiveShadow: {
    type: 'boolean',
    name: 'Receive shadow',
    value: true,
  },
};
