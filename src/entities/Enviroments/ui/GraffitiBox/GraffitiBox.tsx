import { CubeTextureLoader } from 'three';

import nx from '@/shared/assets/textures/environmentMaps/2/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/2/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/2/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/2/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/2/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/2/pz.jpg';
import { Environment } from '@react-three/drei';

export const GraffityBox = () => {
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  return <Environment map={texture} background />;
};
