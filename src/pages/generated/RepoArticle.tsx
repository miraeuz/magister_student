/* Generated from the approved student design (page: Hub: maqola). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function RepoArticle() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["jahongirxon", "/hub/mine"], ["rk4-solver", "/hub/repo"], ["Maqola", "/hub/repo/article"]]} maxW={1560}>
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
          <A href="/hub/repo/article" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)", whiteSpace: "nowrap" }}>
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
          <article style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "32px 36px" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Maqola
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  8 daqiqa o'qish
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  v1.2
                </span>
              </div>
              <h1 style={{ margin: "0 0 12px", fontSize: "32px", fontWeight: "600", lineHeight: "1.2" }}>
                Nega RK4 Eyler usulidan ming marta aniqroq?
              </h1>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--mu)", paddingBottom: "20px", borderBottom: "1px solid var(--bd)", marginBottom: "24px" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                  JM
                </span>
                <strong style={{ color: "var(--tx)" }}>
                  jahongirxon
                </strong>
                <span>
                  14-noyabr, 2026
                </span>
                <span>
                  ·
                </span>
                <span>
                  2 kun oldin yangilangan
                </span>
                <span style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                      <path d="M14 6l3 3"></path>
                    </svg>
                    Tahrirlash
                  </A>
                </span>
              </div>
              <p style={{ margin: "0 0 14px", fontSize: "16px", lineHeight: "1.75" }}>
                Differensial tenglamani kompyuterda yechganda biz egri chiziqni kichik qadamlar bilan «yurib» chiqamiz. Savol shundaki: har bir qadamda qayerga qarab yurish kerak?
              </p>
              <h2 id="eyler" style={{ margin: "28px 0 10px", fontSize: "22px", fontWeight: "600" }}>
                1. Eyler usuli: bitta qiyalik
              </h2>
              <p style={{ margin: "0 0 14px", fontSize: "16px", lineHeight: "1.75" }}>
                Eyler usuli qadam boshidagi qiyalikni oladi va butun qadam davomida shu yo'nalishda yuradi:
              </p>
              <div style={{ margin: "0 0 14px", padding: "14px 16px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "19px", textAlign: "center" }}>
                y
                <sub>
                  n+1
                </sub>
                {" "}
                = y
                <sub>
                  n
                </sub>
                {" "}
                + h · f(t
                <sub>
                  n
                </sub>
                , y
                <sub>
                  n
                </sub>
                )
              </div>
              <p style={{ margin: "0 0 14px", fontSize: "16px", lineHeight: "1.75" }}>
                Egri chiziq bukilsa, usul orqada qoladi. Xatolik qadam hajmiga proporsional: h ikki barobar kichraysa, xato ham ikki barobar kamayadi.
              </p>
              <h2 id="rk4" style={{ margin: "28px 0 10px", fontSize: "22px", fontWeight: "600" }}>
                2. RK4: to'rtta qiyalikning o'rtachasi
              </h2>
              <p style={{ margin: "0 0 14px", fontSize: "16px", lineHeight: "1.75" }}>
                Runge-Kutta 4 usuli qadam boshida, o'rtasida ikki marta va oxirida qiyalikni o'lchaydi, keyin ularning vaznli o'rtachasi bo'yicha yuradi.
              </p>
              <figure style={{ margin: "0 0 14px" }}>
                <div role="img" aria-label="Eyler va RK4 xatoligining qadam hajmiga bog'liqligi grafigi uchun joy" style={{ height: "240px", border: "1px dashed var(--bd)", borderRadius: "8px", background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20V4"></path>
                    <path d="M4 20h16"></path>
                    <path d="M8 16v-4"></path>
                    <path d="M12 16V8"></path>
                    <path d="M16 16v-7"></path>
                  </svg>
                  <span style={{ fontSize: "13px" }}>
                    Rasm: xatolik va qadam hajmi (analysis.ipynb dan)
                  </span>
                </div>
                <figcaption style={{ fontSize: "13px", color: "var(--mu)", marginTop: "8px", textAlign: "center" }}>
                  1-rasm. Qadam kichraygan sari RK4 xatoligi ancha tez kamayadi.
                </figcaption>
              </figure>
              <pre style={{ margin: "0 0 14px", padding: "14px 16px", background: "#0d1117", color: "#e6edf3", borderRadius: "6px", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", overflowX: "auto" }}>
                {"k1 = f(t, y)\nk2 = f(t + h/"}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {", y + h*k1/"}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {")\nk3 = f(t + h/"}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {", y + h*k2/"}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {")\nk4 = f(t + h, y + h*k3)\ny = y + h * (k1 + "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {"*k2 + "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {"*k3 + k4) / "}
                <span style={{ color: "#79c0ff" }}>
                  {"6"}
                </span>
              </pre>
              <h2 id="xulosa" style={{ margin: "28px 0 10px", fontSize: "22px", fontWeight: "600" }}>
                3. Xulosa
              </h2>
              <p style={{ margin: "0 0 14px", fontSize: "16px", lineHeight: "1.75" }}>
                RK4 xatoligi h ning to'rtinchi darajasiga proporsional. Shuning uchun h = 0,1 da u Eyler usulidan taxminan ming marta aniqroq, hisoblash esa atigi to'rt barobar ko'p.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", paddingTop: "20px", borderTop: "1px solid var(--bd)", marginTop: "24px" }}>
                <A href="/hub/repo/quiz" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                  </svg>
                  Yulduzcha
                  <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                    12
                  </span>
                </A>
                <A href="/hub/repo/talk" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                  </svg>
                  Izoh yozish
                  <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                    4
                  </span>
                </A>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Yulduzcha uchun 5 savollik test, izoh uchun test shart emas.
                </span>
              </div>
            </div>
          </article>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Mundarija
            </h2>
            <div style={{ display: "flex", flexDirection: "column", fontSize: "13px" }}>
              <A href="#eyler" style={{ minHeight: "34px", display: "flex", alignItems: "center", paddingLeft: "10px", borderLeft: "2px solid var(--ac)", color: "var(--ac)", fontWeight: "600" }}>
                1. Eyler usuli: bitta qiyalik
              </A>
              <A href="#rk4" style={{ minHeight: "34px", display: "flex", alignItems: "center", paddingLeft: "10px", borderLeft: "2px solid var(--bd)", color: "var(--tx)", fontWeight: "400" }}>
                2. RK4: to'rtta qiyalikning o'rtachasi
              </A>
              <A href="#xulosa" style={{ minHeight: "34px", display: "flex", alignItems: "center", paddingLeft: "10px", borderLeft: "2px solid var(--bd)", color: "var(--tx)", fontWeight: "400" }}>
                3. Xulosa
              </A>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Yulduzcha testi
              </h2>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Maqolani o'qib bo'lgach, 5 savollik testdan o'ting.
            </p>
            <A href="/hub/repo/quiz" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
              Testni boshlash
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Maqola haqida
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2"></path>
              </svg>
              <span>
                8 daqiqa o'qish
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>
                214 marta o'qilgan
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
              <span>
                14.4-mavzuga bog'langan
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                <path d="M4 4v4h4"></path>
                <path d="M12 8v4l3 2"></path>
              </svg>
              <span>
                3-versiya
              </span>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Shu muallifdan
              </h2>
            </div>
            <A href="#" style={{ display: "block", fontSize: "13px", lineHeight: "1.4", padding: "4px 0" }}>
              Logistik model bo'yicha qisqa eslatma
            </A>
            <A href="#" style={{ display: "block", fontSize: "13px", lineHeight: "1.4", padding: "4px 0" }}>
              Yirtqich-o'lja modeli animatsiyasi
            </A>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
