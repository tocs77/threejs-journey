import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page32.module.scss';
import { Page32Scene } from '../Page32Scene/Page32Scene';

export const Page32 = () => {
  return (
    <Canvas className={classes.Page32}>
      <OrbitControls makeDefault/>
      <Page32Scene />
    </Canvas>
  );
};
