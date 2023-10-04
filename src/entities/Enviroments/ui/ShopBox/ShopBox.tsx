import { CubeTextureLoader } from 'three';

import nx from '@/shared/assets/textures/environmentMaps/3/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/3/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/3/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/3/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/3/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/3/pz.jpg';
import { Environment } from '@react-three/drei';

export const ShopBox = () => {
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  return <Environment map={texture} background />;
};
