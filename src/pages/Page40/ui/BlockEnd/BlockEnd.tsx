import { HamburgerComponent } from '@/entities/Hamburger';
import { CylinderCollider, RigidBody } from '@react-three/rapier';
import { BufferGeometry, MeshStandardMaterial } from 'three';

interface BlockEndProps {
  size?: number;
  position?: [number, number, number];
  geometry: BufferGeometry;
  material: MeshStandardMaterial;
}

export const BlockEnd = (props: BlockEndProps) => {
  const { size = 4, geometry, material, position = [0, 0, 0] } = props;
  return (
    <group position={position}>
      <mesh geometry={geometry} material={material} position-y={0} receiveShadow scale={[size, 0.2, size]} />
      <RigidBody colliders={false} position-x={size / 4} position-y={0.3} type='fixed' restitution={0.2} friction={0}>
        <CylinderCollider args={[0.3, 1]} position={[-size / 4, 0.4, 0]} />
        <HamburgerComponent scale={0.2} castShadow position-x={-size / 4} />
      </RigidBody>
    </group>
  );
};
