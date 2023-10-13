import { create } from "zustand";

export const useReposStore = create((set) => ({
  repos: [],
  setRepos: (repos) => set({ repos }),
}));
