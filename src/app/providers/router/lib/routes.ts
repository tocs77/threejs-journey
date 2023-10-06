export enum AppRoutes {
  PG1 = 'pg1',
  PG2 = 'pg2',
  PG3 = 'pg3',
  PG4 = 'pg4',
  PG5 = 'pg5',
  PG6 = 'pg6',
  PG7 = 'pg7',
  PG8 = 'pg8',
  PG9 = 'pg9',
  PG10 = 'pg10',
  MAIN = 'main',
}

export const getRoutePg1 = () => '/pg1';
export const getRoutePg2 = () => '/pg2';
export const getRoutePg3 = () => '/pg3';
export const getRoutePg4 = () => '/pg4';
export const getRoutePg5 = () => '/pg5';
export const getRoutePg6 = () => '/pg6';
export const getRoutePg7 = () => '/pg7';
export const getRoutePg8 = () => '/pg8';
export const getRoutePg9 = () => '/pg9';
export const getRoutePg10 = () => '/pg10';
export const getRouteMain = () => '/';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRoutePg1()]: AppRoutes.PG1,
  [getRoutePg2()]: AppRoutes.PG2,
  [getRoutePg3()]: AppRoutes.PG3,
  [getRoutePg5()]: AppRoutes.PG5,
  [getRoutePg6()]: AppRoutes.PG6,
  [getRoutePg7()]: AppRoutes.PG7,
  [getRoutePg8()]: AppRoutes.PG8,
  [getRoutePg9()]: AppRoutes.PG9,
  [getRoutePg10()]: AppRoutes.PG10,
};
