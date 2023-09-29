import { BiHomeAlt2 } from 'react-icons/bi';
import { classNames } from '@/shared/lib';

import classes from './NavBar.module.scss';
import { AppLink } from '@/shared/UI/AppLink';
import { getRouteMain } from '@/app/providers/router/lib/routes';

interface NavBarProps {
  className?: string;
}
export const NavBar = (props: NavBarProps) => {
  const { className } = props;
  return (
    <div className={classNames(classes.NavBar, {}, [className])}>
      <AppLink to={getRouteMain()} className={classes.homeLink}>
        <BiHomeAlt2 />
      </AppLink>
    </div>
  );
};
