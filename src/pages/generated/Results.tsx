/* Generated from the approved student design (page: Ta'lim: natijalarim). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Results() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="results" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Natijalarim", "/education/results"]]} maxW={1560}>
      <div>
        <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
          Natijalarim
        </h1>
        <div style={{ fontSize: "14px", color: "var(--mu)", marginTop: "4px" }}>
          Matematik modellashtirish · 5-semestr · faqat siz va o'qituvchingiz ko'radi
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--ok)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l3 3 5-6"></path>
              </svg>
            </span>
            O'rtacha natija
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            81%
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            9 ta baholangan topshiriq
          </div>
        </section>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--ac)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
            </span>
            Tugatilgan mavzular
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            21 / 59
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            Kursning 36 foizi
          </div>
        </section>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--warn)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 6h12"></path>
                <path d="M8 12h12"></path>
                <path d="M8 18h12"></path>
                <path d="M4 6h.01"></path>
                <path d="M4 12h.01"></path>
                <path d="M4 18h.01"></path>
              </svg>
            </span>
            O'z vaqtida topshirilgan
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            9 / 10
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            1 tasi kechikkan
          </div>
        </section>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--pu)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
            </span>
            Yechilgan masalalar
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            17
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            Shundan 2 tasi modellashtirish
          </div>
        </section>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--warn)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4h8v5a4 4 0 0 1-8 0z"></path>
                <path d="M8 6H4a4 4 0 0 0 4 4"></path>
                <path d="M16 6h4a4 4 0 0 1-4 4"></path>
                <path d="M12 13v4"></path>
                <path d="M8 20h8"></path>
              </svg>
            </span>
            Guruhdagi o'rin
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            4 / 24
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            O'rtacha natija bo'yicha
          </div>
        </section>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", flex: "3 1 460px", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
            <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
              Paragraflar bo'yicha o'zlashtirish
            </h2>
            <span style={{ fontSize: "12px", color: "var(--mu)" }}>
              mashq, test va topshiriqlar asosida
            </span>
          </div>
          <div style={{ marginTop: "-4px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ width: "24px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                01
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0", fontSize: "14px" }}>
                Model va modellashtirish tushunchalari
              </span>
              <div style={{ flex: "1 1 140px", maxWidth: "220px" }}>
                <div role="img" aria-label="O'zlashtirish 92 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "92%", height: "8px", background: "var(--ok)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <span style={{ width: "44px", textAlign: "right", fontSize: "14px", fontWeight: "600", color: "var(--ok)" }}>
                92%
              </span>
              <span style={{ flex: "0 0 150px", fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ width: "24px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                02
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0", fontSize: "14px" }}>
                Matematik modelni qurish va tadqiq qilish
              </span>
              <div style={{ flex: "1 1 140px", maxWidth: "220px" }}>
                <div role="img" aria-label="O'zlashtirish 85 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "85%", height: "8px", background: "var(--ok)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <span style={{ width: "44px", textAlign: "right", fontSize: "14px", fontWeight: "600", color: "var(--ok)" }}>
                85%
              </span>
              <span style={{ flex: "0 0 150px", fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ width: "24px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                03
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0", fontSize: "14px" }}>
                Saqlanish qonunlari asosida model qurish
              </span>
              <div style={{ flex: "1 1 140px", maxWidth: "220px" }}>
                <div role="img" aria-label="O'zlashtirish 78 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "78%", height: "8px", background: "var(--warn)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <span style={{ width: "44px", textAlign: "right", fontSize: "14px", fontWeight: "600", color: "var(--warn)" }}>
                78%
              </span>
              <span style={{ flex: "0 0 150px", fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ width: "24px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                04
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0", fontSize: "14px" }}>
                Analogiya, variatsion va iyerarxiya prinsiplari
              </span>
              <div style={{ flex: "1 1 140px", maxWidth: "220px" }}>
                <div role="img" aria-label="O'zlashtirish 58 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "58%", height: "8px", background: "var(--bad)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <span style={{ width: "44px", textAlign: "right", fontSize: "14px", fontWeight: "600", color: "var(--bad)" }}>
                58%
              </span>
              <span style={{ flex: "0 0 150px", fontSize: "12px", color: "var(--mu)" }}>
                4.2-mavzuni takrorlang
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ width: "24px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                05
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0", fontSize: "14px" }}>
                Chiziqli dasturlash masalalari
              </span>
              <div style={{ flex: "1 1 140px", maxWidth: "220px" }}>
                <div role="img" aria-label="O'zlashtirish 74 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "74%", height: "8px", background: "var(--warn)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <span style={{ width: "44px", textAlign: "right", fontSize: "14px", fontWeight: "600", color: "var(--warn)" }}>
                74%
              </span>
              <span style={{ flex: "0 0 150px", fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <span style={{ width: "24px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                06
              </span>
              <span style={{ flex: "999 1 220px", minWidth: "0", fontSize: "14px" }}>
                Demografik modellar
              </span>
              <div style={{ flex: "1 1 140px", maxWidth: "220px" }}>
                <div role="img" aria-label="O'zlashtirish 88 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                  <div style={{ width: "88%", height: "8px", background: "var(--ok)", borderRadius: "999px" }}></div>
                </div>
              </div>
              <span style={{ width: "44px", textAlign: "right", fontSize: "14px", fontWeight: "600", color: "var(--ok)" }}>
                88%
              </span>
              <span style={{ flex: "0 0 150px", fontSize: "12px", color: "var(--mu)" }}>
                davom etmoqda
              </span>
            </div>
          </div>
        </section>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", flex: "2 1 360px", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
            <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
              Oxirgi 9 ta topshiriq
            </h2>
            <span style={{ fontSize: "12px", color: "var(--mu)" }}>
              chiziq: 70 foiz
            </span>
          </div>
          <svg role="img" aria-label="Oxirgi 9 ta topshiriq natijalari, foizda" viewBox="0 0 640 150" style={{ width: "100%", height: "auto", display: "block" }}>
            <line x1="40" y1="126" x2="632" y2="126" strokeWidth="1" style={{ stroke: "var(--bd)" }} />
            <line x1="40" y1="49.0" x2="632" y2="49.0" strokeWidth="1" strokeDasharray="5 5" style={{ stroke: "var(--warn)" }} />
            <text x="34" y="53.0" textAnchor="end" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              70
            </text>
            <rect x="46.0" y="27.0" width="50.4" height="99.0" rx="3" style={{ fill: "var(--okbtn)" }} />
            <text x="71.2" y="23.0" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              90
            </text>
            <text x="71.2" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              1
            </text>
            <rect x="110.4" y="43.5" width="50.4" height="82.5" rx="3" style={{ fill: "var(--warn)" }} />
            <text x="135.7" y="39.5" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              75
            </text>
            <text x="135.7" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              2
            </text>
            <rect x="174.9" y="38.0" width="50.4" height="88.0" rx="3" style={{ fill: "var(--okbtn)" }} />
            <text x="200.1" y="34.0" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              80
            </text>
            <text x="200.1" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              3
            </text>
            <rect x="239.3" y="60.0" width="50.4" height="66.0" rx="3" style={{ fill: "var(--warn)" }} />
            <text x="264.6" y="56.0" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              60
            </text>
            <text x="264.6" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              4
            </text>
            <rect x="303.8" y="32.5" width="50.4" height="93.5" rx="3" style={{ fill: "var(--okbtn)" }} />
            <text x="329.0" y="28.5" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              85
            </text>
            <text x="329.0" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              5
            </text>
            <rect x="368.2" y="49.0" width="50.4" height="77.0" rx="3" style={{ fill: "var(--warn)" }} />
            <text x="393.4" y="45.0" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              70
            </text>
            <text x="393.4" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              6
            </text>
            <rect x="432.7" y="21.5" width="50.4" height="104.5" rx="3" style={{ fill: "var(--okbtn)" }} />
            <text x="457.9" y="17.5" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              95
            </text>
            <text x="457.9" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              7
            </text>
            <rect x="497.1" y="38.0" width="50.4" height="88.0" rx="3" style={{ fill: "var(--okbtn)" }} />
            <text x="522.3" y="34.0" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              80
            </text>
            <text x="522.3" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              8
            </text>
            <rect x="561.6" y="27.0" width="50.4" height="99.0" rx="3" style={{ fill: "var(--okbtn)" }} />
            <text x="586.8" y="23.0" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--tx)" }}>
              90
            </text>
            <text x="586.8" y="142" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
              9
            </text>
          </svg>
          <div style={{ marginTop: "12px", padding: "12px 14px", background: "var(--warnbg)", border: "1px solid var(--warnbd)", borderRadius: "6px", fontSize: "13px", lineHeight: "1.5" }}>
            <strong>
              Tavsiya.
            </strong>
            {" "}
            Eng past natija 4-paragrafda (variatsion prinsip). 4.2-mavzudagi mashqlarni qayta yechib ko'ring yoki o'qituvchiga savol bering.
          </div>
        </section>
      </div>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ padding: "14px 16px", fontSize: "14px", fontWeight: "600" }}>
          Baholangan topshiriqlar
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Topshiriq
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Tur
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Sana
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Ball
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Foiz
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  XP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", minWidth: "220px" }}>
                  <A href="/education/assignment/result" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Maltus modeli: uy vazifasi
                  </A>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Uy vazifasi
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  12-noyabr
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  9 / 10
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600", color: "var(--ok)" }}>
                  90%
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  +54 XP
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", minWidth: "220px" }}>
                  <A href="/education/assignment/result" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Chiziqli dasturlash: test
                  </A>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Test
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  8-noyabr
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  15 / 20
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600", color: "var(--warn)" }}>
                  75%
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  +75 XP
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", minWidth: "220px" }}>
                  <A href="/education/assignment/result" style={{ fontSize: "14px", fontWeight: "500" }}>
                    A6: Transport masalasi
                  </A>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Amaliy ish
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  5-noyabr
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  64 / 80
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600", color: "var(--ok)" }}>
                  80%
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  +160 XP
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", minWidth: "220px" }}>
                  <A href="/education/assignment/result" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Variatsion prinsip: uy vazifasi
                  </A>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Uy vazifasi
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  30-oktabr
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  6 / 10
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600", color: "var(--warn)" }}>
                  60%
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  +36 XP
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", minWidth: "220px" }}>
                  <A href="/education/assignment/result" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Saqlanish qonunlari: test
                  </A>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Test
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  24-oktabr
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  17 / 20
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "600", color: "var(--ok)" }}>
                  85%
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  +85 XP
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Shell>
  );
}
