import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  ambientLight: {
    type: 'folder',
    name: 'Ambient light',
    controls: {
      aIntensity: {
        type: 'range',
        name: 'Intensity',
        value: 0.15,
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },

  directionLight: {
    type: 'folder',
    name: 'Directional light',
    controls: {
      dEnabled: {
        type: 'boolean',
        name: 'Enabled',
        value: true,
      },
      dIntensity: {
        type: 'range',
        name: 'Intensity',
        value: 0.15,
        min: 0,
        max: 1,
        step: 0.1,
      },
      dPositionX: {
        type: 'range',
        name: 'Position X',
        value: 4,
        min: -5,
        max: 5,
        step: 0.1,
      },
      dPositionY: {
        type: 'range',
        name: 'Position Y',
        value: 5,
        min: -5,
        max: 5,
        step: 0.1,
      },
      dPositionZ: {
        type: 'range',
        name: 'Position Z',
        value: -2,
        min: -5,
        max: 5,
        step: 0.1,
      },
    },
  },
  shadows: {
    type: 'boolean',
    name: 'Shadows',
    value: false,
  },
};
