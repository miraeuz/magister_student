import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { A } from "../../components/A";
import { Field, Notice } from "../../components/ui";
import { AuthError, DEMO_ALLOWED, login, register } from "../../api/auth";
import { api } from "../../api/client";
import { useAuth } from "../../store/auth";
import { useUI, type Lang } from "../../store/ui";
import { AuthLayout } from "./AuthLayout";

const RULES: [string, (p: string) => boolean][] = [
  ["Kamida 8 belgi", (p) => p.length >= 8],
  ["Harf va raqam aralash", (p) => /[A-Za-zЀ-ӿ]/.test(p) && /\d/.test(p)],
  ["Faqat raqamlardan iborat emas", (p) => p.length > 0 && !/^\d+$/.test(p)],
];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9_-]/g, "");

export default function Register() {
  const go = useNavigate();
  const signIn = useAuth((s) => s.signIn);
  const uiLang = useUI((s) => s.lang);
  const [f, setF] = useState({ name: "", username: "", email: "", pw: "", pw2: "", group: "", lang: uiLang as Lang, terms: false });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState<string | null>(null);
  const [offline, setOffline] = useState(false);
  const [busy, setBusy] = useState(false);
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((o) => ({ ...o, [k]: v }));
  const score = useMemo(() => RULES.filter(([, ok]) => ok(f.pw)).length, [f.pw]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (f.name.trim().length < 2) e.name = "Ism-familiyangizni kiriting";
    if (!/^[a-z0-9_-]{3,40}$/.test(f.username)) e.username = "3–40 belgi: kichik lotin harflar, raqam, - yoki _";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "To'g'ri email kiriting";
    if (score < RULES.length) e.pw = "Parol talablarga javob bermaydi";
    if (f.pw2 !== f.pw) e.pw2 = "Parollar bir xil emas";
    if (!f.terms) e.terms = "Davom etish uchun shartlarga rozilik bering";
    return e;
  };
  const enterDemo = () => { signIn({ access: null, refresh: null, demo: true, user: { username: f.username, displayName: f.name.trim() } }); go("/", { replace: true }); };

  async function submit(e: FormEvent) {
    e.preventDefault();
    const er = validate(); setErrs(er); setMsg(null);
    if (Object.keys(er).length) { setTimeout(() => (document.querySelector("[aria-invalid=true]") as HTMLElement | null)?.focus(), 0); return; }
    setBusy(true);
    try {
      await register({ username: f.username, email: f.email, password: f.pw, display_name: f.name.trim(), language: f.lang });
      const t = await login(f.username, f.pw);
      signIn({ access: t.access, refresh: t.refresh, user: { username: f.username, displayName: f.name.trim() } });
      if (f.group.trim()) await api("/me/", { method: "PATCH", body: JSON.stringify({ group_code: f.group.trim().toUpperCase() }) }).catch(() => undefined);
      go("/", { replace: true });
    } catch (err) {
      if (err instanceof AuthError && err.unreachable) {
        if (DEMO_ALLOWED) { setOffline(true); setMsg("Server ulanmagan: hisob yaratilmadi. Demo rejimda davom etishingiz mumkin."); }
        else setMsg("Serverga ulanib bo'lmadi.");
      } else if (err instanceof AuthError) {
        const map: Record<string, string> = {};
        for (const [k, v] of Object.entries(err.fields)) map[k === "display_name" ? "name" : k === "password" ? "pw" : k] = v;
        setErrs(map); setMsg(Object.keys(map).length ? "Maydonlarni tekshiring." : err.message);
      } else setMsg("Xatolik yuz berdi.");
    } finally { setBusy(false); }
  }

  const bar = ["var(--bd)", "var(--bad)", "var(--warn)", "var(--ok)"][score]!;
  return (
    <AuthLayout title="Ro'yxatdan o'tish" sub="Bir daqiqada hisob yarating." footer={<>Hisobingiz bormi? <A href="/login" style={{ fontWeight: 600 }}>Kirish</A></>}>
      <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {msg && <Notice kind={offline ? "warn" : "error"}>{msg}</Notice>}
        <Field label="Ism va familiya" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} error={errs.name} autoFocus />
        <Field label="Foydalanuvchi nomi" autoComplete="username" autoCapitalize="none" spellCheck={false} value={f.username} onChange={(e) => set("username", slug(e.target.value))} error={errs.username} hint="Profilingiz manzili: mathweb.uz/@nom" />
        <Field label="Email" type="email" autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} error={errs.email} />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Field label="Parol" type="password" autoComplete="new-password" value={f.pw} onChange={(e) => set("pw", e.target.value)} error={errs.pw} />
          <div aria-hidden style={{ display: "flex", gap: 4 }}>{[1, 2, 3].map((i) => <span key={i} style={{ flex: 1, height: 4, borderRadius: 4, background: i <= score ? bar : "var(--h0)" }} />)}</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 12.5, color: "var(--mu)", display: "flex", flexDirection: "column", gap: 2 }}>
            {RULES.map(([t, ok]) => <li key={t} style={{ color: ok(f.pw) ? "var(--ok)" : undefined }}>{ok(f.pw) ? "✓" : "○"} {t}</li>)}
          </ul>
        </div>
        <Field label="Parolni takrorlang" type="password" autoComplete="new-password" value={f.pw2} onChange={(e) => set("pw2", e.target.value)} error={errs.pw2} />
        <Field label="Guruh kodi (ixtiyoriy)" value={f.group} onChange={(e) => set("group", e.target.value)} placeholder="AM-301" hint="O'qituvchingiz bergan kod. Keyinroq ham kiritish mumkin." />
        <div className="mw-field">
          <label htmlFor="reg-lang">Interfeys tili</label>
          <select id="reg-lang" className="mw-input" value={f.lang} onChange={(e) => set("lang", e.target.value as Lang)}>
            <option value="uz">O'zbek</option><option value="en">English</option><option value="ru">Русский</option>
          </select>
        </div>
        <div>
          <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5 }}>
            <input type="checkbox" checked={f.terms} onChange={(e) => set("terms", e.target.checked)} aria-invalid={!!errs.terms} style={{ width: 18, height: 18, marginTop: 2 }} />
            <span><A href="/legal" style={{ fontWeight: 600 }}>Foydalanish shartlari</A> va maxfiylik siyosatiga roziman</span>
          </label>
          {errs.terms && <div role="alert" style={{ color: "var(--bad)", fontSize: 12.5, marginTop: 4 }}>{errs.terms}</div>}
        </div>
        <button className="mw-btn primary" type="submit" disabled={busy}>{busy ? "Yaratilmoqda…" : "Hisob yaratish"}</button>
        {offline && <button type="button" className="mw-btn" onClick={enterDemo}>Demo rejimda davom etish</button>}
      </form>
    </AuthLayout>
  );
}
