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
import { Page22 } from '@/pages/Page22';
import { Page23 } from '@/pages/Page23';
import { Page24 } from '@/pages/Page24';
import { Page25 } from '@/pages/Page25';
import { Page26 } from '@/pages/Page26';
import { Page27 } from '@/pages/Page27';
import { Page28 } from '@/pages/Page28';
import { Page29 } from '@/pages/Page29';
import { Page30 } from '@/pages/Page30';
import { Page31 } from '@/pages/Page31';
import { Page32 } from '@/pages/Page32';
import { Page33 } from '@/pages/Page33';
import { Page34 } from '@/pages/Page34';
import { Page35 } from '@/pages/Page35';
import { Page36 } from '@/pages/Page36';
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
  getRoutePg22,
  getRoutePg23,
  getRoutePg24,
  getRoutePg25,
  getRoutePg26,
  getRoutePg27,
  getRoutePg28,
  getRoutePg29,
  getRoutePg30,
  getRoutePg31,
  getRoutePg32,
  getRoutePg33,
  getRoutePg34,
  getRoutePg35,
  getRoutePg36,
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
  [AppRoutes.PG22]: {
    path: getRoutePg22(),
    element: <Page22 />,
  },
  [AppRoutes.PG23]: {
    path: getRoutePg23(),
    element: <Page23 />,
  },
  [AppRoutes.PG24]: {
    path: getRoutePg24(),
    element: <Page24 />,
  },
  [AppRoutes.PG25]: {
    path: getRoutePg25(),
    element: <Page25 />,
  },
  [AppRoutes.PG26]: {
    path: getRoutePg26(),
    element: <Page26 />,
  },
  [AppRoutes.PG27]: {
    path: getRoutePg27(),
    element: <Page27 />,
  },
  [AppRoutes.PG28]: {
    path: getRoutePg28(),
    element: <Page28 />,
  },
  [AppRoutes.PG29]: {
    path: getRoutePg29(),
    element: <Page29 />,
  },
  [AppRoutes.PG30]: {
    path: getRoutePg30(),
    element: <Page30 />,
  },
  [AppRoutes.PG31]: {
    path: getRoutePg31(),
    element: <Page31 />,
  },
  [AppRoutes.PG32]: {
    path: getRoutePg32(),
    element: <Page32 />,
  },
  [AppRoutes.PG33]: {
    path: getRoutePg33(),
    element: <Page33 />,
  },
  [AppRoutes.PG34]: {
    path: getRoutePg34(),
    element: <Page34 />,
  },
  [AppRoutes.PG35]: {
    path: getRoutePg35(),
    element: <Page35 />,
  },
  [AppRoutes.PG36]: {
    path: getRoutePg36(),
    element: <Page36 />,
  },
};
