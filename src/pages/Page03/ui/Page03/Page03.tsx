import { Canvas } from '@react-three/fiber';
import { RotatingBox } from '@/features/RotatingBox';
export const Page3 = () => {
  const sizes = {
    width: 800,
    height: 600,
  };

  return (
    <Canvas
      style={{ width: sizes.width, height: sizes.height, backgroundColor: '#000' }}
      camera={{ fov: 75, position: [0, 0, 7] }}>
      <RotatingBox color='yellow' />
      <RotatingBox color='blue' position={[-3, 1, 1]} rotateAxis='y' period={5} />
      <RotatingBox color='orange' position={[-1, 3, 1]} rotateAxis='z' size={0.5} period={10} />
    </Canvas>
  );
};
