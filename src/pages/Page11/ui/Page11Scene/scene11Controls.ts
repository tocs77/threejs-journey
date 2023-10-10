import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  material: {
    type: 'folder',
    name: 'Material',
    controls: {
      roughness: {
        type: 'range',
        name: 'Roughness',
        value: 0.7,
        min: 0,
        max: 1,
        step: 0.01,
      },
      metallness: {
        type: 'range',
        name: 'Metallness',
        value: 0.7,
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
  ambientLight: {
    type: 'folder',
    name: 'Ambient light',
    controls: {
      aIntensity: {
        type: 'range',
        name: 'Intensity',
        value: 0.5,
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
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.1,
      },
      dPositionX: {
        type: 'range',
        name: 'Position X',
        value: 2,
        min: -5,
        max: 5,
        step: 0.1,
      },
      dPositionY: {
        type: 'range',
        name: 'Position Y',
        value: 2,
        min: -5,
        max: 5,
        step: 0.1,
      },
      dPositionZ: {
        type: 'range',
        name: 'Position Z',
        value: -1,
        min: -5,
        max: 5,
        step: 0.1,
      },
      dShadowSize: {
        type: 'range',
        name: 'Shadow Map Size',
        value: 1024,
        min: 512,
        max: 2048,
        step: 512,
      },
      dShadowHelper: {
        type: 'boolean',
        name: 'Show Shadow Helper',
        value: false,
      },
    },
  },
  spotLight: {
    type: 'folder',
    name: 'Spot light',
    controls: {
      sEnabled: {
        type: 'boolean',
        name: 'Enabled',
        value: true,
      },
      sIntensity: {
        type: 'range',
        name: 'Intensity',
        value: 0.5,
        min: 0,
        max: 1.5,
        step: 0.1,
      },
      sPositionX: {
        type: 'range',
        name: 'Position X',
        value: 0,
        min: -5,
        max: 5,
        step: 0.1,
      },
      sPositionY: {
        type: 'range',
        name: 'Position Y',
        value: 2,
        min: -5,
        max: 5,
        step: 0.1,
      },
      sPositionZ: {
        type: 'range',
        name: 'Position Z',
        value: 2,
        min: -5,
        max: 5,
        step: 0.1,
      },
      sShadowHelper: {
        type: 'boolean',
        name: 'Show Shadow Helper',
        value: false,
      },
    },
  },
};
