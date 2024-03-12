import {
  BakeShadows,
  useHelper,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Sky,
  Environment,
  Lightformer,
} from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { DirectionalLight, DirectionalLightHelper, PlaneGeometry } from 'three';
import { BaseScene } from '../BaseScene/BaseScene';
import { useControls } from '@/shared/hooks/useControls';
import { controls } from './scene33Controls';

interface Page33SceneProps {
  showContactShadow: boolean;
}

export const Page33Scene = (props: Page33SceneProps) => {
  const { showContactShadow } = props;
  const dirLightRef = useRef<DirectionalLight>() as React.MutableRefObject<DirectionalLight>;
  const { camera, gl } = useThree();
  const controlValues = useControls(controls);

  useHelper(dirLightRef, DirectionalLightHelper, 1);

  return (
    <>
      {controlValues.bakeShadows && <BakeShadows />}
      {controlValues.softShadows && <SoftShadows samples={17} />}

      {controlValues.environment && (
        <Environment
          background={!controlValues.ground}
          preset={controlValues.ground ? 'sunset' : undefined}
          ground={controlValues.ground ? { height: 7, radius: 28, scale: 100 } : undefined}>
          <Lightformer position-z={5} scale={10} color='red' intensity={10} form={'ring'} />
          <color args={['#00ff00']} attach='background' />
          <mesh position-z={-5} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color={[2, 0, 0]} />
          </mesh>
        </Environment>
      )}

      {controlValues.sky && <Sky />}
      {controlValues.accumulatedShadows && (
        <AccumulativeShadows
          position={[0, 0.01, 0]}
          scale={10}
          opacity={0.8}
          color='#316d39'
          frames={Infinity}
          temporal
          blend={100}>
          <RandomizedLight position={[1, 2, 3]} castShadow amount={8} radius={1} ambient={0.5} intensity={1} bias={0.01} />
        </AccumulativeShadows>
      )}

      {showContactShadow && (
        <ContactShadows position={[0, 0.01, 0]} opacity={0.5} scale={10} blur={2} far={10} resolution={512} color={'#1aa39e'} />
      )}

      <orbitControls args={[camera, gl.domElement]} />
      {!controlValues.environment && (
        <>
          <directionalLight
            position={[1, 2, 3]}
            intensity={1.5}
            ref={dirLightRef}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={5}
            shadow-camera-right={5}
            shadow-camera-bottom={-5}
            shadow-camera-left={-5}
          />
          <ambientLight intensity={0.5} />
        </>
      )}

      <BaseScene planeShadow={!controlValues.accumulatedShadows} />
    </>
  );
};
