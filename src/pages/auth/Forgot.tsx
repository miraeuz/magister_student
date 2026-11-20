import { useEffect, useState, type FormEvent } from "react";
import { A } from "../../components/A";
import { Field, Notice } from "../../components/ui";
import { AuthError, DEMO_ALLOWED, requestReset } from "../../api/auth";
import { AuthLayout } from "./AuthLayout";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState<string>();
  const [sent, setSent] = useState(false);
  const [demo, setDemo] = useState(false);
  const [busy, setBusy] = useState(false);
  const [wait, setWait] = useState(0);
  useEffect(() => { if (wait <= 0) return; const t = setTimeout(() => setWait(wait - 1), 1000); return () => clearTimeout(t); }, [wait]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setErr("To'g'ri email kiriting"); return; }
    setErr(undefined); setBusy(true);
    try { await requestReset(email.trim()); setSent(true); setWait(30); }
    catch (x) {
      if (x instanceof AuthError && x.unreachable && DEMO_ALLOWED) { setDemo(true); setSent(true); setWait(30); }
      else setErr(x instanceof Error ? x.message : "Xatolik yuz berdi.");
    } finally { setBusy(false); }
  }

  if (sent) {
    return (
      <AuthLayout title="Pochtangizni tekshiring" footer={<A href="/login" style={{ fontWeight: 600 }}>← Kirishga qaytish</A>}>
        <Notice kind="ok">Agar <strong>{email}</strong> ro'yxatdan o'tgan bo'lsa, parolni tiklash havolasi yuborildi. Havola cheklangan muddat amal qiladi.</Notice>
        {demo && <Notice kind="warn">Demo rejim: server ulanmagan, haqiqiy xat yuborilmadi.</Notice>}
        <button className="mw-btn" disabled={wait > 0} onClick={() => { setSent(false); }}>{wait > 0 ? `Qayta yuborish: ${wait} s` : "Qayta yuborish"}</button>
        <p style={{ fontSize: 13, color: "var(--mu)", margin: 0 }}>Xat kelmasa, «Spam» papkasini ham tekshiring.</p>
      </AuthLayout>
    );
  }
  return (
    <AuthLayout title="Parolni tiklash" sub="Emailingizni kiriting, tiklash havolasini yuboramiz." footer={<A href="/login" style={{ fontWeight: 600 }}>← Kirishga qaytish</A>}>
      <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Field label="Email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} error={err} autoFocus />
        <button className="mw-btn primary" type="submit" disabled={busy}>{busy ? "Yuborilmoqda…" : "Havola yuborish"}</button>
      </form>
    </AuthLayout>
  );
}
