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
};
