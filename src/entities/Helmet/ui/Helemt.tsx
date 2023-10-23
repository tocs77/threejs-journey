import helmetModel from '@/shared/assets/models/FlightHelmet/glTF/FlightHelmet.gltf';
import { useGLTF } from '@react-three/drei';

export const HelmetEl = () => {
  const { scene: helmeScene } = useGLTF(helmetModel);
  return (
    <group position={[-1, 0, 0]}>
      <primitive object={helmeScene} scale={3} />
    </group>
  );
};

export default HelmetEl;
