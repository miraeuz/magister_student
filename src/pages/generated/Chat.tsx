/* Generated from the approved student design (page: Community: guruh chati). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";
import { useChatVals } from "../../vals/Chat";

export default function Chat() {
  const v = useChatVals();
  return (
    <Shell layer="com" subTitle="COMMUNITY" subActive="chat" subItems={[["Savol-javob", "chat", "/community", "qa", ""], ["Guruh chati", "inbox", "/community/chat", "chat", "5"], ["O'quv guruhlari", "users", "/community/groups", "groups", ""], ["Mentorlar", "hand", "/community/mentors", "mentors", ""], ["Saqlanganlar", "bookmark", "/community/saved", "saved", ""]]} crumbs={[["Community", "/community"], ["Guruh chati", "/community/chat"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
        <section style={{ flex: "1 1 260px", maxWidth: "330px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "14px", display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px 8px" }}>
            <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
              Chatlar
            </h2>
            <A href="/community/groups" aria-label="Yangi guruh" title="Yangi guruh" style={{ width: "40px", height: "40px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
            </A>
          </div>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "14px", color: "var(--tx)", background: "var(--acbg)" }}>
            <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "14px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                <path d="M18 14a6 6 0 0 1 3.5 6"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  AM-301 guruh chati
                </strong>
                <span style={{ fontSize: "11px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  10:42
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Sh. Boltibayev: Juma kuni 15:00 da...
                </span>
                <span style={{ flex: "none", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "var(--acbtn)", color: "#ffffff", fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  5
                </span>
              </span>
            </span>
          </A>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "14px", color: "var(--tx)", background: "transparent" }}>
            <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "14px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  ODE ni birga o'rganamiz
                </strong>
                <span style={{ fontSize: "11px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  kecha
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Asilbek: fazaviy portretni chizdim
                </span>
              </span>
            </span>
          </A>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "14px", color: "var(--tx)", background: "transparent" }}>
            <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "14px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <path d="M8 16v-4"></path>
                <path d="M12 16V8"></path>
                <path d="M16 16v-7"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Regressiya to'garagi
                </strong>
                <span style={{ fontSize: "11px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  kecha
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Madina: ma'lumotni yukladim
                </span>
                <span style={{ flex: "none", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "var(--acbtn)", color: "#ffffff", fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  2
                </span>
              </span>
            </span>
          </A>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "14px", color: "var(--tx)", background: "transparent" }}>
            <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "14px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Mentor: Sh. Boltibayev
                </strong>
                <span style={{ fontSize: "11px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  12-noy
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Siz: rahmat, tushundim
                </span>
              </span>
            </span>
          </A>
          <div style={{ marginTop: "auto", padding: "12px", borderRadius: "14px", background: "var(--bg)", fontSize: "12px", lineHeight: "1.5", color: "var(--mu)" }}>
            Guruh chati rasmiy: a'zolar guruh ro'yxati bilan avtomatik yangilanadi.
          </div>
        </section>
        <section style={{ flex: "999 1 460px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <header style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px", padding: "14px 18px", borderBottom: "1px solid var(--bd)" }}>
            <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "14px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                <path d="M18 14a6 6 0 0 1 3.5 6"></path>
              </svg>
            </span>
            <div style={{ flex: "999 1 200px", minWidth: "0" }}>
              <h1 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
                AM-301 guruh chati
              </h1>
              <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                26 a'zo · 9 kishi onlayn
              </div>
            </div>
            <span style={{ display: "inline-flex" }}>
              <span style={{ marginLeft: "0px", display: "inline-flex" }}>
                <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  DK
                </span>
              </span>
              <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  AS
                </span>
              </span>
              <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  MR
                </span>
              </span>
              <span style={{ marginLeft: "-8px", display: "inline-flex" }}>
                <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                  BT
                </span>
              </span>
            </span>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 14px", borderRadius: "999px", border: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L10 14"></path>
                <path d="M21 3l-7 18-4-7-7-4z"></path>
              </svg>
              Telegram
            </A>
          </header>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 18px", background: "var(--warnbg)", borderBottom: "1px solid var(--bd)", fontSize: "13px" }}>
            <span style={{ display: "flex", color: "var(--warn)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 4h6l-1 6 3 3H7l3-3z"></path>
                <path d="M12 13v7"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <strong>
                Mahkamlangan:
              </strong>
              {" "}
              Juma kuni 15:00 da guruh musobaqasi, 3 ta masala.
            </span>
          </div>
          <div style={{ flex: "1 1 auto", padding: "18px", display: "flex", flexDirection: "column", gap: "14px", background: "var(--bg)" }}>
            <div style={{ alignSelf: "center", padding: "3px 14px", borderRadius: "999px", background: "var(--sf)", border: "1px solid var(--bd)", fontSize: "12px", color: "var(--mu)" }}>
              Bugun
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "row", alignItems: "flex-end" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                DK
              </span>
              <div style={{ maxWidth: "72%", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--mu)", marginBottom: "4px" }}>
                  <strong style={{ color: "var(--tx)" }}>
                    Dilnoza K.
                  </strong>
                  <span>
                    10:21
                  </span>
                </div>
                <div style={{ padding: "10px 14px", borderRadius: "18px", borderBottomLeftRadius: "6px", fontSize: "15px", lineHeight: "1.5", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Logistik modelni moslash kodim ishladi. Kimga kerak bo'lsa, mana:
                  <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", padding: "8px 10px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--bg)", color: "var(--tx)", fontSize: "13px" }}>
                    <span style={{ display: "flex", color: "var(--ac)" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4 4v14H6z"></path>
                        <path d="M14 3v4h4"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1 1 0" }}>
                      <strong style={{ display: "block", fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
                        logistik_fit.py
                      </strong>
                      <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                        Kod fayli · 1,4 KB
                      </span>
                    </span>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "row", alignItems: "flex-end" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                AS
              </span>
              <div style={{ maxWidth: "72%", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--mu)", marginBottom: "4px" }}>
                  <strong style={{ color: "var(--tx)" }}>
                    Asilbek S.
                  </strong>
                  <span>
                    10:24
                  </span>
                </div>
                <div style={{ padding: "10px 14px", borderRadius: "18px", borderBottomLeftRadius: "6px", fontSize: "15px", lineHeight: "1.5", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Fazaviy portretni chizdim, ko'ring:
                  <div style={{ marginTop: "8px", border: "1px solid var(--bd)", borderRadius: "12px", overflow: "hidden", width: "min(100%, 300px)", background: "var(--sf)" }}>
                    <svg role="img" aria-label="Fazaviy portret grafigi" viewBox="0 0 300 150" style={{ display: "block", width: "100%", height: "auto" }}>
                      <rect width="300" height="150" style={{ fill: "var(--bg)" }} />
                      <path d="M20 130H280M20 20V130" strokeWidth="1" fill="none" style={{ stroke: "var(--bd)" }}></path>
                      <path d="M40 118C80 40 140 30 170 60C200 90 150 110 120 80C90 50 150 20 230 70" strokeWidth="2.2" fill="none" strokeLinecap="round" style={{ stroke: "var(--ac)" }}></path>
                    </svg>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", fontSize: "12px", color: "var(--mu)" }}>
                      <span style={{ flex: "1 1 0", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        fazaviy_portret.png · 240 KB
                      </span>
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v11"></path>
                        <path d="M7 11l5 5 5-5"></path>
                        <path d="M5 20h14"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "row", alignItems: "flex-end" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                BT
              </span>
              <div style={{ maxWidth: "72%", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--mu)", marginBottom: "4px" }}>
                  <strong style={{ color: "var(--tx)" }}>
                    Bekzod T.
                  </strong>
                  <span>
                    10:26
                  </span>
                </div>
                <div style={{ padding: "10px 14px", borderRadius: "18px", borderBottomLeftRadius: "6px", fontSize: "15px", lineHeight: "1.5", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Rahmat! Menda p0 bermaganim uchun xato chiqayotgan ekan. Eyler qadamim ham mana:
                  <div style={{ marginTop: "8px", border: "1px solid var(--bd)", borderRadius: "12px", overflow: "hidden", background: "var(--bg)", color: "var(--tx)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderBottom: "1px solid var(--bd)", fontSize: "12px", color: "var(--mu)" }}>
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 8l-5 4 5 4"></path>
                        <path d="M16 8l5 4-5 4"></path>
                        <path d="M13 5l-2 14"></path>
                      </svg>
                      <span style={{ flex: "1 1 0" }}>
                        Python · 5 qator
                      </span>
                      <A href="#" style={{ fontSize: "12px" }}>
                        Nusxa
                      </A>
                    </div>
                    <pre style={{ margin: "0", padding: "10px 12px", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", lineHeight: "1.55", overflowX: "auto" }}>
                      <span style={{ color: "var(--pu)" }}>
                        {"def"}
                      </span>
                      {" euler(f, y0, h, n):\n    y = y0\n    "}
                      <span style={{ color: "var(--pu)" }}>
                        {"for"}
                      </span>
                      {" _ "}
                      <span style={{ color: "var(--pu)" }}>
                        {"in"}
                      </span>
                      {" "}
                      <span style={{ color: "var(--pu)" }}>
                        {"range"}
                      </span>
                      {"(n):\n        y += h * f(y)\n    "}
                      <span style={{ color: "var(--pu)" }}>
                        {"return"}
                      </span>
                      {" y"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "row-reverse", alignItems: "flex-end" }}>
              <div style={{ maxWidth: "72%", minWidth: "0" }}>
                <div style={{ padding: "10px 14px", borderRadius: "18px", borderBottomRightRadius: "6px", fontSize: "15px", lineHeight: "1.5", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  Ma'lumotni yuklayapman, bir daqiqa.
                  <div style={{ marginTop: "8px", padding: "10px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--bg)", color: "var(--tx)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="16" rx="2" />
                          <path d="M3 10h18"></path>
                          <path d="M9 4v16"></path>
                        </svg>
                      </span>
                      <span style={{ flex: "1 1 0", minWidth: "0" }}>
                        <strong style={{ display: "block", fontSize: "13px" }}>
                          demografiya_2010_2025.csv
                        </strong>
                        <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                          Yuklanmoqda: 2,4 MB dan 1,5 MB · 62%
                        </span>
                      </span>
                      <button aria-label="Yuklashni bekor qilish" title="Bekor qilish" style={{ flex: "none", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 6l12 12"></path>
                          <path d="M18 6L6 18"></path>
                        </svg>
                      </button>
                    </div>
                    <div role="progressbar" aria-label="Yuklash" aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} style={{ marginTop: "8px", height: "6px", borderRadius: "999px", background: "var(--h0)" }}>
                      <div style={{ width: "62%", height: "6px", borderRadius: "999px", background: "var(--ac)" }}></div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)", textAlign: "right", marginTop: "3px" }}>
                  10:31 · o'qildi
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "row-reverse", alignItems: "flex-end" }}>
              <div style={{ maxWidth: "72%", minWidth: "0" }}>
                <div style={{ padding: "10px 14px", borderRadius: "18px", borderBottomRightRadius: "6px", fontSize: "15px", lineHeight: "1.5", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  Dars videosini ham yubormoqchi edim.
                  <div role="alert" style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "8px", padding: "10px", border: "1px solid var(--bad)", borderRadius: "12px", background: "var(--badbg)", color: "var(--tx)", fontSize: "13px" }}>
                    <span style={{ display: "flex", color: "var(--bad)", marginTop: "1px" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v6"></path>
                        <path d="M12 16.5h.01"></path>
                      </svg>
                    </span>
                    <span>
                      <strong>
                        leksiya_video.mp4 yuborilmadi.
                      </strong>
                      {" "}
                      Hajmi 38 MB, chatda har bir fayl 10 MB gacha. Videoni Hub'ga yuklab, havolasini yuboring.
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)", textAlign: "right", marginTop: "3px" }}>
                  10:33 · o'qildi
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "row", alignItems: "flex-end" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                ShB
              </span>
              <div style={{ maxWidth: "72%", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--mu)", marginBottom: "4px" }}>
                  <strong style={{ color: "var(--tx)" }}>
                    Sh. Boltibayev
                  </strong>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                    O'qituvchi
                  </span>
                  <span>
                    10:42
                  </span>
                </div>
                <div style={{ padding: "10px 14px", borderRadius: "18px", borderBottomLeftRadius: "6px", fontSize: "15px", lineHeight: "1.5", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Yaxshi. Eslatma: juma kuni 15:00 da guruh musobaqasi. A9 amaliy ish muddati 24-noyabrgacha.
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", borderTop: "1px solid var(--bd)" }}>
            {v.attOpen && (
              <>
                <div role="menu" aria-label="Biriktirish" style={{ position: "absolute", left: "12px", bottom: "74px", zIndex: "10", width: "300px", maxWidth: "calc(100% - 24px)", boxSizing: "border-box", padding: "8px", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", boxShadow: "var(--shadow)" }}>
                  <A href="#" role="menuitem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "6px 10px", borderRadius: "12px", color: "var(--tx)" }}>
                    <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <circle cx="9" cy="10" r="1.6" />
                        <path d="M21 16l-5-5-9 9"></path>
                      </svg>
                    </span>
                    <span>
                      <strong style={{ display: "block", fontSize: "14px" }}>
                        Rasm yoki video
                      </strong>
                      <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                        PNG, JPG, MP4 · 10 MB gacha
                      </span>
                    </span>
                  </A>
                  <A href="#" role="menuitem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "6px 10px", borderRadius: "12px", color: "var(--tx)" }}>
                    <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 8l-5 4 5 4"></path>
                        <path d="M16 8l5 4-5 4"></path>
                        <path d="M13 5l-2 14"></path>
                      </svg>
                    </span>
                    <span>
                      <strong style={{ display: "block", fontSize: "14px" }}>
                        Kod fayli
                      </strong>
                      <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                        .py, .ipynb · ishga tushirilmaydi
                      </span>
                    </span>
                  </A>
                  <A href="#" role="menuitem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "6px 10px", borderRadius: "12px", color: "var(--tx)" }}>
                    <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4 4v14H6z"></path>
                        <path d="M14 3v4h4"></path>
                        <path d="M9 14h6"></path>
                        <path d="M9 17h4"></path>
                      </svg>
                    </span>
                    <span>
                      <strong style={{ display: "block", fontSize: "14px" }}>
                        Hujjat
                      </strong>
                      <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                        PDF, DOCX, CSV, XLSX
                      </span>
                    </span>
                  </A>
                  <A href="#" role="menuitem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "6px 10px", borderRadius: "12px", color: "var(--tx)" }}>
                    <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3v12"></path>
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="6" r="3" />
                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                      </svg>
                    </span>
                    <span>
                      <strong style={{ display: "block", fontSize: "14px" }}>
                        Hub'dan repozitoriya
                      </strong>
                      <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                        havola va qisqa tavsif
                      </span>
                    </span>
                  </A>
                </div>
              </>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", padding: "10px 16px 0" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", maxWidth: "100%", padding: "4px 4px 4px 10px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", fontSize: "13px" }}>
                <span style={{ display: "flex", color: "var(--ok)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18"></path>
                    <path d="M9 4v16"></path>
                  </svg>
                </span>
                <span style={{ minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  demografiya_2010_2025.csv
                </span>
                <span style={{ color: "var(--mu)", fontSize: "12px", whiteSpace: "nowrap" }}>
                  2,4 MB
                </span>
                <button aria-label="demografiya_2010_2025.csvni olib tashlash" title="Olib tashlash" style={{ flex: "none", width: "32px", height: "32px", border: "0", borderRadius: "999px", background: "transparent", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12"></path>
                    <path d="M18 6L6 18"></path>
                  </svg>
                </button>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", maxWidth: "100%", padding: "4px 4px 4px 10px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", fontSize: "13px" }}>
                <span style={{ display: "flex", color: "var(--pu)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8l-5 4 5 4"></path>
                    <path d="M16 8l5 4-5 4"></path>
                    <path d="M13 5l-2 14"></path>
                  </svg>
                </span>
                <span style={{ minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  euler.py
                </span>
                <span style={{ color: "var(--mu)", fontSize: "12px", whiteSpace: "nowrap" }}>
                  0,3 KB
                </span>
                <button aria-label="euler.pyni olib tashlash" title="Olib tashlash" style={{ flex: "none", width: "32px", height: "32px", border: "0", borderRadius: "999px", background: "transparent", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12"></path>
                    <path d="M18 6L6 18"></path>
                  </svg>
                </button>
              </span>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", alignItems: "flex-end", gap: "8px" }}>
              <button aria-label="Fayl yoki kod biriktirish" aria-pressed={v.attOpen} title="Fayl biriktirish" onClick={v.toggleAtt} style={{ flex: "none", width: "44px", height: "44px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 11l-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"></path>
                </svg>
              </button>
              <button aria-label="Formula qo'shish" title="Formula" style={{ flex: "none", width: "44px", height: "44px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "16px", fontWeight: "600" }}>
                ∑
              </button>
              <label style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
                  Xabar
                </span>
                <textarea rows={1} placeholder="Xabar yozing yoki faylni shu yerga tashlang" style={{ display: "block", width: "100%", boxSizing: "border-box", minHeight: "44px", padding: "11px 16px", border: "1px solid var(--bd)", borderRadius: "22px", background: "var(--bg)", color: "var(--tx)", font: "inherit", fontSize: "15px", resize: "none" }} />
              </label>
              <button aria-label="Yuborish" title="Yuborish" style={{ flex: "none", width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "var(--acbtn)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 3L10 14"></path>
                  <path d="M21 3l-7 18-4-7-7-4z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <aside aria-label="Chat ma'lumotlari" style={{ flex: "1 1 240px", maxWidth: "300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              A'zolar
            </h2>
            <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", marginBottom: "4px" }}>
              O'QITUVCHILAR
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                ShB
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                Sh. Boltibayev
              </span>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "var(--ok)" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                MD
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                M. Dadaxanov
              </span>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "var(--bd)" }}></span>
            </div>
            <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", margin: "8px 0 4px" }}>
              TALABALAR · 24
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                DK
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                Dilnoza K.
              </span>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "var(--ok)" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                AS
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                Asilbek S.
              </span>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "var(--ok)" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                BT
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                Bekzod T.
              </span>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "var(--ok)" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                MR
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                Madina R.
              </span>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "var(--bd)" }}></span>
            </div>
            <A href="/education/group" style={{ fontSize: "13px" }}>
              Barcha a'zolar
            </A>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>
                Fayllar
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                14 ta · 9,8 MB
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
              <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--ac)", background: "var(--acbg)", border: "1px solid var(--bd)" }}>
                Hammasi
              </A>
              <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", border: "1px solid var(--bd)" }}>
                Rasm
              </A>
              <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", border: "1px solid var(--bd)" }}>
                Kod
              </A>
              <A href="#" style={{ display: "inline-block", padding: "3px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", border: "1px solid var(--bd)" }}>
                Hujjat
              </A>
            </div>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "10px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 8l-5 4 5 4"></path>
                  <path d="M16 8l5 4-5 4"></path>
                  <path d="M13 5l-2 14"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  logistik_fit.py
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  Dilnoza K. · 10:21
                </span>
              </span>
            </A>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "10px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="9" cy="10" r="1.6" />
                  <path d="M21 16l-5-5-9 9"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  fazaviy_portret.png
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  Asilbek S. · 10:24
                </span>
              </span>
            </A>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "10px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 8l-5 4 5 4"></path>
                  <path d="M16 8l5 4-5 4"></path>
                  <path d="M13 5l-2 14"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  euler.py
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  Bekzod T. · 10:26
                </span>
              </span>
            </A>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "10px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                  <path d="M9 14h6"></path>
                  <path d="M9 17h4"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  A9_talablar.pdf
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  Sh. Boltibayev · kecha
                </span>
              </span>
            </A>
            <A href="#" style={{ display: "inline-block", marginTop: "6px", fontSize: "13px" }}>
              Barcha fayllar
            </A>
            <div style={{ marginTop: "10px", padding: "10px 12px", borderRadius: "12px", background: "var(--bg)", fontSize: "12px", lineHeight: "1.5", color: "var(--mu)" }}>
              Bir faylga 10 MB gacha, bir xabarga 10 tagacha. Kod fayllari faqat ko'riladi, ishga tushirilmaydi. Katta fayllar uchun Hub'dan foydalaning.
            </div>
          </section>
          <section style={{ background: "var(--warnbg)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
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
                  Suhbat yomonlashdimi?
                </h2>
                <p style={{ margin: "0 0 10px", fontSize: "13px", lineHeight: "1.5", color: "var(--mu)" }}>
                  Xabarni bosib turib «O'qituvchini chaqirish» ni tanlang yoki shu tugmani bosing.
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
        </aside>
      </div>
    </Shell>
  );
}
