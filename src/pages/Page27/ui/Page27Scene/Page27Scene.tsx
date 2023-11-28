import { Color, Vector2, Vector3 } from 'three';
import { useEffect, useMemo, useRef } from 'react';
import { Bloom, EffectComposer, Noise, Vignette, DotScreen, Glitch } from '@react-three/postprocessing';
import { GlitchEffect, GlitchMode } from 'postprocessing';

import { GraffityBox } from '@/entities/Enviroments';
import { DamagedHelemt } from '@/entities/DamagedHelmet';
import { useControls } from '@/shared/hooks/useControls';
import { TriLensEffect, RGBShiftEffect, TintEffect, DisplacementEffect, TextureEffect } from '@/entities/Effects';

import { controls } from './scene27Controls';

export const Page27Scene = () => {
  const controlValues = useControls(controls);
  const glitchRef = useRef<GlitchEffect | null>(null);

  const processes: JSX.Element[] = [];
  if (controlValues.dot) {
    processes.push(<DotScreen key='dot' angle={1} />);
  }

  if (controlValues.triLens) {
    processes.push(<TriLensEffect key='triLens' />);
  }

  if (controlValues.rgbShift) {
    processes.push(<RGBShiftEffect key='rgb' />);
  }
  if (controlValues.tint) {
    processes.push(<TintEffect key='tint' tint={new Color(controlValues.tintColor)} />);
  }

  if (controlValues.bloom) {
    processes.push(<Bloom luminanceThreshold={0} luminanceSmoothing={0.2} height={300} radius={1} key='bloom' />);
  }

  if (controlValues.displacement) {
    processes.push(
      <DisplacementEffect
        key='displacement'
        position={new Vector3(controlValues.displacementX, controlValues.displacementY, controlValues.displacementZ)}
      />,
    );
  }

  if (controlValues.texture) {
    processes.push(
      <TextureEffect
        key='texture'
        position={new Vector3(controlValues.displacementX, controlValues.displacementY, controlValues.displacementZ)}
      />,
    );
  }

  useEffect(() => {
    if (glitchRef.current) glitchRef.current.mode = controlValues.glitch ? GlitchMode.SPORADIC : GlitchMode.DISABLED;
  }, [controlValues]);

  const effects = useMemo(() => {
    const effects: JSX.Element[] = [];
    effects.push(
      <Glitch
        ref={glitchRef}
        key='glitch'
        delay={new Vector2(0.5, 0.5)}
        duration={new Vector2(0.1, 0.1)}
        strength={new Vector2(0.1, 0.1)}
        active={controlValues.glitch}
      />,
    );
    return effects;
  }, []);

  const isEffectEnabled = useMemo(() => {
    for (const key of Object.keys(controlValues)) {
      if (controlValues[key]) return true;
    }
    return false;
  }, [controlValues]);

  return (
    <>
      <GraffityBox />
      <DamagedHelemt scale={0.5} rotation-y={Math.PI * 0.5} castShadow receiveShadow />
      <directionalLight castShadow position={[-0.25, 3, -2.25]} shadow-normalBias={0.05} intensity={3} />

      <EffectComposer enabled={isEffectEnabled} renderPriority={2}>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}

        <>
          {processes}
          {effects}
        </>
        {/* 
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
    </>
  );
};
