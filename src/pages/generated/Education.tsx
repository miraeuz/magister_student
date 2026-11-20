/* Generated from the approved student design (page: Ta'lim: umumiy ko'rinish). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Education() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="home" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"]]} maxW={1560}>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
          <div style={{ flex: "999 1 300px", minWidth: "0" }}>
            <div style={{ fontSize: "12px", color: "var(--mu)", fontWeight: "600" }}>
              DAVOM ETTIRISH · 6-paragraf. Demografik modellar
            </div>
            <h1 style={{ margin: "6px 0 4px", fontSize: "22px", fontWeight: "600", lineHeight: "1.3" }}>
              6.2. Ferxyulst-Perl (logistik) modeli
            </h1>
            <div style={{ fontSize: "14px", color: "var(--mu)" }}>
              Resursi cheklangan populyatsiya: son qayerda to'xtaydi?
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", margin: "12px 0 10px", fontSize: "12px", color: "var(--mu)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2"></path>
                </svg>
                60 daqiqa
              </span>
              <span>
                6 qavatdan 2 tasi tugagan
              </span>
              <span>
                +150 XP
              </span>
            </div>
            <div style={{ maxWidth: "420px" }}>
              <div role="img" aria-label="Dars progressi 33 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                <div style={{ width: "33%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
              </div>
            </div>
          </div>
          <A href="/education/lesson" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 4l13 8-13 8z"></path>
            </svg>
            Darsni davom ettirish
          </A>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        <div style={{ flex: "2 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Kurslarim
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                Guruhingizga biriktirilgan kurslar
              </span>
            </div>
            <A href="/education/course" style={{ display: "block", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", color: "var(--tx)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  5-6-semestr
                </span>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                  Majburiy fan
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                  MM15609
                </span>
              </div>
              <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "10px" }}>
                Matematik modellashtirish
              </div>
              <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "2px" }}>
                Sh. Boltibayev · 16 paragraf · 59 mavzu · kurs ishi bilan
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "14px" }}>
                <div style={{ flex: "1 1 0" }}>
                  <div role="img" aria-label="Kurs progressi 36 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                    <div style={{ width: "36%", height: "8px", background: "var(--ok)", borderRadius: "999px" }}></div>
                  </div>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "600" }}>
                  21 / 59
                </span>
              </div>
            </A>
            <div style={{ marginTop: "12px", border: "1px dashed var(--bd)", borderRadius: "8px", padding: "14px", fontSize: "13px", color: "var(--mu)" }}>
              Boshqa kurslar bu yerda guruhingizga biriktirilganda paydo bo'ladi.
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bu hafta rejasi
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                16-22-noyabr
              </span>
            </div>
            <div style={{ marginTop: "-4px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "76px", fontSize: "12px", color: "var(--mu)" }}>
                  Dushanba
                </span>
                <span style={{ flex: "none", width: "86px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Ma'ruza
                  </span>
                </span>
                <span style={{ flex: "999 1 200px", minWidth: "0", fontSize: "14px" }}>
                  M6. Demografik modellar (2-qism)
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  auditoriyada
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "76px", fontSize: "12px", color: "var(--mu)" }}>
                  Seshanba
                </span>
                <span style={{ flex: "none", width: "86px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Mavzu
                  </span>
                </span>
                <span style={{ flex: "999 1 200px", minWidth: "0", fontSize: "14px" }}>
                  6.2. Logistik model
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  60 daqiqa
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "76px", fontSize: "12px", color: "var(--mu)" }}>
                  Chorshanba
                </span>
                <span style={{ flex: "none", width: "86px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                    Amaliy
                  </span>
                </span>
                <span style={{ flex: "999 1 200px", minWidth: "0", fontSize: "14px" }}>
                  A9. Demografik modellarga doir masalalar
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  auditoriyada
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "76px", fontSize: "12px", color: "var(--mu)" }}>
                  Payshanba
                </span>
                <span style={{ flex: "none", width: "86px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Mavzu
                  </span>
                </span>
                <span style={{ flex: "999 1 200px", minWidth: "0", fontSize: "14px" }}>
                  6.3. Uch rejim
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  60 daqiqa
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "76px", fontSize: "12px", color: "var(--mu)" }}>
                  Shanba
                </span>
                <span style={{ flex: "none", width: "86px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Test
                  </span>
                </span>
                <span style={{ flex: "999 1 200px", minWidth: "0", fontSize: "14px" }}>
                  Demografik modellar: oraliq test
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  21-noyabr
                </span>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Topshiriqlar va muddatlar
              </h2>
              <A href="/education/tasks" style={{ fontSize: "12px" }}>
                Barcha topshiriqlar
              </A>
            </div>
            <div style={{ marginTop: "-4px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 12px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "92px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Uy vazifasi
                  </span>
                </span>
                <div style={{ flex: "999 1 220px", minWidth: "0" }}>
                  <A href="/education/assignment" style={{ fontWeight: "500", fontSize: "14px" }}>
                    Logistik model: 10 ta savol
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    6.2-mavzu · 1 urinish · 30 daqiqa · 60 XP
                  </div>
                </div>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--bad)", background: "var(--badbg)", whiteSpace: "nowrap" }}>
                  Bugun 20:00
                </span>
                <A href="/education/assignment" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)" }}>
                  Boshlash
                </A>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 12px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "92px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Test
                  </span>
                </span>
                <div style={{ flex: "999 1 220px", minWidth: "0" }}>
                  <A href="#" style={{ fontWeight: "500", fontSize: "14px" }}>
                    Demografik modellar: oraliq test
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    6-paragraf · 20 savol · 2 urinish
                  </div>
                </div>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  21-noyabr
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)" }}>
                  Ko'rish
                </A>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 12px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                <span style={{ flex: "none", width: "92px" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                    Amaliy ish
                  </span>
                </span>
                <div style={{ flex: "999 1 220px", minWidth: "0" }}>
                  <A href="/education/practical" style={{ fontWeight: "500", fontSize: "14px" }}>
                    A9: Demografik modellarga doir masalalar
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    Fayl yuklanadi · mezon bo'yicha baholanadi
                  </div>
                </div>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  24-noyabr
                </span>
                <A href="/education/practical" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)" }}>
                  Ko'rish
                </A>
              </div>
            </div>
          </section>
        </div>
        <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bu hafta
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ color: "var(--mu)" }}>
                  O'rganilgan vaqt
                </span>
                <span style={{ fontWeight: "600" }}>
                  3 soat 40 daqiqa
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ color: "var(--mu)" }}>
                  Tugatilgan mavzular
                </span>
                <span style={{ fontWeight: "600" }}>
                  2 ta
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ color: "var(--mu)" }}>
                  Yechilgan mashqlar
                </span>
                <span style={{ fontWeight: "600" }}>
                  11 ta
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ color: "var(--mu)" }}>
                  Olingan XP
                </span>
                <span style={{ fontWeight: "600" }}>
                  640
                </span>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Oxirgi natijalar
              </h2>
              <A href="#" style={{ fontSize: "12px" }}>
                Barchasi
              </A>
            </div>
            <div style={{ marginTop: "-4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <div style={{ flex: "1 1 0", minWidth: "0" }}>
                  <div style={{ fontSize: "13px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    Maltus modeli: uy vazifasi
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                    Uy vazifasi · 12-noyabr
                  </div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--ok)" }}>
                  90%
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <div style={{ flex: "1 1 0", minWidth: "0" }}>
                  <div style={{ fontSize: "13px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    Chiziqli dasturlash: test
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                    Test · 8-noyabr
                  </div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--warn)" }}>
                  75%
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
                <div style={{ flex: "1 1 0", minWidth: "0" }}>
                  <div style={{ fontSize: "13px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    A6: Transport masalasi
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                    Amaliy ish · 5-noyabr
                  </div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--ok)" }}>
                  80%
                </span>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                O'qituvchi
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "999px", background: "var(--pubg)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>
                ShB
              </div>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontWeight: "600", fontSize: "14px" }}>
                  Sh. Boltibayev
                </div>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  PhD, dotsent · ma'ruza va amaliy
                </div>
              </div>
            </div>
            <A href="#" style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "40px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
              </svg>
              Savol berish
            </A>
          </section>
        </div>
      </div>
    </Shell>
  );
}
