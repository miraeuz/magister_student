/* Generated from the approved student design (page: Challenges: masalalar). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Challenges() {
  const v = useShellVals();
  return (
    <Shell layer="ch" subTitle="CHALLENGES" subActive="list" subItems={[["Masalalar", "list", "/challenges", "list", ""], ["Ro'yxatlar", "bookmark", "/challenges/lists", "lists", ""], ["Modellash", "cube", "/challenges/modelling", "model", "1"], ["Guruh musobaqasi", "trophy", "/challenges/contest", "contest", "2"], ["Reyting", "chart", "/leaderboard", "rank", ""]]} crumbs={[["Challenges", "/challenges"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600" }}>
                Masalalar
              </h1>
              <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--mu)" }}>
                Python kodi yozing, avtomatik tekshiruvdan o'ting. Modellash masalalarida o'qituvchi baholaydi.
              </p>
            </div>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
              <span style={{ flex: "none", width: "48px", height: "48px", borderRadius: "14px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18"></path>
                  <path d="M8 3v4"></path>
                  <path d="M16 3v4"></path>
                </svg>
              </span>
              <div style={{ flex: "999 1 240px", minWidth: "0" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
                  BUGUNGI MASALA · 16-NOYABR
                </div>
                <div style={{ fontSize: "17px", fontWeight: "600", marginTop: "2px" }}>
                  Zarbali tebranish: amplituda so'nishi
                </div>
                <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                  +150 XP · 14 kunlik faollikni saqlaydi
                </div>
              </div>
              <A href="/challenges/problem" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4l13 8-13 8z"></path>
                </svg>
                Boshlash
              </A>
            </div>
          </section>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            <label style={{ flex: "999 1 240px", maxWidth: "420px", display: "flex", alignItems: "center", gap: "8px", height: "40px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
              <input type="search" placeholder="Masala yoki teg qidirish" aria-label="Masala qidirish" style={{ flex: "1 1 0", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "14px", color: "var(--tx)" }} />
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                Holat
              </span>
              <select aria-label="Holat" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
                <option>
                  Hammasi
                </option>
                <option>
                  Yechilgan
                </option>
                <option>
                  Urinilgan
                </option>
                <option>
                  Boshlanmagan
                </option>
              </select>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                Qiyinlik
              </span>
              <select aria-label="Qiyinlik" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
                <option>
                  Hammasi
                </option>
                <option>
                  Oson
                </option>
                <option>
                  O'rta
                </option>
                <option>
                  Qiyin
                </option>
              </select>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                Turi
              </span>
              <select aria-label="Turi" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
                <option>
                  Hammasi
                </option>
                <option>
                  Kod
                </option>
                <option>
                  Model
                </option>
              </select>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                Saralash
              </span>
              <select aria-label="Saralash" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
                <option>
                  Raqam bo'yicha
                </option>
                <option>
                  Qabul foizi
                </option>
                <option>
                  Yechganlar
                </option>
              </select>
            </label>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "var(--tx)", background: "var(--sf)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 3L5 14h6l-1 7 8-11h-6z"></path>
              </svg>
              Tasodifiy masala
            </A>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              ODE
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                18
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              Sonli usullar
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                14
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              Regressiya
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                9
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              Optimizatsiya
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                7
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              PDE
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                6
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              Ehtimollik
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                8
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              Demografiya
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                4
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "32px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "999px", fontSize: "13px", color: "var(--tx)", background: "var(--sf)" }}>
              Barchasi
              <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                61
              </span>
            </A>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 16px", fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
              <span style={{ flex: "none", width: "24px" }}></span>
              <span style={{ flex: "none", width: "36px" }}>
                #
              </span>
              <span style={{ flex: "999 1 220px" }}>
                Nomi
              </span>
              <span style={{ flex: "0 0 64px" }}>
                Turi
              </span>
              <span style={{ flex: "0 0 110px" }}>
                Qiyinlik
              </span>
              <span style={{ flex: "0 0 62px", textAlign: "right" }}>
                Qabul
              </span>
              <span style={{ flex: "0 0 62px", textAlign: "right" }}>
                Yechgan
              </span>
            </div>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span title="Yechilgan" aria-label="Yechilgan" style={{ display: "flex", color: "var(--ok)" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                1.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Eyler usuli: bitta qadam
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    ODE
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Sonli usullar
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Oson · 8 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                78,4%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                2 140
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span title="Yechilgan" aria-label="Yechilgan" style={{ display: "flex", color: "var(--ok)" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                2.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Eksponensial o'sish: parametrni toping
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Regressiya
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Python
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Oson · 8 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                71,2%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                1 905
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span title="Yechilgan" aria-label="Yechilgan" style={{ display: "flex", color: "var(--ok)" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                3.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Logistik tenglama: RK4 bilan yechim
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    ODE
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    RK4
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                  O'rta · 5 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                54,9%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                1 232
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span title="Urinilgan" aria-label="Urinilgan" style={{ display: "flex", color: "var(--warn)" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                </span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                4.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Lotka-Volterra: davr uzunligi
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    ODE
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Tizimlar
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                  O'rta · 4 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                41,3%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                876
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span aria-label="Boshlanmagan" style={{ display: "block", width: "18px", height: "18px" }}></span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                5.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Issiqlik tenglamasi: oshkor sxema barqarorligi
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    PDE
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Barqarorlik
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--bad)", background: "var(--badbg)", whiteSpace: "nowrap" }}>
                  Qiyin · 2 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                22,7%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                311
              </span>
            </A>
            <A href="/challenges/modelling" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span aria-label="Boshlanmagan" style={{ display: "block", width: "18px", height: "18px" }}></span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                6.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Aholi o'sishi: model tuzing va asoslang
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Demografiya
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Modellash
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                  Model
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                  O'rta · 4 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                —
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                164
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span title="Yechilgan" aria-label="Yechilgan" style={{ display: "flex", color: "var(--ok)" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                7.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Eng kichik kvadratlar: chiziqli moslash
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Regressiya
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Chiziqli algebra
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Oson · 7 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                66,0%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                1 654
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span aria-label="Boshlanmagan" style={{ display: "block", width: "18px", height: "18px" }}></span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                8.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Monte-Karlo: pi ning bahosi
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Ehtimollik
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Simulyatsiya
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  Oson · 7 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                62,1%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                1 410
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span aria-label="Boshlanmagan" style={{ display: "block", width: "18px", height: "18px" }}></span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                9.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Epidemiya modeli (SIR): cho'qqi vaqti
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    ODE
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Epidemiologiya
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                  O'rta · 5 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                38,8%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                702
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "6px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "transparent" }}>
              <span style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center" }}>
                <span aria-label="Boshlanmagan" style={{ display: "block", width: "18px", height: "18px" }}></span>
              </span>
              <span style={{ flex: "none", width: "36px", fontSize: "14px", color: "var(--mu)" }}>
                10.
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                  Chiziqli dasturlash: ratsion masalasi
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                  <span style={{ fontSize: "12px", color: "var(--mu)", padding: "1px 8px", border: "1px solid var(--bd)", borderRadius: "999px" }}>
                    Optimizatsiya
                  </span>
                </span>
              </span>
              <span style={{ flex: "0 0 64px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Kod
                </span>
              </span>
              <span style={{ flex: "0 0 110px" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                  O'rta · 4 kyu
                </span>
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                35,5%
              </span>
              <span style={{ flex: "0 0 62px", fontSize: "13px", color: "var(--mu)", textAlign: "right" }}>
                590
              </span>
            </A>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", padding: "10px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                1–10 / 61
              </span>
              <span style={{ display: "flex", gap: "6px" }}>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Oldingi
                </A>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                  Keyingi
                </A>
              </span>
            </div>
          </section>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <h2 style={{ margin: "0 0 12px", fontSize: "16px", fontWeight: "600" }}>
              Mening progressim
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg role="img" aria-label="Yechilgan: 23 / 61" width="64" height="64" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="22" fill="none" strokeWidth="6" style={{ stroke: "var(--h0)" }} />
                <circle cx="28" cy="28" r="22" fill="none" strokeWidth="6" strokeLinecap="round" strokeDasharray="138.2" strokeDashoffset="86.1" transform="rotate(-90 28 28)" style={{ stroke: "var(--ac)" }} />
              </svg>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Yechilgan
                </div>
                <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                  23 / 61
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "14px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "4px" }}>
                  <span style={{ color: "var(--ok)", fontWeight: "600" }}>
                    Oson
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    14 / 24
                  </span>
                </div>
                <div role="img" aria-label="Oson 58 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "58%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "4px" }}>
                  <span style={{ color: "var(--warn)", fontWeight: "600" }}>
                    O'rta
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    8 / 27
                  </span>
                </div>
                <div role="img" aria-label="O'rta 30 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "30%", height: "6px", background: "var(--warn)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "4px" }}>
                  <span style={{ color: "var(--bad)", fontWeight: "600" }}>
                    Qiyin
                  </span>
                  <span style={{ color: "var(--mu)" }}>
                    1 / 10
                  </span>
                </div>
                <div role="img" aria-label="Qiyin 10 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "10%", height: "6px", background: "var(--bad)", borderRadius: "999px" }}></div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "14px", fontSize: "12px", color: "var(--mu)" }}>
              Modellash masalalari: 1 ta ko'rib chiqilmoqda.
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--warn)" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4h8v5a4 4 0 0 1-8 0z"></path>
                <path d="M8 6H4a4 4 0 0 0 4 4"></path>
                <path d="M16 6h4a4 4 0 0 1-4 4"></path>
                <path d="M12 13v4"></path>
                <path d="M8 20h8"></path>
              </svg>
              <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "600", color: "var(--tx)" }}>
                Haftalik musobaqa
              </h2>
            </div>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>
              Sonli usullar: tezkor 3 masala
            </div>
            <div style={{ fontSize: "13px", color: "var(--mu)", margin: "2px 0 10px" }}>
              Tugashiga 2 kun 06:12 soat
            </div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
              <div style={{ flex: "1 1 0", textAlign: "center", padding: "8px 4px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--bg)" }}>
                <div style={{ fontSize: "18px", fontWeight: "600" }}>
                  02
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)" }}>
                  kun
                </div>
              </div>
              <div style={{ flex: "1 1 0", textAlign: "center", padding: "8px 4px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--bg)" }}>
                <div style={{ fontSize: "18px", fontWeight: "600" }}>
                  06
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)" }}>
                  soat
                </div>
              </div>
              <div style={{ flex: "1 1 0", textAlign: "center", padding: "8px 4px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--bg)" }}>
                <div style={{ fontSize: "18px", fontWeight: "600" }}>
                  12
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)" }}>
                  daqiqa
                </div>
              </div>
            </div>
            <A href="/leaderboard" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
              Qatnashish
            </A>
            <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "8px" }}>
              1-o'rin +1000 XP, 2-o'rin +600, 3-o'rin +300
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Guruhga berilgan
            </h2>
            <A href="/challenges/modelling" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Logistik model: kurs ishi
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  Muddat 29-noyabr · Sh. Boltibayev
                </span>
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                Model
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Lotka-Volterra: davr uzunligi
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  Muddat 22-noyabr
                </span>
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                2 kun
              </span>
            </A>
            <A href="/challenges/contest" style={{ fontSize: "13px", display: "inline-block", marginTop: "8px" }}>
              Hammasi
            </A>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
