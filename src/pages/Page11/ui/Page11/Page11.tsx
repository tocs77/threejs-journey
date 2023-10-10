import { Canvas } from '@react-three/fiber';
import classes from './Page11.module.scss';
import { Page11Scene } from '../Page11Scene/Page11Scene';

import { OrbitControls } from '@react-three/drei';
export const Page11 = () => {
  return (
    <Canvas className={classes.Page11} camera={{ position: [1, 1, 2], fov: 75 }} shadows='percentage'>
      <OrbitControls />
      <Page11Scene />
    </Canvas>
  );
};
