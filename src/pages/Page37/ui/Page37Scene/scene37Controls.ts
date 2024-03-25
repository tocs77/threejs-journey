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
};
