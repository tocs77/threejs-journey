import { useRef } from 'react';

import { useControls } from '@/shared/hooks/useControls';
import { House } from '@/entities/House';

import floorColorTexture from '@/shared/assets/textures/grass/color.jpg';
import floorAmbientOcclusionTexture from '@/shared/assets/textures/grass/ambientOcclusion.jpg';
import floorNormalTexture from '@/shared/assets/textures/grass/normal.jpg';
import floorRoughnessTexture from '@/shared/assets/textures/grass/roughness.jpg';

import { controls } from './Scene12Controls';
import { useTexture } from '@react-three/drei';
import { PointLight, RepeatWrapping, Texture } from 'three';
import { useFrame } from '@react-three/fiber';

export const Page12Scene = () => {
  const controlValues = useControls(controls);
  const ghost1Ref = useRef<PointLight | null>(null);
  const ghost2Ref = useRef<PointLight | null>(null);
  const ghost3Ref = useRef<PointLight | null>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime;

    if (ghost1Ref.current) {
      const ghost1Angle = elapsedTime * 0.4;
      ghost1Ref.current.position.x = Math.cos(ghost1Angle) * 4;
      ghost1Ref.current.position.z = Math.sin(ghost1Angle) * 4;
      ghost1Ref.current.position.y = Math.abs(Math.sin(ghost1Angle * 2)) * 3;
    }
    if (ghost2Ref.current) {
      const ghost2Angle = -elapsedTime * 0.32;
      ghost2Ref.current.position.x = Math.cos(ghost2Angle) * 5;
      ghost2Ref.current.position.z = Math.sin(ghost2Angle) * 5;
      ghost2Ref.current.position.y = Math.sin(ghost2Angle * 4) + Math.sin(ghost2Angle * 2.5);
    }
    if (ghost3Ref.current) {
      const ghost3Angle = elapsedTime * 0.18;
      ghost3Ref.current.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
      ghost3Ref.current.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
      ghost3Ref.current.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
    }
  });

  const floorColorMap = useTexture(floorColorTexture) as Texture;
  const floorAmbientOcclusionMap = useTexture(floorAmbientOcclusionTexture) as Texture;
  const floorNormalMap = useTexture(floorNormalTexture) as Texture;
  const floorRoughnessMap = useTexture(floorRoughnessTexture) as Texture;

  const modifyTexture = (t: Texture) => {
    t.repeat.set(8, 8);
    t.wrapS = t.wrapT = RepeatWrapping;
  };

  modifyTexture(floorColorMap);
  modifyTexture(floorAmbientOcclusionMap);
  modifyTexture(floorNormalMap);
  modifyTexture(floorRoughnessMap);

  const floor = (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow={controlValues.shadows}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={floorColorMap}
        transparent
        aoMap={floorAmbientOcclusionMap}
        aoMapIntensity={0.2}
        normalMap={floorNormalMap}
        roughnessMap={floorRoughnessMap}
      />
    </mesh>
  );
  const fog = <fog color={'#262837'} attach='fog' near={1} far={15} />;

  const ghost1 = (
    <pointLight
      color='#ff00ff'
      intensity={2}
      decay={2}
      ref={ghost1Ref}
      castShadow={controlValues.shadows}
      shadow-mapSize-height={256}
      shadow-mapSize-width={256}
    />
  );
  const ghost2 = (
    <pointLight
      color='#00ffff'
      intensity={2}
      decay={3}
      ref={ghost2Ref}
      castShadow={controlValues.shadows}
      shadow-mapSize-height={256}
      shadow-mapSize-width={256}
    />
  );
  const ghost3 = (
    <pointLight
      color='#ffff00'
      intensity={2}
      decay={2}
      ref={ghost3Ref}
      castShadow={controlValues.shadows}
      shadow-mapSize-height={256}
      shadow-mapSize-width={256}
    />
  );

  return (
    <>
      <ambientLight color={'#b9d5ff'} intensity={controlValues.aIntensity} />
      <directionalLight
        position={[controlValues.dPositionX, controlValues.dPositionY, controlValues.dPositionZ]}
        intensity={controlValues.dIntensity}
        color={'#b9d5ff'}
        visible={controlValues.dEnabled}
        castShadow={controlValues.shadows}
      />
      {floor}
      {fog}
      {ghost1}
      {ghost2}
      {ghost3}
      <House shadows={controlValues.shadows} />
    </>
  );
};
