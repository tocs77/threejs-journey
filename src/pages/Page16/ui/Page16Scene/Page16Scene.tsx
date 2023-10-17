import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { Mesh, NearestFilter, Texture } from 'three';

import { useControls } from '@/shared/hooks/useControls';
import { useRotation } from '@/shared/hooks';
import gradientImg from '@/shared/assets/textures/gradients/3.jpg';
import { RandomGeometry } from '@/entities/RandomGeometry';

import { controls } from './page16SceneControls';

const OBJ_DISTANCE = 4;
const CAMERA_SPEED = 10;

interface Page16SceneProps {
  scrollPos: number;
  mousePos: { x: number; y: number };
}

export const Page16Scene = (props: Page16SceneProps) => {
  const { scrollPos, mousePos } = props;
  const controlValues = useControls(controls);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0 });
  const [pointLightProps, setPointLightProps] = useState({ visible: false, xPos: 1, yPos: 1 });
  const mesh1Ref = useRef<Mesh | null>(null);
  const mesh2Ref = useRef<Mesh | null>(null);
  const mesh3Ref = useRef<Mesh | null>(null);
  const { camera } = useThree();

  const gradientTexture = useTexture(gradientImg) as Texture;
  gradientTexture.magFilter = NearestFilter;

  useEffect(() => {
    updateCamearPosition();
  }, [scrollPos, mousePos]);

  useEffect(() => {
    if (scrollPos >= 0 && scrollPos < 0.2) {
      setPointLightProps({ visible: true, xPos: 1, yPos: -1 });
      return;
    }
    if (scrollPos > 0.8 && scrollPos < 1.2) {
      setPointLightProps({ visible: true, xPos: 0, yPos: -4 });
      return;
    }
    if (scrollPos > 1.7) {
      setPointLightProps({ visible: true, xPos: 1, yPos: -7 });
      return;
    }
    setPointLightProps({ visible: false, xPos: 1, yPos: 1 });
  }, [scrollPos]);

  useFrame((_, delta) => {
    const deltaX = cameraPosition.x - camera.position.x;
    const deltaY = cameraPosition.y - camera.position.y;

    if (Math.abs(deltaX) < 0.01 && Math.abs(deltaY) < 0.01) return;
    const frames = delta / (1 / 60);
    camera.position.x += (deltaX / CAMERA_SPEED) * frames;
    camera.position.y += (deltaY / CAMERA_SPEED) * frames;
  });

  const updateCamearPosition = () => {
    const newPosition = { x: 0, y: 0 };
    newPosition.y = -scrollPos * OBJ_DISTANCE;
    newPosition.x = mousePos.x / 3;
    newPosition.y -= mousePos.y / 3;
    setCameraPosition(newPosition);
  };

  useRotation({ meshRef: mesh1Ref, periodX: 15, periodY: 20 });
  useRotation({ meshRef: mesh2Ref, periodX: 15, periodY: 20 });
  useRotation({ meshRef: mesh3Ref, periodX: 15, periodY: 20 });

  const material = <meshToonMaterial color={controlValues.mColor} gradientMap={gradientTexture} />;
  const mesh1 = (
    <mesh ref={mesh1Ref} position-x={1.5}>
      <torusGeometry args={[1, 0.4, 16, 60]} />
      {material}
    </mesh>
  );

  const mesh2 = (
    <mesh position-y={-OBJ_DISTANCE} ref={mesh2Ref} position-x={-1.5}>
      <coneGeometry args={[1, 2, 32]} />
      {material}
    </mesh>
  );

  const mesh3 = (
    <mesh position-y={-OBJ_DISTANCE * 2} ref={mesh3Ref} position-x={1.5}>
      <torusKnotGeometry args={[0.8, 0.35, 100, 16]} />
      {material}
    </mesh>
  );

  const pointLight = (
    <pointLight position={[pointLightProps.xPos, pointLightProps.yPos, 0]} visible={pointLightProps.visible} color={'#ba5515'} />
  );

  const particles = (
    <points position={[0, -2, 0]}>
      <RandomGeometry radius={15} amount={500} />
      <pointsMaterial color={controlValues.mColor} sizeAttenuation size={0.03} />
    </points>
  );
  return (
    <>
      <directionalLight position={[1, 1, 0]} color={'#fff'} intensity={1} />

      {mesh1}
      {mesh2}
      {mesh3}
      {particles}
      {pointLight}
    </>
  );
};
