import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  firefliesFolder: {
    type: 'folder',
    name: 'Fireflies',
    controls: {
      fAmount: {
        type: 'range',
        name: 'Amount',
        min: 5,
        max: 40,
        step: 1,
        value: 20,
      },
      fSize: {
        type: 'range',
        name: 'Size',
        min: 5,
        max: 90,
        step: 1,
        value: 60,
      },
    },
  },
};
