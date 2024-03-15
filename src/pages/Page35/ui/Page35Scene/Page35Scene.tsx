import { Center, Text3D, useTexture } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Group, Texture, TorusGeometry, Vector3 } from 'three';
import { useMemo, useRef } from 'react';

import font from '@/shared/assets/fonts/helvetiker_regular.typeface.json';
import matcap from '@/shared/assets/textures/matcaps/1D3FCC_051B5F_81A0F2_5579E9.png';
import thorMatcap from '@/shared/assets/textures/matcaps/3.png';
import { useFrame } from '@react-three/fiber';

const THOR_AMOUNT = 100;

export const Page35Scene = () => {
  const matcapTexture = useTexture(matcap) as Texture;
  const thorMatcapTexture = useTexture(thorMatcap) as Texture;
  const thoruses = useRef<Group>();

  const calcRandomPos = () => {
    const length = 5;
    return new Vector3(
      Math.random() * length - length / 2,
      Math.random() * length - length / 2,
      Math.random() * length - length / 2,
    );
  };

  useFrame((_, delta) => {
    if (thoruses.current) {
      for (let i = 0; i < thoruses.current.children.length; i++) {
        const torus = thoruses.current.children[i];
        torus.rotation.y += delta;
      }
    }
  });

  const thors = useMemo(() => {
    const thors = [];
    const geom = new TorusGeometry(0.5, 0.2, 16, 32);

    for (let i = 0; i < THOR_AMOUNT; i++) {
      thors.push(
        <mesh
          geometry={geom}
          key={i}
          position={calcRandomPos()}
          scale={0.2 + Math.random() * 0.4}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <meshMatcapMaterial matcap={thorMatcapTexture} />
        </mesh>,
      );
    }
    return thors;
  }, []);

  return (
    <>
      <Perf position='bottom-left' />
      <Center>
        <Text3D
          font={font}
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}>
          Hello R3F <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
      <group ref={thoruses}> {thors}</group>
    </>
  );
};
