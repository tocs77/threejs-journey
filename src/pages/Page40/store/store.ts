import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { GameSchema, GameState } from '../types/GameSchema';

export const useGame = create<GameSchema>()(
  subscribeWithSelector<GameSchema>((set) => ({
    blockCounts: 5,
    blockSize: 4,
    phase: 'ready',
    setPhase: (phase: GameState) => set(() => ({ phase })),
  })),
);
