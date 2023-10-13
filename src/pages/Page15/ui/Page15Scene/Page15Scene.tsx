import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, MeshBasicMaterial, Object3D, Raycaster, SphereGeometry, Vector3 } from 'three';

export const Page15Scene = () => {
  const raycasterRef = useRef<Raycaster | null>(null);
  const obj1Ref = useRef<Mesh | null>(null);
  const obj2Ref = useRef<Mesh | null>(null);
  const obj3Ref = useRef<Mesh | null>(null);

  const updateObjects = () => {
    if (!raycasterRef.current) return;
    if (!obj1Ref.current) return;
    if (!obj2Ref.current) return;
    if (!obj3Ref.current) return;
    (obj1Ref.current.material as MeshBasicMaterial).color.set('red');
    (obj2Ref.current.material as MeshBasicMaterial).color.set('red');
    (obj3Ref.current.material as MeshBasicMaterial).color.set('red');

    const isMesh = (obj: Object3D): obj is Mesh => {
      return obj.type === 'Mesh';
    };

    const objs = raycasterRef.current.intersectObjects([obj1Ref.current, obj2Ref.current, obj3Ref.current]);
    for (const obj of objs) {
      if (!isMesh(obj.object)) continue;
      (obj.object.material as MeshBasicMaterial).color.set('green');
    }
  };

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (obj1Ref.current) obj1Ref.current.position.y = Math.sin(elapsedTime * 0.3) * 1.5;
    if (obj2Ref.current) obj2Ref.current.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
    if (obj3Ref.current) obj3Ref.current.position.y = Math.sin(elapsedTime * 1.4) * 1.5;
    updateObjects();
  });

  const mouseEnterHandler = (obj: Mesh) => {
    (obj.geometry as SphereGeometry).scale(1.1, 1.1, 1.1);
  };

  const mouseLeaveHandler = (obj: Mesh) => {
    (obj.geometry as SphereGeometry).scale(0.9, 0.9, 0.9);
  };

  const obj1 = (
    <mesh
      position-x={-2}
      ref={obj1Ref}
      onPointerEnter={() => mouseEnterHandler(obj1Ref.current!)}
      onPointerLeave={() => mouseLeaveHandler(obj1Ref.current!)}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color='red' />
    </mesh>
  );
  const obj2 = (
    <mesh
      ref={obj2Ref}
      onPointerEnter={() => mouseEnterHandler(obj2Ref.current!)}
      onPointerLeave={() => mouseLeaveHandler(obj2Ref.current!)}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color='red' />
    </mesh>
  );
  const obj3 = (
    <mesh
      position-x={2}
      ref={obj3Ref}
      onPointerEnter={() => mouseEnterHandler(obj3Ref.current!)}
      onPointerLeave={() => mouseLeaveHandler(obj3Ref.current!)}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color='red' />
    </mesh>
  );

  const rayCaster = <raycaster args={[new Vector3(-3, 0, 0), new Vector3(10, 0, 0).normalize()]} ref={raycasterRef} />;
  return (
    <>
      {obj1}
      {obj2}
      {obj3}
      {rayCaster}
    </>
  );
};
