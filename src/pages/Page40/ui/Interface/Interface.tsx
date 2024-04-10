import { useKeyboardControls } from '@react-three/drei';

import { classNames } from '@/shared/lib';

import { KeyControls } from '../../types/KeyEntries';
import classes from './Inreface.module.scss';

export const Interface = () => {
  const forward = useKeyboardControls<KeyControls>((state) => state.forward);
  const backward = useKeyboardControls<KeyControls>((state) => state.backward);
  const leftward = useKeyboardControls<KeyControls>((state) => state.leftward);
  const rightward = useKeyboardControls<KeyControls>((state) => state.rightward);
  const jump = useKeyboardControls<KeyControls>((state) => state.jump);

  return (
    <div className={classes.Interface}>
      <div className={classes.time}>{'0.00'}</div>
      <div className={classes.restart}>{'Restart'}</div>
      <div className={classes.controls}>
        <div className={classes.row}>
          <div className={classNames(classes.key, { [classes.active]: forward })}>w</div>
        </div>
        <div className={classes.row}>
          <div className={classNames(classes.key, { [classes.active]: leftward })}>a</div>
          <div className={classNames(classes.key, { [classes.active]: backward })}>s</div>
          <div className={classNames(classes.key, { [classes.active]: rightward })}>d</div>
        </div>
        <div className={classes.row}>
          <div className={classNames(classes.key, { [classes.active]: jump }, [classes.large])}></div>
        </div>
      </div>
    </div>
  );
};
