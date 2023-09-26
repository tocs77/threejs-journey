import { MeshProps } from '@react-three/fiber';
import { forwardRef } from 'react';
import { Mesh } from 'three';

export interface BoxProps extends MeshProps {
  color?: string;
  size?: number;
}

export const BasicBox = forwardRef<Mesh, BoxProps>(function Box(props: BoxProps, ref) {
  const { color = '#ff0000', size = 1, ...rest } = props;
  return (
    <mesh {...rest} ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
});
