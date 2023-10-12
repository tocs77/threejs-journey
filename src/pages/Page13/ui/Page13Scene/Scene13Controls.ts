import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  ambientLight: {
    type: 'folder',
    name: 'Paticles',
    controls: {
      pAmount: {
        type: 'range',
        name: 'Amount',
        value: 5000,
        min: 0,
        max: 5000,
        step: 1,
      },
      pTexture: {
        type: 'options',
        name: 'Texture',
        value: '1',
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      },
      pColor: {
        type: 'color',
        name: 'Color',
        value: '#ffffff',
      },
      pRandomColors: {
        type: 'boolean',
        name: 'Random Colors',
        value: true,
      },
    },
  },
};
