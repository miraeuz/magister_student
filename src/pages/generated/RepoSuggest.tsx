/* Generated from the approved student design (page: Hub: o'zgarish taklifi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function RepoSuggest() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="sugg" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["jahongirxon", "#"], ["rk4-solver", "/hub/repo"], ["Takliflar", "/hub/repo/suggestions"], ["#4", "/hub/repo/suggestions"]]} maxW={1560}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 16px" }}>
          <div style={{ flex: "999 1 320px", minWidth: "0", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
              JM
            </span>
            <A href="/profile" style={{ fontSize: "18px", color: "var(--ac)" }}>
              jahongirxon
            </A>
            <span style={{ fontSize: "18px", color: "var(--mu)" }}>
              /
            </span>
            <A href="/hub/repo" style={{ fontSize: "20px", fontWeight: "600", color: "var(--ac)" }}>
              rk4-solver
            </A>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--sf)", whiteSpace: "nowrap" }}>
              Ochiq
            </span>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
              Kod va model
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                <circle cx="12" cy="12" r="3" />
              </svg>
              Kuzatish
              <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                4
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="5" r="2.5" />
                <circle cx="18" cy="5" r="2.5" />
                <circle cx="12" cy="19" r="2.5" />
                <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                <path d="M12 12.5v4"></path>
              </svg>
              Fork
              <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                3
              </span>
            </A>
            <A href="/hub/repo/quiz" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
              </svg>
              Yulduzcha
              <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                12
              </span>
            </A>
          </div>
        </div>
        <nav aria-label="Repozitoriya bo'limlari" style={{ display: "flex", gap: "0 22px", overflowX: "auto", borderBottom: "1px solid var(--bd)" }}>
          <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 8l-5 4 5 4"></path>
              <path d="M16 8l5 4-5 4"></path>
              <path d="M13 5l-2 14"></path>
            </svg>
            Kod
          </A>
          <A href="/hub/repo/article" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
              <path d="M14 6l3 3"></path>
            </svg>
            Maqola
          </A>
          <A href="/hub/repo/media" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="6" width="13" height="12" rx="2" />
              <path d="M16 10l5-3v10l-5-3z"></path>
            </svg>
            Media
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              2
            </span>
          </A>
          <A href="/hub/repo/talk" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
            </svg>
            Muhokamalar
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              3
            </span>
          </A>
          <A href="/hub/repo/suggestions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="5" r="2.5" />
              <circle cx="6" cy="19" r="2.5" />
              <circle cx="18" cy="13" r="2.5" />
              <path d="M6 7.5v9"></path>
              <path d="M6 8a8 8 0 0 0 9.5 5"></path>
            </svg>
            Takliflar
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              1
            </span>
          </A>
          <A href="/hub/repo/versions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
              <path d="M4 4v4h4"></path>
              <path d="M12 8v4l3 2"></path>
            </svg>
            Versiyalar
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              15
            </span>
          </A>
          <A href="/hub/repo/quiz" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
            Yulduzcha testi
          </A>
          <A href="/hub/repo/settings" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3"></path>
              <path d="M12 19v3"></path>
              <path d="M2 12h3"></path>
              <path d="M19 12h3"></path>
              <path d="M5 5l2 2"></path>
              <path d="M17 17l2 2"></path>
              <path d="M19 5l-2 2"></path>
              <path d="M7 17l-2 2"></path>
            </svg>
            Sozlamalar
          </A>
        </nav>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <h1 style={{ margin: "0", fontSize: "22px", fontWeight: "600", lineHeight: "1.3" }}>
              Qadam soni yaxlitlash xatosi tuzatildi
              {" "}
              <span style={{ color: "var(--mu)", fontWeight: "400" }}>
                #4
              </span>
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginTop: "8px", fontSize: "13px", color: "var(--mu)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "999px", background: "var(--okbtn)", color: "#ffffff", fontWeight: "600" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="13" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                </svg>
                Ochiq
              </span>
              <span>
                <strong style={{ color: "var(--tx)" }}>
                  dilnoza_k
                </strong>
                {" "}
                2 ta versiyani
                {" "}
                <code style={{ fontFamily: "JetBrains Mono, monospace", padding: "1px 6px", borderRadius: "4px", background: "var(--acbg)", color: "var(--ac)" }}>
                  Asosiy
                </code>
                {" "}
                ga qo'shishni taklif qilmoqda · variant:
                {" "}
                <code style={{ fontFamily: "JetBrains Mono, monospace", padding: "1px 6px", borderRadius: "4px", background: "var(--acbg)", color: "var(--ac)" }}>
                  qadam-tuzatish
                </code>
              </span>
            </div>
          </div>
          <nav aria-label="Taklif bo'limlari" style={{ display: "flex", gap: "0 22px", borderBottom: "1px solid var(--bd)" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
              Muhokama (2)
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
              Versiyalar (2)
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)" }}>
              O'zgargan fayllar (1)
            </A>
          </nav>
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "600", color: "var(--tx)" }}>
              DK
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "8px 14px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", fontSize: "13px" }}>
                <strong>
                  dilnoza_k
                </strong>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Taklif muallifi
                </span>
                <span style={{ color: "var(--mu)" }}>
                  kecha
                </span>
              </div>
              <div style={{ padding: "12px 14px", fontSize: "14px", lineHeight: "1.6" }}>
                t_end / h butun chiqmaganda int() bitta qadamni tashlab ketardi (masalan, 0,3 / 0,1). round() ga almashtirdim va manfiy h uchun tekshiruv qo'shdim. Testlar o'tdi.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "0 14px 10px", fontSize: "12px", color: "var(--mu)" }}>
                <B aria-label="Foydali" style={{ minHeight: "32px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5"></path>
                    <path d="M6 11l6-6 6 6"></path>
                  </svg>
                  2
                </B>
                <A href="#" style={{ fontSize: "12px" }}>
                  Javob yozish
                </A>
                <A href="#" style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Shikoyat
                </A>
              </div>
            </div>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 16px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", fontSize: "13px" }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: "500" }}>
                models/rk4.py
              </span>
              <span style={{ color: "var(--ok)", fontWeight: "600" }}>
                +3
              </span>
              <span style={{ color: "var(--bad)", fontWeight: "600" }}>
                −1
              </span>
              <span style={{ marginLeft: "auto", color: "var(--mu)" }}>
                Solishtirish: Asosiy ↔ qadam-tuzatish
              </span>
            </div>
            <div style={{ overflowX: "auto", padding: "6px 0" }}>
              <div style={{ display: "flex", background: "transparent", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.7" }}>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  12
                </span>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  12
                </span>
                <span style={{ flex: "none", width: "18px", textAlign: "center", color: "var(--mu)" }}></span>
                <span style={{ whiteSpace: "pre", color: "var(--tx)" }}>
                  def solve(f, y0, t_end, h=0.1):
                </span>
              </div>
              <div style={{ display: "flex", background: "var(--badbg)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.7" }}>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  13
                </span>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}></span>
                <span style={{ flex: "none", width: "18px", textAlign: "center", color: "var(--bad)" }}>
                  −
                </span>
                <span style={{ whiteSpace: "pre", color: "var(--tx)" }}>
                  {" "}
                  n = int(t_end / h)
                </span>
              </div>
              <div style={{ display: "flex", background: "var(--okbg)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.7" }}>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}></span>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  13
                </span>
                <span style={{ flex: "none", width: "18px", textAlign: "center", color: "var(--ok)" }}>
                  +
                </span>
                <span style={{ whiteSpace: "pre", color: "var(--tx)" }}>
                  {" "}
                  {"if h <= 0:"}
                </span>
              </div>
              <div style={{ display: "flex", background: "var(--okbg)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.7" }}>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}></span>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  14
                </span>
                <span style={{ flex: "none", width: "18px", textAlign: "center", color: "var(--ok)" }}>
                  +
                </span>
                <span style={{ whiteSpace: "pre", color: "var(--tx)" }}>
                  {" "}
                  raise ValueError("h musbat bo'lishi kerak")
                </span>
              </div>
              <div style={{ display: "flex", background: "var(--okbg)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.7" }}>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}></span>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  15
                </span>
                <span style={{ flex: "none", width: "18px", textAlign: "center", color: "var(--ok)" }}>
                  +
                </span>
                <span style={{ whiteSpace: "pre", color: "var(--tx)" }}>
                  {" "}
                  n = round(t_end / h)
                </span>
              </div>
              <div style={{ display: "flex", background: "transparent", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.7" }}>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  14
                </span>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  16
                </span>
                <span style={{ flex: "none", width: "18px", textAlign: "center", color: "var(--mu)" }}></span>
                <span style={{ whiteSpace: "pre", color: "var(--tx)" }}>
                  {" "}
                  t, y = 0.0, y0
                </span>
              </div>
              <div style={{ display: "flex", background: "transparent", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.7" }}>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  15
                </span>
                <span style={{ flex: "none", width: "40px", textAlign: "right", paddingRight: "8px", color: "var(--mu)" }}>
                  17
                </span>
                <span style={{ flex: "none", width: "18px", textAlign: "center", color: "var(--mu)" }}></span>
                <span style={{ whiteSpace: "pre", color: "var(--tx)" }}>
                  {" "}
                  ts, ys = [t], [y]
                </span>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--mu)" }}>
              <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ok)" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              <span>
                Kod ishga tushdi: 6 ta sinovdan 6 tasi o'tdi
              </span>
              <span style={{ marginLeft: "auto", whiteSpace: "nowrap" }}>
                kecha
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--mu)" }}>
              <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ok)" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              <span>
                Asosiy variant bilan ziddiyat yo'q
              </span>
              <span style={{ marginLeft: "auto", whiteSpace: "nowrap" }}>
                kecha
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--mu)" }}>
              <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--warn)" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2"></path>
                </svg>
              </span>
              <span>
                Repozitoriya egasining qarori kutilmoqda
              </span>
              <span style={{ marginLeft: "auto", whiteSpace: "nowrap" }}></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "12px", borderTop: "1px solid var(--bd)" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="13" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                </svg>
                Asosiyga qo'shish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                  <path d="M14 6l3 3"></path>
                </svg>
                O'zgartirish so'rash
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Rad etish
              </A>
            </div>
            <div style={{ fontSize: "12px", color: "var(--mu)" }}>
              Qabul qilingan taklif muallifi «hissa qo'shganlar» ro'yxatiga qo'shiladi.
            </div>
          </section>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Taklif haqida
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0"></path>
              </svg>
              <span>
                Muallif: dilnoza_k
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="5" r="2.5" />
                <circle cx="6" cy="19" r="2.5" />
                <circle cx="18" cy="8" r="2.5" />
                <path d="M6 7.5v9"></path>
                <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
              </svg>
              <span>
                qadam-tuzatish → Asosiy
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                <path d="M4 4v4h4"></path>
                <path d="M12 8v4l3 2"></path>
              </svg>
              <span>
                2 ta versiya, 1 ta fayl
              </span>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Ko'rib chiquvchi
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                JM
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                jahongirxon
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                Kutilmoqda
              </span>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bog'langan muhokama
              </h2>
            </div>
            <A href="/hub/repo/talk" style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
              </svg>
              <span>
                RK4 da qadam hajmini qanday tanlash kerak?
              </span>
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Barcha takliflar
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
              <A href="#" style={{ display: "flex", gap: "8px", color: "var(--tx)" }}>
                <span style={{ display: "flex", color: "var(--ok)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="5" r="2.5" />
                    <circle cx="6" cy="19" r="2.5" />
                    <circle cx="18" cy="13" r="2.5" />
                    <path d="M6 7.5v9"></path>
                    <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                  </svg>
                </span>
                #4 Qadam soni yaxlitlash xatosi
              </A>
              <A href="#" style={{ display: "flex", gap: "8px", color: "var(--mu)" }}>
                <span style={{ display: "flex", color: "var(--pu)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
                #3 README ga misol qo'shildi (qabul qilingan)
              </A>
              <A href="#" style={{ display: "flex", gap: "8px", color: "var(--mu)" }}>
                <span style={{ display: "flex", color: "var(--bad)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v6"></path>
                    <path d="M12 16.5h.01"></path>
                  </svg>
                </span>
                #2 Fayl nomlari (rad etilgan)
              </A>
            </div>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
