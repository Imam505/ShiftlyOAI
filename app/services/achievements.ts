import { create } from 'zustand';

export type Achievement = 'first_shift' | 'five_shifts' | 'hundred_hours' | 'streak_7';

interface AchievementStore {
  achievements: Achievement[];
  unlock: (a: Achievement) => void;
}

export const useAchievementStore = create<AchievementStore>((set) => ({
  achievements: [],
  unlock: (a) => set((state) => ({ achievements: [...state.achievements, a] })),
}));
