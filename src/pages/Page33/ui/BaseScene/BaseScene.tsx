import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

interface BaseSceneProps {
  planeShadow?: boolean;
}

export const BaseScene = (props: BaseSceneProps) => {
  const { planeShadow = true } = props;
  const cubeRef = useRef<Mesh | null>(null);
  useFrame(({ clock }, delta) => {
    if (!cubeRef.current) return;
    cubeRef.current.rotation.y += delta * 0.2;
    cubeRef.current.position.x = 2 + Math.sin(clock.elapsedTime);
  });
  return (
    <>
      <mesh position-x={-2} castShadow position-y={1}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>
      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5} ref={cubeRef} castShadow position-y={1}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>
      <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10} receiveShadow={planeShadow}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
};
