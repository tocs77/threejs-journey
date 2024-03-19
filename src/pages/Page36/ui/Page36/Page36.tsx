import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page36.module.scss';
import { Page36Scene } from '../Page36Scene/Page36Scene';

export const Page36 = () => {
  return (
    <Canvas className={classes.Page36} shadows='soft'>
      <OrbitControls makeDefault />
      <Page36Scene />
    </Canvas>
  );
};
