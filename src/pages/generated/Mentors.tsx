/* Generated from the approved student design (page: Community: mentorlar). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Mentors() {
  const v = useShellVals();
  return (
    <Shell layer="com" subTitle="COMMUNITY" subActive="mentors" subItems={[["Savol-javob", "chat", "/community", "qa", ""], ["Guruh chati", "inbox", "/community/chat", "chat", "5"], ["O'quv guruhlari", "users", "/community/groups", "groups", ""], ["Mentorlar", "hand", "/community/mentors", "mentors", ""], ["Saqlanganlar", "bookmark", "/community/saved", "saved", ""]]} crumbs={[["Community", "/community"], ["Mentorlar", "/community/mentors"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600" }}>
                Mentorlar
              </h1>
              <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--mu)" }}>
                Tajribali foydalanuvchilar va o'qituvchilar. So'rov yuboring: qabul qilinsa, shaxsiy suhbat ochiladi.
              </p>
            </div>
            <label style={{ flex: "0 1 300px", display: "flex", alignItems: "center", gap: "8px", height: "44px", boxSizing: "border-box", padding: "0 16px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
              <input type="search" placeholder="Mavzu yoki ism bo'yicha" aria-label="Mentor qidirish" style={{ flex: "1 1 0", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "14px", color: "var(--tx)" }} />
            </label>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <article style={{ flex: "1 1 270px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "112px", background: "var(--okbg)" }}>
                <span style={{ position: "absolute", top: "14px", left: "16px", fontSize: "12px", fontWeight: "600", color: "var(--ok)" }}>
                  O'QITUVCHI
                </span>
                <span style={{ position: "absolute", top: "12px", right: "14px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", whiteSpace: "nowrap" }}>
                    Bugun faol
                  </span>
                </span>
                <span style={{ position: "absolute", left: "16px", bottom: "-32px", width: "84px", height: "84px", borderRadius: "999px", background: "var(--sf)", color: "var(--ok)", border: "4px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                  ShB
                </span>
              </div>
              <div style={{ padding: "42px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 auto" }}>
                <div>
                  <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>
                    Sh. Boltibayev
                  </h2>
                  <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                    O'qituvchi · NamDU
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                    Modellashtirish
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--pu)", background: "var(--pubg)" }}>
                    ODE
                  </A>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)", marginTop: "auto" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  46 kishiga yordam bergan
                </div>
                <A href="/community/chat" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbg)", color: "var(--ac)", border: "1px solid transparent" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                  </svg>
                  Suhbatni ochish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 270px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "112px", background: "var(--pubg)" }}>
                <span style={{ position: "absolute", top: "14px", left: "16px", fontSize: "12px", fontWeight: "600", color: "var(--pu)" }}>
                  13-DARAJA · USTOZ
                </span>
                <span style={{ position: "absolute", top: "12px", right: "14px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", whiteSpace: "nowrap" }}>
                    Bugun faol
                  </span>
                </span>
                <span style={{ position: "absolute", left: "16px", bottom: "-32px", width: "84px", height: "84px", borderRadius: "999px", background: "var(--sf)", color: "var(--pu)", border: "4px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                  NK
                </span>
              </div>
              <div style={{ padding: "42px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 auto" }}>
                <div>
                  <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>
                    Nodira K.
                  </h2>
                  <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                    4-kurs · Amaliy matematika
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--pu)", background: "var(--pubg)" }}>
                    Issiqlik tenglamasi
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--warn)", background: "var(--warnbg)" }}>
                    Furye
                  </A>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)", marginTop: "auto" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  31 kishiga yordam bergan
                </div>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  So'rov yuborish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 270px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "112px", background: "var(--acbg)" }}>
                <span style={{ position: "absolute", top: "14px", left: "16px", fontSize: "12px", fontWeight: "600", color: "var(--ac)" }}>
                  12-DARAJA · YO'LBOSHCHI
                </span>
                <span style={{ position: "absolute", top: "12px", right: "14px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", whiteSpace: "nowrap" }}>
                    Kecha faol
                  </span>
                </span>
                <span style={{ position: "absolute", left: "16px", bottom: "-32px", width: "84px", height: "84px", borderRadius: "999px", background: "var(--sf)", color: "var(--ac)", border: "4px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                  OT
                </span>
              </div>
              <div style={{ padding: "42px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 auto" }}>
                <div>
                  <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>
                    Otabek T.
                  </h2>
                  <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                    Magistr · NamDU
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ac)", background: "var(--acbg)" }}>
                    Python
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                    Sonli usullar
                  </A>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)", marginTop: "auto" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  28 kishiga yordam bergan
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", color: "var(--warn)", background: "var(--warnbg)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  So'rov yuborilgan
                </span>
              </div>
            </article>
            <article style={{ flex: "1 1 270px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "112px", background: "var(--warnbg)" }}>
                <span style={{ position: "absolute", top: "14px", left: "16px", fontSize: "12px", fontWeight: "600", color: "var(--warn)" }}>
                  12-DARAJA · YO'LBOSHCHI
                </span>
                <span style={{ position: "absolute", top: "12px", right: "14px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", whiteSpace: "nowrap" }}>
                    Bugun faol
                  </span>
                </span>
                <span style={{ position: "absolute", left: "16px", bottom: "-32px", width: "84px", height: "84px", borderRadius: "999px", background: "var(--sf)", color: "var(--warn)", border: "4px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                  ZA
                </span>
              </div>
              <div style={{ padding: "42px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 auto" }}>
                <div>
                  <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>
                    Zarina A.
                  </h2>
                  <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                    4-kurs · Amaliy matematika
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--warn)", background: "var(--warnbg)" }}>
                    Regressiya
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--bad)", background: "var(--badbg)" }}>
                    Statistika
                  </A>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)", marginTop: "auto" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  19 kishiga yordam bergan
                </div>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  So'rov yuborish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 270px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "112px", background: "var(--badbg)" }}>
                <span style={{ position: "absolute", top: "14px", left: "16px", fontSize: "12px", fontWeight: "600", color: "var(--bad)" }}>
                  14-DARAJA · INNOVATOR
                </span>
                <span style={{ position: "absolute", top: "12px", right: "14px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", whiteSpace: "nowrap" }}>
                    3 kun oldin
                  </span>
                </span>
                <span style={{ position: "absolute", left: "16px", bottom: "-32px", width: "84px", height: "84px", borderRadius: "999px", background: "var(--sf)", color: "var(--bad)", border: "4px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                  FR
                </span>
              </div>
              <div style={{ padding: "42px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 auto" }}>
                <div>
                  <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>
                    Farrux R.
                  </h2>
                  <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                    Magistr · boshqa universitet
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--bad)", background: "var(--badbg)" }}>
                    Chiziqli dasturlash
                  </A>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)", marginTop: "auto" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  52 kishiga yordam bergan
                </div>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  So'rov yuborish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 270px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "112px", background: "var(--acbg)" }}>
                <span style={{ position: "absolute", top: "14px", left: "16px", fontSize: "12px", fontWeight: "600", color: "var(--ac)" }}>
                  O'QITUVCHI
                </span>
                <span style={{ position: "absolute", top: "12px", right: "14px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", whiteSpace: "nowrap" }}>
                    Kecha faol
                  </span>
                </span>
                <span style={{ position: "absolute", left: "16px", bottom: "-32px", width: "84px", height: "84px", borderRadius: "999px", background: "var(--sf)", color: "var(--ac)", border: "4px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                  MD
                </span>
              </div>
              <div style={{ padding: "42px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 auto" }}>
                <div>
                  <h2 style={{ margin: "0", fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>
                    M. Dadaxanov
                  </h2>
                  <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                    O'qituvchi · NamDU
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ac)", background: "var(--acbg)" }}>
                    Amaliy mashg'ulot
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                    Demografiya
                  </A>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)", marginTop: "auto" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  37 kishiga yordam bergan
                </div>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  So'rov yuborish
                </A>
              </div>
            </article>
          </div>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              So'rovlarim
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                ShB
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Sh. Boltibayev
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  Kurs ishi mavzusi
                </span>
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                Qabul qilingan
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                OT
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Otabek T.
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  RK4 qadam hajmi
                </span>
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                Kutilmoqda
              </span>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Kim mentor bo'la oladi?
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              12-daraja, 25 ta tizim baholagan yutuq va oxirgi 14 kunda faollik. Guruh o'qituvchilari doim mentor.
            </p>
            <div>
              <div role="img" aria-label="Mentorlikka yo'l 30 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                <div style={{ width: "30%", height: "8px", background: "var(--ac)", borderRadius: "999px" }}></div>
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "6px" }}>
                Siz: 8-daraja. 12-darajagacha 16 760 XP.
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Odob qoidasi
            </h2>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Mentor tayyor javob bermaydi, yo'l ko'rsatadi. Kuniga 3 tadan ortiq so'rov yuborib bo'lmaydi.
            </p>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
