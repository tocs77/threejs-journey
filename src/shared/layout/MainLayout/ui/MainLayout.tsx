import { JsxElement } from 'ts-morph';
import classes from './MainLayout.module.scss';
import { ReactNode } from 'react';
interface MainLayoutProps {
  header: ReactNode;
  content: ReactNode;
}
export const MainLayout = (props: MainLayoutProps) => {
  const { content, header } = props;
  return (
    <div className={classes.mainLayout}>
      <nav className={classes.headerContainer}>{header}</nav>
      <div className={classes.contentContainer}>{content}</div>
    </div>
  );
};
