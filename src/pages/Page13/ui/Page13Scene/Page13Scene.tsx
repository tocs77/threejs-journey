import { useRef } from 'react';
import { Points, Texture } from 'three';

import { RandomGeometry } from '@/entities/RandomGeometry';
import { useRotation } from '@/shared/hooks';
import { useControls } from '@/shared/hooks/useControls';
import textureImg1 from '@/shared/assets/textures/particles/1.png';
import textureImg2 from '@/shared/assets/textures/particles/2.png';
import textureImg3 from '@/shared/assets/textures/particles/3.png';
import textureImg4 from '@/shared/assets/textures/particles/4.png';
import textureImg5 from '@/shared/assets/textures/particles/5.png';
import textureImg6 from '@/shared/assets/textures/particles/6.png';
import textureImg7 from '@/shared/assets/textures/particles/7.png';
import textureImg8 from '@/shared/assets/textures/particles/8.png';
import textureImg9 from '@/shared/assets/textures/particles/9.png';
import textureImg10 from '@/shared/assets/textures/particles/10.png';
import textureImg11 from '@/shared/assets/textures/particles/11.png';
import textureImg12 from '@/shared/assets/textures/particles/12.png';
import textureImg13 from '@/shared/assets/textures/particles/13.png';

import { controls } from './Scene13Controls';
import { useTexture } from '@react-three/drei';

export const Page13Scene = () => {
  const particlesRef = useRef<Points | null>(null);
  useRotation({ meshRef: particlesRef, periodZ: 20 });
  const controlValues = useControls(controls);

  const colorMap1 = useTexture(textureImg1) as Texture;
  const colorMap2 = useTexture(textureImg2) as Texture;
  const colorMap3 = useTexture(textureImg3) as Texture;
  const colorMap4 = useTexture(textureImg4) as Texture;
  const colorMap5 = useTexture(textureImg5) as Texture;
  const colorMap6 = useTexture(textureImg6) as Texture;
  const colorMap7 = useTexture(textureImg7) as Texture;
  const colorMap8 = useTexture(textureImg8) as Texture;
  const colorMap9 = useTexture(textureImg9) as Texture;
  const colorMap10 = useTexture(textureImg10) as Texture;
  const colorMap11 = useTexture(textureImg11) as Texture;
  const colorMap12 = useTexture(textureImg12) as Texture;
  const colorMap13 = useTexture(textureImg13) as Texture;

  let texture: Texture = colorMap1;
  switch (controlValues.pTexture) {
    case '1':
      texture = colorMap1;
      break;
    case '2':
      texture = colorMap2;
      break;
    case '3':
      texture = colorMap3;
      break;
    case '4':
      texture = colorMap4;
      break;
    case '5':
      texture = colorMap5;
      break;
    case '6':
      texture = colorMap6;
      break;
    case '7':
      texture = colorMap7;
      break;
    case '8':
      texture = colorMap8;
      break;
    case '9':
      texture = colorMap9;
      break;
    case '10':
      texture = colorMap10;
      break;
    case '11':
      texture = colorMap11;
      break;
    case '12':
      texture = colorMap12;
      break;
    case '13':
      texture = colorMap13;
      break;

    default:
      break;
  }

  const particlesGeometry = <RandomGeometry amount={controlValues.pAmount} radius={4} addColors={true} />;
  const partilcesMaterial = (
    <pointsMaterial
      size={0.05}
      sizeAttenuation={true}
      alphaMap={texture}
      transparent
      alphaTest={0.01}
      depthWrite={false}
      vertexColors={controlValues.pRandomColors}
      color={controlValues.pColor}
    />
  );

  const particles = (
    <points ref={particlesRef}>
      {particlesGeometry}
      {partilcesMaterial}
    </points>
  );
  return particles;
};
