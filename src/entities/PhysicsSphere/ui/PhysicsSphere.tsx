import { PropsWithChildren, useRef } from 'react';
import { useSphere, SphereProps } from '@react-three/cannon';
import { Mesh } from 'three';

interface PhysicsSphereProps extends SphereProps {
  position?: [number, number, number];
  radius?: number;
}

export const PhysicsSphere = (props: PropsWithChildren<PhysicsSphereProps>) => {
  const { mass = 1, children, position = [0, 0, 0], radius = 1, ...other } = props;
  const [sphereRef] = useSphere<Mesh>(
    () => ({
      args: [radius],
      mass,
      position,
      ...other,
    }),
    useRef<Mesh>(null),
  );

  return (
    <mesh castShadow={true} ref={sphereRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      {children}
    </mesh>
  );
};
