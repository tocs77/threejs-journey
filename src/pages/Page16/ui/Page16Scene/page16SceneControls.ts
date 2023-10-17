import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  material: {
    type: 'folder',
    name: 'Material',
    controls: {
      mColor: {
        type: 'color',
        name: 'Color',
        value: '#ffeded',
      },
    },
  },
};
