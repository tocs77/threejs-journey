import { Material, Mesh, MeshStandardMaterial, Object3D } from 'three';

export const isMesh = (obj: Object3D): obj is Mesh => {
  return obj.type === 'Mesh';
};

export const isStandardMAterial = (obj: Material): obj is MeshStandardMaterial => {
  return obj.type === 'MeshStandardMaterial';
};
