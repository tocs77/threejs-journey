import { BufferGeometry, MeshStandardMaterial } from 'three';

interface BlockStartProps {
  size?: number;
  position?: [number, number, number];
  geometry: BufferGeometry;
  material: MeshStandardMaterial;
}

export const BlockStart = (props: BlockStartProps) => {
  const { size = 4, geometry, material, position = [0, 0, 0] } = props;
  return (
    <group position={position}>
      <mesh geometry={geometry} material={material} position-y={-0.1} receiveShadow scale={[size, 0.2, size]}></mesh>
    </group>
  );
};
