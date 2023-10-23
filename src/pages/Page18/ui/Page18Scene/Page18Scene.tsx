import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import duckModel from '@/shared/assets/models/Duck/glTF-Binary/Duck.glb';

import { Helemt } from '@/entities/Helmet';
import { Fox } from '@/entities/Fox';

export const Page18Scene = () => {
  const { scene: duckScene } = useGLTF(duckModel);

  const floor = (
    <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={'#999'} metalness={0} roughness={0.5} />
    </mesh>
  );

  return (
    <>
      <ambientLight color={'#fff'} intensity={0.8} />
      <directionalLight color={'#fff'} position={[5, 5, 5]} castShadow intensity={0.9} />
      <primitive object={duckScene} scale={0.5} />
      <Fox />
      <Suspense>
        <Helemt />
      </Suspense>
      {floor}
    </>
  );
};
