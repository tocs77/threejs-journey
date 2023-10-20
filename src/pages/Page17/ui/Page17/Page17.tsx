import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import classes from './Page17.module.scss';
import { Page17Scene } from '../Page17Scene/Page17Scene';

export const Page17 = () => {
  return (
    <Canvas className={classes.Page17} camera={{ position: [-3, 3, 3], fov: 75 }} shadows dpr={[1, 2]}>
      <Physics
        broadphase='SAP'
        allowSleep
        gravity={[0, -9.81, 0]}
        defaultContactMaterial={{
          friction: 0.8,
          restitution: 0.4,
        }}>
        <Page17Scene />
      </Physics>
      <OrbitControls zoomSpeed={0.2} />
    </Canvas>
  );
};
