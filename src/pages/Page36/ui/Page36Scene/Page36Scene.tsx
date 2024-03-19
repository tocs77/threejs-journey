import { Hamburger } from '@/entities/Hamburger';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Color, Mesh, MeshStandardMaterial } from 'three';

export const Page36Scene = () => {
  const cubeRef = useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;
  });

  const clickHandler = () => {
    (cubeRef.current.material as MeshStandardMaterial).color.set(new Color(Math.random(), Math.random(), Math.random()));
  };

  const sphereClickHandler = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
  };

  const mouseEnterHandler = () => {
    document.body.style.cursor = 'pointer';
  };

  const mouseLeaveHandler = () => {
    document.body.style.cursor = 'default';
  };

  const hamClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    console.log('click hamburger', e.object);
  };

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh position-x={-2} onClick={sphereClickHandler} onPointerEnter={sphereClickHandler} onPointerLeave={sphereClickHandler}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>
      <mesh
        rotation-y={Math.PI * 0.25}
        position-x={2}
        scale={1.5}
        ref={cubeRef}
        onClick={clickHandler}
        onPointerEnter={mouseEnterHandler}
        onPointerLeave={mouseLeaveHandler}>
        <boxGeometry />
        <meshStandardMaterial color={'green'} />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
      <Hamburger onClick={hamClick} scale={0.25} position-y={0.5} />
    </>
  );
};
