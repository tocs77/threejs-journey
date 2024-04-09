import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { KeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

import classes from './Page40.module.scss';
import { Page40Scene } from '../Page40Scene/Page40Scene';

import { keyControls } from '../../types/KeyEntries';
import { Lights } from '../Lights/Lights';

export const Page40 = () => {
  return (
    <KeyboardControls map={keyControls}>
      <Canvas className={classes.Page40} shadows='soft'>
        <Perf position='bottom-left' />
        <Lights />
        <Physics debug>
          <Page40Scene />
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
};
