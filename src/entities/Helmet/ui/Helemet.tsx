import helmetModel from '@/shared/assets/models/FlightHelmet/glTF/FlightHelmet.gltf';
import { isMesh, isStandardMAterial } from '@/shared/lib/utils';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { useEffect } from 'react';
import { Color, CubeTexture, Material } from 'three';

interface HelmetProps extends GroupProps {
  envMap?: CubeTexture | null;
  envMapIntensity?: number;
}

export const HelmetEl = (props: HelmetProps) => {
  const { envMap, envMapIntensity = 1, position = [-1, 0, 0], ...other } = props;
  const { scene: helmeScene } = useGLTF(helmetModel);

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

export default HelmetEl;
