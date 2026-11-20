import { useMemo, useState } from "react";
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { Card, PageHead } from "../../components/ui";

const FAQ: [string, string][] = [
  ["Guruhga qanday qo'shilaman?", "O'qituvchingiz bergan guruh kodini (masalan AM-301) Profil → Tahrirlash yoki «+» menyusidagi «Guruhga kod bilan qo'shilish» orqali kiriting. O'qituvchi tasdiqlagach topshiriqlar paydo bo'ladi."],
  ["XP va daraja qanday ishlaydi?", "Dars tugatish, masala yechish, Hub'ga yuklash va savollarga javob berish uchun XP olasiz. 20 ta daraja bor, to'liq jadval «Daraja va XP» sahifasida."],
  ["Kodni platformada qanday ishga tushiraman?", "Dars va Challenges sahifalaridagi muharrirda Python kodini yozing va «Ishga tushirish» tugmasini bosing. Kod xavfsiz izolyatsiyalangan muhitda, internet aloqasiz bajariladi."],
  ["Qanday fayllarni yuklash mumkin?", "Chat va Hub'da rasm, video, PDF, DOCX, CSV, XLSX, .py va .ipynb fayllari qabul qilinadi. Bitta fayl hajmi 10 MB dan oshmasligi kerak. Kod fayllari faqat ko'rsatiladi, ishga tushirilmaydi."],
  ["Topshiriqni muddatdan keyin topshirsam nima bo'ladi?", "Topshiriq «Muddati o'tgan» deb belgilanadi. Baholash qoidasini o'qituvchingiz belgilaydi, aniqlashtirish uchun guruh chatida yozing."],
  ["Parolimni unutdim", "Kirish sahifasidagi «Parolni unutdingizmi?» havolasidan foydalaning. Pochtangizga tiklash havolasi yuboriladi."],
  ["Interfeys tilini qanday o'zgartiraman?", "Yuqori o'ngdagi profil doirasini bosing → «Til». O'zbek, English va Русский mavjud."],
  ["Hisobimni o'chirsam ma'lumotlarim nima bo'ladi?", "Hisob 30 kun davomida «yumshoq o'chirilgan» holatda saqlanadi va shu muddatda tiklash mumkin."],
];
const KEYS: [string, string][] = [["/ yoki Ctrl+K", "Qidiruvni ochish (sahifalarga tez o'tish)"], ["Esc", "Ochiq menyu yoki qidiruvni yopish"], ["↑ ↓ Enter", "Qidiruv natijalarida tanlash"]];

export default function Help() {
  const [q, setQ] = useState("");
  const list = useMemo(() => FAQ.filter(([a, b]) => `${a} ${b}`.toLowerCase().includes(q.trim().toLowerCase())), [q]);
  return (
    <Shell layer="help" subTitle="" subActive="" subItems={[]} crumbs={[["Yordam", "/help"]]} maxW={860}>
      <PageHead title="Yordam" sub="Ko'p so'raladigan savollar va aloqa." />
      <input className="mw-input" type="search" aria-label="Yordam bo'yicha qidirish" placeholder="Savolni qidiring…" value={q} onChange={(e) => setQ(e.target.value)} />
      <Card>
        {list.length === 0 && <p style={{ margin: 0, color: "var(--mu)" }}>«{q}» bo'yicha javob topilmadi. Pastdagi aloqa bo'limidan foydalaning.</p>}
        {list.map(([a, b], i) => (
          <details key={a} style={{ borderTop: i ? "1px solid var(--bd)" : 0, padding: "10px 0" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 14.5 }}>{a}</summary>
            <p style={{ margin: "8px 0 0", color: "var(--mu)", fontSize: 14, lineHeight: 1.6 }}>{b}</p>
          </details>
        ))}
      </Card>
      <Card title="Klaviatura yorliqlari">
        <dl style={{ margin: 0 }}>
          {KEYS.map(([k, d], i) => (
            <div key={k} style={{ display: "flex", gap: 12, padding: "8px 0", borderTop: i ? "1px solid var(--bd)" : 0, fontSize: 13.5, alignItems: "center" }}>
              <dt><kbd style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, border: "1px solid var(--bd)", borderRadius: 4, padding: "1px 6px", background: "var(--bg)" }}>{k}</kbd></dt><dd style={{ margin: 0, color: "var(--mu)" }}>{d}</dd>
            </div>
          ))}
        </dl>
      </Card>
      <Card title="Aloqa">
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>Dars bo'yicha savol: <A href="/community/chat">guruh chatida</A> yoki <A href="/community/ask">Community</A>'da so'rang. Texnik muammo bo'lsa, o'qituvchingiz yoki platforma administratoriga murojaat qiling.</p>
      </Card>
    </Shell>
  );
}
