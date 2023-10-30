import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';

import hamburgerModel from '@/shared/assets/models/hamburger/hamburger.glb';
import { isMesh } from '@/shared/lib/utils';

export const Hamburger = (props: GroupProps) => {
  const { position = [-1, 0, 0], ...other } = props;
  const { scene: hamburgerScene } = useGLTF(hamburgerModel);

  useEffect(() => {
    hamburgerScene.traverse((s) => {
      if (!isMesh(s)) return;
      s.castShadow = Boolean(props.castShadow);
      s.receiveShadow = Boolean(props.receiveShadow);
    });
  }, [props.castShadow, props.receiveShadow]);

  return (
    <group position={position} {...other} s>
      <primitive object={hamburgerScene} />
    </group>
  );
};
