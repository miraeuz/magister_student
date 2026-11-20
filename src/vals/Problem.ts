import { useState } from "react";
import { useShellVals } from "../store/useShellVals";

type Left = "desc" | "edit" | "subs" | "disc";
type Bottom = "res" | "case";

export function useProblemVals() {
  const shell = useShellVals();
  const [lt, setLt] = useState<Left>("desc");
  const [bt, setBt] = useState<Bottom>("res");
  return {
    ...shell,
    ltDesc: lt === "desc", ltEdit: lt === "edit", ltSubs: lt === "subs", ltDisc: lt === "disc",
    btRes: bt === "res", btCase: bt === "case",
    setLtDesc: () => setLt("desc"), setLtEdit: () => setLt("edit"), setLtSubs: () => setLt("subs"), setLtDisc: () => setLt("disc"),
    setBtRes: () => setBt("res"), setBtCase: () => setBt("case"),
  };
}
