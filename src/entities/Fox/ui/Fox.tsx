import { useEffect, useState } from 'react';
import { GroupProps } from '@react-three/fiber';

import foxModel from '@/shared/assets/models/Fox/glTF-Binary/Fox.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useControls } from '@/shared/hooks/useControls';

import { controls } from './foxControls';
export type FoxAnimation = 'Survey' | 'Walk' | 'Run';

const Fox = (props: GroupProps) => {
  const { position = [0, 0, 0], ...other } = props;
  const { scene: foxScene, animations } = useGLTF(foxModel);
  const { actions } = useAnimations(animations, foxScene);
  const controlValues = useControls(controls);
  const [currentAction, setCurrentAction] = useState<FoxAnimation>('Survey');

  useEffect(() => {
    if (!actions) return;
    const newAction = actions[currentAction];
    newAction?.play();
  }, []);

  useEffect(() => {
    if (!actions) return;
    if (!currentAction) return;
    if (currentAction === controlValues.fAnimation) return;

    const newAction = actions[controlValues.fAnimation];
    const oldAction = actions[currentAction];
    if (!newAction || !oldAction) {
      console.log('newAction or oldAction is null');
      return;
    }
    newAction.reset();
    newAction.play();
    newAction.crossFadeFrom(oldAction, 1, false);

    setCurrentAction(controlValues.fAnimation);
  }, [controlValues.fAnimation]);

  useEffect(() => {
    updateShadows();
  }, [props.castShadow, props.receiveShadow]);

  const updateShadows = () => {
    foxScene.traverse((s) => {
      s.castShadow = Boolean(props.castShadow);
      s.receiveShadow = Boolean(props.receiveShadow);
    });
  };

  return (
    <group position={position} {...other}>
      <primitive object={foxScene} />
    </group>
  );
};

export default Fox;
