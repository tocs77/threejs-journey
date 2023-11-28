import damagedModel from '@/shared/assets/models/DamagedHelmet/glTF/DamagedHelmet.gltf';
import { isMesh, isStandardMAterial } from '@/shared/lib/utils';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { useEffect } from 'react';
import { CubeTexture, Material } from 'three';

interface DamagedProps extends GroupProps {
  envMap?: CubeTexture | null;
  envMapIntensity?: number;
}

export const DamagedEl = (props: DamagedProps) => {
  const { envMap, envMapIntensity = 1, position = [-1, 0, 0], ...other } = props;
  const { scene: helmeScene } = useGLTF(damagedModel);

  useEffect(() => {
    if (!envMap) return;
    helmeScene.traverse((s) => {
      if (!isMesh(s)) return;
      const material = s.material as Material;
      if (!isStandardMAterial(material)) return;
      material.envMap = envMap;

      material.emissiveIntensity = envMapIntensity;
    });
  }, [envMap, envMapIntensity]);

  useEffect(() => {
    helmeScene.traverse((s) => {
      if (!isMesh(s)) return;
      s.castShadow = Boolean(props.castShadow);
      s.receiveShadow = Boolean(props.receiveShadow);
    });
  }, [props.castShadow, props.receiveShadow]);

  return (
    <group position={position} {...other}>
      <primitive object={helmeScene} scale={3} />
    </group>
  );
};

export default DamagedEl;
