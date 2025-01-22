import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BetStore {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  addBetAmount: (amount: number) => void;
  multiplyBetAmount: (factor: number) => void;
  divideBetAmount: (factor: number) => void;
  clearBetAmount: () => void;
}

const handlePrecision = (value: number) => Math.round(value * 100) / 100;

const useBetStore = create<BetStore>()(
  persist(
    (set) => ({
      betAmount: 0,
      setBetAmount: (amount: number) => set({ betAmount: amount }),
      addBetAmount: (amount: number) =>
        set((state) => ({ betAmount: handlePrecision(state.betAmount + amount) })),
      multiplyBetAmount: (factor: number) =>
        set((state) => ({ betAmount: state.betAmount * factor })),
      divideBetAmount: (factor: number) =>
        set((state) => ({ betAmount: state.betAmount / factor })),
      clearBetAmount: () => set({ betAmount: 0 }),
    }),
    {
      name: "bet-storage", // (optional) unique name for persisted store
      partialize: (state) => ({ betAmount: state.betAmount }), // Only persist betAmount
    }
  )
);

export default useBetStore;
