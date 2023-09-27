import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';

import { CameraScene } from '../CameraScene/CameraScene';
import { Button } from '@/shared/UI/Button';
import { Vector3 } from 'three';

interface Cursor {
  x: number;
  y: number;
}

export const Page4 = () => {
  const [isPerspectiveCamera, setIsPerspectiveCamera] = useState(true);
  const [cameraPosition, setCameraPosition] = useState<Vector3>(new Vector3(0, 2, 10));
  const sizes = {
    width: 800,
    height: 600,
  };

  const toogleCamera = () => {
    setIsPerspectiveCamera(!isPerspectiveCamera);
  };

  const aspectRatio = sizes.width / sizes.height;

  const mouseMoveHandler = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / sizes.width - 0.5;
    const y = (e.clientY - rect.top) / sizes.height - 0.5;

    setCameraPosition(new Vector3(x * 3, 2 + -y * 5, 10));
  };

  const camera = isPerspectiveCamera ? (
    <PerspectiveCamera position={cameraPosition} fov={55} aspect={aspectRatio} near={1} far={100} makeDefault />
  ) : (
    <OrthographicCamera
      makeDefault
      zoom={1}
      top={5}
      bottom={-5}
      left={5 * aspectRatio}
      right={-5 * aspectRatio}
      near={1}
      far={2000}
      position={cameraPosition}
    />
  );

  return (
    <>
      <Canvas style={{ width: sizes.width, height: sizes.height, backgroundColor: '#000' }} onMouseMove={mouseMoveHandler}>
        <axesHelper args={[2]} />
        {camera}
        <CameraScene />
      </Canvas>
      <Button onClick={toogleCamera}>{isPerspectiveCamera ? 'Perspective' : 'Orthographic'}</Button>
    </>
  );
};
