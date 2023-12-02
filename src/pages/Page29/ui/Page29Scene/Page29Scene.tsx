import { Html } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

import { ShopBox } from '@/entities/Enviroments';
import { DamagedHelemt } from '@/entities/DamagedHelmet';

import { Label } from '../Label/Label';

interface Label {
  visible: boolean;
  x: number;
  y: number;
}

export const Page29Scene = () => {
  return (
    <>
      <OrbitControls />
      <ShopBox />

      <Html occlude position={[1.55, 0.3, -0.6]}>
        <Label text='11' tooltip='skjkljdlkjfioej' visible={true} />
      </Html>
      <Html occlude position={[1.5, 0.8, -1.6]}>
        <Label text='22' tooltip='skjkljdlkjfioej' visible={true} />
      </Html>
      <Html occlude position={[1.6, -1.3, -0.7]}>
        <Label text='33' tooltip='skjkljdlkjfioej' visible={true} />
      </Html>

      <DamagedHelemt />
    </>
  );
};
