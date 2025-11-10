import create from "zustand";

type State = {
  products: any[];
  setProducts: (p: any[]) => void;
};

export const useStore = create<State>((set) => ({
  products: [],
  setProducts: (p) => set({ products: p }),
}));
