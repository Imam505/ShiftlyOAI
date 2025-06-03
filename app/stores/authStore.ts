import { create } from 'zustand';

interface AuthState {
  token?: string;
  role?: 'seeker' | 'employer';
  user?: object;
  setRole: (role: 'seeker' | 'employer') => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  setRole: (role) => set({ role }),
}));
