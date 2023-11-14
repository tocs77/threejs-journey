import { Controls } from '@/shared/hooks/useControls';

export const controls: Controls = {
  waterFolder: {
    type: 'folder',
    name: 'Water',
    controls: {
      wBigWavesElevation: {
        type: 'range',
        name: 'Big Waves Elevation',
        value: 0.2,
        step: 0.01,
        min: 0,
        max: 1,
      },
      wBigWavesFrequencyX: {
        type: 'range',
        name: 'Big Waves Frequency X',
        value: 4.5,
        step: 0.1,
        min: 0,
        max: 10,
      },
      wBigWavesFrequencyY: {
        type: 'range',
        name: 'Big Waves Frequency Y',
        value: 1.5,
        step: 0.1,
        min: 0,
        max: 10,
      },
      wBigWavesSpeed: {
        type: 'range',
        name: 'Big Waves Speed',
        value: 0.75,
        step: 0.1,
        min: 0,
        max: 4,
      },
      wSmallWavesElevation: {
        type: 'range',
        name: 'Small Waves Elevation',
        value: 0.15,
        step: 0.01,
        min: 0.02,
        max: 0.8,
      },
      wSmallWavesFrequency: {
        type: 'range',
        name: 'Small Waves Frequency',
        value: 3,
        step: 0.1,
        min: 0,
        max: 6,
      },
      wSmallWavesSpeed: {
        type: 'range',
        name: 'Small Waves Speed',
        value: 0.2,
        step: 0.1,
        min: 0,
        max: 1,
      },
      wSmallWavesIteration: {
        type: 'range',
        name: 'Small Waves Iteration',
        value: 3,
        step: 1,
        min: 1,
        max: 6,
      },
      wDepthColor: {
        type: 'color',
        name: 'Depth Color',
        value: '#186691',
      },
      wSurfaceColor: {
        type: 'color',
        name: 'Surface Color',
        value: '#9bd8ff',
      },
      wColorOffset: {
        type: 'range',
        name: 'Color Offset',
        value: 0.08,
        step: 0.01,
        min: 0,
        max: 1,
      },
      wColorMultiplier: {
        type: 'range',
        name: 'Color Multiplier',
        value: 5,
        step: 0.1,
        min: 0,
        max: 10,
      },
    },
  },
};
