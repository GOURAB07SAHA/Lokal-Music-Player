import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';
import { Song } from '../types/track';

const storage = new MMKV();

// Helper to bridge MMKV with Zustand's persistence
const mmkvStorage = {
  setItem: (name: string, value: string) => storage.set(name, value),
  getItem: (name: string) => storage.getString(name) ?? null,
  removeItem: (name: string) => storage.delete(name),
};

interface PlayerState {
  currentTrack: Song | null;
  isPlaying: boolean;
  queue: Song[];
  setCurrentTrack: (track: Song) => void;
  setPlaying: (status: boolean) => void;
  addToQueue: (track: Song) => void;
  removeFromQueue: (trackId: string) => void;
  clearQueue: () => void;
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      currentTrack: null,
      isPlaying: false,
      queue: [],
      setCurrentTrack: (track) => set({ currentTrack: track }),
      setPlaying: (status) => set({ isPlaying: status }),
      addToQueue: (track) => set((state) => ({ 
        queue: [...state.queue.filter(s => s.id !== track.id), track] 
      })),
      removeFromQueue: (trackId) => set((state) => ({
        queue: state.queue.filter((track) => track.id !== trackId)
      })),
      clearQueue: () => set({ queue: [] }),
    }),
    {
      name: 'player-storage',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);