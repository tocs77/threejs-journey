import { useEffect, useRef } from 'react';
import { DirectionalLight, SpotLight, Mesh } from 'three';

import { useControls } from '@/shared/hooks/useControls';
import { controls } from './scene11Controls';

export const Page11Scene = () => {
  const controlValues = useControls(controls);
  const planeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);
  const directionalRef = useRef<DirectionalLight | null>(null);
  const spotLightRef = useRef<SpotLight | null>(null);
  const material = <meshStandardMaterial roughness={controlValues.roughness} metalness={controlValues.metalness} />;

  const sphere = (
    <mesh castShadow={true} ref={sphereRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      {material}
    </mesh>
  );
  const plane = (
    <mesh ref={planeRef} position={[0, -0.5, 0]} receiveShadow={true} rotation={[-Math.PI * 0.5, -0.5, 0]}>
      <planeGeometry args={[5, 5]} />
      {material}
    </mesh>
  );

  useEffect(() => {
    if (!directionalRef.current) return;
    directionalRef.current.shadow.camera;
    directionalRef.current.shadow.needsUpdate = true;
  }, [controlValues.dShadowSize]);
  return (
    <>
      <ambientLight color={'#fff'} intensity={controlValues.aIntensity} />
      {directionalRef.current && (
        <cameraHelper args={[directionalRef.current.shadow.camera]} visible={controlValues.dShadowHelper} />
      )}
      <directionalLight
        ref={directionalRef}
        position={[controlValues.dPositionX, controlValues.dPositionY, controlValues.dPositionZ]}
        intensity={controlValues.dIntensity}
        color={'#fff'}
        castShadow={true}
        shadow-mapSize-height={controlValues.dShadowSize || 1024}
        shadow-mapSize-width={controlValues.dShadowSize || 1024}
        shadow-radius={10}
        shadow-camera-near={0.1}
        shadow-camera-far={10}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        visible={controlValues.dEnabled}
      />
      {sphereRef.current && (
        <>
          {spotLightRef.current && (
            <cameraHelper args={[spotLightRef.current.shadow.camera]} visible={controlValues.sShadowHelper} />
          )}

          <spotLight
            ref={spotLightRef}
            visible={controlValues.sEnabled}
            color={'#fff'}
            position={[controlValues.sPositionX, controlValues.sPositionY, controlValues.sPositionZ]}
            angle={Math.PI * 0.2}
            penumbra={2}
            intensity={controlValues.sIntensity}
            castShadow={true}
            target={sphereRef.current!}
            shadow-camera-near={0.1}
            shadow-camera-far={10}
          />
        </>
      )}

      {sphere}
      {plane}
    </>
  );
};
