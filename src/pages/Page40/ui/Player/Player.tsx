import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Camera, Vector3 } from 'three';
import { RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier';

import { KeyControls } from '../../types/KeyEntries';

const BALL_SIZE = 0.3;

const smoothedCameraPosition = new Vector3(10, 10, 10);
const smoothedCameraTarget = new Vector3();

export const Player = () => {
  const [subscribeKeys, getKeys] = useKeyboardControls<KeyControls>();

  const { rapier, world } = useRapier();
  const playerRef = useRef<RapierRigidBody>();

  const jumpHandler = () => {
    const origin = playerRef.current.translation();
    origin.y -= BALL_SIZE + 0.01;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 5, true);
    if (hit.toi > 0.1) return;

    playerRef.current.applyImpulse({ x: 0, y: 0.5, z: 0 }, true);
  };

  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (val: boolean) => {
        if (val) jumpHandler();
      },
    );
    return () => unsubscribeJump();
  }, []);

  const handleKeyboard = (delta: number) => {
    const { forward, backward, leftward, rightward } = getKeys();
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }
    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }
    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }
    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    playerRef.current.applyImpulse(impulse, true);
    playerRef.current.applyTorqueImpulse(torque, true);
  };

  const handleCamera = (camera: Camera, delta: number) => {
    const playerPos = playerRef.current.translation();
    const cameraPos = new Vector3();
    cameraPos.copy(playerPos);
    cameraPos.z += 2.25;
    cameraPos.y += 0.65;
    const cameraTarget = new Vector3();
    cameraTarget.copy(playerPos);
    cameraTarget.y += 0.25;

    smoothedCameraPosition.lerp(cameraPos, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    camera.position.copy(smoothedCameraPosition);
    camera.lookAt(smoothedCameraTarget);
  };

  useFrame(({ camera }, delta) => {
    handleKeyboard(delta);
    handleCamera(camera, delta);
  });

  return (
    <RigidBody
      colliders={'ball'}
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
      ref={playerRef}
      linearDamping={0.5}
      angularDamping={0.5}>
      <mesh castShadow>
        <icosahedronGeometry args={[BALL_SIZE, 1]} />
        <meshStandardMaterial color='mediumpurple' flatShading />
      </mesh>
    </RigidBody>
  );
};
