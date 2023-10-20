import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  sAmount: {
    type: 'range',
    name: 'Amount',
    value: 300,
    min: 10,
    max: 1000,
    step: 1,
  },
};
