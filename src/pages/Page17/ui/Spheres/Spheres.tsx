import { PhysicsSphere } from '@/entities/PhysicsSphere';
import { useState, useCallback, useEffect } from 'react';

interface SpheresProps {
  amount?: number;
  radius?: number;
  height?: number;
  color?: string;
}

export const Spheres = (props: SpheresProps) => {
  const { amount = 10, radius = 0.1, height = 1, color = '#dd6511' } = props;
  const length = Math.ceil(Math.pow(amount, 1 / 3));
  const [spheres, setSpheres] = useState<JSX.Element[]>();

  useEffect(() => {
    buildSpheres();
  }, [amount]);

  const buildSpheres = useCallback(() => {
    setSpheres([]);
    const newSpheres: JSX.Element[] = [];
    const spaceRadius = radius * 2.2;
    for (let y = 0; y < length + 1; y++) {
      for (let x = 0; x < length; x++) {
        for (let z = 0; z < length; z++) {
          newSpheres.push(
            <PhysicsSphere
              key={`${x}-${y}-${z}`}
              position={[x * spaceRadius, y * spaceRadius + height, z * spaceRadius]}
              radius={radius}>
              <meshStandardMaterial color={color} />
            </PhysicsSphere>,
          );
          if (newSpheres.length === amount) {
            setSpheres(newSpheres);
            return;
          }
        }
      }
    }
  }, [amount]);

  return spheres;
};
