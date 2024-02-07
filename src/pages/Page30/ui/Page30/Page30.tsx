import { Canvas } from '@react-three/fiber';

import classes from './Page30.module.scss';
import { OrbitControls } from '@react-three/drei';
import { Page30Scene } from '../Page30Scene/Page30Scene';

export const Page30 = () => {
  return (
    <Canvas className={classes.Page30} camera={{ position: [4, 1, -4], fov: 75 }} shadows='soft'>
      <OrbitControls />
      <Page30Scene />
    </Canvas>
  );
};
