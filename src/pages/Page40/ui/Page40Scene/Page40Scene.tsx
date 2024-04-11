import { useGame } from '../../store/store';
import { Effects } from '../Effects/Effects';
import { Level } from '../Level/Level';
import { Player } from '../Player/Player';

export const Page40Scene = () => {
  const { blockCounts } = useGame();
  return (
    <>
      <Effects />
      <Level lenght={blockCounts} difficulty={1} />
      <Player />
    </>
  );
};
