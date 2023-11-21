import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Page26Scene } from './Page26Scene/Page26Scene';
import classes from './Page26.module.scss';

export const Page26 = () => {
  return (
    <Canvas className={classes.Page26} camera={{ position: [1, 1, 1], fov: 75 }} shadows='soft'>
      <OrbitControls />
      <Page26Scene />
    </Canvas>
  );
};
