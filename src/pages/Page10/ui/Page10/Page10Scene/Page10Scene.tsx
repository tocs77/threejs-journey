import { useRef } from 'react';
import { Mesh, PointLight } from 'three';

import { useRotation } from '@/shared/hooks/';
import { useControls, Controls } from '@/shared/hooks/useControls';

const controls: Controls = {
  showAmbient: {
    type: 'boolean',
    name: 'Show ambient light',
    value: true,
  },
  ambientIntensity: {
    type: 'range',
    name: 'Ambient intensity',
    value: 0.2,
    max: 5,
    min: 0,
    step: 0.1,
  },
  ambientColor: {
    type: 'color',
    name: 'Ambient color',
    value: '#ffffff',
  },
  showDirectional: {
    type: 'boolean',
    name: 'Show directional light',
    value: true,
  },
  directionalIntensity: {
    type: 'range',
    name: 'Directional intensity',
    value: 1,
    max: 10,
    step: 0.5,
  },
  directionalColor: {
    type: 'color',
    name: 'Directional color',
    value: '#00fffc',
  },
  showHemispehre: {
    type: 'boolean',
    name: 'Show hemisphere light',
    value: false,
  },
  hemisphereIntensity: {
    type: 'range',
    name: 'Hemisphere intensity',
    value: 1,
    min: 0,
    max: 10,
    step: 0.5,
  },
  hemisphereSkyColor: {
    type: 'color',
    name: 'Hemisphere sky color',
    value: '#f00',
  },
  hemisphereGroundColor: {
    type: 'color',
    name: 'Hemisphere ground color',
    value: '#00f',
  },
  showPoint: {
    type: 'boolean',
    name: 'Show point light',
    value: false,
  },
  pointIntensity: {
    type: 'range',
    name: 'Point intensity',
    value: 3,
    min: 0,
    max: 10,
    step: 0.5,
  },
  pointColor: {
    type: 'color',
    name: 'Point color',
    value: '#ff9000',
  },
  decay: {
    type: 'range',
    name: 'Point decay',
    value: 0.2,
    min: 0,
    max: 2.5,
    step: 0.1,
  },
  showSpotlight: {
    type: 'boolean',
    name: 'Show spotlight',
    value: false,
  },
  spotlightIntensity: {
    type: 'range',
    name: 'Spotlight intensity',
    value: 1,
    min: 0,
    max: 10,
    step: 0.5,
  },
  spotLightColor: {
    type: 'color',
    name: 'Spotlight color',
    value: '#78ff00',
  },
};

export const Page10Scene = () => {
  const controlValues = useControls(controls);
  const sphereRef = useRef<Mesh | null>(null);
  const cubeRef = useRef<Mesh | null>(null);
  const torusRef = useRef<Mesh | null>(null);
  const pointRef = useRef<PointLight | null>(null);

  useRotation({ meshRef: cubeRef, periodX: 5, periodY: 8 });
  useRotation({ meshRef: sphereRef, periodX: 5, periodY: 8 });
  useRotation({ meshRef: torusRef, periodX: 5, periodY: 8 });

  const material = <meshStandardMaterial roughness={0.4} metalness={0.5} />;

  const sphere = (
    <mesh position={[-1.5, 0, 0]} ref={sphereRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      {material}
    </mesh>
  );

  const cube = (
    <mesh ref={cubeRef}>
      <boxGeometry args={[0.75, 0.75, 0.75]} />
      {material}
    </mesh>
  );

  const torus = (
    <mesh position={[1.5, 0, 0]} ref={torusRef}>
      <torusGeometry args={[0.3, 0.2, 32, 64]} />
      {material}
    </mesh>
  );

  const plane = (
    <mesh position={[0, -0.65, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry args={[5, 5]} />
      {material}
    </mesh>
  );
  return (
    <>
      {controlValues.showAmbient && (
        <ambientLight intensity={controlValues.ambientIntensity} color={controlValues.ambientColor} />
      )}
      {controlValues.showDirectional && (
        <directionalLight
          intensity={controlValues.directionalIntensity}
          color={controlValues.directionalColor}
          position={[1, 0.25, 0]}
        />
      )}
      {controlValues.showHemispehre && (
        <hemisphereLight
          intensity={controlValues.hemisphereIntensity}
          color={controlValues.hemisphereSkyColor}
          groundColor={controlValues.hemisphereGroundColor}
        />
      )}
      {controlValues.showPoint && (
        <>
          {pointRef.current && <pointLightHelper args={[pointRef.current, 0.2]} />}
          <pointLight
            ref={pointRef}
            intensity={controlValues.pointIntensity}
            color={controlValues.pointColor}
            position={[1, -0.5, 1]}
            decay={controlValues.decay}
          />
        </>
      )}
      {controlValues.showSpotlight && (
        <spotLight
          color={controlValues.spotLightColor}
          intensity={controlValues.spotlightIntensity}
          distance={10}
          position={[0, 2, 3]}
          angle={Math.PI * 0.1}
          penumbra={0.2}
          target={torusRef.current!}
        />
      )}
      {sphere}
      {cube}
      {torus}
      {plane}
    </>
  );
};
