import { create } from "zustand";

export const useColorStore = create((set) => ({
  color: "",
  setColor: (color) => set({ color }),
}));
