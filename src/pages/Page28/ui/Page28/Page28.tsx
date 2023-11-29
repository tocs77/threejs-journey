import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page28.module.scss';
import { Page28Scene } from '../Page28Scene/Page28Scene';

export const Page28 = () => {
  return (
    <Canvas className={classes.Page28} camera={{ position: [2, 2, 6], fov: 75 }} shadows='soft'>
      <OrbitControls />
      <Page28Scene />
    </Canvas>
  );
};
