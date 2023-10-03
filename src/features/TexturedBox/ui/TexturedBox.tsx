import { MeshProps } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { Mesh, NearestFilter, RepeatWrapping, Texture } from 'three';

import defaultTexture from '@/shared/assets/textures/defaultTexture.png';

export interface TexturedBoxProps extends MeshProps {
  size?: number;
  segments?: number;
  wireframe?: boolean;
  colorTexture?: string;
  alphaTexture?: string;
  normalTexture?: string;
  repeatX?: number;
  repeatY?: number;
}

export const TexturedBox = (props: TexturedBoxProps) => {
  const {
    colorTexture,
    alphaTexture,
    normalTexture,
    size = 1,
    repeatX = 1,
    repeatY = 1,
    wireframe = false,
    segments = 1,
    ...rest
  } = props;
  const boxRef = useRef<Mesh>(null);

  useEffect(() => {
    if (boxRef.current) {
      if (!Array.isArray(boxRef.current.material)) {
        boxRef.current.material.needsUpdate = true;
        return;
      }

      for (let i = 0; i < boxRef.current.material.length; i++) {
        boxRef.current.material[i].needsUpdate = true;
      }
    }
  }, [colorTexture, alphaTexture, normalTexture]);

  const colorMap = useTexture(colorTexture || defaultTexture, (t) => {
    (t as Texture).repeat.x = repeatX;
    (t as Texture).repeat.y = repeatY;
    (t as Texture).wrapS = RepeatWrapping;
    (t as Texture).wrapT = RepeatWrapping;
    (t as Texture).magFilter = NearestFilter;
  }) as Texture;
  const alphaMap = useTexture(alphaTexture || defaultTexture) as Texture;
  const normalMap = useTexture(normalTexture || defaultTexture) as Texture;

  return (
    <mesh {...rest} ref={boxRef}>
      <boxGeometry args={[size, size, size, segments, segments, segments]} />
      <meshBasicMaterial map={colorMap} alphaMap={alphaMap} wireframe={wireframe} toneMapped={false} />
    </mesh>
  );
};
