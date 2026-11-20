/* Generated from the approved student design (page: Hub: versiyalar va variantlar). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function RepoVersions() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["jahongirxon", "/hub/mine"], ["rk4-solver", "/hub/repo"], ["Versiyalar", "/hub/repo/versions"]]} maxW={1560}>
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
          <A href="/hub/repo/suggestions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
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
          <A href="/hub/repo/versions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)", whiteSpace: "nowrap" }}>
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
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="5" r="2.5" />
                <circle cx="6" cy="19" r="2.5" />
                <circle cx="18" cy="8" r="2.5" />
                <path d="M6 7.5v9"></path>
                <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
              </svg>
              Asosiy
            </A>
            <nav aria-label="Ko'rinish" style={{ display: "flex", gap: "0 22px", marginLeft: "8px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)" }}>
                Versiyalar tarixi (15)
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Variantlar (4)
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Belgilangan versiyalar (3)
              </A>
            </nav>
            <span style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
                </svg>
                Variant sinash
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12V4h8l10 10-8 8z"></path>
                  <path d="M7.5 8.5h.01"></path>
                </svg>
                Versiyani belgilash
              </A>
            </span>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", background: "var(--bg)", fontSize: "13px", fontWeight: "600" }}>
              14-noyabr, 2026
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 320px", minWidth: "0" }}>
                <A href="#" style={{ fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Qadam hajmi tahlili qo'shildi, xatolik grafigi yangilandi
                </A>
                {" "}
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  v1.2
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  <span style={{ flex: "none", width: "20px", height: "20px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", color: "var(--tx)" }}>
                    JM
                  </span>
                  <strong style={{ color: "var(--tx)" }}>
                    jahongirxon
                  </strong>
                  <span>
                    2 kun oldin
                  </span>
                </div>
              </div>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ok)" }}>
                +86
              </span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--bad)" }}>
                −12
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                d964cc5
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Ko'rish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                  <path d="M4 4v4h4"></path>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                Tiklash
              </A>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 320px", minWidth: "0" }}>
                <A href="#" style={{ fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  README: natija bo'limi yozildi
                </A>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  <span style={{ flex: "none", width: "20px", height: "20px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", color: "var(--tx)" }}>
                    JM
                  </span>
                  <strong style={{ color: "var(--tx)" }}>
                    jahongirxon
                  </strong>
                  <span>
                    2 kun oldin
                  </span>
                </div>
              </div>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ok)" }}>
                +14
              </span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--bad)" }}>
                −2
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                a31f09e
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Ko'rish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                  <path d="M4 4v4h4"></path>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                Tiklash
              </A>
            </div>
            <div style={{ padding: "10px 16px", background: "var(--bg)", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600" }}>
              9-noyabr, 2026
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 320px", minWidth: "0" }}>
                <A href="#" style={{ fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  README ga ishga tushirish misoli qo'shildi (taklif #3)
                </A>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  <span style={{ flex: "none", width: "20px", height: "20px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", color: "var(--tx)" }}>
                    AS
                  </span>
                  <strong style={{ color: "var(--tx)" }}>
                    asilbek
                  </strong>
                  <span>
                    1 hafta oldin
                  </span>
                </div>
              </div>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ok)" }}>
                +9
              </span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--bad)" }}>
                −0
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                7c2b5d1
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Ko'rish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                  <path d="M4 4v4h4"></path>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                Tiklash
              </A>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 320px", minWidth: "0" }}>
                <A href="#" style={{ fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  RK4 va Eyler usullari alohida fayllarga ajratildi
                </A>
                {" "}
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  v1.1
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  <span style={{ flex: "none", width: "20px", height: "20px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", color: "var(--tx)" }}>
                    JM
                  </span>
                  <strong style={{ color: "var(--tx)" }}>
                    jahongirxon
                  </strong>
                  <span>
                    1 hafta oldin
                  </span>
                </div>
              </div>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ok)" }}>
                +64
              </span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--bad)" }}>
                −58
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                51e88aa
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Ko'rish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                  <path d="M4 4v4h4"></path>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                Tiklash
              </A>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 320px", minWidth: "0" }}>
                <A href="#" style={{ fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Aniq yechim bilan solishtirish testlari
                </A>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  <span style={{ flex: "none", width: "20px", height: "20px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", color: "var(--tx)" }}>
                    JM
                  </span>
                  <strong style={{ color: "var(--tx)" }}>
                    jahongirxon
                  </strong>
                  <span>
                    1 hafta oldin
                  </span>
                </div>
              </div>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ok)" }}>
                +41
              </span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--bad)" }}>
                −0
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                0be7f42
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Ko'rish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                  <path d="M4 4v4h4"></path>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                Tiklash
              </A>
            </div>
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                15 ta versiyadan 1-5
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Eskiroqlari
              </A>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Variantlar
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                Asosiyni buzmasdan sinab ko'rish uchun nusxalar
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <span style={{ display: "flex", color: "var(--mu)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
                </svg>
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <code style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", padding: "2px 8px", borderRadius: "4px", background: "var(--acbg)", color: "var(--ac)" }}>
                  Asosiy
                </code>
                {" "}
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                  Asosiy
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  jahongirxon · 2 kun oldin yangilangan
                </span>
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                0 oldinda · 0 orqada
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <span style={{ display: "flex", color: "var(--mu)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
                </svg>
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <code style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", padding: "2px 8px", borderRadius: "4px", background: "var(--acbg)", color: "var(--ac)" }}>
                  qadam-tuzatish
                </code>
                {" "}
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Taklif ochiq
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  dilnoza_k · kecha yangilangan
                </span>
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                2 oldinda · 0 orqada
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Solishtirish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="13" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                </svg>
                Asosiyga qo'shish
              </A>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <span style={{ display: "flex", color: "var(--mu)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
                </svg>
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <code style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", padding: "2px 8px", borderRadius: "4px", background: "var(--acbg)", color: "var(--ac)" }}>
                  ozgaruvchan-qadam
                </code>
                {" "}
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  jahongirxon · 4 kun oldin yangilangan
                </span>
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                3 oldinda · 2 orqada
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Solishtirish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="13" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                </svg>
                Asosiyga qo'shish
              </A>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
              <span style={{ display: "flex", color: "var(--mu)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
                </svg>
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <code style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", padding: "2px 8px", borderRadius: "4px", background: "var(--acbg)", color: "var(--ac)" }}>
                  grafiklar
                </code>
                {" "}
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", marginTop: "4px" }}>
                  jahongirxon · 2 hafta oldin yangilangan
                </span>
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                1 oldinda · 9 orqada
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Solishtirish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="6" cy="19" r="2.5" />
                  <circle cx="18" cy="13" r="2.5" />
                  <path d="M6 7.5v9"></path>
                  <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                </svg>
                Asosiyga qo'shish
              </A>
            </div>
          </section>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Atamalar
            </h2>
            <div style={{ padding: "6px 0", fontSize: "13px", lineHeight: "1.5" }}>
              <strong>
                Versiya
              </strong>
              <span style={{ display: "block", color: "var(--mu)" }}>
                Fayllarning saqlangan holati. Istalgan versiyaga qaytish mumkin.
              </span>
            </div>
            <div style={{ padding: "6px 0", fontSize: "13px", lineHeight: "1.5" }}>
              <strong>
                Variant
              </strong>
              <span style={{ display: "block", color: "var(--mu)" }}>
                Asosiydan ajratilgan nusxa: yangi g'oyani sinash uchun.
              </span>
            </div>
            <div style={{ padding: "6px 0", fontSize: "13px", lineHeight: "1.5" }}>
              <strong>
                Asosiyga qo'shish
              </strong>
              <span style={{ display: "block", color: "var(--mu)" }}>
                Variantdagi o'zgarishlarni Asosiyga o'tkazish.
              </span>
            </div>
            <div style={{ padding: "6px 0", fontSize: "13px", lineHeight: "1.5" }}>
              <strong>
                Belgilangan versiya
              </strong>
              <span style={{ display: "block", color: "var(--mu)" }}>
                Nom berilgan muhim holat, masalan v1.2.
              </span>
            </div>
            <div style={{ padding: "6px 0", fontSize: "13px", lineHeight: "1.5" }}>
              <strong>
                Tiklash
              </strong>
              <span style={{ display: "block", color: "var(--mu)" }}>
                Eski versiyani yangi versiya sifatida qaytarish. Tarix o'chmaydi.
              </span>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Faollik
              </h2>
            </div>
            <div role="img" aria-label="Oxirgi 8 haftadagi versiyalar soni" style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "64px" }}>
              <div style={{ flex: "1 1 0", height: "20%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "0.5611111111111111" }}></div>
              <div style={{ flex: "1 1 0", height: "35%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "0.6444444444444445" }}></div>
              <div style={{ flex: "1 1 0", height: "10%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "0.5055555555555555" }}></div>
              <div style={{ flex: "1 1 0", height: "60%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "0.7833333333333333" }}></div>
              <div style={{ flex: "1 1 0", height: "45%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "0.7" }}></div>
              <div style={{ flex: "1 1 0", height: "80%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "0.8944444444444444" }}></div>
              <div style={{ flex: "1 1 0", height: "30%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "0.6166666666666667" }}></div>
              <div style={{ flex: "1 1 0", height: "100%", background: "var(--ac)", borderRadius: "3px 3px 0 0", opacity: "1.0055555555555555" }}></div>
            </div>
            <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "6px" }}>
              Oxirgi 8 hafta
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Hissa qo'shganlar
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                JM
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                jahongirxon
              </span>
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                13 versiya
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                AS
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                asilbek
              </span>
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                1 versiya
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                DK
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                dilnoza_k
              </span>
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                1 versiya
              </span>
            </div>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
