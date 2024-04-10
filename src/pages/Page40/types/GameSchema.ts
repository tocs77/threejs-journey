export type GameSchema = {
  blockCounts: number;
  blockSize: number;
  phase: GameState;
  setPhase: (phase: GameState) => void;
};

export type GameState = 'ready' | 'playing' | 'gameover';
