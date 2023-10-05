import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Text3d } from '@/entities/Text3d';
import { useControls, Controls } from '@/shared/hooks/useControls';

import classes from './Page9.module.scss';

const controls: Controls = {
  wireframed: {
    type: 'boolean',
    name: 'Show Wireframes',
    value: false,
  },
  material: {
    type: 'options',
    name: 'Material',
    value: 'standard',
    options: ['basic', 'standard', 'matcap'],
  },
};

export const Page9 = () => {
  const controlValues = useControls(controls);
  return (
    <Canvas className={classes.Page9} dpr={1} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <OrbitControls zoomSpeed={1.5} />
      <Text3d text='Hello world!' material={controlValues.material} height={0.5} size={2} wirefamed={controlValues.wireframed} />
    </Canvas>
  );
};
