import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page14.module.scss';
import { Page14Scene } from '../Page14Scene/Page14Scene';

export const Page14 = () => {
  return (
    <Canvas className={classes.Page14} camera={{ position: [4, 2, 5], fov: 75 }}>
      <OrbitControls zoomSpeed={0.2} />
      <Page14Scene />
    </Canvas>
  );
};
