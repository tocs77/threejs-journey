import { Canvas } from '@react-three/fiber';

import classes from './Page29.module.scss';
import { Page29Scene } from '../Page29Scene/Page29Scene';

export const Page29 = () => {
  return (
    <>
      <Canvas className={classes.Page29} camera={{ position: [4, 1, -4], fov: 75 }} shadows='soft'>
        <Page29Scene />
      </Canvas>
    </>
  );
};
