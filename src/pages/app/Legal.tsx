import { Link } from "react-router";
import { Notice } from "../../components/ui";
import { useShellVals } from "../../store/useShellVals";

/** Public page (reachable from the register form). Draft text: needs the university's legal review before launch. */
export default function Legal() {
  const v = useShellVals();
  const H = ({ children }: { children: string }) => <h2 style={{ fontSize: 17, margin: "24px 0 6px" }}>{children}</h2>;
  return (
    <div data-theme={v.theme} data-accent={v.accent} style={{ height: "100dvh", overflowY: "auto", background: "var(--bg)", color: "var(--tx)" }}>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px 64px", lineHeight: 1.65, fontSize: 14.5 }}>
        <Link to="/register" style={{ fontSize: 13.5 }}>← Orqaga</Link>
        <h1 style={{ fontSize: 26, margin: "12px 0 16px" }}>Foydalanish shartlari va maxfiylik</h1>
        <Notice kind="warn">Bu matn loyiha uchun namunaviy qoralama. Ishga tushirishdan oldin universitetning huquqiy xizmati tomonidan ko'rib chiqilishi kerak.</Notice>
        <H>1. Platforma haqida</H>
        <p>MathWeb: matematik modellashtirishni o'rgatuvchi o'quv platformasi. Hisob o'quv maqsadlarida yaratiladi va talabaning shaxsiy foydalanishi uchun mo'ljallangan.</p>
        <H>2. Hisob va xavfsizlik</H>
        <p>Parolingizni boshqalarga bermang. Hisobingizdagi harakatlar uchun o'zingiz javobgarsiz. Shubhali faollikni sezsangiz, parolni darhol o'zgartiring.</p>
        <H>3. Mazmun qoidalari</H>
        <p>Boshqalarning ishini o'zlashtirish, haqorat, zararli kod yuklash va platforma ishiga xalaqit berish taqiqlanadi. Hub'ga yuklangan ishlar uchun mualliflik huquqi sizda qoladi; ommaviy qilsangiz, boshqalar uni ko'rishi va fork qilishi mumkin.</p>
        <H>4. Qaysi ma'lumotlar saqlanadi</H>
        <p>Ism, email, foydalanuvchi nomi, o'quv natijalari, yuklangan fayllar va faollik tarixi. Profil ko'rinishini Sozlamalar → Maxfiylik bo'limida boshqarasiz.</p>
        <H>5. Hisobni o'chirish</H>
        <p>Hisobni o'chirsangiz, u 30 kun saqlanadi va shu muddatda tiklanishi mumkin, so'ng ma'lumotlar o'chiriladi.</p>
      </main>
    </div>
  );
}
