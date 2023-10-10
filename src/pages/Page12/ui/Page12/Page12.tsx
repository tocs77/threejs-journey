import { Canvas } from '@react-three/fiber';
import classes from './Page12.module.scss';
import { OrbitControls } from '@react-three/drei';

import { Page12Scene } from '../Page12Scene/Page12Scene';

export const Page12 = () => {
  return (
    <Canvas className={classes.Page12} camera={{ position: [4, 2, 5], fov: 75 }} shadows='soft'>
      <OrbitControls zoomSpeed={0.2} />
      <Page12Scene />
    </Canvas>
  );
};
