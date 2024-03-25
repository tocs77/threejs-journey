import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page37.module.scss';
import { Page37Scene } from '../Page37Scene/Page37Scene';

export const Page37 = () => {
  return (
    <Canvas className={classes.Page37} shadows='soft'>
      <color args={['#fff']} attach='background' />
      <OrbitControls makeDefault />
      <Page37Scene />
    </Canvas>
  );
};
