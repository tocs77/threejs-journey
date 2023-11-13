import baseVertexShader from '../../shaders/basicVertex.glsl';
import baseFragmentShader from '../../shaders/basicFragment.glsl';
import gradientFragmentShader from '../../shaders/gradientFragment.glsl';
import bwGradientFragmentShader from '../../shaders/bwGradientFragment.glsl';
import gridFragmentShader from '../../shaders/gridFragment.glsl';
import zebraFragmentShader from '../../shaders/zebraFragment.glsl';
import plusFragmentShader from '../../shaders/plusFragment.glsl';
import stepGradientFragmentShader from '../../shaders/stepGradientFragment.glsl';
import noiseFragmentShader from '../../shaders/noiseFragmemt.glsl';
import randomSquaresFragmentShader from '../../shaders/randomSquares.glsl';
import startFragmentShader from '../../shaders/starFragment.glsl';
import wavesFragmentShader from '../../shaders/wavesFragment.glsl';
import wavedCircleFragmentShader from '../../shaders/wavedCircleFragment.glsl';
import camoFragmentShader from '../../shaders/camoFragment.glsl';
import perlinLinesFragmentShader from '../../shaders/perlinLinesFragment.glsl';
import coloredPerlinFragmentShader from '../../shaders/coloredPerlinFragment.glsl';
import { DoubleSide } from 'three';
import { useControls } from '@/shared/hooks/useControls';
import { controls } from './scene23Controls';

export type Shaders =
  | 'basic'
  | 'gradient'
  | 'bwGradient'
  | 'zebra'
  | 'grid'
  | 'plus'
  | 'stepGradient'
  | 'noise'
  | 'randomSquares'
  | 'star'
  | 'waves'
  | 'wavedCircle'
  | 'camo'
  | 'perlinLines'
  | 'coloredPerlin';

export const Scene23 = () => {
  const controlValues = useControls(controls);
  const shaderType = controlValues.shader as Shaders;

  let fragmentShader = '';
  switch (shaderType) {
    case 'basic':
      fragmentShader = baseFragmentShader;
      break;
    case 'gradient':
      fragmentShader = gradientFragmentShader;
    case 'bwGradient':
      fragmentShader = bwGradientFragmentShader;
      break;
    case 'zebra':
      fragmentShader = zebraFragmentShader;
      break;
    case 'grid':
      fragmentShader = gridFragmentShader;
      break;
    case 'plus':
      fragmentShader = plusFragmentShader;
      break;
    case 'stepGradient':
      fragmentShader = stepGradientFragmentShader;
      break;
    case 'noise':
      fragmentShader = noiseFragmentShader;
      break;
    case 'randomSquares':
      fragmentShader = randomSquaresFragmentShader;
      break;
    case 'star':
      fragmentShader = startFragmentShader;
      break;
    case 'waves':
      fragmentShader = wavesFragmentShader;
      break;
    case 'wavedCircle':
      fragmentShader = wavedCircleFragmentShader;
      break;
    case 'camo':
      fragmentShader = camoFragmentShader;
      break;
    case 'perlinLines':
      fragmentShader = perlinLinesFragmentShader;
      break;
    case 'coloredPerlin':
      fragmentShader = coloredPerlinFragmentShader;
      break;
    default:
      break;
  }

  if (!fragmentShader || !baseVertexShader) return null;

  const plane = (
    <mesh key={shaderType}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={baseVertexShader} side={DoubleSide} />
    </mesh>
  );
  return plane;
};
