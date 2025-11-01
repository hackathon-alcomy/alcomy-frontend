import { create } from "zustand";

export type Mode = "name" | "ingredients";
export interface CocktailResult {
  id: number;
  name: string;
  thumbnail: string;
}
export interface AlmostCocktailResult extends CocktailResult {
  missingIngredients: number;
}

interface SearchState {
  mode: Mode;
  setMode: (m: Mode) => void;
  results: CocktailResult[];
  setResults: (results: CocktailResult[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  selected: string[];
  almostAvailableResults: AlmostCocktailResult[];
  setAlmostAvailableResults: (results: AlmostCocktailResult[]) => void;
  setSelected: (selected: string[]) => void;
  toggleSelect: (item: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  mode: "name",
  setMode: (m) => set({ mode: m }),
  results: [],
  setResults: (results) => set({ results }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  selected: [],
  almostAvailableResults: [],
  setAlmostAvailableResults: (results) =>
    set({ almostAvailableResults: results }),
  setSelected: (selected) => set({ selected }),
  toggleSelect: (item) =>
    set((state) => ({
      selected: state.selected.includes(item)
        ? state.selected.filter((v) => v !== item)
        : [...state.selected, item],
    })),
}));
