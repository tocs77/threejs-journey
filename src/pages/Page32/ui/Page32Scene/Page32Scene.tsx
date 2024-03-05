import { Html, PivotControls, TransformControls, Text, Float, MeshReflectorMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

import classes from '../Page32/Page32.module.scss';
import font from '@/shared/assets/fonts/bangers-v20-latin-regular.woff';

export const Page32Scene = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group>
        <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={2} axisColors={['#9381ff', '#ff4d6d', '#7ae582']}>
          <mesh position-x={-2} ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color='orange' />
            <Html
              wrapperClass={classes.sphereLabel}
              position={[1, 1, 0]}
              center
              distanceFactor={8}
              occlude={[sphereRef, cubeRef]}>
              Sphere
            </Html>
          </mesh>
        </PivotControls>

        <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
        {/* @ts-ignore */}
        <TransformControls object={cubeRef} />
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color='greenyellow' /> */}
        <MeshReflectorMaterial mirror={0.5} resolution={512} color='greenyellow'/>
      </mesh>
      <Float>
        <Text font={font} fontSize={0.5} color={'salmon'} position={[0, 2, 0]} maxWidth={2}>
          Super puper text
        </Text>
      </Float>
    </>
  );
};
