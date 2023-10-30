import { CubeTexture, CubeTextureLoader } from 'three';
import { Environment } from '@react-three/drei';

import nx from '@/shared/assets/textures/environmentMaps/2/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/2/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/2/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/2/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/2/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/2/pz.jpg';
import { forwardRef } from 'react';

// export const GraffityBox = () => {
//   const loader = new CubeTextureLoader();
//   const texture = loader.load([px, nx, py, ny, pz, nz]);
//   return <Environment map={texture} background />;
// };

export const GraffityBox = forwardRef<CubeTexture>(function Box(_, ref) {
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  if (ref && typeof ref !== 'function') {
    ref.current = texture;
  }
  return <Environment map={texture} background />;
});
