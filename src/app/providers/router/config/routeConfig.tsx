import { RouteProps } from 'react-router-dom';
import { Page1 } from '@/pages/pg-01';
import { Page2 } from '@/pages/Page2';
import { Page3 } from '@/pages/Page03';
import { Page4 } from '@/pages/Page04';
import { Page5 } from '@/pages/Page05';
import { Page6 } from '@/pages/Page06';
import { Page7 } from '@/pages/Page07';
import { Page8 } from '@/pages/Page08';
import { Page9 } from '@/pages/Page09';
import { Page10 } from '@/pages/Page10';
import { Page11 } from '@/pages/Page11';
import { Page12 } from '@/pages/Page12';
import { Page13 } from '@/pages/Page13';
import { Page14 } from '@/pages/Page14';
import { Page15 } from '@/pages/Page15';
import { Page16 } from '@/pages/Page16';
import { Page17 } from '@/pages/Page17';
import { Page18 } from '@/pages/Page18';
import { Page19 } from '@/pages/Page19';
import { Page20 } from '@/pages/Page20';
import { Page21 } from '@/pages/Page21';
import { MainPage } from '@/pages/MainPage';

import {
  AppRoutes,
  getRouteMain,
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
} from '../lib/routes';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.PG1]: {
    path: getRoutePg1(),
    element: <Page1 />,
  },
  [AppRoutes.PG2]: {
    path: getRoutePg2(),
    element: <Page2 />,
  },
  [AppRoutes.PG3]: {
    path: getRoutePg3(),
    element: <Page3 />,
  },
  [AppRoutes.PG4]: {
    path: getRoutePg4(),
    element: <Page4 />,
  },
  [AppRoutes.PG5]: {
    path: getRoutePg5(),
    element: <Page5 />,
  },
  [AppRoutes.PG6]: {
    path: getRoutePg6(),
    element: <Page6 />,
  },
  [AppRoutes.PG7]: {
    path: getRoutePg7(),
    element: <Page7 />,
  },
  [AppRoutes.PG8]: {
    path: getRoutePg8(),
    element: <Page8 />,
  },
  [AppRoutes.PG9]: {
    path: getRoutePg9(),
    element: <Page9 />,
  },
  [AppRoutes.PG10]: {
    path: getRoutePg10(),
    element: <Page10 />,
  },
  [AppRoutes.PG11]: {
    path: getRoutePg11(),
    element: <Page11 />,
  },
  [AppRoutes.PG12]: {
    path: getRoutePg12(),
    element: <Page12 />,
  },
  [AppRoutes.PG13]: {
    path: getRoutePg13(),
    element: <Page13 />,
  },
  [AppRoutes.PG14]: {
    path: getRoutePg14(),
    element: <Page14 />,
  },
  [AppRoutes.PG15]: {
    path: getRoutePg15(),
    element: <Page15 />,
  },
  [AppRoutes.PG16]: {
    path: getRoutePg16(),
    element: <Page16 />,
  },
  [AppRoutes.PG17]: {
    path: getRoutePg17(),
    element: <Page17 />,
  },
  [AppRoutes.PG18]: {
    path: getRoutePg18(),
    element: <Page18 />,
  },
  [AppRoutes.PG19]: {
    path: getRoutePg19(),
    element: <Page19 />,
  },
  [AppRoutes.PG20]: {
    path: getRoutePg20(),
    element: <Page20 />,
  },
  [AppRoutes.PG21]: {
    path: getRoutePg21(),
    element: <Page21 />,
  },
};
