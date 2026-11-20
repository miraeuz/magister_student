/* Generated from the approved student design (page: Ta'lim: dars sahifasi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";
import { useLessonVals } from "../../vals/Lesson";

export default function Lesson() {
  const v = useLessonVals();
  return (
    <Shell layer="edu" subTitle="6-PARAGRAF · DEMOGRAFIK MODELLAR" subActive="6.2" subItems={[["6.1 Maltus modeli", "check", "#", "6.1", ""], ["6.2 Logistik model", "play", "/education/lesson", "6.2", ""], ["6.3 Uch rejim", "lock", "#", "6.3", ""], ["6.4 Demografik model", "lock", "#", "6.4", ""], ["Kursga qaytish", "left", "/education/course", "back", ""]]} crumbs={[["Ta'lim", "/education"], ["Matematik modellashtirish", "/education/course"], ["6.2", "/education/lesson"]]} maxW={1560}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
            6.2-mavzu
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--sf)", whiteSpace: "nowrap" }}>
            M6 ma'ruza
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--sf)", whiteSpace: "nowrap" }}>
            A9, A15 amaliy
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
            +150 XP
          </span>
        </div>
        <h1 style={{ margin: "10px 0 6px", fontSize: "26px", fontWeight: "600", lineHeight: "1.25" }}>
          Ferxyulst-Perl (logistik) modeli
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", fontSize: "13px", color: "var(--mu)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2"></path>
            </svg>
            60 daqiqa
          </span>
          <span>
            Qiyinlik: 3 / 5
          </span>
          <span>
            Oldingi mavzu: 6.1. Maltus modeli
          </span>
        </div>
      </div>
      <nav aria-label="Dars qavatlari" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <A href="#qavat-1" style={{ flex: "1 1 110px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--okbg)" }}>
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12l3 3 5-6"></path>
          </svg>
          Mavzu matni
        </A>
        <A href="#qavat-2" style={{ flex: "1 1 110px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)", border: "1px solid var(--okbg)" }}>
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12l3 3 5-6"></path>
          </svg>
          Vizual
        </A>
        <A href="#qavat-3" style={{ flex: "1 1 110px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "#ffffff", background: "var(--acbtn)", border: "1px solid var(--acbtn)" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
            3
          </span>
          Kod
        </A>
        <A href="#qavat-4" style={{ flex: "1 1 110px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "var(--mu)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
            4
          </span>
          Mashqlar
        </A>
        <A href="#qavat-5" style={{ flex: "1 1 110px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "var(--mu)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
            5
          </span>
          Test
        </A>
        <A href="#qavat-6" style={{ flex: "1 1 110px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "var(--mu)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
            6
          </span>
          Loyiha
        </A>
      </nav>
      <div style={{ background: "var(--warnbg)", border: "1px solid var(--warnbd)", borderRadius: "8px", padding: "14px 16px", display: "flex", gap: "12px" }}>
        <span style={{ display: "flex", color: "var(--warn)" }}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6"></path>
            <path d="M10 21h4"></path>
            <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"></path>
          </svg>
        </span>
        <div>
          <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--warn)" }}>
            REAL MASALA
          </div>
          <div style={{ fontSize: "15px", lineHeight: "1.5", marginTop: "2px" }}>
            Ko'lga 50 ta baliq qo'yib yuborildi. Ko'l ko'pi bilan 1 000 ta baliqni boqa oladi. Baliqlar soni vaqt o'tishi bilan qanday o'zgaradi va qayerda to'xtaydi?
          </div>
        </div>
      </div>
      <section id="qavat-1" style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "14px" }}>
          <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            1 / 6
          </span>
          <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
            Mavzu matni
          </h2>
          <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--mu)" }}>
            Nazariya · 8 daqiqa
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div style={{ flex: "3 1 420px", minWidth: "0", maxWidth: "780px" }}>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
              Maltus modelida o'sish tezligi faqat joriy songa proporsional edi, shuning uchun son cheksiz o'sardi. Haqiqatda oziq-ovqat va joy cheklangan: populyatsiya ko'paygan sari o'sish sekinlashadi.
            </p>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
              Ferxyulst bu g'oyani bitta qo'shimcha ko'paytuvchi bilan ifodaladi. Bu yerda
              {" "}
              <em>
                r
              </em>
              {" "}
              o'sish koeffitsiyenti,
              {" "}
              <em>
                K
              </em>
              {" "}
              esa muhit sig'imi, ya'ni muhit boqa oladigan eng katta son:
            </p>
            <div style={{ margin: "12px 0", padding: "14px 16px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px", fontFamily: "Georgia, Times New Roman, serif", fontSize: "19px", fontStyle: "italic", textAlign: "center", overflowX: "auto" }}>
              dN/dt = r · N · (1 − N / K)
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
              Son kichik bo'lganda qavs ichi 1 ga yaqin va model Maltus modeli kabi ishlaydi. Son
              {" "}
              <em>
                K
              </em>
              {" "}
              ga yaqinlashganda qavs ichi nolga intiladi va o'sish to'xtaydi. Tenglamaning aniq yechimi:
            </p>
            <div style={{ margin: "12px 0", padding: "14px 16px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px", fontFamily: "Georgia, Times New Roman, serif", fontSize: "19px", fontStyle: "italic", textAlign: "center", overflowX: "auto" }}>
              N(t) = K / (1 + ((K − N₀) / N₀) · e
              <sup>
                −rt
              </sup>
              )
            </div>
            <div style={{ borderLeft: "0", background: "var(--acbg)", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", lineHeight: "1.55" }}>
              <strong>
                Eslab qoling.
              </strong>
              {" "}
              N = 0 va N = K ikkita muvozanat nuqtasi. Birinchisi beqaror, ikkinchisi barqaror: boshlang'ich son qanday bo'lmasin (noldan katta), yechim K ga intiladi.
            </div>
          </div>
          <aside style={{ flex: "1 1 240px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px 16px", background: "var(--bg)" }}>
            <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", marginBottom: "8px" }}>
              ASOSIY TUSHUNCHALAR
            </div>
            <div style={{ padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "13px", lineHeight: "1.5" }}>
              <strong style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "15px" }}>
                N(t)
              </strong>
              {" "}
              — t vaqtdagi populyatsiya soni
            </div>
            <div style={{ padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "13px", lineHeight: "1.5" }}>
              <strong style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "15px" }}>
                r
              </strong>
              {" "}
              — o'sish koeffitsiyenti (vaqt birligida)
            </div>
            <div style={{ padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "13px", lineHeight: "1.5" }}>
              <strong style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "15px" }}>
                K
              </strong>
              {" "}
              — muhit sig'imi: eng katta barqaror son
            </div>
            <div style={{ padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "13px", lineHeight: "1.5" }}>
              <strong style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "15px" }}>
                N₀
              </strong>
              {" "}
              — boshlang'ich son
            </div>
            <div style={{ padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "13px", lineHeight: "1.5" }}>
              <strong style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "15px" }}>
                K / 2
              </strong>
              {" "}
              — o'sish tezligi eng katta bo'ladigan nuqta
            </div>
            <div style={{ marginTop: "10px", fontSize: "12px", color: "var(--mu)" }}>
              Oldingi mavzu bilan farqi: Maltus modelida K yo'q edi.
            </div>
          </aside>
        </div>
      </section>
      <section id="qavat-2" style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "14px" }}>
          <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            2 / 6
          </span>
          <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
            Vizual va interaktiv model
          </h2>
          <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--mu)" }}>
            Interaktiv · 12 daqiqa
          </span>
        </div>
        <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
          Parametrlarni o'zgartiring va egri chiziq qanday o'zgarishini kuzating.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 220px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "13px" }}>
              <span style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  O'sish koeffitsiyenti
                  {" "}
                  <em style={{ fontFamily: "Georgia, serif" }}>
                    r
                  </em>
                </span>
                <strong style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {v.r}
                </strong>
              </span>
              <input type="range" min="5" max="150" step="5" value={v.rRaw} onChange={v.setR} style={{ width: "100%", height: "28px", accentColor: "var(--ac)" }} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "13px" }}>
              <span style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  Muhit sig'imi
                  {" "}
                  <em style={{ fontFamily: "Georgia, serif" }}>
                    K
                  </em>
                </span>
                <strong style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {v.K}
                </strong>
              </span>
              <input type="range" min="200" max="2000" step="100" value={v.KRaw} onChange={v.setK} style={{ width: "100%", height: "28px", accentColor: "var(--ac)" }} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "13px" }}>
              <span style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  Boshlang'ich son
                  {" "}
                  <em style={{ fontFamily: "Georgia, serif" }}>
                    N₀
                  </em>
                </span>
                <strong style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {v.n0}
                </strong>
              </span>
              <input type="range" min="10" max="2400" step="10" value={v.n0Raw} onChange={v.setN0} style={{ width: "100%", height: "28px", accentColor: "var(--ac)" }} />
            </label>
            <div style={{ fontSize: "13px", lineHeight: "1.5", padding: "10px 12px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px" }}>
              <strong>
                Kuzating:
              </strong>
              {" "}
              {v.remark}
            </div>
          </div>
          <div style={{ flex: "2 1 360px", minWidth: "0" }}>
            <svg role="img" aria-label="Logistik o'sish egri chizig'i" viewBox="0 0 520 280" style={{ width: "100%", height: "auto", display: "block", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "6px" }}>
              <line x1="44" y1="244" x2="508" y2="244" strokeWidth="1" style={{ stroke: "var(--mu)" }} />
              <line x1="44" y1="16" x2="44" y2="244" strokeWidth="1" style={{ stroke: "var(--mu)" }} />
              <line x1="44" y1={v.ky} x2="508" y2={v.ky} strokeWidth="1.5" strokeDasharray="6 5" style={{ stroke: "var(--bad)" }} />
              <text x="504" y={v.kty} textAnchor="end" fontSize="12" fontFamily="Inter, sans-serif" style={{ fill: "var(--bad)" }}>
                {"K = "}
                {v.K}
              </text>
              <polyline points={v.pts} fill="none" strokeWidth="2.5" strokeLinejoin="round" style={{ stroke: "var(--ac)" }} />
              <text x="276" y="270" textAnchor="middle" fontSize="12" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
                vaqt, t (0 dan 30 gacha)
              </text>
              <text x="14" y="130" textAnchor="middle" fontSize="12" fontFamily="Inter, sans-serif" transform="rotate(-90 14 130)" style={{ fill: "var(--mu)" }}>
                son, N
              </text>
              <text x="40" y="20" textAnchor="end" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
                {v.ymax}
              </text>
              <text x="40" y="248" textAnchor="end" fontSize="11" fontFamily="Inter, sans-serif" style={{ fill: "var(--mu)" }}>
                0
              </text>
            </svg>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: "8px", fontSize: "12px", color: "var(--mu)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "18px", height: "3px", background: "var(--ac)", borderRadius: "2px" }}></span>
                N(t)
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "18px", borderTop: "2px dashed var(--bad)" }}></span>
                muhit sig'imi K
              </span>
              <span>
                N(30) =
                {" "}
                <strong style={{ color: "var(--tx)" }}>
                  {v.nEnd}
                </strong>
              </span>
            </div>
          </div>
        </div>
        <h3 style={{ margin: "20px 0 10px", fontSize: "14px", fontWeight: "600" }}>
          Materiallar
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ flex: "1 1 220px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ height: "104px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="13" height="12" rx="2" />
                <path d="M16 10l5-3v10l-5-3z"></path>
              </svg>
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--mu)" }}>
                VIDEO · MAJBURIY
              </div>
              <div style={{ fontSize: "14px", fontWeight: "500", margin: "2px 0" }}>
                Logistik model: ma'ruza qismi
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                12 daqiqa · ko'rildi
              </div>
              <A href="#" style={{ marginTop: "10px", display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "36px", fontSize: "13px", fontWeight: "500" }}>
                Qayta ko'rish
              </A>
            </div>
          </div>
          <div style={{ flex: "1 1 220px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ height: "104px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M12 16v4"></path>
                <path d="M8 20h8"></path>
              </svg>
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--mu)" }}>
                SLAYD
              </div>
              <div style={{ fontSize: "14px", fontWeight: "500", margin: "2px 0" }}>
                M6. Demografik modellar
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                18 slayd · PDF
              </div>
              <A href="#" style={{ marginTop: "10px", display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "36px", fontSize: "13px", fontWeight: "500" }}>
                Ochish
              </A>
            </div>
          </div>
          <div style={{ flex: "1 1 220px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ height: "104px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4"></path>
              </svg>
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--mu)" }}>
                MA'LUMOTLAR
              </div>
              <div style={{ fontSize: "14px", fontWeight: "500", margin: "2px 0" }}>
                aholi_1990_2025.csv
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                36 qator · 2 KB
              </div>
              <A href="#" style={{ marginTop: "10px", display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "36px", fontSize: "13px", fontWeight: "500" }}>
                Yuklab olish
              </A>
            </div>
          </div>
        </div>
      </section>
      <section id="qavat-3" style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "14px" }}>
          <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            3 / 6
          </span>
          <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
            Kod maydoni
          </h2>
          <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--mu)" }}>
            Amaliyot · 15 daqiqa
          </span>
        </div>
        <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
          Xuddi shu modelni Pythonda yeching. Kodni o'zgartirib, ishga tushirib ko'ring.
        </p>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "8px 12px", background: "var(--bg)", borderBottom: "1px solid var(--bd)" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", fontFamily: "JetBrains Mono, monospace" }}>
              logistik.py
            </span>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--sf)", whiteSpace: "nowrap" }}>
              Python
            </span>
            <span style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              <button style={{ minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px" }}>
                Boshidan
              </button>
              <button style={{ minHeight: "36px", padding: "0 14px", border: "1px solid var(--okbtn)", borderRadius: "6px", background: "var(--okbtn)", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4l13 8-13 8z"></path>
                </svg>
                Ishga tushirish
              </button>
            </span>
          </div>
          <pre style={{ margin: "0", padding: "16px", background: "#0d1117", color: "#e6edf3", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", overflowX: "auto" }}>
            <span style={{ color: "#8b949e" }}>
              {"# Logistik model: dN/dt = r N (1 - N/K)"}
            </span>
            {"\n"}
            <span style={{ color: "#ff7b72" }}>
              {"import"}
            </span>
            {" numpy "}
            <span style={{ color: "#ff7b72" }}>
              {"as"}
            </span>
            {" np\n"}
            <span style={{ color: "#ff7b72" }}>
              {"from"}
            </span>
            {" scipy.integrate "}
            <span style={{ color: "#ff7b72" }}>
              {"import"}
            </span>
            {" solve_ivp\n\nr, K, N0 = "}
            <span style={{ color: "#79c0ff" }}>
              {"0.5"}
            </span>
            {", "}
            <span style={{ color: "#79c0ff" }}>
              {"1000"}
            </span>
            {", "}
            <span style={{ color: "#79c0ff" }}>
              {"50"}
            </span>
            {"\n\n"}
            <span style={{ color: "#ff7b72" }}>
              {"def"}
            </span>
            {" "}
            <span style={{ color: "#d2a8ff" }}>
              {"model"}
            </span>
            {"(t, N):\n    "}
            <span style={{ color: "#ff7b72" }}>
              {"return"}
            </span>
            {" r * N * ("}
            <span style={{ color: "#79c0ff" }}>
              {"1"}
            </span>
            {" - N / K)\n\nsol = solve_ivp(model, ["}
            <span style={{ color: "#79c0ff" }}>
              {"0"}
            </span>
            {", "}
            <span style={{ color: "#79c0ff" }}>
              {"30"}
            </span>
            {"], [N0], t_eval=np.arange("}
            <span style={{ color: "#79c0ff" }}>
              {"0"}
            </span>
            {", "}
            <span style={{ color: "#79c0ff" }}>
              {"31"}
            </span>
            {", "}
            <span style={{ color: "#79c0ff" }}>
              {"5"}
            </span>
            {"))\n"}
            <span style={{ color: "#ff7b72" }}>
              {"for"}
            </span>
            {" t, N "}
            <span style={{ color: "#ff7b72" }}>
              {"in"}
            </span>
            {" "}
            <span style={{ color: "#d2a8ff" }}>
              {"zip"}
            </span>
            {"(sol.t, sol.y["}
            <span style={{ color: "#79c0ff" }}>
              {"0"}
            </span>
            {"]):\n    "}
            <span style={{ color: "#d2a8ff" }}>
              {"print"}
            </span>
            {"("}
            <span style={{ color: "#a5d6ff" }}>
              {"f\"t={t:4.0f}  N={N:7.1f}\""}
            </span>
            {")"}
          </pre>
          <div style={{ padding: "8px 12px", background: "var(--bg)", borderTop: "1px solid var(--bd)", fontSize: "12px", color: "var(--mu)", display: "flex", justifyContent: "space-between" }}>
            <span>
              Natija
            </span>
            <span>
              0,21 soniya
            </span>
          </div>
          <pre style={{ margin: "0", padding: "14px 16px", background: "var(--sf)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", overflowX: "auto" }}>
            {"t=   0  N=   50.0\nt=   5  N=  390.7\nt=  10  N=  886.5\nt=  15  N=  989.6\nt=  20  N=  999.1\nt=  25  N=  999.9\nt=  30  N= 1000.0"}
          </pre>
        </div>
      </section>
      <section id="qavat-4" style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "14px" }}>
          <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            4 / 6
          </span>
          <h2 style={{ margin: "0", fontSize: "17px", fontWeight: "600" }}>
            Mashqlar
          </h2>
          <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--mu)" }}>
            3 ta mashq
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", fontSize: "12px", color: "var(--mu)", marginBottom: "8px" }}>
          <span>
            1-mashq, jami 3 ta
          </span>
          <span>
            +50 XP (maslahatsiz)
          </span>
        </div>
        <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.65" }}>
          Ko'lda r = 0,5 va K = 1 000. Baliqlar soni nechaga yetganda o'sish tezligi eng katta bo'ladi?
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "flex-end" }}>
          <label style={{ flex: "1 1 200px", maxWidth: "260px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
            Javobingiz (N)
            <input type="text" inputMode="decimal" placeholder="Masalan, 250" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", font: "inherit", fontSize: "15px" }} />
          </label>
          <button style={{ minHeight: "44px", padding: "0 18px", border: "1px solid var(--acbtn)", borderRadius: "6px", background: "var(--acbtn)", color: "#ffffff", fontSize: "14px", fontWeight: "600" }}>
            Tekshirish
          </button>
          <button style={{ minHeight: "44px", padding: "0 14px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18h6"></path>
              <path d="M10 21h4"></path>
              <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"></path>
            </svg>
            Maslahat (XP yarmi)
          </button>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <section id="qavat-5" style={{ flex: "1 1 300px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
          <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            5 / 6
          </div>
          <h2 style={{ margin: "4px 0 8px", fontSize: "17px", fontWeight: "600" }}>
            Moslashuvchan test
          </h2>
          <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "1.55", color: "var(--mu)" }}>
            5-10 ta savol. Javobingizga qarab keyingi savol osonlashadi yoki qiyinlashadi. To'liq o'tsangiz +100 XP.
          </p>
          <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
            Testni boshlash
          </A>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "10px" }}>
            Avval mashqlarni tugating.
          </div>
        </section>
        <section id="qavat-6" style={{ flex: "1 1 300px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
          <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            6 / 6
          </div>
          <h2 style={{ margin: "4px 0 8px", fontSize: "17px", fontWeight: "600" }}>
            Loyiha ishi
          </h2>
          <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "1.55", color: "var(--mu)" }}>
            Haqiqiy aholi ma'lumotiga logistik modelni moslang va 2040-yilni bashorat qiling. Ish Hub repozitoriyasi sifatida topshiriladi, o'qituvchi mezon bo'yicha baholaydi.
          </p>
          <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
            Loyiha shartini ochish
          </A>
        </section>
      </div>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
          <span style={{ display: "flex", color: "var(--ac)" }}>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
            </svg>
          </span>
          <div style={{ flex: "999 1 240px", minWidth: "0" }}>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>
              Bu mavzu bo'yicha savolingiz bormi?
            </div>
            <div style={{ fontSize: "13px", color: "var(--mu)" }}>
              Mavzuga bog'langan 3 ta muhokama bor. Savolingizni guruhingizga yoki hammaga berishingiz mumkin.
            </div>
          </div>
          <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
            Muhokamalar
          </A>
          <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
            Savol berish
          </A>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px" }}>
        <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M11 6l-6 6 6 6"></path>
          </svg>
          6.1. Maltus modeli
        </A>
        <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontSize: "14px", color: "var(--mu)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
          </svg>
          6.3. Uch rejim: testdan keyin ochiladi
        </A>
      </div>
    </Shell>
  );
}
