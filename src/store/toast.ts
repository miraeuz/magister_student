import { create } from "zustand";

export interface ToastItem { id: number; text: string; undo?: () => void }
interface ToastState { items: ToastItem[]; push: (text: string, undo?: () => void) => void; dismiss: (id: number) => void }
let seq = 0;

export const useToast = create<ToastState>((set, get) => ({
  items: [],
  push: (text, undo) => {
    const id = ++seq;
    set((s) => ({ items: [...s.items.slice(-2), { id, text, undo }] }));
    setTimeout(() => get().dismiss(id), undo ? 6000 : 3200);
  },
  dismiss: (id) => set((s) => ({ items: s.items.filter((t) => t.id !== id) })),
}));
export const toast = (text: string, undo?: () => void) => useToast.getState().push(text, undo);
