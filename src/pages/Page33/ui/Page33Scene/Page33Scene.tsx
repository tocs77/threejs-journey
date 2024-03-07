import { BakeShadows, useHelper, SoftShadows } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { DirectionalLight, DirectionalLightHelper, Mesh } from 'three';

export const Page33Scene = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const dirLightRef = useRef<DirectionalLight>() as React.MutableRefObject<DirectionalLight>;
  const { camera, gl } = useThree();

  useHelper(dirLightRef, DirectionalLightHelper, 1);

  useFrame((_, delta) => {
    if (!cubeRef.current) return;
    cubeRef.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      {/* <BakeShadows /> */}
      <SoftShadows samples={17} />
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        ref={dirLightRef}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />

      <mesh position-x={-2} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>
      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5} ref={cubeRef} castShadow>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10} receiveShadow>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
};
