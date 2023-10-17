import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import classes from './Page16.module.scss';
import { Page16Scene } from '../Page16Scene/Page16Scene';

export const Page16 = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const pageRef = useRef<HTMLDivElement | null>(null);

  const scrollHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pageRef.current) return;
    const sizeY = pageRef.current.clientHeight;
    setScrollPos(e.currentTarget.scrollTop / sizeY);
  };

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pageRef.current) return;
    const sizeX = pageRef.current.clientWidth;
    const sizeY = pageRef.current.clientHeight;
    setMousePos({ x: 0.5 - (sizeX - e.clientX) / sizeX, y: 0.5 - (sizeY - e.clientY) / sizeY });
  };

  return (
    <div className={classes.Page16} onScroll={scrollHandler} ref={pageRef} onMouseMove={mouseMoveHandler}>
      <div className={classes.canvas}>
        <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
          <Page16Scene scrollPos={scrollPos} mousePos={mousePos} />
        </Canvas>
      </div>

      <section className={classes.section}>
        <h1>My projects</h1>
      </section>
      <section className={classes.section}>
        <h2>My Portfolio</h2>
      </section>
      <section className={classes.section}>
        <h2>Contact me</h2>
      </section>
    </div>
  );
};
