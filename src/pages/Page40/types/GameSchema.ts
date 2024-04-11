export type GameSchema = {
  blockCounts: number;
  blockSeed: number;
  blockSize: number;
  phase: GameState;
  startTime: number;
  endTime: number;
  setPhase: (phase: GameState) => void;
  setStartTime: (startTime: number) => void;
  setEndTime: (endTime: number) => void;
  setBlockSeed: (blockSeed: number) => void;
};

export type GameState = 'ready' | 'playing' | 'gameover';
