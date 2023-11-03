import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Page21Scene } from '../Page21Scene/Page21Scene';
import classes from './Page21.module.scss';

export const Page21 = () => {
  return (
    <Canvas className={classes.Page21} camera={{ position: [6, 4, 8], fov: 35 }} shadows='soft'>
      <OrbitControls />
      <Page21Scene />
    </Canvas>
  );
};
