import { MeshProps } from '@react-three/fiber';

interface GeometryProps extends MeshProps {
  color?: string;
  wireframe?: boolean;
}

const triangle = new Float32Array([0, 0, 0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0]);

export const CustomGeometry = (props: GeometryProps) => {
  const { color = 'red', wireframe = false } = props;
  return (
    <mesh>
      <bufferGeometry attach='geometry'>
        <bufferAttribute attach='attributes-position' array={triangle} itemSize={3} count={3} />
      </bufferGeometry>
      <meshBasicMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};
