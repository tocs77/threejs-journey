import type { PageLink } from '../types/PageLink';
import {
  getRoutePg1,
  getRoutePg10,
  getRoutePg2,
  getRoutePg3,
  getRoutePg4,
  getRoutePg5,
  getRoutePg6,
  getRoutePg7,
  getRoutePg8,
  getRoutePg9,
  getRoutePg11,
  getRoutePg12,
  getRoutePg13,
  getRoutePg14,
  getRoutePg15,
  getRoutePg16,
  getRoutePg17,
  getRoutePg18,
  getRoutePg19,
  getRoutePg20,
  getRoutePg21,
  getRoutePg22,
  getRoutePg23,
  getRoutePg24,
  getRoutePg25,
} from '@/app/providers/router/lib/routes';

import Pg1Img from '@/shared/assets/images/01img.png';
import Pg2Img from '@/shared/assets/images/02img.png';
import Pg3Img from '@/shared/assets/images/03img.png';
import Pg4Img from '@/shared/assets/images/04img.png';
import Pg5Img from '@/shared/assets/images/05img.png';
import Pg6Img from '@/shared/assets/images/06img.png';
import Pg7Img from '@/shared/assets/images/07img.png';
import Pg8Img from '@/shared/assets/images/08img.png';
import Pg9Img from '@/shared/assets/images/09img.png';
import Pg10Img from '@/shared/assets/images/10img.png';
import Pg11Img from '@/shared/assets/images/11img.png';
import Pg12Img from '@/shared/assets/images/12img.png';
import Pg13Img from '@/shared/assets/images/13img.png';
import Pg14Img from '@/shared/assets/images/14img.png';
import Pg15Img from '@/shared/assets/images/15img.png';
import Pg16Img from '@/shared/assets/images/16img.png';
import Pg17Img from '@/shared/assets/images/17img.png';
import Pg18Img from '@/shared/assets/images/18img.png';
import Pg19Img from '@/shared/assets/images/19img.png';
import Pg20Img from '@/shared/assets/images/20img.png';
import Pg21Img from '@/shared/assets/images/21img.png';
import Pg22Img from '@/shared/assets/images/22img.png';
import Pg23Img from '@/shared/assets/images/23img.png';
import Pg24Img from '@/shared/assets/images/24img.png';
import Pg25Img from '@/shared/assets/images/25img.png';
import NoImage from '@/shared/assets/images/no-image.png';

export const pageLinks: PageLink[] = [
  { image: Pg1Img, to: getRoutePg1(), title: 'init fiber' },
  { image: Pg2Img, to: getRoutePg2(), title: 'Basic positioning' },
  { image: Pg3Img, to: getRoutePg3(), title: 'Basic animation' },
  { image: Pg4Img, to: getRoutePg4(), title: 'Basic camera' },
  { image: Pg5Img, to: getRoutePg5(), title: 'Basic geometry' },
  { image: Pg6Img, to: getRoutePg6(), title: 'Debug GUI' },
  { image: Pg7Img, to: getRoutePg7(), title: 'Textures' },
  { image: Pg8Img, to: getRoutePg8(), title: 'Materials' },
  { image: Pg9Img, to: getRoutePg9(), title: 'Text geometry' },
  { image: Pg10Img, to: getRoutePg10(), title: 'Lightning' },
  { image: Pg11Img, to: getRoutePg11(), title: 'Shadows' },
  { image: Pg12Img, to: getRoutePg12(), title: 'Haunted House' },
  { image: Pg13Img, to: getRoutePg13(), title: 'Particles' },
  { image: Pg14Img, to: getRoutePg14(), title: 'Galaxy generator' },
  { image: Pg15Img, to: getRoutePg15(), title: 'Raycaster' },
  { image: Pg16Img, to: getRoutePg16(), title: 'Parallax scrolling' },
  { image: Pg17Img, to: getRoutePg17(), title: 'Physics' },
  { image: Pg18Img, to: getRoutePg18(), title: 'Models' },
  { image: Pg19Img, to: getRoutePg19(), title: 'Blender Model' },
  { image: Pg20Img, to: getRoutePg20(), title: 'Render options' },
  { image: Pg21Img, to: getRoutePg21(), title: 'Complex scene' },
  { image: Pg22Img, to: getRoutePg22(), title: 'Shaders' },
  { image: Pg23Img, to: getRoutePg23(), title: 'Shader patterns' },
  { image: Pg24Img, to: getRoutePg24(), title: 'The Sea Shader' },
  { image: Pg25Img, to: getRoutePg25(), title: 'Shader Galaxy' },
];
