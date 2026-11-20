/* Generated from the approved student design (page: Hub: bosh sahifa). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Hub() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="explore" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
                Hub
              </h1>
              <div style={{ fontSize: "14px", color: "var(--mu)", marginTop: "4px" }}>
                Modellar, kodlar, maqolalar va media: ko'ring, o'rganing, izoh qoldiring.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <label style={{ flex: "999 1 260px", display: "flex", alignItems: "center", gap: "8px", height: "40px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
              <input type="search" placeholder="Repozitoriya, maqola yoki muallifni qidirish" aria-label="Hub ichida qidirish" style={{ flex: "1 1 0", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "14px", color: "var(--tx)" }} />
            </label>
            <select aria-label="Tur" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
              <option>
                Tur: barchasi
              </option>
              <option>
                Kod va model
              </option>
              <option>
                Maqola
              </option>
              <option>
                Audio / video
              </option>
            </select>
            <select aria-label="Mavzu" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
              <option>
                Mavzu: barchasi
              </option>
              <option>
                6. Demografik modellar
              </option>
              <option>
                7. Raqobat modellari
              </option>
              <option>
                9. Epidemiya modellari
              </option>
            </select>
            <select aria-label="Tartib" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
              <option>
                Tartib: trend
              </option>
              <option>
                Yangi
              </option>
              <option>
                Ko'p yulduzcha
              </option>
              <option>
                Ko'p fork
              </option>
            </select>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <nav aria-label="Ro'yxat" style={{ display: "flex", flexWrap: "wrap", gap: "0 22px", padding: "0 16px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)" }}>
                Trend
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Yangi
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Guruhim
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Kuzatayotganlarim
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Testi tayyor
              </A>
            </nav>
            <article style={{ padding: "16px", borderTop: "1px solid var(--bd)", display: "flex", flexWrap: "wrap", gap: "10px 16px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 380px", minWidth: "0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                  <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                    JM
                  </span>
                  <A href="/profile" style={{ fontSize: "14px", color: "var(--mu)" }}>
                    jahongirxon
                  </A>
                  <span style={{ color: "var(--mu)" }}>
                    /
                  </span>
                  <A href="/hub/repo" style={{ fontSize: "16px", fontWeight: "600" }}>
                    rk4-solver
                  </A>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Kod va model
                  </span>
                </div>
                <p style={{ margin: "8px 0", fontSize: "14px", lineHeight: "1.5", color: "var(--tx)" }}>
                  Runge-Kutta 4 usuli bilan oddiy differensial tenglamalarni yechish va Eyler usuli bilan solishtirish.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Python
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    ODE
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Sonli usullar
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", marginTop: "10px", fontSize: "12px", color: "var(--mu)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                    </svg>
                    12
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="5" r="2.5" />
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="12" cy="19" r="2.5" />
                      <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                      <path d="M12 12.5v4"></path>
                    </svg>
                    3
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                      <path d="M4 19V5"></path>
                    </svg>
                    14.4-mavzu
                  </span>
                  <span>
                    Yangilangan: 2 kun oldin
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  O'zingizniki
                </span>
                <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Ochish
                </A>
              </div>
            </article>
            <article style={{ padding: "16px", borderTop: "1px solid var(--bd)", display: "flex", flexWrap: "wrap", gap: "10px 16px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 380px", minWidth: "0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                  <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                    DK
                  </span>
                  <A href="/profile" style={{ fontSize: "14px", color: "var(--mu)" }}>
                    dilnoza_k
                  </A>
                  <span style={{ color: "var(--mu)" }}>
                    /
                  </span>
                  <A href="#" style={{ fontSize: "16px", fontWeight: "600" }}>
                    logistik-model-aholi
                  </A>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Kod va model
                  </span>
                </div>
                <p style={{ margin: "8px 0", fontSize: "14px", lineHeight: "1.5", color: "var(--tx)" }}>
                  O'zbekiston aholisi ma'lumotiga logistik modelni moslash va 2040-yil uchun bashorat.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Python
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Demografiya
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Jupyter
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", marginTop: "10px", fontSize: "12px", color: "var(--mu)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                    </svg>
                    21
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="5" r="2.5" />
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="12" cy="19" r="2.5" />
                      <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                      <path d="M12 12.5v4"></path>
                    </svg>
                    5
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                      <path d="M4 19V5"></path>
                    </svg>
                    6.4-mavzu
                  </span>
                  <span>
                    Yangilangan: kecha
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Yulduzcha testi tayyor
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Ochish
                </A>
              </div>
            </article>
            <article style={{ padding: "16px", borderTop: "1px solid var(--bd)", display: "flex", flexWrap: "wrap", gap: "10px 16px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 380px", minWidth: "0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                  <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                    AS
                  </span>
                  <A href="/profile" style={{ fontSize: "14px", color: "var(--mu)" }}>
                    asilbek
                  </A>
                  <span style={{ color: "var(--mu)" }}>
                    /
                  </span>
                  <A href="#" style={{ fontSize: "16px", fontWeight: "600" }}>
                    sir-modeli-haqida
                  </A>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Maqola
                  </span>
                </div>
                <p style={{ margin: "8px 0", fontSize: "14px", lineHeight: "1.5", color: "var(--tx)" }}>
                  SIR modeli qanday ishlaydi: tarqalish soni, emlash chegarasi va uchta sodda misol.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Epidemiya
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Maqola
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", marginTop: "10px", fontSize: "12px", color: "var(--mu)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                    </svg>
                    17
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="5" r="2.5" />
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="12" cy="19" r="2.5" />
                      <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                      <path d="M12 12.5v4"></path>
                    </svg>
                    0
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                      <path d="M4 19V5"></path>
                    </svg>
                    9.3-mavzu
                  </span>
                  <span>
                    Yangilangan: 3 kun oldin
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                  Testdan o'tgansiz
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Ochish
                </A>
              </div>
            </article>
            <article style={{ padding: "16px", borderTop: "1px solid var(--bd)", display: "flex", flexWrap: "wrap", gap: "10px 16px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 380px", minWidth: "0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                  <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                    MR
                  </span>
                  <A href="/profile" style={{ fontSize: "14px", color: "var(--mu)" }}>
                    madina_r
                  </A>
                  <span style={{ color: "var(--mu)" }}>
                    /
                  </span>
                  <A href="#" style={{ fontSize: "16px", fontWeight: "600" }}>
                    transport-masalasi-video
                  </A>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                    Audio / video
                  </span>
                </div>
                <p style={{ margin: "8px 0", fontSize: "14px", lineHeight: "1.5", color: "var(--tx)" }}>
                  Transport masalasini Pythonda yechish bo'yicha 14 daqiqalik video tushuntirish va slaydlar.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Chiziqli dasturlash
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Video
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", marginTop: "10px", fontSize: "12px", color: "var(--mu)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                    </svg>
                    9
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="5" r="2.5" />
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="12" cy="19" r="2.5" />
                      <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                      <path d="M12 12.5v4"></path>
                    </svg>
                    1
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                      <path d="M4 19V5"></path>
                    </svg>
                    5.4-mavzu
                  </span>
                  <span>
                    Yangilangan: 5 kun oldin
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Yulduzcha testi tayyor
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Ochish
                </A>
              </div>
            </article>
            <article style={{ padding: "16px", borderTop: "1px solid var(--bd)", display: "flex", flexWrap: "wrap", gap: "10px 16px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 380px", minWidth: "0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                  <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                    BT
                  </span>
                  <A href="/profile" style={{ fontSize: "14px", color: "var(--mu)" }}>
                    bekzod_t
                  </A>
                  <span style={{ color: "var(--mu)" }}>
                    /
                  </span>
                  <A href="#" style={{ fontSize: "16px", fontWeight: "600" }}>
                    yirtqich-olja-fazaviy
                  </A>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Kod va model
                  </span>
                </div>
                <p style={{ margin: "8px 0", fontSize: "14px", lineHeight: "1.5", color: "var(--tx)" }}>
                  Lotka-Volterra modeli: fazaviy portret va parametrlarga sezgirlik.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Python
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    ODE
                  </A>
                  <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                    Grafik
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", marginTop: "10px", fontSize: "12px", color: "var(--mu)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                    </svg>
                    6
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="5" r="2.5" />
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="12" cy="19" r="2.5" />
                      <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                      <path d="M12 12.5v4"></path>
                    </svg>
                    2
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                      <path d="M4 19V5"></path>
                    </svg>
                    7.2-mavzu
                  </span>
                  <span>
                    Yangilangan: 1 hafta oldin
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Test hali yo'q
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Ochish
                </A>
              </div>
            </article>
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                128 ta ishdan 1-5
              </span>
              <span style={{ display: "flex", gap: "8px" }}>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Oldingi
                </A>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Keyingi
                </A>
              </span>
            </div>
          </section>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px" }}>
            <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
              Mening repozitoriyalarim
            </h2>
            <A href="/hub/new" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
              Yangi
            </A>
          </div>
          <A href="/hub/repo" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px", color: "var(--tx)" }}>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "500" }}>
              rk4-solver
            </span>
            <span style={{ fontSize: "11px", color: "var(--mu)" }}>
              Ochiq
            </span>
          </A>
          <A href="/hub/repo" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px", color: "var(--tx)" }}>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                <path d="M14 6l3 3"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "500" }}>
              logistik-eslatma
            </span>
            <span style={{ fontSize: "11px", color: "var(--mu)" }}>
              Ochiq
            </span>
          </A>
          <A href="/hub/repo" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px", color: "var(--tx)" }}>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "500" }}>
              a9-amaliy-ish
            </span>
            <span style={{ fontSize: "11px", color: "var(--mu)" }}>
              Yopiq
            </span>
          </A>
          <A href="/hub/repo" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px", color: "var(--tx)" }}>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "500" }}>
              kurs-ishi-qoralama
            </span>
            <span style={{ fontSize: "11px", color: "var(--mu)" }}>
              Yopiq
            </span>
          </A>
          <A href="/hub/mine" style={{ display: "inline-block", margin: "6px 0 14px", fontSize: "12px" }}>
            Barchasi (6)
          </A>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Sizdan kutilmoqda
              </h2>
            </div>
            <A href="/hub/repo/suggestions" style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4", color: "var(--tx)" }}>
              <span style={{ display: "flex", color: "var(--ok)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="13" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                </svg>
              </span>
              <span>
                <strong>
                  dilnoza_k
                </strong>
                {" "}
                rk4-solver uchun o'zgarish taklif qildi
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  kecha
                </span>
              </span>
            </A>
            <A href="/hub/repo/talk" style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4", color: "var(--tx)", marginTop: "10px" }}>
              <span style={{ display: "flex", color: "var(--ac)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
              </span>
              <span>
                rk4-solver muhokamasida 2 ta yangi izoh
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  3 soat oldin
                </span>
              </span>
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Ommabop teglar
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                ODE
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Python
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Demografiya
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Epidemiya
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Chiziqli dasturlash
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Issiqlik
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Regressiya
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Maqola
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Video
              </A>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Guruhingizda faol
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                bu hafta
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                DK
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                dilnoza_k
              </span>
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                3 ta ish
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                AS
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                asilbek
              </span>
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                2 ta ish
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                MR
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                madina_r
              </span>
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                2 ta ish
              </span>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Yulduzcha qoidasi
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Izoh yozish erkin. Yulduzcha qo'yish uchun ish bo'yicha 5 savollik testdan o'tasiz (kamida 4 ta to'g'ri). Savollarni muallif guruhining o'qituvchisi yozadi.
            </p>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
