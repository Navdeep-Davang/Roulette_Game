import { create } from "zustand";

interface BetStore {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  addBetAmount: (amount: number) => void;
  multiplyBetAmount: (factor: number) => void;
  divideBetAmount: (factor: number) => void;
  clearBetAmount: () => void;
}

const handlePrecision = (value: number) => Math.round(value * 100) / 100;

const useBetStore = create<BetStore>((set) => ({
  betAmount: 0,
  setBetAmount: (amount: number) => set({ betAmount: amount }),
  addBetAmount: (amount: number) =>
    set((state) => ({ betAmount: handlePrecision(state.betAmount + amount) })),
  multiplyBetAmount: (factor: number) =>
    set((state) => ({ betAmount: state.betAmount * factor })),
  divideBetAmount: (factor: number) =>
    set((state) => ({ betAmount: state.betAmount / factor })),
  clearBetAmount: () => set({ betAmount: 0 }),
}));

export default useBetStore;
