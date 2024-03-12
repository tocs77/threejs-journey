import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  bakeShadows: {
    type: 'boolean',
    value: false,
    name: 'Bake shadows',
  },
  softShadows: {
    type: 'boolean',
    value: false,
    name: 'Soft shadows',
  },
  accumulatedShadows: {
    type: 'boolean',
    value: false,
    name: 'Accumulated shadows',
  },
  sky: {
    type: 'boolean',
    value: false,
    name: 'Show Sky',
  },
  environment: {
    type: 'boolean',
    value: false,
    name: 'Show Environment',
  },
  ground: {
    type: 'boolean',
    value: false,
    name: 'Environment ground',
  },
};
