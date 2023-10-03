import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { TexturedBox } from '@/features/TexturedBox';
import colorImg from '@/shared/assets/textures/door/color.jpg';
import alphaImg from '@/shared/assets/textures/door/alpha.jpg';
import normalImg from '@/shared/assets/textures/door/normal.jpg';
import { useControls, Controls } from '@/shared/hooks/useControls';

import classes from './Page07.module.scss';

import { BasicBox } from '@/features/BasicBox';

const controls: Controls = {
  showColorMap: {
    type: 'boolean',
    name: 'Show color map',
    value: false,
  },
  showAlphaMap: {
    type: 'boolean',
    name: 'Show alpha map',
    value: false,
  },
  showNormalMap: {
    type: 'boolean',
    name: 'Show normal map',
    value: false,
  },
  repeatX: {
    type: 'range',
    name: 'Repeat X',
    value: 1,
    min: 1,
    max: 5,
    step: 1,
  },
  repeatY: {
    type: 'range',
    name: 'Repeat Y',
    value: 1,
    min: 1,
    max: 5,
    step: 1,
  },
};

export const Page7 = () => {
  const controlValues = useControls(controls);

  return (
    <Canvas className={classes.Page7} dpr={1} camera={{ position: [0, 0, 5], fov: 50 }}>
      <OrbitControls />
      <Suspense fallback={<BasicBox />}>
        <TexturedBox
          colorTexture={controlValues.showColorMap ? colorImg : null}
          alphaTexture={controlValues.showAlphaMap ? alphaImg : null}
          normalTexture={controlValues.showNormalMap ? normalImg : null}
          repeatX={controlValues.repeatX}
          repeatY={controlValues.repeatY}
        />
      </Suspense>
    </Canvas>
  );
};
