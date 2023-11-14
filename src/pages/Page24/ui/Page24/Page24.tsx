import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page24.module.scss';
import { Page24Scene } from '../Page24Scene/Page24Scene';

export const Page24 = () => {
  return (
    <Canvas className={classes.Page24} camera={{ position: [1, 1, 1], fov: 75 }} shadows='soft'>
      <OrbitControls />
      <Page24Scene />
    </Canvas>
  );
};
