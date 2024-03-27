import { FieldBox } from '@/entities/Enviroments';
import { Laptop } from '@/entities/Laptop';
import { ContactShadows, Float, PresentationControls, Text } from '@react-three/drei';

export const Page38Scene = () => {
  return (
    <>
      {/* <ambientLight intensity={0.2} /> */}
      <FieldBox background={false} />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, -0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}>
        <Float rotationIntensity={0.4}>
          <Laptop position-y={-1.2} rotation-x={0.4} scale={1.3} iframe='https://nano360.mcad.ru/' />
          <Text fontSize={0.4} position={[2, 0.75, 0.75]} rotation-y={-1.25} maxWidth={2} textAlign='center'>
            Nano360 Решение для вашего бизнеса
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};
