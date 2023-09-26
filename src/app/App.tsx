import { AppRouter } from './providers/router';
import { MainLayout } from '@/shared/layout/MainLayout/ui/MainLayout';
import { NavBar } from './widgets/NavBar/ui/NavBar';

export const App = () => {
  return <MainLayout header={<NavBar />} content={<AppRouter />} />;
};
