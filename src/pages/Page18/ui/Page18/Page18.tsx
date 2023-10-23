import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page18.module.scss';
import { Page18Scene } from '../Page18Scene/Page18Scene';

export const Page18 = () => {
  return (
    <Canvas className={classes.Page18} camera={{ position: [2, 2, 2], fov: 75 }} shadows='soft'>
      <OrbitControls zoomSpeed={0.2} />
      <Page18Scene />
    </Canvas>
  );
};
