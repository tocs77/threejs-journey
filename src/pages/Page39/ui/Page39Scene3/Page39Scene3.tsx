import { useFrame } from '@react-three/fiber';
import {
  CuboidCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  Physics,
  RapierRigidBody,
  RigidBody,
} from '@react-three/rapier';
import { useMemo, useRef } from 'react';
import { Euler, InstancedMesh, Quaternion } from 'three';

interface Page39Scene3Props {
  debug: boolean;
}

const CUBE_COUNT = 300;

export const Page39Scene3 = (props: Page39Scene3Props) => {
  const { debug } = props;
  const twister = useRef<RapierRigidBody>();
  const rigidBodies = useRef<RapierRigidBody[]>(null);

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

  const instances = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    for (let i = 0; i < CUBE_COUNT; i++) {
      instances.push({
        key: 'instance_' + Math.random(),
        position: [i % 4, i * 0.3, i % 5],
        rotation: [Math.random(), Math.random(), Math.random()],
        scale: [0.5, 0.5, 0.5],
      });
    }

    return instances;
  }, []);

  return (
    <>
      <Physics debug={debug}>
        <RigidBody position={[0, -0.8, 0]} friction={0} type='kinematicPosition' ref={twister}>
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color='red' />
          </mesh>
        </RigidBody>

        <InstancedRigidBodies ref={rigidBodies} instances={instances} colliders='cuboid'>
          <instancedMesh args={[null, null, CUBE_COUNT]} castShadow count={CUBE_COUNT}>
            <boxGeometry />
            <meshStandardMaterial color={'violet'} />
          </instancedMesh>
        </InstancedRigidBodies>

        <RigidBody type='fixed'>
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color='greenyellow' />
          </mesh>
        </RigidBody>

        <RigidBody type='fixed'>
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.25]} />
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.25]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[5.25, 1, 0]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[-5.25, 1, 0]} />
        </RigidBody>
      </Physics>
    </>
  );
};
