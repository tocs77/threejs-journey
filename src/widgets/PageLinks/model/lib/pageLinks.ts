import type { PageLink } from '../types/PageLink';
import {
  getRoutePg1,
  getRoutePg2,
  getRoutePg3,
  getRoutePg4,
  getRoutePg5,
  getRoutePg6,
  getRoutePg7,
} from '@/app/providers/router/lib/routes';

import Pg1Img from '@/shared/assets/images/01img.png';
import Pg2Img from '@/shared/assets/images/02img.png';
import Pg3Img from '@/shared/assets/images/03img.png';
import Pg4Img from '@/shared/assets/images/04img.png';
import Pg5Img from '@/shared/assets/images/05img.png';
import Pg6Img from '@/shared/assets/images/06img.png';
import NoImage from '@/shared/assets/images/no-image.png';

export const pageLinks: PageLink[] = [
  { image: Pg1Img, to: getRoutePg1(), title: 'init fiber' },
  { image: Pg2Img, to: getRoutePg2(), title: 'Basic positioning' },
  { image: Pg3Img, to: getRoutePg3(), title: 'Basic animation' },
  { image: Pg4Img, to: getRoutePg4(), title: 'Basic camera' },
  { image: Pg5Img, to: getRoutePg5(), title: 'Basic geometry' },
  { image: Pg6Img, to: getRoutePg6(), title: 'Debug GUI' },
  { image: NoImage, to: getRoutePg7(), title: 'Textures' },
];
