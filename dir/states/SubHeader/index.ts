import { create } from 'zustand';

interface SubHeaderState {
  isSubHeaderVisible: boolean;
  openSubHeader: () => void; // New function to open SubHeader
  closeSubHeader: () => void;
}

const useSubHeaderStore = create<SubHeaderState>((set) => ({
  isSubHeaderVisible: false,
  openSubHeader: () => set({ isSubHeaderVisible: true }), // Open function
  closeSubHeader: () => set({ isSubHeaderVisible: false }),
}));

export default useSubHeaderStore;