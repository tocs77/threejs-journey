import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page27.module.scss';
import { Page27Scene } from '../Page27Scene/Page27Scene';

export const Page27 = () => {
  return (
    <Canvas className={classes.Page27} camera={{ position: [4, 1, -4], fov: 75 }} shadows='soft'>
      <OrbitControls />
      <Page27Scene />
    </Canvas>
  );
};
