import { Controls } from '@/shared/hooks/useControls';
import { FoxAnimation } from './Fox';

export const controls: Controls = {
  foxFolder: {
    type: 'folder',
    name: 'Fox',
    controls: {
      fAnimation: {
        type: 'options',
        name: 'Animation',
        options: ['Survey', 'Walk', 'Run'] as FoxAnimation[],
        value: 'Survey',
      },
    },
  },
};
