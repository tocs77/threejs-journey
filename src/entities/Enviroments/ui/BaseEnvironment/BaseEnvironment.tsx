import { CubeTexture } from 'three';
import { Environment } from '@react-three/drei';

import { forwardRef } from 'react';

export interface BaseEnvironmentProps {
  background?: boolean;
  texture: CubeTexture;
}
export interface EnvironmentProps {
  background?: boolean;
}

export const BaseEnvironment = forwardRef<CubeTexture, BaseEnvironmentProps>(function Box(props, ref) {
  const { background = true, texture } = props;
  if (ref && typeof ref !== 'function') {
    ref.current = texture;
  }
  return <Environment map={texture} background={background} />;
});
