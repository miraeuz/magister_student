import { iconNodes, type IconName } from "./iconNodes";

export function Icon({ name, size = 16, w = 1.75 }: { name: IconName; size?: number; w?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
      {iconNodes[name]}
    </svg>
  );
}
export type { IconName };
