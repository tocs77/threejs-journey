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
  PG11 = 'pg11',
  PG12 = 'pg12',
  PG13 = 'pg13',
  PG14 = 'pg14',
  PG15 = 'pg15',
  PG16 = 'pg16',
  PG17 = 'pg17',
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
export const getRoutePg11 = () => '/pg11';
export const getRoutePg12 = () => '/pg12';
export const getRoutePg13 = () => '/pg13';
export const getRoutePg14 = () => '/pg14';
export const getRoutePg15 = () => '/pg15';
export const getRoutePg16 = () => '/pg16';
export const getRoutePg17 = () => '/pg17';
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
  [getRoutePg11()]: AppRoutes.PG11,
  [getRoutePg12()]: AppRoutes.PG12,
  [getRoutePg13()]: AppRoutes.PG13,
  [getRoutePg14()]: AppRoutes.PG14,
  [getRoutePg15()]: AppRoutes.PG15,
  [getRoutePg16()]: AppRoutes.PG16,
  [getRoutePg17()]: AppRoutes.PG17,
};
