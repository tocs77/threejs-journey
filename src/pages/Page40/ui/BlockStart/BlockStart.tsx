import { Float, Text } from '@react-three/drei';
import { BufferGeometry, MeshStandardMaterial } from 'three';
import font from '@/shared/assets/fonts/BebasNeue-Regular.woff';

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
      <Float floatIntensity={0.25} rotationIntensity={0.25}>
        <Text
          scale={0.3}
          font={font}
          maxWidth={0.25}
          lineHeight={0.75}
          textAlign='right'
          position={[0.75, 0.65, 0]}
          rotation-y={-0.25}>
          Marble Race
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>
      <mesh geometry={geometry} material={material} position-y={-0.1} receiveShadow scale={[size, 0.2, size]}></mesh>
    </group>
  );
};
