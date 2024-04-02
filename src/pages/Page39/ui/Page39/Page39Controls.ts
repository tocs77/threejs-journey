import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  debug: {
    type: 'boolean',
    value: true,
    name: 'Debug',
  },
  scene: {
    type: 'options',
    value: 'scene1',
    name: 'Scene',
    options: ['scene1', 'scene2', 'scene3'],
  },
};
