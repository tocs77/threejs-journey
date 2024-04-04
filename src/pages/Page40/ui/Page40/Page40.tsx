import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { OrbitControls } from '@react-three/drei';

import classes from './Page40.module.scss';
import { Page40Scene } from '../Page40Scene/Page40Scene';
import { Physics } from '@react-three/rapier';

export const Page40 = () => {
  return (
    <Canvas className={classes.Page40} shadows='soft'>
      <Perf position='bottom-left' />
      <OrbitControls makeDefault />
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <ambientLight intensity={0.5} />
      <Physics debug>
        <Page40Scene />
      </Physics>
    </Canvas>
  );
};
