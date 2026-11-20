import { useState, type ButtonHTMLAttributes, type CSSProperties, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { runAction } from "./actions";

/** Button that has no handler in the design: routed through the action resolver (see actions.ts). */
export function B({ onClick, type = "button", ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pathname } = useLocation();
  const go = useNavigate();
  const click = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) { onClick(e); return; }
    runAction(e.currentTarget, pathname, (to) => go(to));
  };
  return <button type={type} data-dead="1" onClick={click} {...rest} />;
}

/** role="switch" with real on/off state (the design only showed static pictures of switches). */
export function Switch({ style, children: _c, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { "aria-checked"?: string | boolean }) {
  const [on, setOn] = useState(String(rest["aria-checked"]) === "true");
  const track: CSSProperties = { ...style, background: on ? "var(--acbtn)" : "var(--bg)", borderColor: on ? "var(--acbtn)" : "var(--bd)", transition: "background .15s" };
  const { "aria-checked": _a, ...others } = rest;
  return (
    <button type="button" role="switch" aria-checked={on} onClick={() => setOn(!on)} style={track} {...others}>
      <span style={{ position: "absolute", top: 2, left: on ? 20 : 2, width: 20, height: 20, borderRadius: 999, background: "#fff", border: "1px solid var(--bd)", transition: "left .15s" }} />
    </button>
  );
}
