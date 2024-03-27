import { Canvas } from '@react-three/fiber';

import classes from './Page38.module.scss';
import { Page38Scene } from '../Page38Scene/Page38Scene';

export const Page38 = () => {
  return (
    <Canvas className={classes.Page38} shadows='soft'>
      <color args={['#695b5b']} attach='background' />
      <Page38Scene />
    </Canvas>
  );
};
