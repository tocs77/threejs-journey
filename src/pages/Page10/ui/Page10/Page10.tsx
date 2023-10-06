import { Canvas } from '@react-three/fiber';
import classes from './Page10.module.scss';
import { Page10Scene } from './Page10Scene/Page10Scene';

import { OrbitControls } from '@react-three/drei';
export const Page10 = () => {
  return (
    <Canvas className={classes.Page10} camera={{ position: [1, 1, 2], fov: 75 }}>
      <OrbitControls />
      <Page10Scene />
    </Canvas>
  );
};
