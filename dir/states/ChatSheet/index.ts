import { create } from "zustand";

type SheetState = {
  isOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
};

export const useSheetStore = create<SheetState>((set) => ({
  isOpen: false,
  openSheet: () => {
    console.log('openSheet triggered');
    set({ isOpen: true });
  },
  closeSheet: () => {
    console.log('closeSheet triggered');
    set({ isOpen: false });
  },
}));