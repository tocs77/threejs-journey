import { useFrame, extend, useThree, Object3DNode } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { CustomObject } from '../CustomObject/CustomObject';

extend({ OrbitControls });

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
  }
}

export const Page31Scene = () => {
  const groupef = useRef<Group | null>(null);
  const { camera, gl } = useThree();

  useFrame(({ camera, clock }, delta) => {
    const angle = clock.elapsedTime;
    camera.position.x = Math.sin(angle) * 8;
    camera.position.z = Math.cos(angle) * 8;
    camera.lookAt(0, 0, 0);

    if (!groupef.current) return;
    groupef.current.rotation.x += delta / 2;
    groupef.current.rotation.y += delta / 3;
    groupef.current.rotation.z += delta / 4;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>
        <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
      <CustomObject />
    </>
  );
};
