import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { Box } from '../Box/Box';

export const Scene = () => {
  const meshRef = useRef<Group | null>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (!meshRef.current) return;
    camera.position.set(0, 0, 3);
    camera.lookAt(meshRef.current.position);
  }, [meshRef.current]);

  return (
    <>
      <axesHelper args={[2]} />
      <group position={[0, 2, 0]} ref={meshRef}>
        {/* <group position={[-0.6, 0.7, 1]} rotation={[1, 2, 0]} ref={meshRef}> */}
        <Box position={[0, 0, 0]} />
        <Box position={[-2, 0, 0]} color='yellow' />
        <Box position={[2, 0, 0]} color='green' />
      </group>
    </>
  );
};
