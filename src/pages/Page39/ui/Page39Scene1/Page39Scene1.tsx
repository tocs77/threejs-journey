import { useRef } from 'react';
import { Physics, RigidBody, ConeCollider, RapierRigidBody } from '@react-three/rapier';

interface Page39Scene1Props {
  debug: boolean;
}

export const Page39Scene1 = (props: Page39Scene1Props) => {
  const { debug } = props;
  const cubeRef = useRef<RapierRigidBody>();

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: 0, y: 5, z: 0 }, true);
    cubeRef.current.applyTorqueImpulse({ x: 0, y: 0, z: 1 }, true);
  };
  return (
    <>
      <Physics debug={debug}>
        <RigidBody colliders='ball' scale={0.7}>
          <mesh castShadow position={[-2.2, 3.6, 1.1]}>
            <sphereGeometry />
            <meshStandardMaterial color='orange' />
          </mesh>
        </RigidBody>

        <RigidBody>
          <mesh castShadow position={[2, 2, 0]}>
            <boxGeometry args={[3, 2, 0.4]} />
            <meshStandardMaterial color='mediumpurple' />
          </mesh>
          <mesh castShadow position={[2, 2, 2.5]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color='mediumpurple' />
          </mesh>
        </RigidBody>

        <RigidBody colliders='trimesh'>
          <mesh castShadow position={[-2, 0.7, 0.5]} rotation={[Math.PI * 0.2, 0, 0]}>
            <torusGeometry args={[1, 0.5, 16, 32]} />
            <meshStandardMaterial color='slategray' />
          </mesh>
        </RigidBody>
        <RigidBody colliders={false} position={[0, 2, 3]} rotation-x={Math.PI + 0.1}>
          <ConeCollider args={[0.5, 1]} />
          <mesh castShadow>
            <coneGeometry args={[1, 1]} />
            <meshStandardMaterial color='aqua' />
          </mesh>
        </RigidBody>
        <RigidBody ref={cubeRef}>
          <mesh position={[1, -0.4, -3]} castShadow onClick={cubeClickHandler}>
            <boxGeometry />
            <meshStandardMaterial color='lightgreen' />
          </mesh>
        </RigidBody>

        <RigidBody type='fixed'>
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color='greenyellow' />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};
