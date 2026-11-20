/* Generated from the approved student design (page: Community: o'quv guruhlari). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function StudyGroups() {
  const v = useShellVals();
  return (
    <Shell layer="com" subTitle="COMMUNITY" subActive="groups" subItems={[["Savol-javob", "chat", "/community", "qa", ""], ["Guruh chati", "inbox", "/community/chat", "chat", "5"], ["O'quv guruhlari", "users", "/community/groups", "groups", ""], ["Mentorlar", "hand", "/community/mentors", "mentors", ""], ["Saqlanganlar", "bookmark", "/community/saved", "saved", ""]]} crumbs={[["Community", "/community"], ["O'quv guruhlari", "/community/groups"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600" }}>
                O'quv guruhlari
              </h1>
              <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--mu)" }}>
                Bir mavzuni birga o'rganadigan kichik guruhlar. O'zingiz ham ochishingiz mumkin.
              </p>
            </div>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
              Guruh ochish
            </A>
          </div>
          <nav aria-label="Saralash" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--acbtn)", border: "1px solid var(--acbtn)" }}>
              Mening guruhlarim
              <span style={{ fontSize: "12px", opacity: ".85" }}>
                3
              </span>
            </A>
            <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
              Universitetim
              <span style={{ fontSize: "12px", opacity: ".85" }}>
                14
              </span>
            </A>
            <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
              Hammasi
              <span style={{ fontSize: "12px", opacity: ".85" }}>
                52
              </span>
            </A>
            <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
              Ochiq
              <span style={{ fontSize: "12px", opacity: ".85" }}>
                31
              </span>
            </A>
          </nav>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <article style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: "10px", marginTop: "26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "-26px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--acbg)", color: "var(--ac)", border: "3px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                    <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                    <path d="M18 14a6 6 0 0 1 3.5 6"></path>
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                  Rasmiy
                </span>
              </div>
              <div>
                <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
                  AM-301 guruh chati
                </h2>
                <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                  Akademik guruh · Matematik modellashtirish
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-flex" }}>
                  <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      ShB
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      DK
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      AS
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      MR
                    </span>
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                  26 a'zo
                </span>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Bu haftadagi faollik
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    82%
                  </span>
                </div>
                <div role="img" aria-label="Faollik 82 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "82%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                <span style={{ flex: "1 1 0", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  10:42 da faol
                </span>
                <A href="/community/chat" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbg)", color: "var(--ac)", border: "1px solid transparent" }}>
                  Ochish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: "10px", marginTop: "26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "-26px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--pubg)", color: "var(--pu)", border: "3px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8l-5 4 5 4"></path>
                    <path d="M16 8l5 4-5 4"></path>
                    <path d="M13 5l-2 14"></path>
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Ochiq
                </span>
              </div>
              <div>
                <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
                  ODE ni birga o'rganamiz
                </h2>
                <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                  Differensial tenglamalar · 7-9-paragraflar
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-flex" }}>
                  <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      AS
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      BT
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      JM
                    </span>
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                  8 a'zo
                </span>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Bu haftadagi faollik
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    64%
                  </span>
                </div>
                <div role="img" aria-label="Faollik 64 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "64%", height: "6px", background: "var(--pu)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                <span style={{ flex: "1 1 0", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  kecha faol
                </span>
                <A href="/community/chat" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbg)", color: "var(--ac)", border: "1px solid transparent" }}>
                  Ochish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: "10px", marginTop: "26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "-26px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--okbg)", color: "var(--ok)", border: "3px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20V4"></path>
                    <path d="M4 20h16"></path>
                    <path d="M8 16v-4"></path>
                    <path d="M12 16V8"></path>
                    <path d="M16 16v-7"></path>
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Yopiq
                </span>
              </div>
              <div>
                <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
                  Regressiya to'garagi
                </h2>
                <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                  Ma'lumotlar va bashorat · 12-paragraf
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-flex" }}>
                  <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      MR
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      DK
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      JM
                    </span>
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                  6 a'zo
                </span>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Bu haftadagi faollik
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    45%
                  </span>
                </div>
                <div role="img" aria-label="Faollik 45 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "45%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                <span style={{ flex: "1 1 0", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  kecha faol
                </span>
                <A href="/community/chat" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbg)", color: "var(--ac)", border: "1px solid transparent" }}>
                  Ochish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: "10px", marginTop: "26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "-26px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--warnbg)", color: "var(--warn)", border: "3px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M12 16v4"></path>
                    <path d="M8 20h8"></path>
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Ochiq
                </span>
              </div>
              <div>
                <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
                  Kurs ishi: suv modeli
                </h2>
                <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                  Kurs ishi ustida birga ishlash
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-flex" }}>
                  <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      SO
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      NA
                    </span>
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                  4 a'zo
                </span>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Bu haftadagi faollik
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    30%
                  </span>
                </div>
                <div role="img" aria-label="Faollik 30 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "30%", height: "6px", background: "var(--warn)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                <span style={{ flex: "1 1 0", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  2 kun oldin faol
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Qo'shilish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: "10px", marginTop: "26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "-26px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--badbg)", color: "var(--bad)", border: "3px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                    <path d="M4 19V5"></path>
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Ochiq
                </span>
              </div>
              <div>
                <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
                  Issiqlik tenglamasi
                </h2>
                <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                  Furye usuli · 13-paragraf
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-flex" }}>
                  <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      DK
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      SO
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      BT
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      AS
                    </span>
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                  11 a'zo
                </span>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Bu haftadagi faollik
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    58%
                  </span>
                </div>
                <div role="img" aria-label="Faollik 58 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "58%", height: "6px", background: "var(--bad)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                <span style={{ flex: "1 1 0", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  bugun faol
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Qo'shilish
                </A>
              </div>
            </article>
            <article style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: "10px", marginTop: "26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "-26px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--acbg)", color: "var(--ac)", border: "3px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 4h8v5a4 4 0 0 1-8 0z"></path>
                    <path d="M8 6H4a4 4 0 0 0 4 4"></path>
                    <path d="M16 6h4a4 4 0 0 1-4 4"></path>
                    <path d="M12 13v4"></path>
                    <path d="M8 20h8"></path>
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Ochiq
                </span>
              </div>
              <div>
                <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
                  Musobaqaga tayyorgarlik
                </h2>
                <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                  Challenges · haftalik masalalar
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-flex" }}>
                  <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      AS
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      MR
                    </span>
                  </span>
                  <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                      DK
                    </span>
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                  9 a'zo
                </span>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Bu haftadagi faollik
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    71%
                  </span>
                </div>
                <div role="img" aria-label="Faollik 71 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "71%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                <span style={{ flex: "1 1 0", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  bugun faol
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Qo'shilish
                </A>
              </div>
            </article>
          </div>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 12px", fontSize: "16px", fontWeight: "600" }}>
              Bu hafta
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ flex: "1 1 110px", minWidth: "0", padding: "14px 12px", borderRadius: "14px", background: "var(--acbg)", textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "600", color: "var(--ac)" }}>
                  3
                </div>
                <div style={{ fontSize: "12px", color: "var(--tx)" }}>
                  Guruhlarim
                </div>
              </div>
              <div style={{ flex: "1 1 110px", minWidth: "0", padding: "14px 12px", borderRadius: "14px", background: "var(--okbg)", textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "600", color: "var(--ok)" }}>
                  47
                </div>
                <div style={{ fontSize: "12px", color: "var(--tx)" }}>
                  Xabarlar
                </div>
              </div>
              <div style={{ flex: "1 1 110px", minWidth: "0", padding: "14px 12px", borderRadius: "14px", background: "var(--pubg)", textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "600", color: "var(--pu)" }}>
                  5
                </div>
                <div style={{ fontSize: "12px", color: "var(--tx)" }}>
                  Ulashilgan fayl
                </div>
              </div>
              <div style={{ flex: "1 1 110px", minWidth: "0", padding: "14px 12px", borderRadius: "14px", background: "var(--warnbg)", textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "600", color: "var(--warn)" }}>
                  2
                </div>
                <div style={{ fontSize: "12px", color: "var(--tx)" }}>
                  Yangi a'zo
                </div>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              Oxirgi harakatlar
            </h2>
            <div style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                DK
              </span>
              <div style={{ flex: "1 1 0", minWidth: "0", fontSize: "13px", lineHeight: "1.45" }}>
                <strong>
                  Dilnoza K.
                </strong>
                {" "}
                AM-301 chatiga kod fayli yubordi
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  bugun, 10:21
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                AS
              </span>
              <div style={{ flex: "1 1 0", minWidth: "0", fontSize: "13px", lineHeight: "1.45" }}>
                <strong>
                  Asilbek S.
                </strong>
                {" "}
                ODE guruhida fazaviy portret ulashdi
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  kecha
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                MR
              </span>
              <div style={{ flex: "1 1 0", minWidth: "0", fontSize: "13px", lineHeight: "1.45" }}>
                <strong>
                  Madina R.
                </strong>
                {" "}
                Regressiya to'garagiga ma'lumot yukladi
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  kecha
                </div>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Qoidalar
            </h2>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Ochiq guruhga har kim qo'shiladi. Yopiq guruhga egasi qo'shadi. Rasmiy guruh chati universitet guruhi bilan birga yuradi va unda o'qituvchi bor.
            </p>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
