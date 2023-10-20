import { CubeTextureLoader, Mesh } from 'three';
import { useSphere, usePlane, useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useControls } from '@/shared/hooks/useControls';

import nx from '@/shared/assets/textures/environmentMaps/0/nx.jpg';
import ny from '@/shared/assets/textures/environmentMaps/0/ny.jpg';
import nz from '@/shared/assets/textures/environmentMaps/0/nz.jpg';
import px from '@/shared/assets/textures/environmentMaps/0/px.jpg';
import py from '@/shared/assets/textures/environmentMaps/0/py.jpg';
import pz from '@/shared/assets/textures/environmentMaps/0/pz.jpg';

import { controls } from './Scene17Controls';
import { Spheres } from '../Spheres/Spheres';

export const Page17Scene = () => {
  const loader = new CubeTextureLoader();
  const texture = loader.load([px, nx, py, ny, pz, nz]);
  const controlValues = useControls(controls);

  const [sphereRef] = useSphere<Mesh>(() => ({
    mass: 1,
    position: [1, -1, 1],
    args: [0.3],
  }));
  const [boxRef, boxApi] = useBox<Mesh>(() => ({
    mass: 0,
    position: [0, -1.9, 1],
    args: [3, 0.2, 0.3],
  }));
  const [planeRef] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI * 0.5, 0, 0],
    position: [0, -2, 0],
  }));

  // useEffect(() => {
  //   sphereApi.applyForce([-350, 0, 0], [0, 0, 0]);
  // }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = (Math.PI * Math.sin(t / 2)) % Math.PI;
    boxApi.rotation.set(0, angle, 0);
  });

  const sphere = (
    <mesh castShadow={true} ref={sphereRef} position={[0, 3, 0]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial metalness={0.3} roughness={0.4} envMap={texture} envMapIntensity={0.5} />
    </mesh>
  );

  const floor = (
    <mesh receiveShadow castShadow ref={planeRef}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color='#777777' metalness={0.3} roughness={0.4} envMap={texture} envMapIntensity={0.5} />
    </mesh>
  );

  const box = (
    <mesh receiveShadow castShadow ref={boxRef}>
      <boxGeometry args={[3, 0.2, 0.3]} />
      <meshLambertMaterial color='hotpink' />
    </mesh>
  );

  return (
    <>
      <ambientLight color={'#fff'} intensity={0.2} />
      <directionalLight
        castShadow={true}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        color={'#fff'}
        position={[5, 5, 5]}
        intensity={1}
      />

      {sphere}
      {/* {physicsSphere} */}
      {box}
      <Spheres amount={controlValues.sAmount} />
      {floor}
    </>
  );
};
