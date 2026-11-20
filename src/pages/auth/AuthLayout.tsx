import { useEffect, type ReactNode } from "react";
import { Navigate, useSearchParams } from "react-router";
import { A } from "../../components/A";
import { Icon } from "../../components/Icon";
import { useAuth } from "../../store/auth";
import { useShellVals } from "../../store/useShellVals";

const POINTS: [string, string, string][] = [
  ["book", "Ta'lim", "Darslar, topshiriqlar va testlar. O'qituvchi bilan bir joyda."],
  ["repo", "Hub", "Modelingiz, kodingiz va maqolangizni saqlang, boshqalar ko'rsin."],
  ["chat", "Community", "Savol-javob va guruh chati. Formulalar LaTeX ko'rinishida."],
  ["code", "Challenges", "Masalani kod bilan yeching, avtomatik tekshiruv va reyting."],
];

/** Split layout for the public auth pages: brand/pitch on the left (desktop), form on the right. */
export function AuthLayout({ title, sub, children, footer }: { title: string; sub?: string; children: ReactNode; footer?: ReactNode }) {
  const v = useShellVals();
  const signedIn = useAuth((s) => !!s.user);
  const [sp] = useSearchParams();
  useEffect(() => { document.title = `${title} · MathWeb`; }, [title]);
  if (signedIn) return <Navigate to={sp.get("next") ?? "/"} replace />;
  return (
    <div data-theme={v.theme} data-accent={v.accent} style={{ minHeight: "100dvh", display: "flex", background: "var(--bg)", color: "var(--tx)", overflowY: "auto", height: "100dvh" }}>
      <aside className="mw-auth-brand" style={{ flex: "0 0 44%", maxWidth: 560, padding: "40px 48px", background: "var(--sf)", borderRight: "1px solid var(--bd)", display: "flex", flexDirection: "column", gap: 28 }}>
        <A href="/login" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--tx)", fontWeight: 600, fontSize: 18 }}>
          <span style={{ width: 34, height: 34, borderRadius: 8, background: "var(--tx)", color: "var(--sf)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace", fontSize: 19 }}>∫</span>
          MathWeb
        </A>
        <div>
          <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.25, fontWeight: 600 }}>Matematik modellashtirishni amalda o'rganing</h2>
          <p style={{ color: "var(--mu)", fontSize: 15, marginTop: 10 }}>Universitet guruhingiz, o'qituvchingiz va barcha o'quv materiallari bitta platformada.</p>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          {POINTS.map(([ic, t, d]) => (
            <li key={t} style={{ display: "flex", gap: 12 }}>
              <span style={{ flex: "none", width: 34, height: 34, borderRadius: 8, background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic as never} size={17} /></span>
              <span><strong style={{ fontSize: 14 }}>{t}</strong><br /><span style={{ color: "var(--mu)", fontSize: 13.5 }}>{d}</span></span>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "auto", color: "var(--mu)", fontSize: 12.5 }}>Dissertatsiya loyihasi DIT-2025/MathWeb-09 · 20 darajali reyting, 3 til (O'zbek · English · Русский)</p>
      </aside>
      <main style={{ flex: "1 1 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
        <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <A href="/login" className="mw-auth-logo-sm" style={{ display: "none", alignItems: "center", gap: 8, color: "var(--tx)", fontWeight: 600, marginBottom: 18 }}>
              <span style={{ width: 28, height: 28, borderRadius: 6, background: "var(--tx)", color: "var(--sf)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace" }}>∫</span>MathWeb
            </A>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>{title}</h1>
            {sub && <p style={{ margin: "6px 0 0", color: "var(--mu)", fontSize: 14 }}>{sub}</p>}
          </div>
          {children}
          {footer && <div style={{ textAlign: "center", fontSize: 13.5, color: "var(--mu)" }}>{footer}</div>}
        </div>
      </main>
    </div>
  );
}
