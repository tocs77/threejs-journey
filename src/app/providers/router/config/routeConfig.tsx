import { RouteProps } from 'react-router-dom';
import { Page1 } from '@/pages/pg-01';
import { Page2 } from '@/pages/Page2';
import { Page3 } from '@/pages/Page03';
import { Page4 } from '@/pages/Page04';
import { Page5 } from '@/pages/Page05';
import { MainPage } from '@/pages/MainPage';

import { AppRoutes, getRouteMain, getRoutePg1, getRoutePg2, getRoutePg3, getRoutePg4, getRoutePg5 } from '../lib/routes';

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
};
