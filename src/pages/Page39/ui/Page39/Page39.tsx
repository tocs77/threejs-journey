import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { OrbitControls } from '@react-three/drei';

import { controls } from './Page39Controls';
import { useControls } from '@/shared/hooks/useControls';

import classes from './Page39.module.scss';
import { Page39Scene1 } from '../Page39Scene1/Page39Scene1';
import { Page39Scene2 } from '../Page39Scene2/Page39Scene2';
import { Page39Scene3 } from '../Page39Scene3/Page39Scene3';

export const Page39 = () => {
  const controlValues = useControls(controls);

  let scene: ReactNode;

  switch (controlValues.scene) {
    case 'scene1':
      scene = <Page39Scene1 debug={controlValues.debug} />;
      break;
    case 'scene2':
      scene = <Page39Scene2 debug={controlValues.debug} />;
      break;
    case 'scene3':
      scene = <Page39Scene3 debug={controlValues.debug} />;

      break;
  }

  return (
    <Canvas className={classes.Page39} shadows='soft'>
      <Perf position='bottom-left' />
      <OrbitControls makeDefault />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {scene}
    </Canvas>
  );
};
