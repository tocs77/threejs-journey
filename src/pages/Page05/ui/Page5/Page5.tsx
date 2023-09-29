import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { BasicBox } from '@/features/BasicBox';
import { CheckBox } from '@/shared/UI/checkBox';
import { CustomGeometry } from '../Geometry/Geometry';
import { RandomVertices } from '../RandomVerices/RandomVertices';

import classes from './Page5.module.scss';

export const Page5 = () => {
  const [showWires, setShowWires] = useState(false);
  const [segments, setSegments] = useState(1);
  const [showPoints, setShowPoints] = useState(false);
  const [pointsAmount, setPointsAmount] = useState(50);

  const toggleWires = () => {
    setShowWires(!showWires);
  };

  const togglePoints = () => {
    setShowPoints(!showPoints);
  };

  return (
    <>
      <div className={classes.controls}>
        <CheckBox value={showWires} changed={toggleWires} size={16} title='Show Wireframes' />
        <label htmlFor='segments' className={classes.label}>
          Segments
        </label>
        <input
          type='range'
          id='segments'
          name='segments'
          min={1}
          max={10}
          step={1}
          value={segments}
          onChange={(e) => setSegments(parseInt(e.target.value))}
        />
        <span className={classes.value}>{segments}</span>
        <CheckBox value={showPoints} changed={togglePoints} size={16} title='Show Points' />

        <label htmlFor='points' className={classes.label}>
          Points Amount
        </label>
        <input
          type='range'
          id='points'
          name='points'
          min={3}
          max={100}
          step={1}
          value={pointsAmount}
          onChange={(e) => setPointsAmount(parseInt(e.target.value))}
        />
        <span className={classes.value}>{pointsAmount}</span>
      </div>

      <Canvas className={classes.Page5} dpr={1} camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls />
        {showPoints && <RandomVertices color='green' amount={pointsAmount} />}
        <CustomGeometry color='yellow' wireframe={showWires} />
        <BasicBox wireframe={showWires} segments={segments} />
      </Canvas>
    </>
  );
};
