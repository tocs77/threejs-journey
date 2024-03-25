import { useControls } from '@/shared/hooks/useControls';
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, SSR, Vignette } from '@react-three/postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';
import { Perf } from 'r3f-perf';
import { Vector2 } from 'three';
import { controls } from './scene37Controls';
import { DrunkEffect } from '@/entities/Effects';

export const Page37Scene = () => {
  const controlValues = useControls(controls);
  return (
    <>
      <Perf position='bottom-left' />
      <EffectComposer>
        {/* <Vignette offset={0.3} darkness={0.9} blendFunction={BlendFunction.NORMAL} /> */}
        {/* <Glitch
          delay={new Vector2(0.5, 1)}
          duration={new Vector2(0.1, 0.3)}
          strength={new Vector2(0.2, 0.4)}
          mode={GlitchMode.SPORADIC}
        /> */}
        {/* <Noise blendFunction={BlendFunction.SOFT_LIGHT} premultiply/> */}
        {/* <Bloom mipmapBlur /> */}
        {/* <DepthOfField focusDistance={0.02} focalLength={0.025} bokehScale={6} /> */}
        {/* <SSR /> */}
        <DrunkEffect frequency={15} amplitude={0.1} />
      </EffectComposer>
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>
      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color={'mediumpurple'} toneMapped={false} />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' roughness={0} metalness={0} />
      </mesh>
    </>
  );
};
