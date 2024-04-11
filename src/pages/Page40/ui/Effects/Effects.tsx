import { DepthOfField, EffectComposer, SSR } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <>
      <EffectComposer enableNormalPass={false}>
        {/* <SSR
        
          intensity={0.45}
          maxRoughness={1}
          thickness={10}
          ior={0.45}
          maxDepthDifference={10}
          blurKernelSize={1}
          jitter={0.75}
          jitterRough={0.2}
          maxSamples={10}
        /> */}
        <DepthOfField focusDistance={0.01} focalLength={0.2} bokehScale={3} />
      </EffectComposer>
    </>
  );
};
