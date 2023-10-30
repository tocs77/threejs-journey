import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Page20Scene } from '../Page20Scene/Page20Scene';

import classes from './Page20.module.scss';
import { ACESFilmicToneMapping, LinearToneMapping, NoToneMapping, ReinhardToneMapping } from 'three';

export const Page20 = () => {
  return (
    <Canvas
      className={classes.Page20}
      camera={{ position: [4, 1, -4], fov: 75 }}
      shadows='soft'
      gl={{ outputColorSpace: 'srgb', toneMapping: ACESFilmicToneMapping, toneMappingExposure: 2.3, antialias: true }}>
      <OrbitControls zoomSpeed={0.2} />
      <Page20Scene />
    </Canvas>
  );
};
