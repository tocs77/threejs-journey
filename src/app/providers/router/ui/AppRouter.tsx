import { Suspense, memo, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routeConfig } from '@/app/providers/router/config/routeConfig';

const AppRouterEl = () => {
  const renderWithWrapper = useCallback(({ path, element }: RouteProps) => {
    return <Route key={path} path={path} element={element} />;
  }, []);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export const AppRouter = memo(AppRouterEl);
