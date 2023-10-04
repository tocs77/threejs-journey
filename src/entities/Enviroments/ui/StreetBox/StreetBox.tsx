import { CubeTextureLoader } from 'three';

import nx from '@/shared/assets/textures/environmentMaps/0/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/0/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/0/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/0/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/0/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/0/pz.jpg';
import { Environment } from '@react-three/drei';

export const StreetBox = () => {
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  return <Environment map={texture} background />;
};
