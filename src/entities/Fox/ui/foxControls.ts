import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  foxFolder: {
    type: 'folder',
    name: 'Fox',
    controls: {
      fAnimation: {
        type: 'options',
        name: 'Animation',
        options: ['Survey', 'Walk', 'Run'],
        value: 'Survey',
      },
    },
  },
};
