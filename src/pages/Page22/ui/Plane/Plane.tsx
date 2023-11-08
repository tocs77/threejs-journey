import vertexShader from '../../shaders/vertex.glsl';
import fragmentShader from '../../shaders/fragment.glsl';
import { useEffect, useRef } from 'react';
import { BufferAttribute, Mesh } from 'three';

export const Plane = () => {
  const meshRef = useRef<Mesh | null>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    const count = meshRef.current.geometry.attributes.position.count;
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random();
    }
    meshRef.current.geometry.setAttribute('aRnd', new BufferAttribute(randoms, 1));
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  }, []);

  const plane = (
    <mesh ref={meshRef} position={[-0.5, 0, 0]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <rawShaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
  return plane;
};
