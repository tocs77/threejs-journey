import { memo } from 'react';

interface GravesProps {
  amount?: number;
  innerRadius: number;
  outerRadius: number;
  shadows?: boolean;
}

const GravesEl = (props: GravesProps) => {
  const { amount = 5, innerRadius, outerRadius, shadows = false } = props;

  const dist = outerRadius - innerRadius;

  const graveGeometry = <boxGeometry args={[0.6, 0.8, 0.2]} />;
  const graveMaterial = <meshStandardMaterial color='#b2b6b1' />;
  const graves: JSX.Element[] = [];
  for (let i = 0; i < amount; i++) {
    const angle = Math.random() * Math.PI * 2; // Random angle
    const radius = innerRadius + Math.random() * dist; // Random radius
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const grave = (
      <mesh
        position={[x, 0.3, z]}
        key={i}
        rotation-y={(Math.random() - 0.5) * 0.5}
        rotation-z={(Math.random() - 0.5) * 0.5}
        castShadow={shadows}>
        {graveGeometry}
        {graveMaterial}
      </mesh>
    );
    graves.push(grave);
  }

  return <group>{graves}</group>;
};

export const Graves = memo(GravesEl);
