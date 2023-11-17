import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  galaxyFolder: {
    type: 'folder',
    name: 'Galaxy',
    controls: {
      gCount: {
        type: 'range',
        name: 'Count',
        value: 10000,
        min: 100,
        max: 100000,
        step: 100,
      },
      gPointSize: {
        type: 'range',
        name: 'Point size',
        value: 2,
        min: 1,
        max: 10,
        step: 1,
      },
      gStarSize: {
        type: 'range',
        name: 'Star Size',
        value: 0.02,
        min: 0.01,
        max: 0.5,
        step: 0.01,
      },
      gSizeAttenuation: {
        type: 'boolean',
        name: 'Size Attenuation',
        value: false,
      },
      gRadius: {
        type: 'range',
        name: 'Radius',
        value: 4,
        min: 1,
        max: 7,
        step: 1,
      },
      gBranches: {
        type: 'range',
        name: 'Branches',
        value: 3,
        min: 2,
        max: 15,
        step: 1,
      },
      gRandomness: {
        type: 'range',
        name: 'Randomness',
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
      },
      gInnerColor: {
        type: 'color',
        name: 'Inner Color',
        value: '#ff6030',
      },
      gOuterColor: {
        type: 'color',
        name: 'Outer Color',
        value: '#1b3984',
      },
    },
  },
};
