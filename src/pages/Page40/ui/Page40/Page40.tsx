import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { KeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

import classes from './Page40.module.scss';
import { Page40Scene } from '../Page40Scene/Page40Scene';

import { keyControls } from '../../types/KeyEntries';
import { Lights } from '../Lights/Lights';
import { Interface } from '../Interface/Interface';

export const Page40 = () => {
  return (
    <KeyboardControls map={keyControls}>
      <Canvas className={classes.Page40} shadows='soft' camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}>
        <Perf position='bottom-left' />
        <Lights />
        <Physics debug>
          <Page40Scene />
        </Physics>
      </Canvas>
      <Interface />
    </KeyboardControls>
  );
};
