// lib/store.ts
import { create } from 'zustand';
import { getMockProducts } from './mockData';

type State = {
  products: any[];
  setProducts: (p: any[]) => void;
};

export const useStore = create<State>((set) => ({
  products: getMockProducts(),
  setProducts: (p) => set({ products: p }),
}));
