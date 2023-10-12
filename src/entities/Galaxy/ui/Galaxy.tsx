import { useEffect, useRef, useState } from 'react';
import { AdditiveBlending, BufferGeometry, Color, Material, Points } from 'three';

import { useControls } from '@/shared/hooks/useControls';

import { controls } from './galaxyControls';

interface GalaxyProps {
  count?: number;
}

const MAX_AMOUNT = 100000;

export const Galaxy = (props: GalaxyProps) => {
  const { count } = props;
  const controlValues = useControls(controls);
  const [vertices, setVertices] = useState<Float32Array>();
  const [colors, setColors] = useState<Float32Array>();
  const [amount, setAmount] = useState(count || controlValues.gCount);
  const particlesRef = useRef<Points | null>(null);

  useEffect(() => {
    generateVerices();
  }, [amount, controlValues]);

  useEffect(() => {
    if (count) return;

    setAmount(controlValues.gCount);
    if (!particlesRef.current) return;
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.color.needsUpdate = true;
  }, [controlValues]);

  useEffect(() => {
    if (!particlesRef.current) return;
    (particlesRef.current.material as Material).needsUpdate = true;
  }, [controlValues.gSizeAttenuation]);

  const generateVerices = () => {
    if (!amount) return;
    const angle = (Math.PI * 2) / controlValues.gBranches;
    const newVertices = new Float32Array(MAX_AMOUNT * 3);
    const newColors = new Float32Array(MAX_AMOUNT * 3);

    const colorInside = new Color(controlValues.gInnerColor);
    const colorOutside = new Color(controlValues.gOuterColor);

    for (let i = 0; i < amount; i++) {
      const r = (Math.abs(gaussianRandom(0, 0.5)) * controlValues.gRadius) / 2;
      const spinAngle = r * controlValues.gSpin;
      const branchAngle = angle * (i % controlValues.gBranches);

      const stdev = ((r * controlValues.gRadius) / 30) * controlValues.gRandomness;
      const randomX = gaussianRandom(0, stdev);
      const randomY = gaussianRandom(0, stdev);
      const randomZ = gaussianRandom(0, stdev);

      newVertices[i * 3] = r * Math.cos(branchAngle + spinAngle) + randomX;
      newVertices[i * 3 + 1] = randomY;
      newVertices[i * 3 + 2] = r * Math.sin(branchAngle + spinAngle) + randomZ;

      //color
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, r / controlValues.gRadius);
      newColors[i * 3] = mixedColor.r;
      newColors[i * 3 + 1] = mixedColor.g;
      newColors[i * 3 + 2] = mixedColor.b;
    }

    setVertices(newVertices);
    setColors(newColors);
  };

  const gaussianRandom = (mean = 0, stdev = 1) => {
    const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
  };

  if (!amount) return null;

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach='geometry'>
        <bufferAttribute attach='attributes-position' array={vertices} itemSize={3} count={amount} />
        <bufferAttribute attach='attributes-color' array={colors} itemSize={3} count={amount} />
      </bufferGeometry>
      <pointsMaterial
        size={controlValues.gStarSize}
        sizeAttenuation={controlValues.gSizeAttenuation}
        depthWrite={false}
        blending={AdditiveBlending}
        vertexColors={true}
      />
    </points>
  );
};
