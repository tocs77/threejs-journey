import { useEffect } from 'react';

import foxModel from '@/shared/assets/models/Fox/glTF-Binary/Fox.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useControls } from '@/shared/hooks/useControls';

import { controls } from './foxControls';

export const Fox = () => {
  const { scene: foxScene, animations } = useGLTF(foxModel);
  const { actions } = useAnimations(animations, foxScene);
  const controlValues = useControls(controls);

  useEffect(() => {
    if (!actions) return;
    for (const action in actions) {
      if (actions[action]) {
        actions[action]?.stop();
        if (action === controlValues.fAnimation) actions[action]?.play();
      }
    }
  }, [controlValues.fAnimation]);

  return (
    <group position={[1, 0, 0]}>
      <primitive object={foxScene} scale={0.02} />
    </group>
  );
};
