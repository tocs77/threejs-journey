import { Canvas, RootState } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Color } from 'three';

import classes from './Page33.module.scss';
import { Page33Scene } from '../Page33Scene/Page33Scene';
import { useControls } from '@/shared/hooks/useControls';
import { controls } from './page33Controls';

export const Page33 = () => {
  // const created = (state: RootState) => {
  //   // state.gl.setClearColor('green', 0.8);
  //   state.scene.background = new Color('#ff0000');
  // };

  const controlValues = useControls(controls);

  return (
    <Canvas className={classes.Page33} shadows={controlValues.showShadows} camera={{ position: [0, 3, 7] }}>
      <color args={['ivory']} attach='background' />
      <OrbitControls makeDefault />
      <Page33Scene showContactShadow={!controlValues.showShadows} />
    </Canvas>
  );
};
