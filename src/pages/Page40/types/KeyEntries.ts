import { KeyboardControlsEntry } from '@react-three/drei';

export type KeyControls = 'forward' | 'backward' | 'leftward' | 'rightward' | 'jump';

export const keyControls: KeyboardControlsEntry<KeyControls>[] = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
];
