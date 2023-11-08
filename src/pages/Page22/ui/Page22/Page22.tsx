import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Page22Scene } from '../Page22Scene/Page22Scene';
import classes from './Page22.module.scss';

export const Page22 = () => {
  return (
    <Canvas className={classes.Page22} camera={{ position: [0.25, -0.25, 4], fov: 35 }} shadows='soft'>
      <OrbitControls />
      <Page22Scene />
    </Canvas>
  );
};
