/* Generated from the approved student design (page: Hub: repozitoriya sozlamalari). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function RepoSettings() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["jahongirxon", "/hub/mine"], ["rk4-solver", "/hub/repo"], ["Sozlamalar", "/hub/repo/settings"]]} maxW={1560}>
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
          <A href="/hub/repo/settings" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)", whiteSpace: "nowrap" }}>
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
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Umumiy
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                Nomi
                <input type="text" defaultValue="rk4-solver" placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", maxWidth: "420px" }} />
                <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                  Nom o'zgarsa, eski havolalar yangi manzilga yo'naltiriladi.
                </span>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                Tavsif
                <input type="text" defaultValue="Runge-Kutta 4 usuli bilan differensial tenglamalarni yechish va Eyler usuli bilan solishtirish." placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                Teglar
                <input type="text" defaultValue="Python, ODE, Sonli usullar, Jupyter" placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Ish turi
                    <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }}>
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
                  </label>
                </div>
                <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Bog'langan mavzu
                    <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }}>
                      <option>
                        14.4. Runge-Kutta usuli
                      </option>
                      <option>
                        Tanlanmagan
                      </option>
                    </select>
                  </label>
                </div>
              </div>
              <div>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                  Saqlash
                </A>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Ko'rinish
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div role="radiogroup" aria-label="Ko'rinish" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", gap: "10px", padding: "12px 14px", border: "2px solid var(--ac)", borderRadius: "8px", background: "var(--acbg)", cursor: "pointer" }}>
                  <input type="radio" name="vis2" defaultChecked={true} style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--ac)" }} />
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Ochiq
                    </span>
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "400", color: "var(--mu)", marginTop: "2px", lineHeight: "1.45" }}>
                      Hamma ko'radi. Yulduzcha va XP faqat ochiq ishlarda.
                    </span>
                  </span>
                </label>
                <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", gap: "10px", padding: "12px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", cursor: "pointer" }}>
                  <input type="radio" name="vis2" style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--ac)" }} />
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Yopiq
                    </span>
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "400", color: "var(--mu)", marginTop: "2px", lineHeight: "1.45" }}>
                      Faqat siz va guruh o'qituvchisi ko'radi.
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Tashqi muhokama havolalari
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                1 / 5
              </span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px" }}>
                <span style={{ display: "flex", color: "var(--ac)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 3L10 14"></path>
                    <path d="M21 3l-7 18-4-7-7-4z"></path>
                  </svg>
                </span>
                <strong style={{ fontSize: "13px" }}>
                  Telegram
                </strong>
                <span style={{ flex: "999 1 200px", minWidth: "0", fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  https://t.me/+am301_modellashtirish
                </span>
                <B style={{ minHeight: "36px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--bad)", fontSize: "13px" }}>
                  Olib tashlash
                </B>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "flex-end" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                  Platforma
                  <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", minWidth: "160px" }}>
                    <option>
                      Telegram
                    </option>
                    <option>
                      WhatsApp
                    </option>
                    <option>
                      Discord
                    </option>
                    <option>
                      YouTube
                    </option>
                    <option>
                      Google Meet
                    </option>
                    <option>
                      Zoom
                    </option>
                    <option>
                      Boshqa
                    </option>
                  </select>
                </label>
                <div style={{ flex: "999 1 260px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Havola
                    <input type="text" defaultValue="" placeholder="https://" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                  </label>
                </div>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                  Qo'shish
                </A>
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Ko'pi bilan 5 ta havola. Havola tanlangan platformaga tegishli bo'lishi tekshiriladi.
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Yulduzcha testi
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px" }}>
                <div style={{ flex: "999 1 300px", minWidth: "0", fontSize: "14px", lineHeight: "1.55" }}>
                  Savollar bazasi:
                  {" "}
                  <strong>
                    8 ta
                  </strong>
                  {" "}
                  (kamida 5 ta kerak). Savollarni guruh o'qituvchisi
                  {" "}
                  <strong>
                    Sh. Boltibayev
                  </strong>
                  {" "}
                  yozgan. Siz savollarni ham, javoblarni ham ko'rmaysiz.
                </div>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Tayyor
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "13px", color: "var(--mu)" }}>
                <span>
                  Urinishlar:
                  {" "}
                  <strong style={{ color: "var(--tx)" }}>
                    19
                  </strong>
                </span>
                <span>
                  O'tganlar:
                  {" "}
                  <strong style={{ color: "var(--tx)" }}>
                    12
                  </strong>
                </span>
                <span>
                  O'tish ulushi:
                  {" "}
                  <strong style={{ color: "var(--tx)" }}>
                    63%
                  </strong>
                </span>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bad)", borderRadius: "8px", padding: "4px 16px 8px" }}>
            <h2 style={{ margin: "12px 0 4px", fontSize: "15px", fontWeight: "600", color: "var(--bad)" }}>
              Xavfli amallar
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 300px", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Repozitoriyani yopiq qilish
                </div>
                <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                  Yulduzchalar saqlanadi, lekin ish ro'yxatlardan yo'qoladi.
                </div>
              </div>
              <B style={{ minHeight: "40px", padding: "0 14px", border: "1px solid var(--bad)", borderRadius: "6px", background: "var(--sf)", color: "var(--bad)", fontSize: "13px", fontWeight: "600" }}>
                Yopiq qilish
              </B>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 300px", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Repozitoriyani o'chirish
                </div>
                <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                  Barcha fayllar, versiyalar va muhokamalar o'chadi. Bu amalni qaytarib bo'lmaydi.
                </div>
              </div>
              <B style={{ minHeight: "40px", padding: "0 14px", border: "1px solid var(--bad)", borderRadius: "6px", background: "var(--sf)", color: "var(--bad)", fontSize: "13px", fontWeight: "600" }}>
                O'chirish
              </B>
            </div>
          </section>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Sozlamalar bo'limlari
            </h2>
            <div style={{ display: "flex", flexDirection: "column", fontSize: "13px" }}>
              <A href="#" style={{ minHeight: "36px", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", borderRadius: "6px", color: "var(--ac)", background: "var(--acbg)", fontWeight: "600" }}>
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
                Umumiy
              </A>
              <A href="#" style={{ minHeight: "36px", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", borderRadius: "6px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Ko'rinish
              </A>
              <A href="#" style={{ minHeight: "36px", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", borderRadius: "6px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path>
                  <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"></path>
                </svg>
                Tashqi havolalar
              </A>
              <A href="#" style={{ minHeight: "36px", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", borderRadius: "6px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
                Yulduzcha testi
              </A>
              <A href="#" style={{ minHeight: "36px", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", borderRadius: "6px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                  <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                  <path d="M18 14a6 6 0 0 1 3.5 6"></path>
                </svg>
                Hamkorlar
              </A>
              <A href="#" style={{ minHeight: "36px", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", borderRadius: "6px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6"></path>
                  <path d="M12 16.5h.01"></path>
                </svg>
                Xavfli amallar
              </A>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Hamkorlar
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                JM
              </span>
              <span style={{ flex: "1 1 0", fontWeight: "500" }}>
                jahongirxon
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                Egasi
              </span>
            </div>
            <p style={{ margin: "10px 0 0", fontSize: "12px", lineHeight: "1.5", color: "var(--mu)" }}>
              Boshqalar o'zgarishni taklif orqali yuboradi; siz qabul qilasiz yoki rad etasiz.
            </p>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Faqat siz ko'rasiz
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Bu sahifa faqat repozitoriya egasiga ochiq.
            </p>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
