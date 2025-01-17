import { create } from 'zustand';

interface SubHeaderState {
    isSubHeaderVisible: boolean;
    toggleSubHeader: () => void;
  }

const useSubHeaderStore = create<SubHeaderState>((set) => ({
  isSubHeaderVisible: false,
  toggleSubHeader: () =>
    set((state) => ({ isSubHeaderVisible: !state.isSubHeaderVisible })),
}));

export default useSubHeaderStore;