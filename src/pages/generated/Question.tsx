/* Generated from the approved student design (page: Community: savol sahifasi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Question() {
  const v = useShellVals();
  return (
    <Shell layer="com" subTitle="COMMUNITY" subActive="qa" subItems={[["Savol-javob", "chat", "/community", "qa", ""], ["Guruh chati", "inbox", "/community/chat", "chat", "5"], ["O'quv guruhlari", "users", "/community/groups", "groups", ""], ["Mentorlar", "hand", "/community/mentors", "mentors", ""], ["Saqlanganlar", "bookmark", "/community/saved", "saved", ""]]} crumbs={[["Community", "/community"], ["Savol", "/community/question"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "22px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                DK
              </span>
              <strong style={{ color: "var(--tx)", fontSize: "14px" }}>
                Dilnoza K.
              </strong>
              <span>
                3 soat oldin
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                Faqat guruhim
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                42 marta ko'rilgan
              </span>
            </div>
            <h1 style={{ margin: "12px 0 10px", fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              Logistik modelda K ni haqiqiy ma'lumotdan qanday topish mumkin?
            </h1>
            <p style={{ margin: "0 0 8px", fontSize: "15px", lineHeight: "1.65" }}>
              6.4-mavzudagi aholi ma'lumotiga logistik modelni moslayapman:
            </p>
            <div style={{ margin: "10px 0", padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "10px", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "18px", textAlign: "center" }}>
              N(t) = K / (1 + ((K − N₀) / N₀) · e
              <sup>
                −rt
              </sup>
              )
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
              curve_fit ga boshlang'ich taxmin bermasam, K ba'zan 40 million, ba'zan 3 milliard chiqyapti. Boshlang'ich qiymatni qanday tanlash to'g'ri?
            </p>
            <pre style={{ margin: "0 0 12px", padding: "14px 16px", background: "#0d1117", color: "#e6edf3", borderRadius: "10px", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", overflowX: "auto" }}>
              {"popt, _ = curve_fit(logistic, t, N)   "}
              <span style={{ color: "#8b949e" }}>
                {"# p0 berilmagan"}
              </span>
            </pre>
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
              <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "3px 12px", borderRadius: "999px", border: "1px solid var(--bd)", fontSize: "12px", fontWeight: "600", color: "var(--tx)" }}>
                <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3v12"></path>
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
                dilnoza_k / logistik-model-aholi
              </A>
              <span style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                <B aria-label="Foydali savol" style={{ minHeight: "40px", padding: "0 14px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--bg)", color: "var(--tx)", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5"></path>
                    <path d="M6 11l6-6 6 6"></path>
                  </svg>
                  7
                </B>
                <B aria-label="Saqlash" style={{ width: "40px", height: "40px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--bg)", color: "var(--tx)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12v18l-6-4-6 4z"></path>
                  </svg>
                </B>
              </span>
            </div>
          </article>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
              3 ta javob
            </h2>
            <span style={{ fontSize: "13px", color: "var(--mu)" }}>
              Avval eng yaxshi javob, keyin ovozlar bo'yicha
            </span>
          </div>
          <article style={{ background: "var(--sf)", border: "2px solid var(--ok)", borderRadius: "16px", padding: "18px", display: "flex", gap: "16px" }}>
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "52px" }}>
              <B aria-label="Foydali javob" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M6 11l6-6 6 6"></path>
                </svg>
              </B>
              <strong style={{ fontSize: "16px" }}>
                9
              </strong>
              <B aria-label="Foydasiz javob" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14"></path>
                  <path d="M6 13l6 6 6-6"></path>
                </svg>
              </B>
            </div>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
                <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  ShB
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  Sh. Boltibayev
                </strong>
                <span></span>
                <span>
                  2 soat oldin
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                  O'qituvchi javobi
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                  Eng yaxshi javob
                </span>
              </div>
              <div style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.65" }}>
                K uchun boshlang'ich taxmin sifatida ma'lumotdagi eng katta qiymatdan biroz kattasini oling, masalan 1,5 barobarini. r uchun dastlabki yillardagi o'sish sur'ati mos keladi. Bundan tashqari
                {" "}
                <strong>
                  bounds
                </strong>
                {" "}
                bilan K ni oqilona oraliqda cheklang: shunda yechim barqaror bo'ladi.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "12px", fontSize: "13px" }}>
                <A href="#">
                  Izoh yozish
                </A>
                <A href="#" style={{ color: "var(--mu)" }}>
                  Ulashish
                </A>
                <A href="#" style={{ color: "var(--mu)" }}>
                  Shikoyat
                </A>
              </div>
            </div>
          </article>
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px", display: "flex", gap: "16px" }}>
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "52px" }}>
              <B aria-label="Foydali javob" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M6 11l6-6 6 6"></path>
                </svg>
              </B>
              <strong style={{ fontSize: "16px" }}>
                4
              </strong>
              <B aria-label="Foydasiz javob" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14"></path>
                  <path d="M6 13l6 6 6-6"></path>
                </svg>
              </B>
            </div>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
                <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  AS
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  Asilbek S.
                </strong>
                <span>
                  Kursdosh
                </span>
                <span>
                  2 soat oldin
                </span>
              </div>
              <div style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.65" }}>
                Menda ham shunday bo'lgan. Yillarni 0 dan boshlab sanasangiz (t = yil − 1990), sonlar kichrayadi va moslash ancha yaxshi ishlaydi.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "12px", fontSize: "13px" }}>
                <A href="#">
                  Izoh yozish
                </A>
                <A href="#" style={{ color: "var(--mu)" }}>
                  Ulashish
                </A>
                <A href="#" style={{ color: "var(--mu)" }}>
                  Shikoyat
                </A>
              </div>
            </div>
          </article>
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px", display: "flex", gap: "16px" }}>
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "52px" }}>
              <B aria-label="Foydali javob" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M6 11l6-6 6 6"></path>
                </svg>
              </B>
              <strong style={{ fontSize: "16px" }}>
                3
              </strong>
              <B aria-label="Foydasiz javob" style={{ width: "44px", height: "36px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--bg)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14"></path>
                  <path d="M6 13l6 6 6-6"></path>
                </svg>
              </B>
            </div>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
                <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  JM
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  Siz
                </strong>
                <span>
                  Kursdosh
                </span>
                <span>
                  1 soat oldin
                </span>
              </div>
              <div style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.65" }}>
                Ma'lumot hali S egri chiziqning bukilish nuqtasiga yetmagan bo'lsa, K ni ma'lumotning o'zidan ishonchli topib bo'lmaydi. Buni xulosada yozib qo'yish kerak.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "12px", fontSize: "13px" }}>
                <A href="#">
                  Izoh yozish
                </A>
                <A href="#" style={{ color: "var(--mu)" }}>
                  Ulashish
                </A>
                <A href="#" style={{ color: "var(--mu)" }}>
                  Shikoyat
                </A>
              </div>
            </div>
          </article>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              Javobingiz
            </h2>
            <div style={{ border: "1px solid var(--bd)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ display: "flex", gap: "4px", padding: "6px 10px", background: "var(--bg)", borderBottom: "1px solid var(--bd)" }}>
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
                <B aria-label="Rasm yoki fayl" title="Rasm yoki fayl" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "8px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
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
              </div>
              <label>
                <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
                  Javob matni
                </span>
                <textarea rows={4} placeholder="Javobingizni yozing: matn, formula, kod va fayl qo'shish mumkin." style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "12px 14px", border: "0", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "15px", resize: "vertical" }} />
              </label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px", marginTop: "12px" }}>
              <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                Javob uchun +50 XP, eng yaxshi javob uchun +150 XP.
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 3L10 14"></path>
                  <path d="M21 3l-7 18-4-7-7-4z"></path>
                </svg>
                Javob yuborish
              </A>
            </div>
          </section>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              Savol haqida
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>
                Faqat AM-301 guruhi ko'radi
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
              <span>
                <A href="/education/lesson">
                  6.2. Logistik model
                </A>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3v12"></path>
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
              <span>
                1 ta repozitoriyaga bog'langan
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                <path d="M18 14a6 6 0 0 1 3.5 6"></path>
              </svg>
              <span>
                4 ishtirokchi
              </span>
            </div>
            <div style={{ marginTop: "8px" }}>
              <span style={{ display: "inline-flex" }}>
                <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                    DK
                  </span>
                </span>
                <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                    ShB
                  </span>
                </span>
                <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                    AS
                  </span>
                </span>
                <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                    JM
                  </span>
                </span>
              </span>
            </div>
          </section>
          <section style={{ background: "var(--warnbg)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ display: "flex", color: "var(--warn)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6"></path>
                  <path d="M12 16.5h.01"></path>
                </svg>
              </span>
              <div>
                <h2 style={{ margin: "0 0 4px", fontSize: "15px", fontWeight: "600" }}>
                  Bahs yomonlashdimi?
                </h2>
                <p style={{ margin: "0 0 12px", fontSize: "13px", lineHeight: "1.5", color: "var(--mu)" }}>
                  O'qituvchini chaqiring. Kim chaqirganini faqat o'qituvchi ko'radi.
                </p>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
                  </svg>
                  O'qituvchini chaqirish
                </A>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              Tashqi muhokama
            </h2>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "14px" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L10 14"></path>
                <path d="M21 3l-7 18-4-7-7-4z"></path>
              </svg>
              Telegram: AM-301 modellashtirish
            </A>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              O'xshash savollar
            </h2>
            <A href="#" style={{ display: "block", padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.4", color: "var(--tx)" }}>
              curve_fit nega ogohlantirish beryapti?
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                5 javob · yechilgan
              </span>
            </A>
            <A href="#" style={{ display: "block", padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.4", color: "var(--tx)" }}>
              Maltus va logistik model xatoligini qanday solishtiraman?
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                2 javob
              </span>
            </A>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
