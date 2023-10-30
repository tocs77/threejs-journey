import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { CubeTexture } from 'three';

import { useControls } from '@/shared/hooks/useControls';
import { Helemt } from '@/entities/Helmet';
import { GraffityBox } from '@/entities/Enviroments';
import { Hamburger } from '@/entities/Hamburger';

import { controls } from './page20SceneControls';

export const Page20Scene = () => {
  const envMapRef = useRef<CubeTexture | null>(null);
  const controlValues = useControls(controls);
  const { scene } = useThree();
  const testSphere = (
    <mesh>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial envMap={envMapRef.current} envMapIntensity={controlValues.envIntencity} />
    </mesh>
  );

  return (
    <>
      <directionalLight
        color='#fff'
        position={[controlValues.dlX, controlValues.dlY, controlValues.dlZ]}
        intensity={controlValues.dlIntensity}
        castShadow
        shadow-normalBias={0.03}
      />
      <GraffityBox ref={envMapRef} />
      <Helemt
        receiveShadow={controlValues.receiveShadow}
        castShadow={controlValues.castShadow}
        scale={2}
        position={[0, -3, 0]}
        rotation-y={controlValues.hRotation}
        envMap={envMapRef.current}
        envMapIntensity={controlValues.envIntencity}
      />
      <Hamburger
        scale={0.2}
        position={[-2, 0, 0]}
        receiveShadow={controlValues.receiveShadow}
        castShadow={controlValues.castShadow}
      />
      {testSphere}
    </>
  );
};
