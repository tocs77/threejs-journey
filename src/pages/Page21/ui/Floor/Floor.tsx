import { useTexture } from '@react-three/drei';
import { RepeatWrapping, Texture } from 'three';

import colorImg from '@/shared/assets/textures/dirt/color.jpg';
import normalImg from '@/shared/assets/textures/dirt/normal.jpg';

export const Floor = () => {
  const setTextureSettings = (t: Texture | Texture[]) => {
    if (Array.isArray(t)) return;
    t.repeat.set(1.5, 1.5);
    t.wrapS = RepeatWrapping;
    t.wrapT = RepeatWrapping;
  };

  const colorMap = useTexture(colorImg, setTextureSettings) as Texture;
  const normalMap = useTexture(normalImg, setTextureSettings) as Texture;

  return (
    <mesh rotation-x={-Math.PI * 0.5} receiveShadow>
      <circleGeometry args={[5, 64]} />
      <meshStandardMaterial map={colorMap} normalMap={normalMap} />
    </mesh>
  );
};
