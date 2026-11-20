import { useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { A } from "../../components/A";
import { Field, Notice } from "../../components/ui";
import { AuthError, confirmReset } from "../../api/auth";
import { toast } from "../../store/toast";
import { AuthLayout } from "./AuthLayout";

/** Target of the link in the reset e-mail: /auth/reset?uid=…&token=… (matches the backend's FRONTEND_URL link). */
export default function Reset() {
  const [sp] = useSearchParams();
  const go = useNavigate();
  const uid = sp.get("uid") ?? "", token = sp.get("token") ?? "";
  const [pw, setPw] = useState(""), [pw2, setPw2] = useState("");
  const [errs, setErrs] = useState<{ pw?: string; pw2?: string }>({});
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!uid || !token) {
    return (
      <AuthLayout title="Havola yaroqsiz" footer={<A href="/login" style={{ fontWeight: 600 }}>← Kirishga qaytish</A>}>
        <Notice kind="error">Parolni tiklash havolasi to'liq emas yoki muddati o'tgan.</Notice>
        <A href="/forgot" className="mw-btn primary">Yangi havola so'rash</A>
      </AuthLayout>
    );
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
    const er: typeof errs = {};
    if (pw.length < 8 || /^\d+$/.test(pw)) er.pw = "Kamida 8 belgi, faqat raqamlardan iborat bo'lmasin";
    if (pw !== pw2) er.pw2 = "Parollar bir xil emas";
    setErrs(er); setMsg(null);
    if (er.pw || er.pw2) return;
    setBusy(true);
    try { await confirmReset({ uid, token, password: pw }); toast("Parol yangilandi. Endi kirishingiz mumkin"); go("/login", { replace: true }); }
    catch (x) { setMsg(x instanceof AuthError ? (x.fields.password ?? x.message) : "Xatolik yuz berdi."); }
    finally { setBusy(false); }
  }
  return (
    <AuthLayout title="Yangi parol" sub="Hisobingiz uchun yangi parol o'rnating.">
      <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {msg && <Notice kind="error">{msg}</Notice>}
        <Field label="Yangi parol" type="password" autoComplete="new-password" value={pw} onChange={(e) => setPw(e.target.value)} error={errs.pw} autoFocus />
        <Field label="Parolni takrorlang" type="password" autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} error={errs.pw2} />
        <button className="mw-btn primary" type="submit" disabled={busy}>{busy ? "Saqlanmoqda…" : "Parolni saqlash"}</button>
      </form>
    </AuthLayout>
  );
}
