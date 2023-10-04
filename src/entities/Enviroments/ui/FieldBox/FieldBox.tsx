import { CubeTextureLoader } from 'three';

import nx from '@/shared/assets/textures/environmentMaps/1/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/1/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/1/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/1/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/1/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/1/pz.jpg';
import { Environment } from '@react-three/drei';

export const FieldBox = () => {
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  return <Environment map={texture} background />;
};
