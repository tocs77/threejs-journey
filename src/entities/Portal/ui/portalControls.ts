import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  portalFolder: {
    type: 'folder',
    name: 'Portal',
    controls: {
      pStartColor: {
        type: 'color',
        name: 'Color',
        value: '#cb2a2a',
      },
      pEndColor: {
        type: 'color',
        name: 'Color',
        value: '#cccccc',
      },
    },
  },
};
