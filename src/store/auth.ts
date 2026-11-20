import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthUser { username: string; displayName: string }
interface AuthState {
  access: string | null;
  refresh: string | null;
  user: AuthUser | null;
  demo: boolean;
  loggedOut: boolean;
  signIn: (p: { access: string | null; refresh: string | null; user: AuthUser; demo?: boolean }) => void;
  signOut: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      access: null, refresh: null, user: null, demo: false, loggedOut: false,
      signIn: ({ access, refresh, user, demo = false }) => {
        if (access) localStorage.setItem("access", access);
        set({ access, refresh, user, demo, loggedOut: false });
      },
      signOut: () => { localStorage.removeItem("access"); set({ access: null, refresh: null, user: null, demo: false, loggedOut: true }); },
    }),
    { name: "mathweb-auth" },
  ),
);
export const isSignedIn = () => !!useAuth.getState().user;
export const initials = (name?: string) => (name ?? "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]!.toUpperCase()).join("") || "?";
