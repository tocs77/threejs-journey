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
];
