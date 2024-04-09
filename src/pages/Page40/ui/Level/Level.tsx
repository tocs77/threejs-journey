import { useMemo } from 'react';
import { boxGeometry } from '../../lib/geometries';
import { floor1Material, floor2Material, obstacleMaterial, wallMaterial } from '../../lib/materials';
import { BlockChopper } from '../BlockChopper/BlockChopper';
import { BlockEnd } from '../BlockEnd/BlockEnd';
import { BlockSlider } from '../BlockSlider/BlockSlider';
import { BlockSpinner } from '../BlockSpinner/BlockSpinner';
import { BlockStart } from '../BlockStart/BlockStart';
import { Bounds } from '../Bounds/Bounds';

interface LevelProps {
  lenght: number;
  difficulty: 1 | 2 | 3;
}

const SIZE = 4;

const blocks = ['spinner', 'chopper', 'slider'] as const;

export const Level = (props: LevelProps) => {
  const { lenght, difficulty } = props;

  const levelBlocks = useMemo(() => {
    const levelBlocks: JSX.Element[] = [];
    for (let i = 0; i < lenght; i++) {
      const blockType = blocks[Math.floor(Math.random() * blocks.length)];

      switch (blockType) {
        case 'spinner':
          levelBlocks.push(
            <BlockSpinner
              key={i}
              geometry={boxGeometry}
              material={floor2Material}
              obstacleMaterial={obstacleMaterial}
              speed={difficulty}
              size={SIZE}
              position={[0, 0, -SIZE * (i + 1)]}
              direction={Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'}
            />,
          );
          break;

        case 'chopper':
          levelBlocks.push(
            <BlockChopper
              key={i}
              geometry={boxGeometry}
              material={floor2Material}
              obstacleMaterial={obstacleMaterial}
              speed={difficulty}
              size={SIZE}
              position={[0, 0, -SIZE * (i + 1)]}
            />,
          );
          break;

        case 'slider':
          levelBlocks.push(
            <BlockSlider
              key={i}
              geometry={boxGeometry}
              material={floor2Material}
              obstacleMaterial={obstacleMaterial}
              speed={difficulty}
              size={SIZE}
              position={[0, 0, -SIZE * (i + 1)]}
            />,
          );
          break;
        default:
          break;
      }
    }
    return levelBlocks;
  }, []);

  return (
    <>
      <BlockStart geometry={boxGeometry} material={floor1Material} position={[0, 0, 0]} />
      {levelBlocks}
      <BlockEnd geometry={boxGeometry} material={floor1Material} position={[0, 0, -SIZE * (lenght + 1)]} />
      <Bounds length={lenght + 2} size={SIZE} geometry={boxGeometry} material={wallMaterial} />
    </>
  );
};
