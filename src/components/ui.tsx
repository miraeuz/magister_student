import { useId, useState, type CSSProperties, type InputHTMLAttributes, type ReactNode } from "react";
import { Icon } from "./Icon";

export const card: CSSProperties = { background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: 10, padding: 16 };

export function Card({ title, aside, children, style, id }: { title?: ReactNode; aside?: ReactNode; children: ReactNode; style?: CSSProperties; id?: string }) {
  return (
    <section id={id} style={{ ...card, ...style }}>
      {(title || aside) && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 12 }}>
          {title && <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{title}</h2>}
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}

export function PageHead({ title, sub, actions }: { title: string; sub?: string; actions?: ReactNode }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.25 }}>{title}</h1>
        {sub && <p style={{ margin: "4px 0 0", color: "var(--mu)", fontSize: 14 }}>{sub}</p>}
      </div>
      {actions}
    </div>
  );
}

interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string; error?: string; hint?: ReactNode; right?: ReactNode;
}
export function Field({ label, error, hint, right, type = "text", ...rest }: FieldProps) {
  const id = useId();
  const [show, setShow] = useState(false);
  const isPw = type === "password";
  return (
    <div className="mw-field">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
        <label htmlFor={id}>{label}</label>
        {right}
      </div>
      <div style={{ position: "relative" }}>
        <input id={id} className="mw-input" type={isPw && show ? "text" : type} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : hint ? `${id}-h` : undefined} style={isPw ? { paddingRight: 44 } : undefined} {...rest} />
        {isPw && (
          <button type="button" aria-label={show ? "Parolni yashirish" : "Parolni ko'rsatish"} aria-pressed={show} onClick={() => setShow(!show)} style={{ position: "absolute", right: 2, top: 2, width: 36, height: 36, border: 0, background: "transparent", color: "var(--mu)", borderRadius: 6 }}>
            <Icon name="eye" size={17} />
          </button>
        )}
      </div>
      {error ? <div id={`${id}-e`} role="alert" style={{ color: "var(--bad)", fontSize: 12.5 }}>{error}</div> : hint ? <div id={`${id}-h`} style={{ color: "var(--mu)", fontSize: 12.5 }}>{hint}</div> : null}
    </div>
  );
}

export function Notice({ kind = "info", children }: { kind?: "info" | "error" | "ok" | "warn"; children: ReactNode }) {
  const c = { info: ["var(--acbg)", "var(--ac)"], error: ["var(--badbg)", "var(--bad)"], ok: ["var(--okbg)", "var(--ok)"], warn: ["var(--warnbg)", "var(--warn)"] }[kind];
  return (
    <div role={kind === "error" ? "alert" : "status"} style={{ background: c[0], color: c[1], border: `1px solid ${c[1]}33`, borderRadius: 8, padding: "10px 12px", fontSize: 13.5, lineHeight: 1.5 }}>{children}</div>
  );
}
