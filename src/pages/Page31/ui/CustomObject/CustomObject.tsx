import { useEffect, useMemo, useRef } from 'react';
import { BufferGeometry, DoubleSide } from 'three';

const TRIANGLES = 10;

export const CustomObject = () => {
  const verticesCount = TRIANGLES * 3;
  const geometryRef = useRef<BufferGeometry | null>(null);

  useEffect(() => {
    if (geometryRef.current) geometryRef.current.computeVertexNormals();
  }, []);

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2;
    }
    return positions;
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach='attributes-position' count={verticesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <meshStandardMaterial color='hotpink' side={DoubleSide} />
    </mesh>
  );
};
