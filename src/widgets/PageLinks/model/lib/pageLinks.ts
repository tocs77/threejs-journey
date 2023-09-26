import type { PageLink } from '../types/PageLink';
import { getRoutePg1, getRoutePg2 } from '@/app/providers/router/lib/routes';

import Pg1Img from '@/shared/assets/images/01img.png';
import Pg2Img from '@/shared/assets/images/02img.png';

export const pageLinks: PageLink[] = [
  { image: Pg1Img, to: getRoutePg1(), title: 'init fiber' },
  { image: Pg2Img, to: getRoutePg2(), title: 'Basic positioning' },
];
