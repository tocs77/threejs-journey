import { boxGeometry } from '../../lib/geometries';
import { floor1Material, floor2Material, obstacleMaterial } from '../../lib/materials';
import { BlockChopper } from '../BlockChopper/BlockChopper';
import { BlockEnd } from '../BlockEnd/BlockEnd';
import { BlockSlider } from '../BlockSlider/BlockSlider';
import { BlockSpinner } from '../BlockSpinner/BlockSpinner';
import { BlockStart } from '../BlockStart/BlockStart';

export const Level = () => {
  return (
    <>
      <BlockStart geometry={boxGeometry} material={floor1Material} position={[0, 0, 16]} />
      <BlockSlider
        position={[0, 0, 4]}
        geometry={boxGeometry}
        material={floor2Material}
        obstacleMaterial={obstacleMaterial}
        speed={1}
      />
      <BlockChopper
        position={[0, 0, 8]}
        geometry={boxGeometry}
        material={floor2Material}
        obstacleMaterial={obstacleMaterial}
        speed={1}
      />
      <BlockSpinner geometry={boxGeometry} material={floor2Material} obstacleMaterial={obstacleMaterial} position={[0, 0, 12]} />
      <BlockEnd geometry={boxGeometry} material={floor1Material} position={[0, 0, 0]} />
    </>
  );
};
