/* Generated from the approved student design (page: Community: savol-javob). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Community() {
  const v = useShellVals();
  return (
    <Shell layer="com" subTitle="COMMUNITY" subActive="qa" subItems={[["Savol-javob", "chat", "/community", "qa", ""], ["Guruh chati", "inbox", "/community/chat", "chat", "5"], ["O'quv guruhlari", "users", "/community/groups", "groups", ""], ["Mentorlar", "hand", "/community/mentors", "mentors", ""], ["Saqlanganlar", "bookmark", "/community/saved", "saved", ""]]} crumbs={[["Community", "/community"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ borderRadius: "20px", padding: "24px 26px", background: "var(--acbg)", border: "1px solid var(--bd)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }}>
            <div style={{ flex: "999 1 340px", minWidth: "0" }}>
              <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600", lineHeight: "1.25" }}>
                Savolingiz bormi? Guruhingiz shu yerda.
              </h1>
              <p style={{ margin: "8px 0 14px", fontSize: "15px", lineHeight: "1.55", color: "var(--mu)" }}>
                Savol bering, kursdoshingizga yordam bering yoki o'qituvchidan so'rang. Eng yaxshi javob uchun +150 XP.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <A href="/community/ask" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                  Savol berish
                </A>
                <A href="/community/chat" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 13l2-8h12l2 8v6H4z"></path>
                    <path d="M4 13h5a3 3 0 0 0 6 0h5"></path>
                  </svg>
                  Guruh chati
                </A>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "inline-flex" }}>
                <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>
                    DK
                  </span>
                </span>
                <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>
                    AS
                  </span>
                </span>
                <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>
                    MR
                  </span>
                </span>
                <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>
                    BT
                  </span>
                </span>
                <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>
                    SO
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                Hozir
                {" "}
                <strong style={{ color: "var(--tx)" }}>
                  9 kishi
                </strong>
                {" "}
                onlayn
              </span>
            </div>
          </section>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <nav aria-label="Saralash" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--acbtn)", border: "1px solid var(--acbtn)" }}>
                Guruhim
              </A>
              <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                Universitetim
              </A>
              <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                Hamma
              </A>
              <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                Javobsiz
              </A>
              <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
                Mening savollarim
              </A>
            </nav>
            <label style={{ flex: "999 1 200px", maxWidth: "320px", marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px", height: "40px", boxSizing: "border-box", padding: "0 14px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
              <input type="search" placeholder="Savollardan qidirish" aria-label="Savollardan qidirish" style={{ flex: "1 1 0", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "14px", color: "var(--tx)" }} />
            </label>
          </div>
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px", display: "flex", gap: "16px" }}>
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "52px" }}>
              <button aria-label="Foydali savol" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M6 11l6-6 6 6"></path>
                </svg>
              </button>
              <strong style={{ fontSize: "16px" }}>
                7
              </strong>
            </div>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  DK
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  Dilnoza K.
                </strong>
                <span>
                  3 soat oldin
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                  Faqat guruhim
                </span>
              </div>
              <A href="/community/question" style={{ display: "block", margin: "8px 0 6px", fontSize: "18px", fontWeight: "600", lineHeight: "1.35", color: "var(--tx)" }}>
                Logistik modelda K ni haqiqiy ma'lumotdan qanday topish mumkin?
              </A>
              <p style={{ margin: "0 0 10px", fontSize: "14px", lineHeight: "1.55", color: "var(--mu)" }}>
                Aholi ma'lumotiga moslashda K har safar boshqacha chiqyapti. Boshlang'ich taxminni qanday tanlash kerak?
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ac)", background: "var(--acbg)" }}>
                  6.2-mavzu
                </A>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  Demografiya
                </A>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--pu)", background: "var(--pubg)" }}>
                  Python
                </A>
                <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--pu)", background: "var(--pubg)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  3 javob · O'qituvchi javob berdi
                </span>
              </div>
            </div>
          </article>
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px", display: "flex", gap: "16px" }}>
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "52px" }}>
              <button aria-label="Foydali savol" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M6 11l6-6 6 6"></path>
                </svg>
              </button>
              <strong style={{ fontSize: "16px" }}>
                5
              </strong>
            </div>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  BT
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  Bekzod T.
                </strong>
                <span>
                  kecha
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                  Universitetim
                </span>
              </div>
              <A href="/community/question" style={{ display: "block", margin: "8px 0 6px", fontSize: "18px", fontWeight: "600", lineHeight: "1.35", color: "var(--tx)" }}>
                Yirtqich-o'lja modelida fazaviy portret nega yopiq chiziq bo'ladi?
              </A>
              <p style={{ margin: "0 0 10px", fontSize: "14px", lineHeight: "1.55", color: "var(--mu)" }}>
                Grafikda aylana kabi shakl chiqdi, lekin sababini tushunmadim.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ac)", background: "var(--acbg)" }}>
                  7.2-mavzu
                </A>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ODE
                </A>
                <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                  2 javob · Yechilgan
                </span>
              </div>
            </div>
          </article>
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px", display: "flex", gap: "16px" }}>
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "52px" }}>
              <button aria-label="Foydali savol" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M6 11l6-6 6 6"></path>
                </svg>
              </button>
              <strong style={{ fontSize: "16px" }}>
                2
              </strong>
            </div>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  SO
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  Sardor O.
                </strong>
                <span>
                  kecha
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                  Faqat guruhim
                </span>
              </div>
              <A href="/community/question" style={{ display: "block", margin: "8px 0 6px", fontSize: "18px", fontWeight: "600", lineHeight: "1.35", color: "var(--tx)" }}>
                Transport masalasida talab va taklif teng bo'lmasa nima qilinadi?
              </A>
              <p style={{ margin: "0 0 10px", fontSize: "14px", lineHeight: "1.55", color: "var(--mu)" }}>
                scipy linprog xato beryapti: cheklovlar mos kelmayapti deb.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ac)", background: "var(--acbg)" }}>
                  5.4-mavzu
                </A>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  Chiziqli dasturlash
                </A>
                <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--warn)", background: "var(--warnbg)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                  </svg>
                  0 javob · Javob kutilmoqda
                </span>
              </div>
            </div>
          </article>
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px", display: "flex", gap: "16px" }}>
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "52px" }}>
              <button aria-label="Foydali savol" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M6 11l6-6 6 6"></path>
                </svg>
              </button>
              <strong style={{ fontSize: "16px" }}>
                9
              </strong>
            </div>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  MR
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  Madina R.
                </strong>
                <span>
                  2 kun oldin
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Hammaga
                </span>
              </div>
              <A href="/community/question" style={{ display: "block", margin: "8px 0 6px", fontSize: "18px", fontWeight: "600", lineHeight: "1.35", color: "var(--tx)" }}>
                Variatsion prinsipni oddiy misolda kim tushuntirib bera oladi?
              </A>
              <p style={{ margin: "0 0 10px", fontSize: "14px", lineHeight: "1.55", color: "var(--mu)" }}>
                Qutqaruvchi masalasini o'qidim, lekin umumiy g'oyani ilg'ay olmadim.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ac)", background: "var(--acbg)" }}>
                  4.2-mavzu
                </A>
                <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                  4 javob · Yechilgan
                </span>
              </div>
            </div>
          </article>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
                Yordamchilar
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                bu hafta · AM-301
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "8px 0 14px" }}>
              <span style={{ flex: "none", width: "84px", height: "84px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                DK
              </span>
              <strong style={{ fontSize: "17px" }}>
                Dilnoza K.
              </strong>
              <span style={{ padding: "4px 14px", borderRadius: "999px", background: "var(--tx)", color: "var(--sf)", fontSize: "12px", fontWeight: "600" }}>
                6 ta eng yaxshi javob
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "12px", background: "transparent" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--bg)", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                2
              </span>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                AS
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Asilbek S.
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  11 ta javob
                </span>
              </span>
              <strong style={{ fontSize: "14px" }}>
                4
              </strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "12px", background: "transparent" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                3
              </span>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                MR
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Madina R.
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  8 ta javob
                </span>
              </span>
              <strong style={{ fontSize: "14px" }}>
                3
              </strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "12px", background: "var(--acbg)" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--sf)", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                4
              </span>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                JM
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Siz
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  5 ta javob
                </span>
              </span>
              <strong style={{ fontSize: "14px" }}>
                2
              </strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "12px", background: "transparent" }}>
              <span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "999px", background: "var(--sf)", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                5
              </span>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                BT
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Bekzod T.
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  4 ta javob
                </span>
              </span>
              <strong style={{ fontSize: "14px" }}>
                1
              </strong>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              Sizdan yordam kutmoqda
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "13px", lineHeight: "1.5", color: "var(--mu)" }}>
              Siz tugatgan mavzular bo'yicha javobsiz savollar.
            </p>
            <A href="/community/question" style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)", fontSize: "14px", lineHeight: "1.4" }}>
              <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                SO
              </span>
              <span>
                Transport masalasida talab va taklif teng bo'lmasa?
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  5.4-mavzu · 0 javob
                </span>
              </span>
            </A>
            <A href="/community/question" style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)", fontSize: "14px", lineHeight: "1.4" }}>
              <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                NA
              </span>
              <span>
                O'lchamlik tahlilida burchak qanday hisoblanadi?
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  2.3-mavzu · 0 javob
                </span>
              </span>
            </A>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              O'quv guruhlarim
            </h2>
            <A href="/community/chat" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "12px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                  <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                  <path d="M18 14a6 6 0 0 1 3.5 6"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                AM-301 guruh chati
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                5
              </span>
            </A>
            <A href="/community/chat" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "12px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 8l-5 4 5 4"></path>
                  <path d="M16 8l5 4-5 4"></path>
                  <path d="M13 5l-2 14"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                ODE ni birga o'rganamiz
              </span>
            </A>
            <A href="/community/chat" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "12px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V4"></path>
                  <path d="M4 20h16"></path>
                  <path d="M8 16v-4"></path>
                  <path d="M12 16V8"></path>
                  <path d="M16 16v-7"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                Regressiya to'garagi
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                2
              </span>
            </A>
            <A href="/community/groups" style={{ fontSize: "13px" }}>
              Barcha guruhlar
            </A>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
