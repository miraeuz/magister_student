import { useState } from "react";
import { useShellVals } from "../store/useShellVals";

export function useChatVals() {
  const shell = useShellVals();
  const [att, setAtt] = useState(true); // the design shows the attach menu open
  return { ...shell, attOpen: att, toggleAtt: () => setAtt((a) => !a) };
}
