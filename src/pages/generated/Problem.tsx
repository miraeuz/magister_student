/* Generated from the approved student design (page: Challenges: masala). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";
import { useProblemVals } from "../../vals/Problem";

export default function Problem() {
  const v = useProblemVals();
  return (
    <Shell layer="ch" subTitle="CHALLENGES" subActive="list" subItems={[["Masalalar", "list", "/challenges", "list", ""], ["Ro'yxatlar", "bookmark", "/challenges/lists", "lists", ""], ["Modellash", "cube", "/challenges/modelling", "model", "1"], ["Guruh musobaqasi", "trophy", "/challenges/contest", "contest", "2"], ["Reyting", "chart", "/leaderboard", "rank", ""]]} crumbs={[["Challenges", "/challenges"], ["Logistik tenglama", "/challenges/problem"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px" }}>
        <A href="/challenges" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", fontSize: "14px" }}>
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M11 6l-6 6 6 6"></path>
          </svg>
          Masalalar
        </A>
        <span style={{ color: "var(--mu)", fontSize: "13px" }}>
          3 / 61
        </span>
        <span style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <A href="/challenges/lists" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12v18l-6-4-6 4z"></path>
            </svg>
            Ro'yxatga qo'shish
          </A>
          <A href="/challenges/problem" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 3L5 14h6l-1 7 8-11h-6z"></path>
            </svg>
            Tasodifiy
          </A>
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "stretch" }}>
        <section style={{ flex: "1 1 420px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", padding: "8px 12px", borderBottom: "1px solid var(--bd)", background: "var(--bg)" }}>
            <button aria-pressed={v.ltDesc} onClick={v.setLtDesc} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "500" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4"></path>
              </svg>
              Masala
            </button>
            <button aria-pressed={v.ltEdit} onClick={v.setLtEdit} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "500" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
              </svg>
              Yechim tahlili
            </button>
            <button aria-pressed={v.ltSubs} onClick={v.setLtSubs} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "500" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                <path d="M4 4v4h4"></path>
                <path d="M12 8v4l3 2"></path>
              </svg>
              Yuborishlar
            </button>
            <button aria-pressed={v.ltDisc} onClick={v.setLtDisc} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "500" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
              </svg>
              Muhokama
            </button>
          </div>
          {v.ltDesc && (
            <>
              <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <h1 style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: "600" }}>
                    3. Logistik tenglama: RK4 bilan yechim
                  </h1>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                      O'rta · 5 kyu
                    </span>
                    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                      ODE
                    </span>
                    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                      RK4
                    </span>
                    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                      +300 XP
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                      · Vaqt chegarasi 3 s · Xotira 256 MB · faqat Python
                    </span>
                  </div>
                </div>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.65" }}>
                  Aholi yoki bakteriyalar soni logistik qonun bilan o'sadi. Uni Runge-Kutta 4-tartibli usuli bilan yeching va berilgan vaqtdagi qiymatni toping.
                </p>
                <div style={{ padding: "12px", textAlign: "center", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", fontFamily: "Georgia, serif", fontSize: "17px" }}>
                  y′(t) = r · y(t) · (1 − y(t) / K), y(0) = y
                  <sub>
                    0
                  </sub>
                </div>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.65" }}>
                  <strong>
                    Kirish:
                  </strong>
                  {" "}
                  bir qatorda
                  {" "}
                  <code>
                    r K y0 t_end h
                  </code>
                  {" "}
                  sonlari.
                  {" "}
                  <strong>
                    Chiqish:
                  </strong>
                  {" "}
                  y(t_end), 6 xona aniqlikda. Qadam hajmi h butun marta t_end ga sig'adi.
                </p>
                <div style={{ marginTop: "10px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                    Misol 1
                  </div>
                  <div style={{ padding: "10px 12px", borderLeft: "3px solid var(--bd)", background: "var(--bg)", borderRadius: "0 6px 6px 0", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6" }}>
                    <div>
                      <span style={{ color: "var(--mu)" }}>
                        Kirish:
                      </span>
                      {" "}
                      0.5 100 10 10 0.1
                    </div>
                    <div>
                      <span style={{ color: "var(--mu)" }}>
                        Chiqish:
                      </span>
                      {" "}
                      94.282561
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                    Misol 2
                  </div>
                  <div style={{ padding: "10px 12px", borderLeft: "3px solid var(--bd)", background: "var(--bg)", borderRadius: "0 6px 6px 0", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6" }}>
                    <div>
                      <span style={{ color: "var(--mu)" }}>
                        Kirish:
                      </span>
                      {" "}
                      1.0 50 5 4 0.5
                    </div>
                    <div>
                      <span style={{ color: "var(--mu)" }}>
                        Chiqish:
                      </span>
                      {" "}
                      42.921409
                    </div>
                    <div style={{ fontFamily: "Inter, sans-serif", color: "var(--mu)", marginTop: "4px" }}>
                      Qadam hajmi katta bo'lsa ham ishlaydi, lekin xatolik oshadi.
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "600", margin: "4px 0 6px" }}>
                    Cheklovlar
                  </div>
                  <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "14px", lineHeight: "1.7" }}>
                    <li>
                      {"0 < r ≤ 5, 1 ≤ K ≤ 10"}
                      <sup>
                        6
                      </sup>
                    </li>
                    <li>
                      {"0 < y"}
                      <sub>
                        0
                      </sub>
                      {" "}
                      {"< K, 0 < h ≤ t_end ≤ 100"}
                    </li>
                  </ul>
                </div>
                <details style={{ border: "1px solid var(--bd)", borderRadius: "8px" }}>
                  <summary style={{ minHeight: "44px", padding: "0 14px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6"></path>
                      <path d="M10 21h4"></path>
                      <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"></path>
                    </svg>
                    Maslahat
                    {" "}
                    <span style={{ fontWeight: "400", color: "var(--mu)", fontSize: "12px" }}>
                      · ochsangiz +300 o'rniga +225 XP
                    </span>
                  </summary>
                  <div style={{ padding: "0 14px 12px", fontSize: "14px", lineHeight: "1.6", color: "var(--mu)" }}>
                    Har qadamda to'rtta qiyalikni (k1–k4) hisoblang va ularning og'irlikli o'rtachasi bilan y ni yangilang.
                  </div>
                </details>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", color: "var(--mu)", paddingTop: "4px" }}>
                  <span>
                    Qabul: 54,9%
                  </span>
                  <span>
                    Yuborilgan: 2 245
                  </span>
                  <span>
                    Yechgan: 1 232
                  </span>
                </div>
              </div>
            </>
          )}
          {v.ltEdit && (
            <>
              <div style={{ padding: "28px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "52px", height: "52px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                  </svg>
                </span>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>
                  Yechim tahlili yopiq
                </div>
                <p style={{ margin: "0", maxWidth: "340px", fontSize: "14px", lineHeight: "1.55", color: "var(--mu)" }}>
                  Muallifning izohli yechimi masalani to'liq yechganingizdan keyin ochiladi. Hozircha 18/20 test o'tgan.
                </p>
              </div>
            </>
          )}
          {v.ltSubs && (
            <>
              <div style={{ padding: "12px 18px 4px", fontSize: "14px", fontWeight: "600" }}>
                Yuborishlarim
              </div>
              <div style={{ display: "flex", gap: "12px", padding: "6px 18px", fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
                <span style={{ flex: "1 1 130px" }}>
                  Holat
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  Til
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  Vaqt
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  Xotira
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", padding: "10px 18px", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
                <span style={{ flex: "1 1 130px", minWidth: "0" }}>
                  <strong style={{ color: "var(--bad)" }}>
                    Noto'g'ri javob 18/20
                  </strong>
                  <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                    Hozir · sinov
                  </span>
                </span>
                <span style={{ flex: "0 0 70px", color: "var(--mu)" }}>
                  Python
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  84 ms
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  14,2 MB
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", padding: "10px 18px", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
                <span style={{ flex: "1 1 130px", minWidth: "0" }}>
                  <strong style={{ color: "var(--bad)" }}>
                    Noto'g'ri javob 11/20
                  </strong>
                  <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                    12 daqiqa oldin
                  </span>
                </span>
                <span style={{ flex: "0 0 70px", color: "var(--mu)" }}>
                  Python
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  52 ms
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  13,9 MB
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", padding: "10px 18px", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
                <span style={{ flex: "1 1 130px", minWidth: "0" }}>
                  <strong style={{ color: "var(--warn)" }}>
                    Vaqt tugadi 6/20
                  </strong>
                  <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                    Kecha 21:04
                  </span>
                </span>
                <span style={{ flex: "0 0 70px", color: "var(--mu)" }}>
                  Python
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  {"> 3 s"}
                </span>
                <span style={{ flex: "0 0 70px" }}>
                  14,0 MB
                </span>
              </div>
            </>
          )}
          {v.ltDisc && (
            <>
              <div style={{ padding: "12px 18px", display: "flex", flexDirection: "column", gap: "0" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "6px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "600" }}>
                    Muhokama · 14
                  </div>
                  <A href="/community/ask" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                    Savol berish
                  </A>
                </div>
                <A href="/community/question" style={{ display: "block", padding: "10px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
                  <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                    Qadam hajmi kichik bo'lganda ham xato chiqyapti
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                    Asilbek S. · 6 javob · 2 soat oldin
                  </span>
                </A>
                <A href="/community/question" style={{ display: "block", padding: "10px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
                  <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                    int(round(t_end / h)) yoki int(t_end / h)?
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                    Dilnoza K. · 3 javob · kecha
                  </span>
                </A>
                <A href="/community/question" style={{ display: "block", padding: "10px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
                  <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                    Tebranuvchi y0 uchun yechim
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                    Madina R. · 1 javob · 2 kun oldin
                  </span>
                </A>
              </div>
            </>
          )}
        </section>
        <section style={{ flex: "1 1 460px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "8px 12px", borderBottom: "1px solid var(--bd)", background: "var(--bg)" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                Til
              </span>
              <select aria-label="Dasturlash tili" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
                <option>
                  Python 3.12
                </option>
              </select>
            </label>
            <span style={{ fontSize: "12px", color: "var(--mu)" }}>
              Avto-saqlash
            </span>
            <span style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                  <path d="M4 4v4h4"></path>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                Qayta tiklash
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4l13 8-13 8z"></path>
                </svg>
                Sinov ishlatish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16V5"></path>
                  <path d="M7 9l5-5 5 5"></path>
                  <path d="M5 20h14"></path>
                </svg>
                Topshirish
              </A>
            </span>
          </div>
          <div style={{ display: "flex", background: "var(--bg)", borderTop: "1px solid var(--bd)", borderBottom: "1px solid var(--bd)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", minHeight: "330px" }}>
            <div aria-hidden="true" style={{ flex: "none", padding: "12px 10px 12px 14px", textAlign: "right", color: "var(--mu)", userSelect: "none" }}>
              1
              <br />
              2
              <br />
              3
              <br />
              4
              <br />
              5
              <br />
              6
              <br />
              7
              <br />
              8
              <br />
              9
              <br />
              10
              <br />
              11
              <br />
              12
              <br />
              13
              <br />
              14
              <br />
              15
              <br />
              16
              <br />
              17
            </div>
            <pre tabIndex={0} aria-label="Kod muharriri, Python" style={{ flex: "1 1 0", minWidth: "0", margin: "0", padding: "12px 14px 12px 6px", overflowX: "auto", font: "inherit", color: "var(--tx)" }}>
              <span style={{ color: "var(--pu)" }}>
                {"import"}
              </span>
              {" numpy "}
              <span style={{ color: "var(--pu)" }}>
                {"as"}
              </span>
              {" np\n\n"}
              <span style={{ color: "var(--pu)" }}>
                {"def"}
              </span>
              {" rk4_logistic(r, K, y0, t_end, h):\n    "}
              <span style={{ color: "var(--ok)" }}>
                {"\"\""}
              </span>
              <span style={{ color: "var(--ok)" }}>
                {"\"y'"}
              </span>
              {" = r*y*("}
              <span style={{ color: "var(--warn)" }}>
                {"1"}
              </span>
              {" - y/K) ni RK4 bilan yeching, y(t_end) ni qaytaring."}
              <span style={{ color: "var(--ok)" }}>
                {"\"\""}
              </span>
              {"\"\n    f = "}
              <span style={{ color: "var(--pu)" }}>
                {"lambda"}
              </span>
              {" y: r * y * ("}
              <span style={{ color: "var(--warn)" }}>
                {"1"}
              </span>
              {" - y / K)\n    n = int(round(t_end / h))\n    y = y0\n    "}
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
              {"(n):\n        k1 = f(y)\n        k2 = f(y + h * k1 / "}
              <span style={{ color: "var(--warn)" }}>
                {"2"}
              </span>
              {")\n        k3 = f(y + h * k2 / "}
              <span style={{ color: "var(--warn)" }}>
                {"2"}
              </span>
              {")\n        k4 = f(y + h * k3)\n        y += h * (k1 + "}
              <span style={{ color: "var(--warn)" }}>
                {"2"}
              </span>
              {"*k2 + "}
              <span style={{ color: "var(--warn)" }}>
                {"2"}
              </span>
              {"*k3 + k4) / "}
              <span style={{ color: "var(--warn)" }}>
                {"6"}
              </span>
              {"\n    "}
              <span style={{ color: "var(--pu)" }}>
                {"return"}
              </span>
              {" y\n\nr, K, y0, t_end, h = map(float, input().split())\n"}
              <span style={{ color: "var(--pu)" }}>
                {"print"}
              </span>
              {"(f"}
              <span style={{ color: "var(--ok)" }}>
                {"\"{rk4_logistic(r, K, y0, t_end, h):.6f}\""}
              </span>
              {")"}
            </pre>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", padding: "8px 12px", borderBottom: "1px solid var(--bd)", background: "var(--bg)" }}>
            <button aria-pressed={v.btRes} onClick={v.setBtRes} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "500" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l3 3 5-6"></path>
              </svg>
              Natija
            </button>
            <button aria-pressed={v.btCase} onClick={v.setBtCase} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "500" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 6h12"></path>
                <path d="M8 12h12"></path>
                <path d="M8 18h12"></path>
                <path d="M4 6h.01"></path>
                <path d="M4 12h.01"></path>
                <path d="M4 18h.01"></path>
              </svg>
              Test kiritish
            </button>
          </div>
          {v.btRes && (
            <>
              <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 14px" }}>
                  <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "600", color: "var(--bad)" }}>
                    Noto'g'ri javob
                  </h2>
                  <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                    18 / 20 test o'tdi · 84 ms · 14,2 MB
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span title="Test 1: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    1
                  </span>
                  <span title="Test 2: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    2
                  </span>
                  <span title="Test 3: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    3
                  </span>
                  <span title="Test 4: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    4
                  </span>
                  <span title="Test 5: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    5
                  </span>
                  <span title="Test 6: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    6
                  </span>
                  <span title="Test 7: xato" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--bad)", background: "var(--badbg)", border: "1px solid var(--bad)" }}>
                    7 ✕
                  </span>
                  <span title="Test 8: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    8
                  </span>
                  <span title="Test 9: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    9
                  </span>
                  <span title="Test 10: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    10
                  </span>
                  <span title="Test 11: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    11
                  </span>
                  <span title="Test 12: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    12
                  </span>
                  <span title="Test 13: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    13
                  </span>
                  <span title="Test 14: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    14
                  </span>
                  <span title="Test 15: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    15
                  </span>
                  <span title="Test 16: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    16
                  </span>
                  <span title="Test 17: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    17
                  </span>
                  <span title="Test 18: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    18
                  </span>
                  <span title="Test 19: xato" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--bad)", background: "var(--badbg)", border: "1px solid var(--bad)" }}>
                    19 ✕
                  </span>
                  <span title="Test 20: o'tdi" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", height: "32px", padding: "0 6px", boxSizing: "border-box", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--ok)" }}>
                    20
                  </span>
                </div>
                <div style={{ fontSize: "13px", fontWeight: "600" }}>
                  Test 7 (ochiq)
                </div>
                <div style={{ padding: "10px 12px", borderRadius: "6px", background: "var(--bg)", border: "1px solid var(--bd)", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", lineHeight: "1.7" }}>
                  <div>
                    <span style={{ color: "var(--mu)" }}>
                      Kirish:
                    </span>
                    {" "}
                    2.0 40 1 5 0.25
                  </div>
                  <div>
                    <span style={{ color: "var(--mu)" }}>
                      Sizning chiqishingiz:
                    </span>
                    {" "}
                    <span style={{ color: "var(--bad)" }}>
                      39.975392
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "var(--mu)" }}>
                      Kutilgan:
                    </span>
                    {" "}
                    <span style={{ color: "var(--ok)" }}>
                      39.929026
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
                  Test 19 yopiq: kirish va javob ko'rsatilmaydi. Tekshiruv 1e-6 aniqlikda.
                </div>
              </div>
            </>
          )}
          {v.btCase && (
            <>
              <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Test 1
                  </span>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Test 2
                  </span>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Test 3
                  </span>
                </div>
                <label style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
                  Kirish
                  <textarea defaultValue={"0.5 100 10 10 0.1"} rows={2} style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "4px", padding: "8px 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", resize: "vertical" }} />
                </label>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  «Sinov ishlatish» 3 ta ochiq testni yurgizadi va XP bermaydi.
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </Shell>
  );
}
