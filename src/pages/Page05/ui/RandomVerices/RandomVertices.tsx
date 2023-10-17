import { MeshProps } from '@react-three/fiber';
import { memo, useEffect, useState } from 'react';

interface GeometryProps extends MeshProps {
  color?: string;
  amount?: number;
}

const MAX_VERTICES = 10000;

const RandomVerticesEl = (props: GeometryProps) => {
  const { color = 'red', amount = 50 } = props;
  const [vertices, setVertices] = useState<Float32Array>();

  useEffect(() => {
    const verticesAmount = amount > MAX_VERTICES ? MAX_VERTICES : amount;
    const newVertices = new Float32Array(MAX_VERTICES * 3);
    for (let i = 0; i < verticesAmount; i++) {
      newVertices[i * 3] = (Math.random() - 0.5) * 4;
      newVertices[i * 3 + 1] = (Math.random() - 0.5) * 4;
      newVertices[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    setVertices(newVertices);
  }, [amount]);

  return (
    <points>
      <bufferGeometry attach='geometry'>
        <bufferAttribute attach='attributes-position' array={vertices} itemSize={3} count={amount} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={color} transparent />
    </points>
  );
};

export const RandomVertices = memo(RandomVerticesEl);
