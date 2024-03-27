import { useEffect } from 'react';
import { Clone, Html, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';

import laptopModel from '@/shared/assets/models/laptop/laptop.gltf';
import { isMesh } from '@/shared/lib/utils';

import classes from './Laptop.module.scss';

interface LaptopProps extends GroupProps {
  iframe?: string;
}

export const Laptop = (props: LaptopProps) => {
  const { position = [-1, 0, 0], iframe, ...other } = props;
  const { scene: hamburgerScene } = useGLTF(laptopModel);

  useEffect(() => {
    hamburgerScene.traverse((s) => {
      if (!isMesh(s)) return;
      s.castShadow = Boolean(props.castShadow);
      s.receiveShadow = Boolean(props.receiveShadow);
    });
  }, [props.castShadow, props.receiveShadow]);

  return (
    <group position={position} {...other}>
      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={65}
        color={'#bbbbbb'}
        rotation={[-0.1, Math.PI, 0]}
        position={[0, 0.55, -1.15]}
      />
      <Clone object={hamburgerScene} />
      <Html transform wrapperClass={classes.Laptop} distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
        <iframe src={iframe} />
      </Html>
    </group>
  );
};
