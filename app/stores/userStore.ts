import { create } from 'zustand';
import type { Achievement } from '../services/achievements';

interface UserProfile {
  name?: string;
}

interface UserState {
  profile: UserProfile;
  achievements: Achievement[];
}

export const useUserStore = create<UserState>(() => ({
  profile: {},
  achievements: [],
}));
