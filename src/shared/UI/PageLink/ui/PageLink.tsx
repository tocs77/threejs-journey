import { AppLink } from '@/shared/UI/AppLink';
import { classNames } from '@/shared/lib';
import { AppImage } from '@/shared/UI/AppImage';

import classes from './PageLink.module.scss';

interface PageLinkProps {
  className?: string;
  to: string;
  image: string;
  title: string;
}

export const PageLink = (props: PageLinkProps) => {
  const { className, image, to, title } = props;
  return (
    <AppLink className={classNames(classes.PageLink, {}, [className])} to={to}>
      <AppImage src={image} className={classes.image} />
      <div className={classes.title}>{title}</div>
    </AppLink>
  );
};
