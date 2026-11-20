/* Generated from the approved student design (page: Hub: fayl ko'rinishi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function RepoFile() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["jahongirxon", "/hub/mine"], ["rk4-solver", "/hub/repo"], ["models/rk4.py", "/hub/repo/file"]]} maxW={1560}>
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
            <div style={{ flex: "999 1 240px", minWidth: "0", fontSize: "15px", fontFamily: "JetBrains Mono, monospace" }}>
              <A href="/hub/repo">
                rk4-solver
              </A>
              {" "}
              <span style={{ color: "var(--mu)" }}>
                /
              </span>
              {" "}
              <A href="#">
                models
              </A>
              {" "}
              <span style={{ color: "var(--mu)" }}>
                /
              </span>
              {" "}
              <strong>
                rk4.py
              </strong>
            </div>
            <A href="/hub/repo/versions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                <path d="M4 4v4h4"></path>
                <path d="M12 8v4l3 2"></path>
              </svg>
              Tarix
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                <path d="M14 6l3 3"></path>
              </svg>
              Tahrirlash
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11"></path>
                <path d="M7 11l5 5 5-5"></path>
                <path d="M5 20h14"></path>
              </svg>
              Yuklab olish
            </A>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 16px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "22px", height: "22px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", color: "var(--tx)" }}>
                DK
              </span>
              <strong>
                dilnoza_k
              </strong>
              <span style={{ flex: "999 1 200px", minWidth: "0", color: "var(--mu)" }}>
                Qadam soni yaxlitlash xatosi tuzatildi (taklif #4)
              </span>
              <span style={{ color: "var(--mu)", fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
                e7a10c3
              </span>
              <span style={{ color: "var(--mu)" }}>
                bugun
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "8px 16px", borderBottom: "1px solid var(--bd)", fontSize: "12px", color: "var(--mu)" }}>
              <span>
                21 qator
              </span>
              <span>
                612 bayt
              </span>
              <span>
                Python
              </span>
              <span style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Nusxa olish
                </A>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 4l13 8-13 8z"></path>
                  </svg>
                  Kod maydonida ochish
                </A>
              </span>
            </div>
            <div style={{ display: "flex", background: "#0d1117", overflowX: "auto" }}>
              <pre aria-hidden="true" style={{ margin: "0", padding: "16px 12px 16px 16px", color: "#6e7681", textAlign: "right", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", userSelect: "none" }}>
                {"1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21"}
              </pre>
              <pre style={{ margin: "0", padding: "16px 16px 16px 4px", color: "#e6edf3", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6" }}>
                <span style={{ color: "#8b949e" }}>
                  {"\"\"\"Runge-Kutta 4 usuli: dy/dt = f(t, y).\"\"\""}
                </span>
                {"\n\n"}
                <span style={{ color: "#ff7b72" }}>
                  {"def"}
                </span>
                {" "}
                <span style={{ color: "#d2a8ff" }}>
                  {"step"}
                </span>
                {"(f, t, y, h):\n    k1 = f(t, y)\n    k2 = f(t + h / "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {", y + h * k1 / "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {")\n    k3 = f(t + h / "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {", y + h * k2 / "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {")\n    k4 = f(t + h, y + h * k3)\n    "}
                <span style={{ color: "#ff7b72" }}>
                  {"return"}
                </span>
                {" y + h * (k1 + "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {" * k2 + "}
                <span style={{ color: "#79c0ff" }}>
                  {"2"}
                </span>
                {" * k3 + k4) / "}
                <span style={{ color: "#79c0ff" }}>
                  {"6"}
                </span>
                {"\n\n\n"}
                <span style={{ color: "#ff7b72" }}>
                  {"def"}
                </span>
                {" "}
                <span style={{ color: "#d2a8ff" }}>
                  {"solve"}
                </span>
                {"(f, y0, t_end, h="}
                <span style={{ color: "#79c0ff" }}>
                  {"0.1"}
                </span>
                {"):\n    "}
                <span style={{ color: "#ff7b72" }}>
                  {"if"}
                </span>
                {" h <= "}
                <span style={{ color: "#79c0ff" }}>
                  {"0"}
                </span>
                {":\n        "}
                <span style={{ color: "#ff7b72" }}>
                  {"raise"}
                </span>
                {" ValueError("}
                <span style={{ color: "#a5d6ff" }}>
                  {"\"h musbat bo'lishi kerak\""}
                </span>
                {")\n    n = "}
                <span style={{ color: "#d2a8ff" }}>
                  {"round"}
                </span>
                {"(t_end / h)\n    t, y = "}
                <span style={{ color: "#79c0ff" }}>
                  {"0.0"}
                </span>
                {", y0\n    ts, ys = [t], [y]\n    "}
                <span style={{ color: "#ff7b72" }}>
                  {"for"}
                </span>
                {" _ "}
                <span style={{ color: "#ff7b72" }}>
                  {"in"}
                </span>
                {" "}
                <span style={{ color: "#d2a8ff" }}>
                  {"range"}
                </span>
                {"(n):\n        y = step(f, t, y, h)\n        t += h\n        ts.append(t); ys.append(y)\n    "}
                <span style={{ color: "#ff7b72" }}>
                  {"return"}
                </span>
                {" ts, ys"}
              </pre>
            </div>
          </section>
          <div style={{ fontSize: "13px", color: "var(--mu)" }}>
            Jupyter notebook kataklari natijalari bilan, CSV jadval ko'rinishida (dastlabki 50 qator), PDF esa sahifada ochiladi.
          </div>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Fayllar
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 8px", borderRadius: "6px", fontSize: "13px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <span style={{ display: "flex", color: "var(--ac)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h6l2 2h10v11H3z"></path>
                  </svg>
                </span>
                models
              </A>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 24px", borderRadius: "6px", fontSize: "13px", color: "var(--ac)", background: "var(--acbg)", fontWeight: "600" }}>
                <span style={{ display: "flex", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                rk4.py
              </A>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 24px", borderRadius: "6px", fontSize: "13px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <span style={{ display: "flex", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                euler.py
              </A>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 8px", borderRadius: "6px", fontSize: "13px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <span style={{ display: "flex", color: "var(--ac)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h6l2 2h10v11H3z"></path>
                  </svg>
                </span>
                data
              </A>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 8px", borderRadius: "6px", fontSize: "13px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <span style={{ display: "flex", color: "var(--ac)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h6l2 2h10v11H3z"></path>
                  </svg>
                </span>
                tests
              </A>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 8px", borderRadius: "6px", fontSize: "13px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <span style={{ display: "flex", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                README.md
              </A>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 8px", borderRadius: "6px", fontSize: "13px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <span style={{ display: "flex", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                analysis.ipynb
              </A>
              <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "34px", padding: "0 8px 0 8px", borderRadius: "6px", fontSize: "13px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
                <span style={{ display: "flex", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                requirements.txt
              </A>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bu fayl tarixi
              </h2>
            </div>
            <A href="/hub/repo/versions" style={{ display: "block", padding: "5px 0", fontSize: "13px", lineHeight: "1.4", color: "var(--tx)" }}>
              Qadam soni yaxlitlash xatosi tuzatildi
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                dilnoza_k · bugun
              </span>
            </A>
            <A href="/hub/repo/versions" style={{ display: "block", padding: "5px 0", fontSize: "13px", lineHeight: "1.4", color: "var(--tx)" }}>
              RK4 va Eyler alohida fayllarga ajratildi
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                jahongirxon · 1 hafta oldin
              </span>
            </A>
            <A href="/hub/repo/versions" style={{ display: "block", padding: "5px 0", fontSize: "13px", lineHeight: "1.4", color: "var(--tx)" }}>
              Boshlang'ich versiya
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                jahongirxon · 3 hafta oldin
              </span>
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Funksiyalar
              </h2>
            </div>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "32px", fontSize: "13px", fontFamily: "JetBrains Mono, monospace" }}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
              step(f, t, y, h)
            </A>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "32px", fontSize: "13px", fontFamily: "JetBrains Mono, monospace" }}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
              solve(f, y0, t_end, h)
            </A>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
