import { CubeTexture, CubeTextureLoader } from 'three';
import { forwardRef } from 'react';

import nx from '@/shared/assets/textures/environmentMaps/3/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/3/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/3/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/3/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/3/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/3/pz.jpg';

import { BaseEnvironment, EnvironmentProps } from '../BaseEnvironment/BaseEnvironment';

export const ShopBox = forwardRef<CubeTexture, EnvironmentProps>(function Box(props, ref) {
  const { background = true } = props;
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  if (ref && typeof ref !== 'function') {
    ref.current = texture;
  }
  return <BaseEnvironment texture={texture} background={background} ref={ref} />;
});
