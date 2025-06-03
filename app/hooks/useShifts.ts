import { useEffect } from 'react';
import { useShiftStore } from '../stores/shiftStore';

export function useShifts() {
  const { list, fetchShifts } = useShiftStore();
  useEffect(() => {
    fetchShifts();
  }, [fetchShifts]);
  return { shifts: list };
}
