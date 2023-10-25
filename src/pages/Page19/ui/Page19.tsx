import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import hamburgerModel from '@/shared/assets/models/hamburger/hamburger.glb';

import classes from './Page19.module.scss';

export const Page19 = () => {
  const { scene } = useGLTF(hamburgerModel);

  const floor = (
    <mesh rotation-x={-Math.PI * 0.5} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color='#444444' metalness={0.4} roughness={0.5} />
    </mesh>
  );
  return (
    <Canvas className={classes.Page19} camera={{ position: [-8, 4, 8], fov: 75 }} shadows='soft'>
      <OrbitControls zoomSpeed={0.8} />
      {<ambientLight intensity={1} color={'#fff'} />}
      <directionalLight color={'#fff'} position={[5, 5, 5]} castShadow intensity={3} />
      {floor}
      <primitive object={scene} scale={1} />
    </Canvas>
  );
};
