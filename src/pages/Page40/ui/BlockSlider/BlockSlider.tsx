import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import { BufferGeometry, MeshStandardMaterial } from 'three';

interface BlockSliderProps {
  size?: number;
  position?: [number, number, number];
  geometry: BufferGeometry;
  material: MeshStandardMaterial;
  obstacleMaterial: MeshStandardMaterial;
  direction?: 'clockwise' | 'counterclockwise';
  speed?: number;
}

export const BlockSlider = (props: BlockSliderProps) => {
  const { size = 4, geometry, material, obstacleMaterial, position = [0, 0, 0], speed = 1 } = props;
  const [offset] = useState(() => Math.random() * 3);
  const obstacleRef = useRef<RapierRigidBody>();

  useFrame(({ clock }) => {
    const x = (size / 4) * Math.sin(clock.elapsedTime * speed + offset);
    obstacleRef.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + size * 0.25,
      z: position[2],
    });
  });
  return (
    <group position={position}>
      <mesh geometry={geometry} material={material} position-y={-0.1} receiveShadow scale={[size, 0.2, size]} />
      <RigidBody type='kinematicPosition' position={[0, size * 0.25, 0]} restitution={0.2} friction={0} ref={obstacleRef}>
        <mesh geometry={geometry} material={obstacleMaterial} scale={[size * 0.5, size * 0.5, 0.3]} castShadow receiveShadow />
      </RigidBody>
    </group>
  );
};
