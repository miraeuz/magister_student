/* Generated from the approved student design (page: Talaba: bosh sahifa (telefon)). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Mobile() {
  const v = useShellVals();
  return (
    <div data-theme={v.theme} data-accent={v.accent} style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--tx)" }}>
      <div style={{ width: "390px", height: "1260px", boxSizing: "border-box", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
        <header style={{ background: "var(--sf)", borderBottom: "1px solid var(--bd)", padding: "8px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <A href="/" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--tx)", fontWeight: "600", fontSize: "16px" }}>
            <span style={{ width: "28px", height: "28px", borderRadius: "6px", background: "var(--tx)", color: "var(--sf)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace", fontSize: "15px" }}>
              ∫
            </span>
            MathWeb
          </A>
          <span style={{ marginLeft: "auto" }}></span>
          <B aria-label="Bildirishnomalar, 2 ta yangi" style={{ position: "relative", width: "44px", height: "44px", border: "0", background: "transparent", color: "var(--tx)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"></path>
              <path d="M10 20a2 2 0 0 0 4 0"></path>
            </svg>
            <span style={{ position: "absolute", top: "9px", right: "10px", width: "8px", height: "8px", borderRadius: "999px", background: "var(--ac)" }}></span>
          </B>
          <B aria-label="Profil menyusi" style={{ width: "36px", height: "36px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--av)", color: "var(--tx)", fontWeight: "600", fontSize: "12px" }}>
            JM
          </B>
        </header>
        <div style={{ flex: "1 1 0", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <h1 style={{ margin: "0", fontSize: "20px", fontWeight: "600" }}>
              Xayrli kun, Jahongirxon
            </h1>
            <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
              NamDU · AM-301 · 5-semestr
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--warn)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"></path>
                  </svg>
                </span>
                Faollik
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                14 kun
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Davom etmoqda
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--ok)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                    <path d="M4 19V5"></path>
                  </svg>
                </span>
                Mavzular
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                21 / 59
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                36 foiz
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--bad)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 6h12"></path>
                    <path d="M8 12h12"></path>
                    <path d="M8 18h12"></path>
                    <path d="M4 6h.01"></path>
                    <path d="M4 12h.01"></path>
                    <path d="M4 18h.01"></path>
                  </svg>
                </span>
                Topshiriq
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                3
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Bugun 20:00
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--ac)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
                Natija
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                82%
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Oxirgi 5 ta
              </div>
            </section>
          </div>
          <h2 style={{ margin: "6px 0 0", fontSize: "15px", fontWeight: "600" }}>
            Bo'limlar
          </h2>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "64px", padding: "10px 14px", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", color: "var(--tx)" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ok)", background: "var(--okbg)" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "block", fontSize: "15px", fontWeight: "600" }}>
                Ta'lim
              </span>
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                Joriy mavzu: 6.2. Logistik model
              </span>
            </span>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </A>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "64px", padding: "10px 14px", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", color: "var(--tx)" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pu)", background: "var(--pubg)" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3v12"></path>
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "block", fontSize: "15px", fontWeight: "600" }}>
                Hub
              </span>
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                6 repozitoriya · 34 yulduzcha
              </span>
            </span>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </A>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "64px", padding: "10px 14px", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", color: "var(--tx)" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ac)", background: "var(--acbg)" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "block", fontSize: "15px", fontWeight: "600" }}>
                Community
              </span>
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                2 ta yangi javob
              </span>
            </span>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </A>
          <A href="#" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "64px", padding: "10px 14px", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", color: "var(--tx)" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--warn)", background: "var(--warnbg)" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
            </span>
            <span style={{ flex: "1 1 0", minWidth: "0" }}>
              <span style={{ display: "block", fontSize: "15px", fontWeight: "600" }}>
                Challenges
              </span>
              <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                17 ta yechilgan · 1 ta tekshiruvda
              </span>
            </span>
            <span style={{ display: "flex", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </A>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bildirishnomalar
              </h2>
              <A href="#" style={{ fontSize: "12px" }}>
                Barchasi
              </A>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", margin: "0 -6px" }}>
              <A href="#" style={{ display: "flex", gap: "10px", padding: "10px", borderRadius: "6px", color: "var(--tx)", background: "var(--acbg)" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ac)", background: "var(--sf)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "13px", lineHeight: "1.4" }}>
                  Yangi uy vazifasi:
                  {" "}
                  <strong>
                    Logistik model
                  </strong>
                  , muddati bugun 20:00
                  <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                    2 soat oldin
                  </span>
                </span>
              </A>
              <A href="#" style={{ display: "flex", gap: "10px", padding: "10px", borderRadius: "6px", color: "var(--tx)", background: "var(--acbg)" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ok)", background: "var(--okbg)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "13px", lineHeight: "1.4" }}>
                  O'qituvchi savolingizga javob berdi
                  <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                    kecha
                  </span>
                </span>
              </A>
              <A href="#" style={{ display: "flex", gap: "10px", padding: "10px", borderRadius: "6px", color: "var(--tx)", background: "transparent" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--warn)", background: "var(--warnbg)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "13px", lineHeight: "1.4" }}>
                  <strong>
                    rk4-solver
                  </strong>
                  {" "}
                  repozitoriyangiz yulduzcha oldi
                  <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                    2 kun oldin
                  </span>
                </span>
              </A>
              <A href="#" style={{ display: "flex", gap: "10px", padding: "10px", borderRadius: "6px", color: "var(--tx)", background: "transparent" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pu)", background: "var(--pubg)" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8l-5 4 5 4"></path>
                    <path d="M16 8l5 4-5 4"></path>
                    <path d="M13 5l-2 14"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "13px", lineHeight: "1.4" }}>
                  Modellashtirish masalangiz tekshiruvga olindi
                  <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                    3 kun oldin
                  </span>
                </span>
              </A>
            </div>
          </section>
        </div>
        <nav aria-label="Asosiy" style={{ background: "var(--sf)", borderTop: "1px solid var(--bd)", display: "flex", padding: "0 4px" }}>
          <A href="#" style={{ flex: "1 1 0", minHeight: "56px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontSize: "11px", fontWeight: "600", color: "var(--ac)" }}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l9-8 9 8"></path>
              <path d="M5 10v10h14V10"></path>
            </svg>
            Bosh sahifa
          </A>
          <A href="#" style={{ flex: "1 1 0", minHeight: "56px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontSize: "11px", fontWeight: "400", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
              <path d="M4 19V5"></path>
            </svg>
            Ta'lim
          </A>
          <A href="#" style={{ flex: "1 1 0", minHeight: "56px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontSize: "11px", fontWeight: "400", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3v12"></path>
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M18 9a9 9 0 0 1-9 9"></path>
            </svg>
            Hub
          </A>
          <A href="#" style={{ flex: "1 1 0", minHeight: "56px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontSize: "11px", fontWeight: "400", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
            </svg>
            Community
          </A>
          <A href="#" style={{ flex: "1 1 0", minHeight: "56px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontSize: "11px", fontWeight: "400", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 8l-5 4 5 4"></path>
              <path d="M16 8l5 4-5 4"></path>
              <path d="M13 5l-2 14"></path>
            </svg>
            Challenges
          </A>
        </nav>
      </div>
    </div>
  );
}
