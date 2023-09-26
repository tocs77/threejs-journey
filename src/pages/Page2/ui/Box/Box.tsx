import { MeshProps } from '@react-three/fiber';

interface BoxProps extends MeshProps {
  color?: string;
}

export const Box = (props: BoxProps) => {
  const { color = '#ff0000', ...rest } = props;
  return (
    <mesh {...rest}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};
