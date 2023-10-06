import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

import { BasicBox, BoxProps } from '@/features/BasicBox';

interface RotatingBoxProps extends BoxProps {
  rotateAxis?: 'x' | 'y' | 'z';
  period?: number;
}

export const RotatingBox = (props: RotatingBoxProps) => {
  const { rotateAxis = 'x', period = 1, ...other } = props;
  const boxRef = useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    const speed = (2 * Math.PI) / period;
    if (rotateAxis === 'x') boxRef.current!.rotation.x += speed * delta;
    if (rotateAxis === 'y') boxRef.current!.rotation.y += speed * delta;
    if (rotateAxis === 'z') boxRef.current!.rotation.z += speed * delta;
  });

  useEffect(() => {
    if (!boxRef.current) return;
    boxRef.current.scale.set(2, 1, 1);
  }, [boxRef.current]);

  return <BasicBox ref={boxRef} {...other} />;
};
