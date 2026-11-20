/* Generated from the approved student design (page: Hub: repozitoriya (kod)). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Repo() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["jahongirxon", "#"], ["rk4-solver", "/hub/repo"]]} maxW={1560}>
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
          <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)", whiteSpace: "nowrap" }}>
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
            <A href="/hub/repo/versions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", fontSize: "13px", color: "var(--tx)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="5" r="2.5" />
                <circle cx="6" cy="19" r="2.5" />
                <circle cx="18" cy="8" r="2.5" />
                <path d="M6 7.5v9"></path>
                <path d="M18 10.5a6 6 0 0 1-6 6H8.5"></path>
              </svg>
              <strong>
                4
              </strong>
              {" "}
              variant
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", fontSize: "13px", color: "var(--tx)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12V4h8l10 10-8 8z"></path>
                <path d="M7.5 8.5h.01"></path>
              </svg>
              <strong>
                3
              </strong>
              {" "}
              belgilangan versiya
            </A>
            <label style={{ flex: "999 1 200px", maxWidth: "320px", marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px", height: "40px", boxSizing: "border-box", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
              <input type="search" placeholder="Faylga o'tish" aria-label="Faylga o'tish" style={{ flex: "1 1 0", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "13px", color: "var(--tx)" }} />
            </label>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
              Fayl qo'shish
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11"></path>
                <path d="M7 11l5 5 5-5"></path>
                <path d="M5 20h14"></path>
              </svg>
              Yuklab olish
            </A>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px", background: "var(--bg)" }}>
              <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "var(--tx)" }}>
                JM
              </span>
              <strong style={{ fontSize: "13px" }}>
                jahongirxon
              </strong>
              <A href="#" style={{ flex: "999 1 200px", minWidth: "0", fontSize: "13px", color: "var(--tx)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Qadam hajmi tahlili qo'shildi, xatolik grafigi yangilandi
              </A>
              <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                d964cc5
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                2 kun oldin
              </span>
              <A href="/hub/repo/versions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                  <path d="M4 4v4h4"></path>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                15 ta versiya
              </A>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/file" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--tx)" }}>
                        <span style={{ display: "flex", color: "var(--ac)" }}>
                          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h6l2 2h10v11H3z"></path>
                          </svg>
                        </span>
                        models
                      </A>
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", minWidth: "220px" }}>
                      RK4 va Eyler usullari alohida fayllarga ajratildi
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", textAlign: "right", whiteSpace: "nowrap" }}>
                      2 kun oldin
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/file" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--tx)" }}>
                        <span style={{ display: "flex", color: "var(--ac)" }}>
                          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h6l2 2h10v11H3z"></path>
                          </svg>
                        </span>
                        data
                      </A>
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", minWidth: "220px" }}>
                      Sinov ma'lumotlari qo'shildi
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", textAlign: "right", whiteSpace: "nowrap" }}>
                      1 hafta oldin
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/file" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--tx)" }}>
                        <span style={{ display: "flex", color: "var(--ac)" }}>
                          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h6l2 2h10v11H3z"></path>
                          </svg>
                        </span>
                        tests
                      </A>
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", minWidth: "220px" }}>
                      Aniq yechim bilan solishtirish testlari
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", textAlign: "right", whiteSpace: "nowrap" }}>
                      1 hafta oldin
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/file" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--tx)" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 3h8l4 4v14H6z"></path>
                            <path d="M14 3v4h4"></path>
                          </svg>
                        </span>
                        README.md
                      </A>
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", minWidth: "220px" }}>
                      Natija bo'limi yozildi
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", textAlign: "right", whiteSpace: "nowrap" }}>
                      2 kun oldin
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/file" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--tx)" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 3h8l4 4v14H6z"></path>
                            <path d="M14 3v4h4"></path>
                          </svg>
                        </span>
                        analysis.ipynb
                      </A>
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", minWidth: "220px" }}>
                      Qadam hajmi tahlili qo'shildi, xatolik grafigi yangilandi
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", textAlign: "right", whiteSpace: "nowrap" }}>
                      2 kun oldin
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/file" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--tx)" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 3h8l4 4v14H6z"></path>
                            <path d="M14 3v4h4"></path>
                          </svg>
                        </span>
                        requirements.txt
                      </A>
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", minWidth: "220px" }}>
                      Boshlang'ich versiya
                    </td>
                    <td style={{ padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", textAlign: "right", whiteSpace: "nowrap" }}>
                      3 hafta oldin
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderBottom: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
              README.md
            </div>
            <div style={{ padding: "24px 28px", maxWidth: "820px" }}>
              <h2 style={{ margin: "0 0 12px", fontSize: "24px", fontWeight: "600", paddingBottom: "8px", borderBottom: "1px solid var(--bd)" }}>
                RK4 solver
              </h2>
              <p style={{ margin: "0 0 12px", fontSize: "15px", lineHeight: "1.65" }}>
                Oddiy differensial tenglamalarni Runge-Kutta 4 usuli bilan yechadigan kichik kutubxona. Eyler usuli bilan solishtirish va qadam hajmining xatolikka ta'sirini ko'rsatadi.
              </p>
              <h3 style={{ margin: "18px 0 8px", fontSize: "17px", fontWeight: "600" }}>
                Model
              </h3>
              <div style={{ margin: "0 0 12px", padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "18px", textAlign: "center" }}>
                dy/dt = f(t, y), y(t₀) = y₀
              </div>
              <h3 style={{ margin: "18px 0 8px", fontSize: "17px", fontWeight: "600" }}>
                Ishga tushirish
              </h3>
              <pre style={{ margin: "0", padding: "14px 16px", background: "#0d1117", color: "#e6edf3", borderRadius: "6px", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", overflowX: "auto" }}>
                <span style={{ color: "#ff7b72" }}>
                  {"from"}
                </span>
                {" models.rk4 "}
                <span style={{ color: "#ff7b72" }}>
                  {"import"}
                </span>
                {" solve\n\nt, y = solve("}
                <span style={{ color: "#ff7b72" }}>
                  {"lambda"}
                </span>
                {" t, y: -"}
                <span style={{ color: "#79c0ff" }}>
                  {"0.5"}
                </span>
                {" * y, y0="}
                <span style={{ color: "#79c0ff" }}>
                  {"10"}
                </span>
                {", t_end="}
                <span style={{ color: "#79c0ff" }}>
                  {"8"}
                </span>
                {", h="}
                <span style={{ color: "#79c0ff" }}>
                  {"0.1"}
                </span>
                {")"}
              </pre>
              <h3 style={{ margin: "18px 0 8px", fontSize: "17px", fontWeight: "600" }}>
                Natija
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65" }}>
                h = 0,1 qadamda RK4 xatoligi Eyler usulidagidan taxminan ming marta kichik. To'liq tahlil
                {" "}
                <A href="#">
                  analysis.ipynb
                </A>
                {" "}
                faylida.
              </p>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Izohlar (4)
              </h2>
              <A href="/hub/repo/talk" style={{ fontSize: "12px" }}>
                Barcha muhokamalar
              </A>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                AS
              </span>
              <div style={{ flex: "1 1 0", minWidth: "0" }}>
                <div style={{ fontSize: "13px" }}>
                  <strong>
                    asilbek
                  </strong>
                  {" "}
                  <span style={{ color: "var(--mu)" }}>
                    · kecha
                  </span>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.55" }}>
                  Xatolik grafigi juda tushunarli chiqibdi. O'zgaruvchan qadamli variantini ham qo'shsangiz zo'r bo'lardi.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "14px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                JM
              </span>
              <label style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
                  Izoh yozish
                </span>
                <textarea rows={2} placeholder="Izoh yozing (Markdown va LaTeX ishlaydi). Izoh uchun test shart emas." style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", font: "inherit", fontSize: "14px", resize: "vertical" }} />
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                Izoh qoldirish
              </A>
            </div>
          </section>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Haqida
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "14px", lineHeight: "1.55" }}>
              Runge-Kutta 4 usuli bilan differensial tenglamalarni yechish va Eyler usuli bilan solishtirish.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Python
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                ODE
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Sonli usullar
              </A>
              <A href="#" style={{ display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)" }}>
                Jupyter
              </A>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
              <span>
                README
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
              </svg>
              <span>
                <strong style={{ color: "var(--tx)" }}>
                  12
                </strong>
                {" "}
                yulduzcha
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>
                <strong style={{ color: "var(--tx)" }}>
                  4
                </strong>
                {" "}
                kuzatuvchi
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="5" r="2.5" />
                <circle cx="18" cy="5" r="2.5" />
                <circle cx="12" cy="19" r="2.5" />
                <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                <path d="M12 12.5v4"></path>
              </svg>
              <span>
                <strong style={{ color: "var(--tx)" }}>
                  3
                </strong>
                {" "}
                fork
              </span>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Yulduzcha testi
              </h2>
            </div>
            <div style={{ padding: "12px", border: "1px solid var(--warnbd)", background: "var(--warnbg)", borderRadius: "8px" }}>
              <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.5" }}>
                <span style={{ display: "flex", color: "var(--warn)", marginTop: "2px" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </span>
                <span>
                  Yulduzcha qo'yish uchun
                  {" "}
                  <strong>
                    5 savollik test
                  </strong>
                  dan o'ting: kamida 4 ta to'g'ri, 15 daqiqa.
                </span>
              </div>
              <A href="/hub/repo/quiz" style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "40px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "#ffffff", background: "var(--acbtn)" }}>
                Testni boshlash
              </A>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "8px" }}>
                Savollar: Sh. Boltibayev (8 ta savol bazasi)
              </div>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bog'langan mavzu
              </h2>
            </div>
            <A href="/education/lesson" style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
              <span>
                14.4. Birinchi tartibli differensial tenglamani yechish. Runge-Kutta usuli
              </span>
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Tashqi muhokama
              </h2>
            </div>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L10 14"></path>
                <path d="M21 3l-7 18-4-7-7-4z"></path>
              </svg>
              Telegram: AM-301 modellashtirish
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Belgilangan versiyalar
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                3
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12V4h8l10 10-8 8z"></path>
                <path d="M7.5 8.5h.01"></path>
              </svg>
              v1.2
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                Oxirgi
              </span>
            </div>
            <div style={{ fontSize: "12px", color: "var(--mu)", margin: "4px 0 8px 24px" }}>
              2 kun oldin
            </div>
            <A href="#" style={{ fontSize: "12px" }}>
              + 2 ta versiya
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Hissa qo'shganlar
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                3
              </span>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                JM
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                DK
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                AS
              </span>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Tillar
              </h2>
            </div>
            <div style={{ display: "flex", height: "8px", borderRadius: "999px", overflow: "hidden" }}>
              <span style={{ width: "72%", background: "var(--ac)" }}></span>
              <span style={{ width: "28%", background: "var(--warn)" }}></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px", marginTop: "8px", fontSize: "12px", color: "var(--mu)" }}>
              <span>
                Python 72%
              </span>
              <span>
                Jupyter Notebook 28%
              </span>
            </div>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
