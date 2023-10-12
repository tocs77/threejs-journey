import { useFrame } from '@react-three/fiber';
import { MutableRefObject, useMemo } from 'react';
import { Mesh, Points } from 'three';

interface UseRotationProps {
  meshRef: MutableRefObject<Mesh | null> | MutableRefObject<Points | null>;
  periodX?: number;
  periodY?: number;
  periodZ?: number;
}

export const useRotation = (props: UseRotationProps) => {
  const { meshRef, periodX = 0, periodY = 0, periodZ = 0 } = props;

  const speedX = useMemo(() => {
    if (periodX === 0) return 0;
    return (2 * Math.PI) / periodX;
  }, []);

  const speedY = useMemo(() => {
    if (periodY === 0) return 0;
    return (2 * Math.PI) / periodY;
  }, []);

  const speedZ = useMemo(() => {
    if (periodZ === 0) return 0;
    return (2 * Math.PI) / periodZ;
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += speedX * delta;
    meshRef.current.rotation.y += speedY * delta;
    meshRef.current.rotation.z += speedZ * delta;
  });
};
