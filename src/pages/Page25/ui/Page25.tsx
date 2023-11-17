import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import classes from './Page25.module.scss';
import { GalaxyShader } from '@/entities/GalaxyShader';

export const Page25 = () => {
  return (
    <Canvas className={classes.Page25} camera={{ position: [1, 1, 1], fov: 75 }} shadows='soft'>
      <OrbitControls />
      <GalaxyShader />
    </Canvas>
  );
};
