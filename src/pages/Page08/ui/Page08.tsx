import { useEffect, useRef } from 'react';
import { Mesh, NearestFilter, Texture } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

import colorImg from '@/shared/assets/textures/door/color.jpg';
import matCapTexture from '@/shared/assets/textures/matcaps/2.png';
import gradientTexture from '@/shared/assets/textures/gradients/5.jpg';
import alphaImg from '@/shared/assets/textures/door/alpha.jpg';
import ambientOcclusionImg from '@/shared/assets/textures/door/ambientOcclusion.jpg';
import displacementImg from '@/shared/assets/textures/door/height.jpg';
import { Controls, useControls } from '@/shared/hooks/useControls';

import classes from './Page08.module.scss';
import { StreetBox } from '@/entities/Enviroments';

export const Page8 = () => {
  return (
    <Canvas className={classes.Page8} dpr={1} camera={{ position: [0, 0, 4], fov: 50 }}>
      <OrbitControls zoomSpeed={1.5} />
      <StreetBox />
      <Scene />
    </Canvas>
  );
};

const controls: Controls = {
  texture: {
    type: 'options',
    name: 'Texture',
    value: 'door',
    options: ['none', 'door', 'matcap', 'gradient'],
  },
  alpha: {
    type: 'boolean',
    name: 'Show alpha map',
    value: false,
  },
  material: {
    type: 'options',
    name: 'Material',
    value: 'standard',
    options: ['basic', 'normal', 'matcap', 'lambert', 'phong', 'toon', 'standard'],
  },
  lights: {
    type: 'boolean',
    name: 'Lights',
    value: true,
  },
  ambientIntensity: {
    type: 'range',
    name: 'Ambient intensity',
    value: 1,
    max: 10,
    min: 0,
    step: 1,
  },
};

const Scene = () => {
  const controlValues = useControls(controls);
  const sphereRef = useRef<Mesh | null>(null);
  const planeRef = useRef<Mesh | null>(null);
  const torusRef = useRef<Mesh | null>(null);
  const materialRef = useRef<any | null>(null);

  const colorMap = useTexture(colorImg) as Texture;
  const alphaMap = useTexture(alphaImg) as Texture;
  const matCapMap = useTexture(matCapTexture) as Texture;
  const gradientMap = useTexture(gradientTexture) as Texture;
  const ambientMap = useTexture(ambientOcclusionImg) as Texture;
  const displacementMap = useTexture(displacementImg) as Texture;
  gradientMap.magFilter = NearestFilter;

  useFrame((_, delta) => {
    const speedX = (2 * Math.PI) / 4;
    const speedY = (2 * Math.PI) / 6;
    sphereRef.current!.rotation.x += speedX * delta;
    planeRef.current!.rotation.x += speedX * delta;
    torusRef.current!.rotation.x += speedX * delta;
    sphereRef.current!.rotation.y += speedY * delta;
    planeRef.current!.rotation.y += speedY * delta;
    torusRef.current!.rotation.y += speedY * delta;
  });

  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.needsUpdate = true;
    if (!materialRef.current.map) return;
    materialRef.current.map.needsUpdate = true;
  }, [controlValues]);

  let textureMap: Texture | null = colorMap;

  switch (controlValues.texture) {
    case 'none':
      textureMap = null;
      break;
    case 'door':
      textureMap = colorMap;
      break;
    case 'matcap':
      textureMap = matCapMap;
      break;
    case 'gradient':
      textureMap = gradientMap;
      break;

    default:
      break;
  }

  let material: JSX.Element | null = null;
  switch (controlValues.material) {
    case 'basic':
      material = (
        <meshBasicMaterial
          ref={materialRef}
          map={textureMap}
          alphaMap={controlValues.alpha ? alphaMap : undefined}
          transparent={controlValues.alpha}
        />
      );
      break;
    case 'normal':
      material = <meshNormalMaterial ref={materialRef} />;
      break;
    case 'matcap':
      material = <meshMatcapMaterial ref={materialRef} matcap={textureMap} />;
      break;

    case 'lambert':
      material = <meshLambertMaterial ref={materialRef} map={textureMap} />;
      break;
    case 'phong':
      material = <meshPhongMaterial map={textureMap} ref={materialRef} shininess={100} specular={'red'} />;
      break;
    case 'toon':
      material = <meshToonMaterial gradientMap={gradientMap} ref={materialRef} />;
      break;
    case 'standard':
      material = (
        <meshStandardMaterial
          ref={materialRef}
          map={textureMap}
          metalness={0.7}
          roughness={0.2}
          alphaMap={controlValues.alpha ? alphaMap : undefined}
          aoMap={ambientMap}
          aoMapIntensity={controlValues.ambientIntensity}
          transparent={controlValues.alpha}
        />
      );
      break;
    default:
      break;
  }

  const sphere = (
    <mesh ref={sphereRef} position={[-1.5, 0, 0]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      {material}
    </mesh>
  );

  const plane = (
    <mesh ref={planeRef}>
      <planeGeometry args={[1, 1]} />
      {material}
    </mesh>
  );

  const torus = (
    <mesh position={[1.5, 0, 0]} ref={torusRef}>
      <torusGeometry args={[0.3, 0.2, 16, 32]} />
      {material}
    </mesh>
  );

  return (
    <>
      {controlValues.lights && <ambientLight intensity={0.9} />}
      {controlValues.lights && <pointLight intensity={9} position={[2, 3, 4]} />}
      {sphere}
      {plane}
      {torus}
    </>
  );
};
