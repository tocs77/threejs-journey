import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page15.module.scss';
import { Page15Scene } from '../Page15Scene/Page15Scene';

export const Page15 = () => {
  return (
    <Canvas className={classes.Page15} camera={{ position: [0, 0, 3], fov: 75 }}>
      <OrbitControls zoomSpeed={0.2} />
      <Page15Scene />
    </Canvas>
  );
};
