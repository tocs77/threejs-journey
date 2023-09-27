import { RotatingBox } from '@/features/RotatingBox';

export const CameraScene = () => {
  return (
    <group>
      <RotatingBox color={'#457f11'} period={4} rotateAxis='y' position={[0, 0, -1]} size={2} />
      <RotatingBox color={'#a50011'} period={3} rotateAxis='y' position={[0, 3, 2]} size={2} />
    </group>
  );
};
