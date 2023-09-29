import { MeshProps } from '@react-three/fiber';
import { forwardRef } from 'react';
import { Mesh } from 'three';

export interface BoxProps extends MeshProps {
  color?: string;
  size?: number;
  segments?: number;
  wireframe?: boolean;
}

export const BasicBox = forwardRef<Mesh, BoxProps>(function Box(props: BoxProps, ref) {
  const { color = '#ff0000', size = 1, wireframe = false, segments = 1, ...rest } = props;
  return (
    <mesh {...rest} ref={ref}>
      <boxGeometry args={[size, size, size, segments, segments, segments]} />
      <meshBasicMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
});
