import { memo } from 'react';
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { Vector3 } from '@react-three/fiber';
import matCapTexture from '@/shared/assets/textures/matcaps/2.png';

import fontSrc from '@/shared/assets/fonts/helvetiker_regular.typeface.json';
import { useTexture } from '@react-three/drei';
import { Texture } from 'three';

interface Text3dProps {
  text: string;
  size?: number;
  height?: number;
  color?: string;
  position?: Vector3 | [number, number, number];
  material?: 'basic' | 'standard' | 'matcap';
  wirefamed?: boolean;
}

export const Text3dEl = (props: Text3dProps) => {
  const { text, color = '#fff', height = 0.2, size = 1, position = [0, 0, 0], material = 'standard', wirefamed = false } = props;
  const font = new FontLoader().parse(fontSrc);
  const matcapMap = useTexture(matCapTexture) as Texture;
  const textOptions: TextGeometryParameters = {
    font,
    size,
    height,
    bevelSegments: 4,
    curveSegments: 7,
    // bevelEnabled: true,
    // bevelThickness: 0.03,
    // bevelSize: 0.02,
  };

  const geometry = new TextGeometry(text, textOptions);
  geometry.center();

  const getMaterial = () => {
    if (material === 'basic') return <meshBasicMaterial attach='material' color={color} wireframe={wirefamed} />;
    if (material === 'standard') return <meshStandardMaterial attach='material' color={color} wireframe={wirefamed} />;
    if (material === 'matcap') return <meshMatcapMaterial attach='material' color={color} matcap={matcapMap} />;
  };
  return (
    <mesh geometry={geometry} position={position}>
      {getMaterial()}
    </mesh>
  );
};

export const Text3d = memo(Text3dEl);
