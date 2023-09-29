export enum AppRoutes {
  PG1 = 'pg1',
  PG2 = 'pg2',
  PG3 = 'pg3',
  PG4 = 'pg4',
  PG5 = 'pg5',
  MAIN = 'main',
}

export const getRoutePg1 = () => '/pg1';
export const getRoutePg2 = () => '/pg2';
export const getRoutePg3 = () => '/pg3';
export const getRoutePg4 = () => '/pg4';
export const getRoutePg5 = () => '/pg5';
export const getRouteMain = () => '/';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRoutePg1()]: AppRoutes.PG1,
  [getRoutePg2()]: AppRoutes.PG2,
  [getRoutePg3()]: AppRoutes.PG3,
  [getRoutePg5()]: AppRoutes.PG5,
};
