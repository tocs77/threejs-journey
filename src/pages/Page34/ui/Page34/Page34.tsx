import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page34.module.scss';
import { Page34Scene } from '../Page34Scene/Page34Scene';

export const Page34 = () => {
  return (
    <Canvas className={classes.Page34} shadows='soft'>
      <OrbitControls makeDefault />
      <Page34Scene />
    </Canvas>
  );
};
