import { MeshProps } from '@react-three/fiber';
import { memo, useEffect, useState } from 'react';

interface RandomGeometryProps extends MeshProps {
  amount?: number;
  radius?: number;
  addColors?: boolean;
}

const RandomGeometryEl = (props: RandomGeometryProps) => {
  const { amount = 50, radius = 1, addColors = false } = props;
  const [vertices, setVertices] = useState<Float32Array>();
  const [colors, setColors] = useState<Float32Array>();

  useEffect(() => {
    setVerices();
    if (addColors) setColorsFn();
  }, [amount]);

  const setVerices = () => {
    const newVertices = new Float32Array(amount * 3);
    for (let i = 0; i < amount; i++) {
      const theta = Math.random() * 2.0 * Math.PI;
      const phi = Math.random() * Math.PI;
      const r = Math.random() * radius;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);
      newVertices[i * 3] = r * sinPhi * cosTheta;
      newVertices[i * 3 + 1] = r * sinPhi * sinTheta;
      newVertices[i * 3 + 2] = r * cosPhi;
    }
    setVertices(newVertices);
  };

  const setColorsFn = () => {
    const newColors = new Float32Array(amount * 3);
    for (let i = 0; i < amount; i++) {
      newColors[i * 3] = Math.random();
      newColors[i * 3 + 1] = Math.random();
      newColors[i * 3 + 2] = Math.random();
    }
    setColors(newColors);
  };
  if (!vertices) return null;
  return (
    <bufferGeometry attach='geometry'>
      <bufferAttribute attach='attributes-position' array={vertices} itemSize={3} count={amount} />
      {addColors && <bufferAttribute attach='attributes-color' array={colors} itemSize={3} count={amount} />}
    </bufferGeometry>
  );
};

export const RandomGeometry = memo(RandomGeometryEl);
