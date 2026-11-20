import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";
export type Accent = "blue" | "green" | "purple" | "orange";
export type Lang = "uz" | "en" | "ru";
export type Pop = "menu" | "plus" | "tasks" | "chat" | "bell";

interface UI {
  theme: Theme;
  accent: Accent;
  lang: Lang;
  sideOpen: boolean;
  pop: Pop | null;
  setTheme: (t: Theme) => void;
  setAccent: (a: Accent) => void;
  setLang: (l: Lang) => void;
  toggleSide: () => void;
  togglePop: (p: Pop) => void;
  closePop: () => void;
}

export const useUI = create<UI>()(
  persist(
    (set) => ({
      theme: "light",
      accent: "blue",
      lang: "uz",
      sideOpen: true,
      pop: null,
      setTheme: (theme) => set({ theme }),
      setAccent: (accent) => set({ accent }),
      setLang: (lang) => set({ lang }),
      toggleSide: () => set((s) => ({ sideOpen: !s.sideOpen })),
      togglePop: (p) => set((s) => ({ pop: s.pop === p ? null : p })),
      closePop: () => set({ pop: null }),
    }),
    { name: "mathweb-ui", partialize: (s) => ({ theme: s.theme, accent: s.accent, lang: s.lang, sideOpen: s.sideOpen }) },
  ),
);
