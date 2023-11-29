import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  instnaced: {
    type: 'folder',
    name: 'Instanced Mesh',
    controls: {
      iShow: {
        type: 'boolean',
        value: false,
        name: 'Show',
      },
      iRows: {
        type: 'range',
        value: 3,
        min: 1,
        max: 10,
        step: 1,
        name: 'Rows',
      },
      iColumns: {
        type: 'range',
        value: 5,
        min: 1,
        max: 10,
        step: 1,
        name: 'Columns',
      },
    },
  },
};
