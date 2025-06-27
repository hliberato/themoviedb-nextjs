import { create } from 'zustand';

interface QueryState {
  query: string;
  setQuery: (query: string) => void;
}

export const queryStore = create<QueryState>()((set) => ({
  query: '',
  setQuery: (query) => set(() => ({ query })),
}));
