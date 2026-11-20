import { useState } from "react";
import { useShellVals } from "../store/useShellVals";

type Scope = "grp" | "uni" | "glob";
type Period = "w" | "m" | "a";

export function useLeaderboardVals() {
  const shell = useShellVals();
  const [sc, setSc] = useState<Scope>("grp");
  const [pr, setPr] = useState<Period>("m");
  return {
    ...shell,
    lbGrp: sc === "grp", lbUni: sc === "uni", lbGlob: sc === "glob",
    pW: pr === "w", pM: pr === "m", pA: pr === "a",
    setLbGrp: () => setSc("grp"), setLbUni: () => setSc("uni"), setLbGlob: () => setSc("glob"),
    setPW: () => setPr("w"), setPM: () => setPr("m"), setPA: () => setPr("a"),
  };
}
