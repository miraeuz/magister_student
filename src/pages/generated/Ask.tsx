/* Generated from the approved student design (page: Community: savol berish). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Ask() {
  const v = useShellVals();
  return (
    <Shell layer="com" subTitle="COMMUNITY" subActive="qa" subItems={[["Savol-javob", "chat", "/community", "qa", ""], ["Guruh chati", "inbox", "/community/chat", "chat", "5"], ["O'quv guruhlari", "users", "/community/groups", "groups", ""], ["Mentorlar", "hand", "/community/mentors", "mentors", ""], ["Saqlanganlar", "bookmark", "/community/saved", "saved", ""]]} crumbs={[["Community", "/community"], ["Savol berish", "/community/ask"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600" }}>
              Savol berish
            </h1>
            <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--mu)" }}>
              Aniq savol tezroq javob oladi. Savol uchun +30 XP.
            </p>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "22px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
              Savol sarlavhasi
              <input type="text" defaultValue="" placeholder="Masalan: Logistik modelda K ni ma'lumotdan qanday topaman?" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", borderRadius: "12px" }} />
              <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                Kamida 15 belgi. Bitta jumlada, savol shaklida.
              </span>
            </label>
            <div style={{ marginTop: "16px" }}>
              <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                Batafsil
              </div>
              <div style={{ border: "1px solid var(--bd)", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "6px 10px", background: "var(--bg)", borderBottom: "1px solid var(--bd)" }}>
                  <B aria-label="Qalin" title="Qalin" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    B
                  </B>
                  <B aria-label="Kursiv" title="Kursiv" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <em>
                      I
                    </em>
                  </B>
                  <B aria-label="Formula" title="Formula" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    ∑
                  </B>
                  <B aria-label="Kod" title="Kod" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8l-5 4 5 4"></path>
                      <path d="M16 8l5 4-5 4"></path>
                      <path d="M13 5l-2 14"></path>
                    </svg>
                  </B>
                  <B aria-label="Rasm" title="Rasm" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </B>
                  <B aria-label="Fayl biriktirish" title="Fayl biriktirish" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 11l-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"></path>
                    </svg>
                  </B>
                  <B aria-label="Havola" title="Havola" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path>
                      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"></path>
                    </svg>
                  </B>
                  <span style={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
                    <B aria-pressed="true" style={{ height: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px" }}>
                      Yozish
                    </B>
                    <B aria-pressed="false" style={{ height: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px" }}>
                      Ko'rib chiqish
                    </B>
                  </span>
                </div>
                <label>
                  <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
                    Savol matni
                  </span>
                  <textarea rows={8} placeholder="Nima qilmoqchi edingiz, nima chiqdi va nimani sinab ko'rdingiz? Formula uchun $...$, kod uchun kod tugmasidan foydalaning." style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "14px", border: "0", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "15px", lineHeight: "1.6", resize: "vertical" }} />
                </label>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                  grafik.png · 84 KB
                  <B aria-label="grafik.png ni olib tashlash" style={{ width: "24px", height: "24px", border: "0", background: "transparent", color: "var(--mu)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12"></path>
                      <path d="M18 6L6 18"></path>
                    </svg>
                  </B>
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)", alignSelf: "center" }}>
                  Ko'pi bilan 10 ta fayl
                </span>
              </div>
            </div>
          </section>
          <h2 style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: "600" }}>
            Kim ko'radi?
          </h2>
          <div role="radiogroup" aria-label="Kim ko'radi" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", padding: "16px", border: "2px solid var(--ac)", borderRadius: "16px", background: "var(--sf)", cursor: "pointer" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                    <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                    <path d="M18 14a6 6 0 0 1 3.5 6"></path>
                  </svg>
                </span>
                <input type="radio" name="aud" defaultChecked={true} style={{ width: "20px", height: "20px", accentColor: "var(--ac)" }} />
              </span>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                Faqat guruhim
              </span>
              <span style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.45" }}>
                AM-301 talabalari va o'qituvchilari. Uy vazifasi bo'yicha savollar uchun.
              </span>
            </label>
            <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--sf)", cursor: "pointer" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                    <path d="M4 19V5"></path>
                  </svg>
                </span>
                <input type="radio" name="aud" style={{ width: "20px", height: "20px", accentColor: "var(--ac)" }} />
              </span>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                Universitetim
              </span>
              <span style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.45" }}>
                NamDU dagi barcha talaba va o'qituvchilar.
              </span>
            </label>
            <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--sf)", cursor: "pointer" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18"></path>
                    <path d="M12 3a14 14 0 0 1 0 18"></path>
                    <path d="M12 3a14 14 0 0 0 0 18"></path>
                  </svg>
                </span>
                <input type="radio" name="aud" style={{ width: "20px", height: "20px", accentColor: "var(--ac)" }} />
              </span>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                Hamma
              </span>
              <span style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.45" }}>
                MathWeb dagi har bir foydalanuvchi. Eng ko'p javob shu yerda.
              </span>
            </label>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "22px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ flex: "1 1 240px", minWidth: "0" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                  Teglar
                  <input type="text" defaultValue="Demografiya, Python" placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", borderRadius: "12px" }} />
                  <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                    Ko'pi bilan 5 ta.
                  </span>
                </label>
              </div>
              <div style={{ flex: "1 1 240px", minWidth: "0" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                  Mavzuga bog'lash (ixtiyoriy)
                  <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", borderRadius: "12px" }}>
                    <option>
                      6.2. Ferxyulst-Perl (logistik) modeli
                    </option>
                    <option>
                      Bog'lanmagan
                    </option>
                  </select>
                </label>
              </div>
              <div style={{ flex: "1 1 240px", minWidth: "0" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                  Repozitoriyaga bog'lash (ixtiyoriy)
                  <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", borderRadius: "12px" }}>
                    <option>
                      Bog'lanmagan
                    </option>
                    <option>
                      jahongirxon / rk4-solver
                    </option>
                    <option>
                      jahongirxon / logistik-eslatma
                    </option>
                  </select>
                  <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                    Ko'pi bilan 5 ta repozitoriya.
                  </span>
                </label>
              </div>
            </div>
          </section>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
            <A href="/community/question" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L10 14"></path>
                <path d="M21 3l-7 18-4-7-7-4z"></path>
              </svg>
              Savolni e'lon qilish
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              Qoralamaga saqlash
            </A>
            <span style={{ fontSize: "13px", color: "var(--mu)" }}>
              E'lon qilingach, guruhingiz o'qituvchilari ham ko'radi.
            </span>
          </div>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              Yaxshi savol
            </h2>
            <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "14px", lineHeight: "1.5" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                1
              </span>
              <span>
                Sarlavha aniq savol bo'lsin
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "14px", lineHeight: "1.5" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                2
              </span>
              <span>
                Nimani sinab ko'rganingizni yozing
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "14px", lineHeight: "1.5" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                3
              </span>
              <span>
                Formula va kodni formatlang
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "14px", lineHeight: "1.5" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                4
              </span>
              <span>
                Xato matnini to'liq qo'ying
              </span>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Avval qidirib ko'ring
            </h2>
            <p style={{ margin: "0 0 10px", fontSize: "13px", lineHeight: "1.5", color: "var(--mu)" }}>
              Sarlavha yozganingizda o'xshash savollar shu yerda chiqadi.
            </p>
            <A href="/community/question" style={{ display: "block", padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.4", color: "var(--tx)" }}>
              Logistik modelda K ni haqiqiy ma'lumotdan qanday topish mumkin?
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                3 javob · o'qituvchi javob bergan
              </span>
            </A>
            <A href="/community/question" style={{ display: "block", padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.4", color: "var(--tx)" }}>
              curve_fit nega ogohlantirish beryapti?
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                5 javob · yechilgan
              </span>
            </A>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Tezroq kerakmi?
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "13px", lineHeight: "1.5", color: "var(--mu)" }}>
              Guruh chatida so'rang yoki mentor toping.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <A href="/community/chat" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbg)", color: "var(--ac)", border: "1px solid transparent" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 13l2-8h12l2 8v6H4z"></path>
                  <path d="M4 13h5a3 3 0 0 0 6 0h5"></path>
                </svg>
                Guruh chati
              </A>
              <A href="/community/mentors" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbg)", color: "var(--ac)", border: "1px solid transparent" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                </svg>
                Mentorlar
              </A>
            </div>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
