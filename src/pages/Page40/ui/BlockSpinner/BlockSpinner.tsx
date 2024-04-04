import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import { BufferGeometry, Euler, MeshStandardMaterial, Quaternion } from 'three';

interface BlockSpinnerProps {
  size?: number;
  position?: [number, number, number];
  geometry: BufferGeometry;
  material: MeshStandardMaterial;
  obstacleMaterial: MeshStandardMaterial;
  direction?: 'clockwise' | 'counterclockwise';
  speed?: number;
}

export const BlockSpinner = (props: BlockSpinnerProps) => {
  const {
    size = 4,
    geometry,
    material,
    obstacleMaterial,
    position = [0, 0, 0],
    direction = 'counterclockwise',
    speed = 1,
  } = props;
  const obstacleRef = useRef<RapierRigidBody>();
  const [offset] = useState(() => Math.random() * 3);

  const rotation = direction === 'clockwise' ? -speed : speed;
  useFrame(({ clock }) => {
    const eulerRotation = new Euler(0, rotation * clock.elapsedTime + offset, 0);
    const quartRotaion = new Quaternion();
    quartRotaion.setFromEuler(eulerRotation);
    obstacleRef.current.setNextKinematicRotation(quartRotaion);
  });
  return (
    <group position={position}>
      <mesh geometry={geometry} material={material} position-y={-0.1} receiveShadow scale={[size, 0.2, size]} />
      <RigidBody type='kinematicPosition' position={[0, 0.3, 0]} restitution={0.2} friction={0} ref={obstacleRef}>
        <mesh geometry={geometry} material={obstacleMaterial} scale={[size * 0.8, 0.3, size * 0.1]} castShadow receiveShadow />
      </RigidBody>
    </group>
  );
};
