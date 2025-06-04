import { create } from 'zustand';

interface AuthState {
  role : 'seeker' | 'employer' | null;
  setRole : (role: 'seeker' | 'employer') => void;
}

export const useAuthStore = create<AuthState>(set => ({
  role: null,
  setRole: role => set({ role }),
}));
