/* Generated from the approved student design (page: Hub: mening repozitoriyalarim). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function MyRepos() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["Mening repozitoriyalarim", "/hub/mine"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
                Mening repozitoriyalarim
              </h1>
              <div style={{ fontSize: "14px", color: "var(--mu)", marginTop: "4px" }}>
                Kodlar, maqolalar va media ishlaringiz. Nomini bossangiz, repozitoriya sahifasi ochiladi.
              </div>
            </div>
            <A href="/hub/new" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
              Yangi repozitoriya
            </A>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--ac)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3v12"></path>
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </svg>
                </span>
                Repozitoriyalar
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                6
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                4 ochiq, 2 yopiq
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--warn)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                  </svg>
                </span>
                Yulduzchalar
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                34
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Bu oy +9
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--pu)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="5" r="2.5" />
                    <circle cx="18" cy="5" r="2.5" />
                    <circle cx="12" cy="19" r="2.5" />
                    <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                    <path d="M12 12.5v4"></path>
                  </svg>
                </span>
                Forklar
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                5
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                3 ta ishdan
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--ok)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="5" r="2.5" />
                    <circle cx="6" cy="19" r="2.5" />
                    <circle cx="18" cy="13" r="2.5" />
                    <path d="M6 7.5v9"></path>
                    <path d="M6 8a8 8 0 0 0 9.5 5"></path>
                  </svg>
                </span>
                Ochiq taklif
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                1
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Qaroringiz kutilmoqda
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--bad)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </span>
                Testi yo'q ishlar
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                2
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Yulduzcha ola olmaydi
              </div>
            </section>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <label style={{ flex: "999 1 240px", display: "flex", alignItems: "center", gap: "8px", height: "40px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
              <input type="search" placeholder="Repozitoriyalarim ichida qidirish" aria-label="Repozitoriyalarim ichida qidirish" style={{ flex: "1 1 0", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "14px", color: "var(--tx)" }} />
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
            <select aria-label="Ko'rinish" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
              <option>
                Ko'rinish: barchasi
              </option>
              <option>
                Ochiq
              </option>
              <option>
                Yopiq
              </option>
            </select>
            <select aria-label="Tartib" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
              <option>
                Oxirgi yangilangan
              </option>
              <option>
                Ko'p yulduzcha
              </option>
              <option>
                Nomi bo'yicha
              </option>
            </select>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Repozitoriya
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Tur
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Ko'rinish
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "right", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Yulduzcha
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "right", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Fork
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "right", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Taklif
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Yulduzcha testi
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Mavzu
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Yangilangan
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }} />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                      <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 8l-5 4 5 4"></path>
                            <path d="M16 8l5 4-5 4"></path>
                            <path d="M13 5l-2 14"></path>
                          </svg>
                        </span>
                        rk4-solver
                      </A>
                      <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "3px", lineHeight: "1.45" }}>
                        Runge-Kutta 4 usuli va Eyler bilan solishtirish
                      </div>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                        Kod va model
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                        Ochiq
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      12
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      3
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      1
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--ok)", fontWeight: "500" }}>
                      Tayyor (8 savol)
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      14.4
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      2 kun oldin
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/settings" aria-label="rk4-solver sozlamalari" title="Sozlamalar" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
                      </A>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                      <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                            <path d="M14 6l3 3"></path>
                          </svg>
                        </span>
                        logistik-eslatma
                      </A>
                      <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "3px", lineHeight: "1.45" }}>
                        Logistik model bo'yicha qisqa maqola va misollar
                      </div>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                        Maqola
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                        Ochiq
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      9
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--ok)", fontWeight: "500" }}>
                      Tayyor (6 savol)
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      6.2
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      5 kun oldin
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/settings" aria-label="logistik-eslatma sozlamalari" title="Sozlamalar" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
                      </A>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                      <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="6" width="13" height="12" rx="2" />
                            <path d="M16 10l5-3v10l-5-3z"></path>
                          </svg>
                        </span>
                        yirtqich-olja-animatsiya
                      </A>
                      <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "3px", lineHeight: "1.45" }}>
                        Lotka-Volterra modelining 6 daqiqalik video tushuntirishi
                      </div>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                        Audio / video
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                        Ochiq
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      8
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      1
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--warn)", fontWeight: "500" }}>
                      3 savol: yetarli emas
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      7.2
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      1 hafta oldin
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/settings" aria-label="yirtqich-olja-animatsiya sozlamalari" title="Sozlamalar" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
                      </A>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                      <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 8l-5 4 5 4"></path>
                            <path d="M16 8l5 4-5 4"></path>
                            <path d="M13 5l-2 14"></path>
                          </svg>
                        </span>
                        transport-masalasi
                      </A>
                      <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "3px", lineHeight: "1.45" }}>
                        Transport masalasini scipy bilan yechish
                      </div>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                        Kod va model
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                        Ochiq
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      5
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      1
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--bad)", fontWeight: "500" }}>
                      Savollar yo'q
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      5.4
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      2 hafta oldin
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/settings" aria-label="transport-masalasi sozlamalari" title="Sozlamalar" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
                      </A>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                      <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 8l-5 4 5 4"></path>
                            <path d="M16 8l5 4-5 4"></path>
                            <path d="M13 5l-2 14"></path>
                          </svg>
                        </span>
                        a9-amaliy-ish
                      </A>
                      <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "3px", lineHeight: "1.45" }}>
                        A9 amaliy mashg'ulot uchun topshirilgan ish
                      </div>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                        Kod va model
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                        Yopiq
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)", fontWeight: "500" }}>
                      Kerak emas
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      6.1
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      14-noyabr
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/settings" aria-label="a9-amaliy-ish sozlamalari" title="Sozlamalar" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
                      </A>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                      <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600" }}>
                        <span style={{ display: "flex", color: "var(--mu)" }}>
                          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 8l-5 4 5 4"></path>
                            <path d="M16 8l5 4-5 4"></path>
                            <path d="M13 5l-2 14"></path>
                          </svg>
                        </span>
                        kurs-ishi-qoralama
                      </A>
                      <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "3px", lineHeight: "1.45" }}>
                        Kurs ishi: shahar suv sarfi modeli (qoralama)
                      </div>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                        Kod va model
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                        Yopiq
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right" }}>
                      0
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)", fontWeight: "500" }}>
                      Kerak emas
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      16.2
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap", color: "var(--mu)" }}>
                      kecha
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                      <A href="/hub/repo/settings" aria-label="kurs-ishi-qoralama sozlamalari" title="Sozlamalar" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
                      </A>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)" }}>
              6 ta repozitoriya · yopiq ishlarni faqat siz va guruh o'qituvchisi ko'radi
            </div>
          </section>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Diqqat talab qiladi
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                  rk4-solver: 1 ta taklif qaroringizni kutmoqda
                </span>
              </A>
              <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4" }}>
                <span style={{ display: "flex", color: "var(--warn)", marginTop: "2px" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </span>
                <span>
                  2 ta ochiq ishda test savollari yetarli emas. Savollarni o'qituvchingiz yozadi: undan so'rang.
                </span>
              </div>
            </div>
            <div style={{ marginTop: "12px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 3L10 14"></path>
                  <path d="M21 3l-7 18-4-7-7-4z"></path>
                </svg>
                O'qituvchidan savol so'rash
              </A>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Oxirgi faollik
              </h2>
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4", padding: "5px 0" }}>
              <span style={{ display: "flex", color: "var(--mu)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                </svg>
              </span>
              <span>
                asilbek rk4-solver ga yulduzcha qo'ydi
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  bugun
                </span>
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4", padding: "5px 0" }}>
              <span style={{ display: "flex", color: "var(--mu)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
              </span>
              <span>
                rk4-solver muhokamasida yangi izoh
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  3 soat oldin
                </span>
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.4", padding: "5px 0" }}>
              <span style={{ display: "flex", color: "var(--mu)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="5" r="2.5" />
                  <circle cx="18" cy="5" r="2.5" />
                  <circle cx="12" cy="19" r="2.5" />
                  <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                  <path d="M12 12.5v4"></path>
                </svg>
              </span>
              <span>
                bekzod_t rk4-solver ni fork qildi
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  kecha
                </span>
              </span>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                XP
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Yangi ish yuklash: +200 XP. Har bir yulduzcha: +10 XP. Kunlik chegara: 400 XP.
            </p>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
