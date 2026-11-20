import { useSyncExternalStore } from "react";
import { useUI } from "./ui";

function subscribeDark(cb: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const systemDark = () => typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

/** Values the generated pages read (theme switches, menu flags). Same names the design used. */
export function useShellVals() {
  const ui = useUI();
  const dark = useSyncExternalStore(subscribeDark, systemDark, () => false);
  return {
    theme: ui.theme === "system" ? (dark ? "dark" : "light") : ui.theme,
    accent: ui.accent,
    sideOpen: ui.sideOpen,
    sideClosed: !ui.sideOpen,
    menuOpen: ui.pop === "menu",
    plusOpen: ui.pop === "plus",
    tasksOpen: ui.pop === "tasks",
    chatOpen: ui.pop === "chat",
    bellOpen: ui.pop === "bell",
    anyOpen: ui.pop !== null,
    isLight: ui.theme === "light",
    isDark: ui.theme === "dark",
    isSystem: ui.theme === "system",
    isBlue: ui.accent === "blue",
    isGreen: ui.accent === "green",
    isPurple: ui.accent === "purple",
    isOrange: ui.accent === "orange",
    toggleSide: ui.toggleSide,
    toggleMenu: () => ui.togglePop("menu"),
    togglePlus: () => ui.togglePop("plus"),
    toggleTasks: () => ui.togglePop("tasks"),
    toggleChat: () => ui.togglePop("chat"),
    toggleBell: () => ui.togglePop("bell"),
    closePop: ui.closePop,
    setLight: () => ui.setTheme("light"),
    setDark: () => ui.setTheme("dark"),
    setSystem: () => ui.setTheme("system"),
    setBlue: () => ui.setAccent("blue"),
    setGreen: () => ui.setAccent("green"),
    setPurple: () => ui.setAccent("purple"),
    setOrange: () => ui.setAccent("orange"),
  };
}
export type ShellVals = ReturnType<typeof useShellVals>;
