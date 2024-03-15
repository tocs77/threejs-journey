import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page35.module.scss';
import { Page35Scene } from '../Page35Scene/Page35Scene';

export const Page35 = () => {
  return (
    <Canvas className={classes.Page35} shadows='soft'>
      <OrbitControls makeDefault />
      <Page35Scene />
    </Canvas>
  );
};
