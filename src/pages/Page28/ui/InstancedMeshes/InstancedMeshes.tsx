import { BoxGeometry, InstancedMesh, MeshLambertMaterial, Object3D } from 'three';
import { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

const tempBoxes = new Object3D();

type BoxesProps = {
  i: number;
  j: number;
};

export const InstancedMeshes = ({ i, j }: BoxesProps) => {
  const material = new MeshLambertMaterial({ color: 'red' });
  const boxesGeometry = new BoxGeometry(0.5, 0.5, 0.5);
  const ref = useRef<InstancedMesh | null>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    let counter = 0;
    const t = clock.oldTime * 0.001;
    for (let x = 0; x < i; x++) {
      for (let z = 0; z < j; z++) {
        const id = counter++;
        tempBoxes.position.set(i / 2 - x, id % 2, j / 2 - z);
        tempBoxes.rotation.y = t;
        tempBoxes.updateMatrix();
        ref.current.setMatrixAt(id, tempBoxes.matrix);
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={ref} args={[boxesGeometry, material, i * j]} />;
};
