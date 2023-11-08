import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  flagFolder: {
    type: 'folder',
    name: 'Flag',
    controls: {
      fFrequencyX: {
        type: 'range',
        name: 'Frequency X',
        min: 0,
        max: 20,
        step: 1,
        value: 10,
      },
      fFrequencyY: {
        type: 'range',
        name: 'Frequency Y',
        min: 0,
        max: 20,
        step: 1,
        value: 10,
      },
      fColor: {
        type: 'color',
        name: 'Color',
        value: '#ffff00',
      },
      fTexture: {
        type: 'boolean',
        value: false,
        name: 'Texture',
      },
    },
  },
};
