import { Canvas } from '@react-three/fiber';

import classes from './Page16.module.scss';
import { Page16Scene } from '../Page16Scene/Page16Scene';

export const Page16 = () => {
  return (
    <div className={classes.Page16}>
      <div className={classes.canvas}>
        <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
          <Page16Scene />
        </Canvas>
      </div>

      <section className={classes.section}>
        <h1>My Portfolio</h1>
      </section>
      <section className={classes.section}>
        <h2>My projects</h2>
      </section>
      <section className={classes.section}>
        <h2>Contact me</h2>
      </section>
    </div>
  );
};
