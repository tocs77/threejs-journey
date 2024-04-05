import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { BufferGeometry, MeshStandardMaterial } from 'three';

interface BoundsProps {
  length: number;
  size: number;
  geometry: BufferGeometry;
  material: MeshStandardMaterial;
}

const WIDTH = 0.3;

export const Bounds = (props: BoundsProps) => {
  const { length, size, material, geometry } = props;
  return (
    <>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        <mesh
          position={[size / 2 + WIDTH / 2, size / 6, (-size / 2) * (length - 1)]}
          material={material}
          geometry={geometry}
          scale={[WIDTH, size / 3, size * length]}
          castShadow
        />
        <mesh
          position={[-size / 2 - WIDTH / 2, size / 6, (-size / 2) * (length - 1)]}
          material={material}
          geometry={geometry}
          scale={[WIDTH, size / 3, size * length]}
          receiveShadow
        />
        <mesh
          position={[0, size / 6, -size * length + size / 2]}
          material={material}
          geometry={geometry}
          scale={[size, size / 3, WIDTH]}
          receiveShadow
        />
        <CuboidCollider
          args={[size / 2, 0.1, (size / 2) * length]}
          position={[0, -0.1, -(length * 2) + size / 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </>
  );
};
