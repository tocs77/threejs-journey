import { useKeyboardControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { addEffect } from '@react-three/fiber';

import { classNames } from '@/shared/lib';

import { KeyControls } from '../../types/KeyEntries';
import classes from './Inreface.module.scss';
import { useGame } from '../../store/store';

export const Interface = () => {
  const forward = useKeyboardControls<KeyControls>((state) => state.forward);
  const backward = useKeyboardControls<KeyControls>((state) => state.backward);
  const leftward = useKeyboardControls<KeyControls>((state) => state.leftward);
  const rightward = useKeyboardControls<KeyControls>((state) => state.rightward);
  const jump = useKeyboardControls<KeyControls>((state) => state.jump);
  const timeRef = useRef<HTMLDivElement>();
  const { phase, setPhase, startTime, setBlockSeed } = useGame();

  useEffect(() => {
    const unsubscribe = addEffect(() => {
      if (!timeRef.current) return;
      const phase = useGame.getState().phase;
      if (phase === 'gameover') {
        const endTime = useGame.getState().endTime;
        const time = (endTime - startTime) / 1000;
        timeRef.current.innerText = time.toFixed(2);
        return;
      }

      if (phase === 'ready') {
        timeRef.current.innerText = '0.00';
        return;
      }
      const time = (Date.now() - startTime) / 1000;
      timeRef.current.innerText = time.toFixed(2);
    });
    return () => unsubscribe();
  }, [startTime]);

  const restartGame = () => {
    setPhase('ready');
    setBlockSeed(Math.random());
  };

  return (
    <div className={classes.Interface}>
      <div className={classes.time} ref={timeRef}>
        {'0.00'}
      </div>

      {phase === 'gameover' && (
        <div className={classes.restart} onClick={restartGame}>
          {'Restart'}
        </div>
      )}

      <div className={classes.controls}>
        <div className={classes.row}>
          <div className={classNames(classes.key, { [classes.active]: forward })}></div>
        </div>
        <div className={classes.row}>
          <div className={classNames(classes.key, { [classes.active]: leftward })}></div>
          <div className={classNames(classes.key, { [classes.active]: backward })}></div>
          <div className={classNames(classes.key, { [classes.active]: rightward })}></div>
        </div>
        <div className={classes.row}>
          <div className={classNames(classes.key, { [classes.active]: jump }, [classes.large])}></div>
        </div>
      </div>
    </div>
  );
};
