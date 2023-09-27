import type { PageLink } from '../types/PageLink';
import { getRoutePg1, getRoutePg2, getRoutePg3, getRoutePg4 } from '@/app/providers/router/lib/routes';

import Pg1Img from '@/shared/assets/images/01img.png';
import Pg2Img from '@/shared/assets/images/02img.png';
import Pg3Img from '@/shared/assets/images/03img.png';
import Pg4Img from '@/shared/assets/images/04img.png';
import NoImage from '@/shared/assets/images/no-image.png';

export const pageLinks: PageLink[] = [
  { image: Pg1Img, to: getRoutePg1(), title: 'init fiber' },
  { image: Pg2Img, to: getRoutePg2(), title: 'Basic positioning' },
  { image: Pg3Img, to: getRoutePg3(), title: 'Basic animation' },
  { image: Pg4Img, to: getRoutePg4(), title: 'Basic camera' },
];