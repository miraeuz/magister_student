/* Generated from the approved student design (page: Ta'lim: topshiriq (test) sahifasi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Assignment() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="tasks" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Topshiriqlar", "/education/tasks"], ["Logistik model", "/education/assignment"]]} maxW={1560}>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "18px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px" }}>
          <div style={{ flex: "999 1 280px", minWidth: "0" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                Uy vazifasi
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                6.2-mavzu
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                1-urinish, jami 1 ta
              </span>
            </div>
            <h1 style={{ margin: "8px 0 0", fontSize: "20px", fontWeight: "600" }}>
              Logistik model: 10 ta savol
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--bg)" }}>
            <span style={{ display: "flex", color: "var(--warn)" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2"></path>
              </svg>
            </span>
            <div>
              <div style={{ fontSize: "11px", color: "var(--mu)" }}>
                Qolgan vaqt
              </div>
              <div style={{ fontSize: "20px", fontWeight: "600", fontFamily: "JetBrains Mono, monospace" }}>
                18:42
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "14px" }}>
          <div style={{ flex: "1 1 0" }}>
            <div role="img" aria-label="Javob berilgan savollar 30 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "30%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
            </div>
          </div>
          <span style={{ fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            3 / 10 javob berildi
          </span>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "22px", flex: "2 1 440px", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--mu)" }}>
              4-savol · 1 ball
            </span>
            <B style={{ minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 21V4"></path>
                <path d="M5 4h12l-2 4 2 4H5"></path>
              </svg>
              Belgilab qo'yish
            </B>
          </div>
          <p style={{ margin: "0 0 4px", fontSize: "16px", lineHeight: "1.6" }}>
            Logistik modelda populyatsiya soni muhit sig'imining yarmiga teng bo'lganda nima sodir bo'ladi?
          </p>
          <div style={{ margin: "12px 0", padding: "14px 16px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px", fontFamily: "Georgia, Times New Roman, serif", fontSize: "19px", fontStyle: "italic", textAlign: "center", overflowX: "auto" }}>
            dN/dt = r · N · (1 − N / K)
          </div>
          <fieldset style={{ border: "0", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <legend style={{ fontSize: "13px", color: "var(--mu)", marginBottom: "8px" }}>
              Bitta javobni tanlang
            </legend>
            <label style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "8px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", fontSize: "15px", cursor: "pointer" }}>
              <input type="radio" name="q4" style={{ width: "18px", height: "18px", accentColor: "var(--ac)" }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", color: "var(--mu)" }}>
                A
              </span>
              <span>
                O'sish to'xtaydi
              </span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "8px 14px", border: "2px solid var(--ac)", borderRadius: "8px", background: "var(--acbg)", fontSize: "15px", cursor: "pointer" }}>
              <input type="radio" name="q4" defaultChecked={true} style={{ width: "18px", height: "18px", accentColor: "var(--ac)" }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", color: "var(--mu)" }}>
                B
              </span>
              <span>
                O'sish tezligi eng katta qiymatga yetadi
              </span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "8px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", fontSize: "15px", cursor: "pointer" }}>
              <input type="radio" name="q4" style={{ width: "18px", height: "18px", accentColor: "var(--ac)" }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", color: "var(--mu)" }}>
                C
              </span>
              <span>
                Populyatsiya kamaya boshlaydi
              </span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "8px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", fontSize: "15px", cursor: "pointer" }}>
              <input type="radio" name="q4" style={{ width: "18px", height: "18px", accentColor: "var(--ac)" }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", color: "var(--mu)" }}>
                D
              </span>
              <span>
                O'sish tezligi eng kichik qiymatga tushadi
              </span>
            </label>
          </fieldset>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--bd)" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"></path>
                <path d="M11 6l-6 6 6 6"></path>
              </svg>
              Oldingi savol
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
              Keyingi savol
            </A>
          </div>
        </section>
        <div style={{ flex: "1 1 250px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Savollar
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <A href="#" aria-label="1-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)", border: "1px solid var(--okbtn)" }}>
                1
              </A>
              <A href="#" aria-label="2-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)", border: "1px solid var(--okbtn)" }}>
                2
              </A>
              <A href="#" aria-label="3-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--warn)", background: "var(--warnbg)", border: "1px solid var(--warnbd)" }}>
                3
              </A>
              <A href="#" aria-label="4-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--acbtn)", border: "1px solid var(--acbtn)" }}>
                4
              </A>
              <A href="#" aria-label="5-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                5
              </A>
              <A href="#" aria-label="6-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                6
              </A>
              <A href="#" aria-label="7-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                7
              </A>
              <A href="#" aria-label="8-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                8
              </A>
              <A href="#" aria-label="9-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                9
              </A>
              <A href="#" aria-label="10-savol" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                10
              </A>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "14px", fontSize: "12px", color: "var(--mu)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "var(--okbtn)" }}></span>
                Javob berilgan
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "var(--acbtn)" }}></span>
                Joriy savol
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "var(--warnbg)", border: "1px solid var(--warnbd)" }}></span>
                Qaytish uchun belgilangan
              </span>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ fontSize: "13px", lineHeight: "1.6", color: "var(--mu)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span>
                  Muddat
                </span>
                <span style={{ color: "var(--tx)", fontWeight: "500" }}>
                  bugun 20:00
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span>
                  Yechimlar
                </span>
                <span style={{ color: "var(--tx)", fontWeight: "500" }}>
                  muddatdan keyin
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span>
                  Mukofot
                </span>
                <span style={{ color: "var(--tx)", fontWeight: "500" }}>
                  60 XP gacha
                </span>
              </div>
            </div>
            <A href="#" style={{ marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "44px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", color: "#ffffff", background: "var(--okbtn)" }}>
              Topshirish
            </A>
            <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "8px", lineHeight: "1.5" }}>
              Vaqt tugasa, javoblaringiz avtomatik topshiriladi. Topshirgandan keyin o'zgartirib bo'lmaydi.
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}
