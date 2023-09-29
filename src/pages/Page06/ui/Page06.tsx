import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BasicBox } from '@/features/BasicBox';
import { useControls, Controls } from '@/shared/hooks/useControls';

import classes from './Page06.module.scss';

const controls: Controls = {
  cubeColor: {
    type: 'color',
    name: 'Cube color',
    value: '#ff0000',
  },
  showWires: {
    type: 'boolean',
    name: 'Show wires',
    value: false,
  },
  size: {
    type: 'range',
    name: 'Size',
    value: 2,
    min: 1,
    max: 5,
    step: 0.2,
  },
};

export const Page6 = () => {
  const controlValues = useControls(controls);

  return (
    <Canvas className={classes.Page6} dpr={1} camera={{ position: [0, 0, 5], fov: 50 }}>
      <OrbitControls />
      <BasicBox color={controlValues.cubeColor} wireframe={controlValues.showWires} size={controlValues.size} />
    </Canvas>
  );
};
