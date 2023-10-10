import { GroupProps } from '@react-three/fiber';
import { Graves } from '../Graves/Graves';
import { Controls, useControls } from '@/shared/hooks/useControls';
import doorTexture from '@/shared/assets/textures/door/color.jpg';
import doorAlphaTexture from '@/shared/assets/textures/door/alpha.jpg';
import doorAmbientOclusionTexture from '@/shared/assets/textures/door/ambientOcclusion.jpg';
import doorHeightTexture from '@/shared/assets/textures/door/height.jpg';
import doorNormalTexture from '@/shared/assets/textures/door/normal.jpg';
import doorMetallnessTexture from '@/shared/assets/textures/door/metalness.jpg';
import doorRoughnessTexture from '@/shared/assets/textures/door/roughness.jpg';
import wallColorTexture from '@/shared/assets/textures/bricks/color.jpg';
import wallAmbientOcclusionTexture from '@/shared/assets/textures/bricks/ambientOcclusion.jpg';
import wallNormalTexture from '@/shared/assets/textures/bricks/normal.jpg';
import wallRoughnessTexture from '@/shared/assets/textures/bricks/roughness.jpg';

import { useTexture } from '@react-three/drei';
import { Texture } from 'three';

interface HouseProps extends GroupProps {
  houseWidth?: number;
  houseHeight?: number;
  roofHeight?: number;
  shadows?: boolean;
}

export const House = (props: HouseProps) => {
  const { houseWidth = 4, houseHeight = 2.5, roofHeight = 1, shadows = false, ...rest } = props;
  const controlValues = useControls(controls);

  const wallColorMap = useTexture(wallColorTexture) as Texture;
  const wallAmbientOcclusionMap = useTexture(wallAmbientOcclusionTexture) as Texture;
  const wallNormalMap = useTexture(wallNormalTexture) as Texture;
  const wallRoughnessMap = useTexture(wallRoughnessTexture) as Texture;

  const walls = (
    <mesh position={[0, houseHeight / 2, 0]}>
      <boxGeometry args={[houseWidth, houseHeight, houseWidth]} />
      <meshStandardMaterial
        map={wallColorMap}
        transparent
        aoMap={wallAmbientOcclusionMap}
        aoMapIntensity={0.2}
        normalMap={wallNormalMap}
        roughnessMap={wallRoughnessMap}
      />
    </mesh>
  );
  const roof = (
    <mesh rotation-y={Math.PI * 0.25} position-y={houseHeight + roofHeight / 2}>
      <coneGeometry args={[houseWidth * 0.8, roofHeight, 4]} />
      <meshStandardMaterial color='#b35f45' metalness={0.8} roughness={0.2} />
    </mesh>
  );

  const doorColorMap = useTexture(doorTexture) as Texture;
  const doorAlphaMap = useTexture(doorAlphaTexture) as Texture;
  const doorAmbientMap = useTexture(doorAmbientOclusionTexture) as Texture;
  const doorHeightMap = useTexture(doorHeightTexture) as Texture;
  const doorNormalMap = useTexture(doorNormalTexture) as Texture;
  const doorMetallnessMap = useTexture(doorMetallnessTexture) as Texture;
  const doorRoughnessMap = useTexture(doorRoughnessTexture) as Texture;

  const door = (
    <mesh position={[0, 1, houseWidth / 2 + 0.001]} castShadow={shadows}>
      <planeGeometry args={[houseWidth / 2, houseHeight * 0.8, 100, 100]} />
      <meshStandardMaterial
        map={doorColorMap}
        alphaMap={doorAlphaMap}
        transparent
        aoMap={doorAmbientMap}
        aoMapIntensity={0.5}
        displacementMap={doorHeightMap}
        displacementScale={0.1}
        normalMap={doorNormalMap}
        metalnessMap={doorMetallnessMap}
        roughnessMap={doorRoughnessMap}
      />
    </mesh>
  );

  const bushGeometry = <sphereGeometry args={[houseWidth / 4, 16, 16]}></sphereGeometry>;
  const bushMaterial = <meshStandardMaterial color='#89c854' />;

  const bush1 = (
    <mesh scale={0.5} position={[houseWidth / 3.3, houseHeight / 10, houseWidth / 2]} castShadow={shadows}>
      {bushGeometry}
      {bushMaterial}
    </mesh>
  );
  const bush2 = (
    <mesh scale={0.25} position={[houseWidth / 2.3, houseHeight / 14, houseWidth / 2]} castShadow={shadows}>
      {bushGeometry}
      {bushMaterial}
    </mesh>
  );
  const bush3 = (
    <mesh scale={0.4} position={[-houseWidth / 3.2, houseHeight / 14, houseWidth / 2]} castShadow={shadows}>
      {bushGeometry}
      {bushMaterial}
    </mesh>
  );
  const bush4 = (
    <mesh scale={0.15} position={[-houseWidth / 3.5, houseHeight / 24, houseWidth / 1.6]} castShadow={shadows}>
      {bushGeometry}
      {bushMaterial}
    </mesh>
  );

  const doorLight = (
    <pointLight
      intensity={controlValues.hIntensity}
      distance={houseWidth * 2}
      color={'#ff7d46'}
      position={[0, houseHeight * 0.9, houseWidth / 2 + 0.5]}
      castShadow={shadows}
      shadow-mapSize-height={256}
      shadow-mapSize-width={256}
    />
  );
  return (
    <group {...rest}>
      {walls}
      {roof}
      {door}
      {bush1}
      {bush2}
      {bush3}
      {bush4}
      {doorLight}
      <Graves amount={25} innerRadius={houseWidth / 1.3} outerRadius={10} shadows={shadows} />
    </group>
  );
};

export const controls: Controls = {
  houseLight: {
    type: 'folder',
    name: 'House',
    controls: {
      hIntensity: {
        type: 'range',
        name: 'Intensity',
        value: 1,
        min: 0,
        max: 2,
        step: 0.1,
      },
    },
  },
};
