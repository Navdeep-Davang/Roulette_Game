import { create } from 'zustand';

type RouletteState = {
  spinning: boolean;
  outcome: number | null;
  setOutcome: (value: number) => void;
  startSpin: (roll: number) => void;
  stopSpin: () => void;
};

export const useRouletteStore = create<RouletteState>((set) => ({
  spinning: false,
  outcome: null,
  setOutcome: (value) => set({ outcome: value }),
  startSpin: (roll: number) =>
    set((state) => {
      if (!state.spinning) {
        console.log(`Starting spin with outcome: ${roll}`);
        return { spinning: true, outcome: roll };
      }
      return state;
    }),
  stopSpin: () => set({ spinning: false }),
}));
