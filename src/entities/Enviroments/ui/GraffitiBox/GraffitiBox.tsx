import { CubeTexture, CubeTextureLoader } from 'three';
import { forwardRef } from 'react';

import nx from '@/shared/assets/textures/environmentMaps/2/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/2/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/2/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/2/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/2/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/2/pz.jpg';

import { BaseEnvironment, EnvironmentProps } from '../BaseEnvironment/BaseEnvironment';

export const GraffityBox = forwardRef<CubeTexture, EnvironmentProps>(function Box(props, ref) {
  const { background = true } = props;
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  if (ref && typeof ref !== 'function') {
    ref.current = texture;
  }
  return <BaseEnvironment texture={texture} background={background} ref={ref} />;
});
