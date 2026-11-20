/* Generated from the approved student design (page: Ta'lim: amaliy ish topshirish). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Practical() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="tasks" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Topshiriqlar", "/education/tasks"], ["A9 amaliy ish", "/education/practical"]]} maxW={1560}>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px" }}>
          <div style={{ flex: "999 1 300px", minWidth: "0" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                Amaliy ish
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                A9
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                6.1-6.2-mavzular
              </span>
            </div>
            <h1 style={{ margin: "8px 0 4px", fontSize: "22px", fontWeight: "600" }}>
              A9: Demografik modellarga doir masalalar
            </h1>
            <div style={{ fontSize: "13px", color: "var(--mu)" }}>
              M. Dadaxanov · mezon bo'yicha qo'lda baholanadi · 200 XP gacha
            </div>
          </div>
          <div style={{ padding: "8px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--bg)" }}>
            <div style={{ fontSize: "11px", color: "var(--mu)" }}>
              Muddat
            </div>
            <div style={{ fontSize: "18px", fontWeight: "600" }}>
              24-noyabr, 23:59
            </div>
            <div style={{ fontSize: "12px", color: "var(--warn)" }}>
              8 kun qoldi
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        <div style={{ flex: "2 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Topshiriq sharti
              </h2>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
              Berilgan aholi ma'lumotlari (aholi_1990_2025.csv) asosida quyidagilarni bajaring:
            </p>
            <ol style={{ margin: "0 0 10px", paddingLeft: "22px", fontSize: "15px", lineHeight: "1.7" }}>
              <li>
                Maltus modelining r koeffitsiyentini 1990-2005-yillar ma'lumotidan toping.
              </li>
              <li>
                Shu model bilan 2025-yilni bashorat qiling va haqiqiy qiymat bilan solishtiring.
              </li>
              <li>
                Logistik modelni moslang va ikkala model xatoligini taqqoslang.
              </li>
              <li>
                Qaysi model nima uchun yaxshiroq ekanini 5-6 jumlada tushuntiring.
              </li>
            </ol>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v11"></path>
                  <path d="M7 11l5 5 5-5"></path>
                  <path d="M5 20h14"></path>
                </svg>
                aholi_1990_2025.csv
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v11"></path>
                  <path d="M7 11l5 5 5-5"></path>
                  <path d="M5 20h14"></path>
                </svg>
                A9 masalalari (PDF)
              </A>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Ishingizni yuklang
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                PDF, ZIP, IPYNB · har biri 20 MB gacha
              </span>
            </div>
            <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "140px", padding: "16px", border: "2px dashed var(--bd)", borderRadius: "8px", background: "var(--bg)", color: "var(--mu)", textAlign: "center", cursor: "pointer" }}>
              <span style={{ display: "flex", color: "var(--ac)" }}>
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16V5"></path>
                  <path d="M7 9l5-5 5 5"></path>
                  <path d="M5 20h14"></path>
                </svg>
              </span>
              <span style={{ fontSize: "14px", color: "var(--tx)", fontWeight: "500" }}>
                Fayllarni shu yerga tashlang yoki tanlang
              </span>
              <span style={{ fontSize: "12px" }}>
                Yoki Hub'dagi repozitoriyangizni biriktiring
              </span>
              <input type="file" multiple style={{ position: "absolute", width: "1px", height: "1px", opacity: "0" }} />
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px" }}>
                <span style={{ display: "flex", color: "var(--ac)" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                  a9_yechim.pdf
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  1,2 MB
                </span>
                <button aria-label="a9_yechim.pdf ni olib tashlash" style={{ width: "36px", height: "36px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12"></path>
                    <path d="M18 6L6 18"></path>
                  </svg>
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px" }}>
                <span style={{ display: "flex", color: "var(--ac)" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                  a9_hisob.ipynb
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  86 KB
                </span>
                <button aria-label="a9_hisob.ipynb ni olib tashlash" style={{ width: "36px", height: "36px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12"></path>
                    <path d="M18 6L6 18"></path>
                  </svg>
                </button>
              </div>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600", marginTop: "14px" }}>
              O'qituvchiga izoh (ixtiyoriy)
              <textarea rows={3} placeholder="Masalan: 3-masalada ikki xil usulni sinab ko'rdim" style={{ boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", resize: "vertical" }} />
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginTop: "14px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                Topshirish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Qoralama sifatida saqlash
              </A>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                Topshirgandan keyin o'qituvchi qaytarmaguncha o'zgartirib bo'lmaydi.
              </span>
            </div>
          </section>
        </div>
        <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Baholash mezonlari
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                jami 80 ball
              </span>
            </div>
            <div style={{ marginTop: "-4px" }}>
              <div style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <div style={{ flex: "1 1 0", minWidth: "0" }}>
                  <div style={{ fontSize: "14px", fontWeight: "600" }}>
                    To'g'rilik
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--mu)", lineHeight: "1.5" }}>
                    Koeffitsiyentlar va bashorat to'g'ri hisoblangan
                  </div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
                  30 ball
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <div style={{ flex: "1 1 0", minWidth: "0" }}>
                  <div style={{ fontSize: "14px", fontWeight: "600" }}>
                    Model tavsifi
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--mu)", lineHeight: "1.5" }}>
                    Farazlar va tenglamalar aniq yozilgan
                  </div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
                  20 ball
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <div style={{ flex: "1 1 0", minWidth: "0" }}>
                  <div style={{ fontSize: "14px", fontWeight: "600" }}>
                    Kod sifati
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--mu)", lineHeight: "1.5" }}>
                    Kod ishga tushadi, o'qilishi oson
                  </div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
                  15 ball
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <div style={{ flex: "1 1 0", minWidth: "0" }}>
                  <div style={{ fontSize: "14px", fontWeight: "600" }}>
                    Xulosa
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--mu)", lineHeight: "1.5" }}>
                    Modellar asosli taqqoslangan
                  </div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
                  15 ball
                </span>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Holat
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", fontSize: "13px", color: "var(--ok)" }}>
              <span style={{ display: "flex" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              Topshiriq ochildi: 10-noyabr
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", fontSize: "13px", color: "var(--tx)" }}>
              <span style={{ display: "flex" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </span>
              Topshirish: kutilmoqda
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", fontSize: "13px", color: "var(--mu)" }}>
              <span style={{ display: "flex" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </span>
              O'qituvchi tekshiruvi
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", fontSize: "13px", color: "var(--mu)" }}>
              <span style={{ display: "flex" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </span>
              Baho va izoh
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}
