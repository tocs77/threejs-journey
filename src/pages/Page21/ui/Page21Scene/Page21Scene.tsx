import { useRef } from 'react';
import { GraffityBox } from '@/entities/Enviroments';
import { Environment } from '../Environment/Environment';
import { CubeTexture } from 'three';
import { Floor } from '../Floor/Floor';
import { Fox } from '@/entities/Fox';

export const Page21Scene = () => {
  const cubeTextureRef = useRef<CubeTexture | null>(null);

  return (
    <>
      <Environment />
      <GraffityBox background={false} ref={cubeTextureRef} />
      <Floor />
      <Fox scale={0.02} castShadow receiveShadow />
    </>
  );
};
