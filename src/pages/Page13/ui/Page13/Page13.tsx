import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page13.module.scss';
import { Page13Scene } from '../Page13Scene/Page13Scene';

export const Page13 = () => {
  return (
    <Canvas className={classes.Page13} camera={{ position: [4, 2, 5], fov: 75 }}>
      <OrbitControls zoomSpeed={0.2} />
      <Page13Scene />
    </Canvas>
  );
};
