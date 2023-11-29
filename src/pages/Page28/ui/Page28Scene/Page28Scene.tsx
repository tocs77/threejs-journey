import { useTexture, Stats } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import displacementTexture from '@/shared/assets/textures/displacementMap.png';
import { useRotation } from '@/shared/hooks';
import { useRef } from 'react';

import classes from './Page28Scene.module.scss';
import { InstancedMeshes } from '../InstancedMeshes/InstancedMeshes';
import { useControls } from '@/shared/hooks/useControls';
import { controls } from './scene28Controls';

export const Page28Scene = () => {
  const displacementMap = useTexture(displacementTexture) as Texture;
  const knotRef = useRef<Mesh | null>(null);
  useRotation({ meshRef: knotRef, periodY: 6 });
  const controlValues = useControls(controls);

  const cube = (
    <mesh castShadow receiveShadow position={[-5, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );

  const torusKnot = (
    <mesh castShadow receiveShadow ref={knotRef}>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <meshStandardMaterial />
    </mesh>
  );

  const sphere = (
    <mesh position={[5, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial />
    </mesh>
  );

  const floor = (
    <mesh position={[0, -2, 0]} rotation-x={-Math.PI * 0.5} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial />
    </mesh>
  );
  return (
    <>
      <directionalLight castShadow position={[0.25, 3, 2.25]} shadow-normalBias={0.05} intensity={2} />
      {cube}
      {torusKnot}
      {sphere}
      {floor}
      {controlValues.iShow && <InstancedMeshes i={controlValues.iRows} j={controlValues.iColumns} />}
      <Stats showPanel={0} className={classes.stats} />
    </>
  );
};
