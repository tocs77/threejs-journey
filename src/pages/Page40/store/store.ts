import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { GameSchema, GameState } from '../types/GameSchema';

export const useGame = create<GameSchema>()(
  subscribeWithSelector<GameSchema>((set) => ({
    blockCounts: 10,
    blockSeed: 0,
    blockSize: 4,
    phase: 'ready',
    startTime: 0,
    endTime: 0,
    setPhase: (phase: GameState) => set(() => ({ phase })),
    setStartTime: (startTime: number) => set(() => ({ startTime })),
    setEndTime: (endTime: number) => set(() => ({ endTime })),
    setBlockSeed: (blockSeed: number) => set(() => ({ blockSeed })),
  })),
);
