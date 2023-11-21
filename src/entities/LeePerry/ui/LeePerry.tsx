import { useCallback, useEffect, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { IUniform, Mesh, MeshDepthMaterial, MeshStandardMaterial, RGBADepthPacking, Shader, Texture } from 'three';

import leePerryModel from '@/shared/assets/models/LeePerrySmith/LeePerrySmith.glb';
import colorTexture from '@/shared/assets/models/LeePerrySmith/color.jpg';
import normalTexture from '@/shared/assets/models/LeePerrySmith/normal.jpg';
import { isMesh } from '@/shared/lib/utils';

import vertexShader from '../shaders/leePerryVertex.glsl';
import utilsShader from '../shaders/utils.glsl';
import angleCalcShader from '../shaders/angleCalc.glsl';
import normalShader from '../shaders/normal.glsl';

interface LeePerryUniform extends Record<string, IUniform> {
  u_Time: { value: number };
}

export const LeePerry = (props: GroupProps) => {
  const { position = [-1, 0, 0], ...other } = props;
  const { scene: leePerryScene } = useGLTF(leePerryModel);
  const [uniforms, setUniforms] = useState<LeePerryUniform>({ u_Time: { value: 0 } });

  const colorMap = useTexture(colorTexture) as Texture;
  const normalMap = useTexture(normalTexture) as Texture;

  const addShaders = useCallback((shader: Shader) => {
    shader.uniforms = { ...shader.uniforms, ...uniforms };
    shader.vertexShader = shader.vertexShader.replace('#include <common>', utilsShader);
    shader.vertexShader = shader.vertexShader.replace('#include <uv_vertex>', angleCalcShader);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', vertexShader);
  }, []);
  const addNormalShader = useCallback((shader: Shader) => {
    shader.vertexShader = shader.vertexShader.replace('#include <beginnormal_vertex>', normalShader);
  }, []);

  const addShaderAndNormal = useCallback((shader: Shader) => {
    addShaders(shader);
    addNormalShader(shader);
  }, []);

  useEffect(() => {
    leePerryScene.traverse((s) => {
      if (!isMesh(s)) return;
      s.castShadow = Boolean(props.castShadow);
      s.receiveShadow = Boolean(props.receiveShadow);
    });
  }, [props.castShadow, props.receiveShadow]);

  useFrame((_, delta) => {
    const newUniforms = { ...uniforms };
    newUniforms.u_Time.value += delta;
    setUniforms(newUniforms);
  });

  useEffect(() => {
    if (!leePerryScene) return;
    const mesh = leePerryScene.children[0] as Mesh;
    const material = mesh.material as MeshStandardMaterial;
    material.map = colorMap;
    material.normalMap = normalMap;
    material.onBeforeCompile = addShaderAndNormal;

    addDepthMaterial(mesh);
  }, [leePerryScene]);

  const addDepthMaterial = (mesh: Mesh) => {
    const depthMaterial = new MeshDepthMaterial({ depthPacking: RGBADepthPacking });
    depthMaterial.onBeforeCompile = addShaders;
    mesh.customDepthMaterial = depthMaterial;
  };

  const plane = (
    <mesh rotation-y={Math.PI / 2} position={[-9, -7, 5]} receiveShadow>
      <planeGeometry args={[25, 25, 15]} />
      <meshStandardMaterial color='#fff' />
    </mesh>
  );

  return (
    <group position={position} {...other}>
      <primitive object={leePerryScene} />
      {plane}
    </group>
  );
};
