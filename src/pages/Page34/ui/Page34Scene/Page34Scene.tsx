import { Hamburger, HamburgerComponent } from '@/entities/Hamburger';
import { Helemt } from '@/entities/Helmet';
import { Suspense } from 'react';

export const Page34Scene = () => {
  const decoy = (
    <mesh position={[2, 0, 3]}>
      <boxGeometry />
      <meshStandardMaterial color='red' />
    </mesh>
  );
  return (
    <>
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <Hamburger scale={0.35} position-y={3} castShadow />
      <Hamburger scale={0.35} position-y={0} castShadow /> */}
      <HamburgerComponent scale={0.35} castShadow/>
      <HamburgerComponent scale={0.35} position-y={3} castShadow/>
      <Suspense fallback={decoy}>
        <Helemt position={[2, 0, 3]} />
      </Suspense>

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
};
