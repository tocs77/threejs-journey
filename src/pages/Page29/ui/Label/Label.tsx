import { forwardRef, ForwardedRef } from 'react';
import classes from './Label.module.scss';
import { classNames } from '@/shared/lib';

interface LabelProps {
  text: string;
  tooltip?: string;
  visible?: boolean;
}

export const Label = forwardRef(({ text, tooltip, visible = false }: LabelProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={classNames(classes.Label, { [classes.visible]: visible })}>
      <div className={classes.text}>{text}</div>
      <div className={classes.tooltip}>{tooltip}</div>
    </div>
  );
});
