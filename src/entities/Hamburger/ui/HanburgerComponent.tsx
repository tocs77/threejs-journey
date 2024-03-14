import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

import hamburgerModel from '@/shared/assets/models/hamburger/hamburger.glb';
import { GroupProps } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Cube: Mesh;
    Cube001: Mesh;
    Plane: Mesh;
    Cube002: Mesh;
  };
  materials: {
    bunMaterial: MeshStandardMaterial;
    meatMaterial: MeshStandardMaterial;
    cheeseMaterial: MeshStandardMaterial;
  };
};

export function HamburgerComponent(props: GroupProps) {
  const { nodes, materials } = useGLTF(hamburgerModel) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow={props.castShadow}
        receiveShadow={props.receiveShadow}
        geometry={nodes.Cube.geometry}
        material={materials.bunMaterial}
      />
      <mesh
        castShadow={props.castShadow}
        receiveShadow={props.receiveShadow}
        geometry={nodes.Cube001.geometry}
        material={materials.meatMaterial}
        position={[0, 1.269, 0]}
        scale={0.974}
      />
      <mesh
        castShadow={props.castShadow}
        receiveShadow={props.receiveShadow}
        geometry={nodes.Plane.geometry}
        material={materials.cheeseMaterial}
        position={[0, 3.041, 0]}
      />
      <mesh
        castShadow={props.castShadow}
        receiveShadow={props.receiveShadow}
        geometry={nodes.Cube002.geometry}
        material={materials.bunMaterial}
        position={[0, 4.87, 0]}
        rotation={[3.12, 0, 0]}
      />
    </group>
  );
}
