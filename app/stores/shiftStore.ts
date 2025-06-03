import { create } from 'zustand';

interface Shift {
  id: string;
  title: string;
  startsAt: string;
  latitude: number;
  longitude: number;
}

interface ShiftState {
  list: Shift[];
  fetchShifts: () => Promise<void>;
  applyToShift: (id: string) => Promise<void>;
}

export const useShiftStore = create<ShiftState>(() => ({
  list: [],
  fetchShifts: async () => {},
  applyToShift: async () => {},
}));
