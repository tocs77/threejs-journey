import { LeePerry } from '@/entities/LeePerry';
import { StreetBox } from '@/entities/Enviroments';
export const Page26Scene = () => {
  return (
    <>
      <StreetBox />
      <LeePerry scale={0.2} castShadow receiveShadow rotation-y={Math.PI * 0.5} />
      <directionalLight position={[0.25, 2, -2.25]} castShadow intensity={3} />
    </>
  );
};
