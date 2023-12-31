import { useRef, useState } from 'react';
import { Canvas, useFrame, MeshProps } from '@react-three/fiber';
import { Mesh } from 'three';

export const Page1 = () => {
  const Box = (props: MeshProps) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<Mesh | null>(null);
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((_, delta) => (ref.current!.rotation.x += delta));
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'green' : 'red'} />
      </mesh>
    );
  };
  return (
    <Canvas style={{ width: 800, height: 600 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};
