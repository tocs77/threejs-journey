import { useFrame } from '@react-three/fiber';
import { CylinderCollider, Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { Euler, Quaternion } from 'three';
import { Hamburger } from '@/entities/Hamburger';

interface Page39Scene2Props {
  debug: boolean;
}

export const Page39Scene2 = (props: Page39Scene2Props) => {
  const { debug } = props;
  const twister = useRef<RapierRigidBody>();

  useFrame(({ clock }) => {
    const eulerRotation = new Euler(0, clock.elapsedTime, 0);
    const quartRotaion = new Quaternion();
    quartRotaion.setFromEuler(eulerRotation);
    twister.current.setNextKinematicRotation(quartRotaion);

    const angle = clock.elapsedTime * 0.5;
    const x = Math.cos(angle) * 2;
    const z = Math.sin(angle) * 2;
    twister.current.setNextKinematicTranslation({ x, y: -0.8, z });
  });
  return (
    <>
      <Physics debug={debug}>
        <RigidBody position={[0, -0.8, 0]} friction={0} type='kinematicPosition' ref={twister}>
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color='red' />
          </mesh>
        </RigidBody>

        <RigidBody type='fixed'>
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color='greenyellow' />
          </mesh>
        </RigidBody>
        <RigidBody colliders={false}>
          <CylinderCollider args={[0.3, 1]} position={[0, 0.4, 0]} />
          <Hamburger scale={0.2} position={[0, 0, 0]} />
        </RigidBody>
      </Physics>
    </>
  );
};
