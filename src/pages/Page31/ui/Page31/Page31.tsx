import { Canvas } from '@react-three/fiber';

import classes from './Page31.module.scss';
import { Page31Scene } from '../Page31Scene/Page31Scene';

export const Page31 = () => {
  return (
    <Canvas className={classes.Page31} shadows='soft' camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}>
      <Page31Scene />
    </Canvas>
  );
};
