import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene23 } from '../Page23Scene/Page23Scene';

import classes from './Page23.module.scss';

export const Page23 = () => {
  return (
    <Canvas className={classes.Page23} camera={{ position: [0.25, -0.25, 4], fov: 35 }} shadows='soft'>
      <OrbitControls />
      <Scene23 />
    </Canvas>
  );
};
