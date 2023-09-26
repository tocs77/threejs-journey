import classes from './MainPage.module.scss';
import { PageLinks } from '@/widgets/PageLinks/ui/PageLinks';
export const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <PageLinks />
    </div>
  );
};
