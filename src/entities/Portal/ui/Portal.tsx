import { useEffect, useRef, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { Color, IUniform, MeshBasicMaterial, ShaderMaterial, Texture } from 'three';

import portalModel from '@/shared/assets/models/portal/portal.glb';
import portalTexture from '@/shared/assets/models/portal/portal.jpg';
import { isMesh } from '@/shared/lib/utils';
import { useControls } from '@/shared/hooks/useControls';

import vertexShader from '../shader/portalVertex.glsl';
import fragmentShader from '../shader/portalFragment.glsl';
import { controls } from './portalControls';

interface PortalUniform extends Record<string, IUniform> {
  uTime: { value: number };
  uColorStart: { value: Color };
  uColorEnd: { value: Color };
}

export const Portal = (props: GroupProps) => {
  const portalMaterialRef = useRef<ShaderMaterial>();
  const { position = [-1, 0, 0], ...other } = props;
  const { scene: portalScene } = useGLTF(portalModel);
  const controlValues = useControls(controls);
  const [uniforms, setUniforms] = useState<PortalUniform>({
    uTime: { value: 0 },
    uColorStart: { value: new Color(controlValues.pStartColor) },
    uColorEnd: { value: new Color(controlValues.pEndColor) },
  });

  const colorMap = useTexture(portalTexture, (t) => {
    (t as Texture).flipY = false;
  }) as Texture;

  useFrame((_, delta) => {
    if (!portalMaterialRef.current) return;
    const newUniforms = {
      ...uniforms,
    };
    newUniforms.uColorStart.value = new Color(controlValues.pStartColor);
    newUniforms.uColorEnd.value = new Color(controlValues.pEndColor);
    newUniforms.uTime.value += delta;
    setUniforms(newUniforms);
    portalMaterialRef.current.uniforms = newUniforms;
  });

  useEffect(() => {
    const material = new MeshBasicMaterial({ map: colorMap });
    const poleLightMaterial = new MeshBasicMaterial({ color: '#ffffe5' });
    const portalLightMaterial = new ShaderMaterial({ vertexShader, fragmentShader });
    portalLightMaterial.uniforms = uniforms;
    portalMaterialRef.current = portalLightMaterial;

    portalScene.traverse((s) => {
      if (!isMesh(s)) return;
      if (s.name === 'poleLightA' || s.name === 'poleLightB') {
        s.material = poleLightMaterial;
        return;
      }
      if (s.name === 'portalLight') {
        s.material = portalLightMaterial;
        return;
      }
      s.material = material;
    });
  }, []);

  useEffect(() => {
    portalScene.traverse((s) => {
      if (!isMesh(s)) return;
      s.castShadow = Boolean(props.castShadow);
      s.receiveShadow = Boolean(props.receiveShadow);
    });
  }, [props.castShadow, props.receiveShadow]);

  return (
    <group position={position} {...other}>
      <primitive object={portalScene} map={colorMap} />
    </group>
  );
};
