import { Canvas } from '@react-three/fiber';
import { Scene } from '../Scene/Scene';

export const Page2 = () => {
  const sizes = {
    width: 800,
    height: 600,
  };

  return (
    <Canvas style={{ width: sizes.width, height: sizes.height, backgroundColor: '#000' }}>
      <Scene />
    </Canvas>
  );
};
