import { useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { A } from "../../components/A";
import { Field, Notice } from "../../components/ui";
import { AuthError, DEMO_ALLOWED, login } from "../../api/auth";
import { useAuth } from "../../store/auth";
import { toast } from "../../store/toast";
import { AuthLayout } from "./AuthLayout";

export default function Login() {
  const go = useNavigate();
  const [sp] = useSearchParams();
  const signIn = useAuth((s) => s.signIn);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errs, setErrs] = useState<{ id?: string; pw?: string }>({});
  const [msg, setMsg] = useState<string | null>(null);
  const [offline, setOffline] = useState(false);
  const [busy, setBusy] = useState(false);
  const next = sp.get("next") ?? "/";

  const enterDemo = (name: string) => {
    const username = name.includes("@") ? name.split("@")[0]! : name;
    signIn({ access: null, refresh: null, demo: true, user: { username: username.toLowerCase(), displayName: username === "jahongirxon" ? "Jahongirxon M." : username } });
    go(next, { replace: true });
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    const er: typeof errs = {};
    if (!id.trim()) er.id = "Login yoki email kiriting";
    if (!pw) er.pw = "Parolni kiriting";
    setErrs(er); setMsg(null);
    if (er.id || er.pw) { setTimeout(() => document.querySelector<HTMLInputElement>('input[aria-invalid="true"]')?.focus(), 0); return; }
    setBusy(true);
    try {
      const r = await login(id.trim(), pw);
      signIn({ access: r.access, refresh: r.refresh, user: { username: id.trim().split("@")[0]!, displayName: id.trim().split("@")[0]! } });
      go(next, { replace: true });
    } catch (err) {
      if (err instanceof AuthError && err.unreachable) {
        if (DEMO_ALLOWED) { setOffline(true); setMsg("Server ulanmagan. Demo rejimda davom etishingiz mumkin."); }
        else setMsg("Serverga ulanib bo'lmadi. Internetni tekshiring.");
      } else setMsg(err instanceof Error ? err.message : "Xatolik yuz berdi.");
    } finally { setBusy(false); }
  }

  return (
    <AuthLayout title="Hisobga kirish" sub="MathWeb platformasiga xush kelibsiz." footer={<>Hisobingiz yo'qmi? <A href="/register" style={{ fontWeight: 600 }}>Ro'yxatdan o'tish</A></>}>
      <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {msg && <Notice kind={offline ? "warn" : "error"}>{msg}</Notice>}
        <Field label="Login yoki email" name="id" autoComplete="username" autoCapitalize="none" spellCheck={false} value={id} onChange={(e) => setId(e.target.value)} error={errs.id} autoFocus />
        <Field label="Parol" name="pw" type="password" autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} error={errs.pw} right={<A href="/forgot" style={{ fontSize: 13 }}>Parolni unutdingizmi?</A>} />
        <button className="mw-btn primary" type="submit" disabled={busy}>{busy ? "Tekshirilmoqda…" : "Kirish"}</button>
        {offline && (
          <button type="button" className="mw-btn" onClick={() => enterDemo(id.trim() || "jahongirxon")}>Demo rejimda kirish</button>
        )}
      </form>
      <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--mu)", fontSize: 12 }}>
        <span style={{ flex: 1, height: 1, background: "var(--bd)" }} />yoki<span style={{ flex: 1, height: 1, background: "var(--bd)" }} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" className="mw-btn" style={{ flex: 1 }} onClick={() => toast("Google orqali kirish serverda sozlangach ishlaydi")}>Google</button>
        <button type="button" className="mw-btn" style={{ flex: 1 }} onClick={() => toast("GitHub orqali kirish serverda sozlangach ishlaydi")}>GitHub</button>
      </div>
    </AuthLayout>
  );
}
