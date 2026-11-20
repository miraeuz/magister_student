/* Generated from the approved student design (page: Challenges: modellash masalasi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Modelling() {
  const v = useShellVals();
  return (
    <Shell layer="ch" subTitle="CHALLENGES" subActive="model" subItems={[["Masalalar", "list", "/challenges", "list", ""], ["Ro'yxatlar", "bookmark", "/challenges/lists", "lists", ""], ["Modellash", "cube", "/challenges/modelling", "model", "1"], ["Guruh musobaqasi", "trophy", "/challenges/contest", "contest", "2"], ["Reyting", "chart", "/leaderboard", "rank", ""]]} crumbs={[["Challenges", "/challenges"], ["Modellash", "/challenges/modelling"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px" }}>
        <A href="/challenges" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", fontSize: "14px" }}>
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M11 6l-6 6 6 6"></path>
          </svg>
          Masalalar
        </A>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px", maxWidth: "460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                Modellash masalasi
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                O'rta · 4 kyu
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                +400 XP baholangandan keyin
              </span>
            </div>
            <h1 style={{ margin: "0 0 8px", fontSize: "22px", fontWeight: "600" }}>
              Aholi o'sishi: model tuzing va asoslang
            </h1>
            <p style={{ margin: "0 0 10px", fontSize: "14px", lineHeight: "1.65" }}>
              Berilgan demografik ma'lumot bo'yicha o'sish modelini o'zingiz tanlang (eksponensial, logistik yoki o'zingiznikini), parametrlarni toping va modelning chegaralarini tushuntiring. Faqat kod emas, fikr yurgizishingiz ham baholanadi.
            </p>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", padding: "8px 10px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--bg)", color: "var(--tx)", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10h18"></path>
                  <path d="M9 4v16"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <strong style={{ display: "block", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  demografiya_2010_2025.csv
                </strong>
                <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                  Ma'lumot · 16 qator · 2,4 KB
                </span>
              </span>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11"></path>
                <path d="M7 11l5 5 5-5"></path>
                <path d="M5 20h14"></path>
              </svg>
            </A>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", padding: "8px 10px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--bg)", color: "var(--tx)", fontSize: "13px" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                  <path d="M9 14h6"></path>
                  <path d="M9 17h4"></path>
                </svg>
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <strong style={{ display: "block", fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  topshiriq_izohi.pdf
                </strong>
                <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                  O'qituvchi izohi · 180 KB
                </span>
              </span>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11"></path>
                <path d="M7 11l5 5 5-5"></path>
                <path d="M5 20h14"></path>
              </svg>
            </A>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: "600" }}>
              Baholash mezonlari
            </h2>
            <p style={{ margin: "0 0 6px", fontSize: "13px", color: "var(--mu)" }}>
              Jami 100 ball. XP ballga mutanosib: 82 ball = 328 XP.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 220px", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Taxminlar va o'zgaruvchilar aniq yozilgan
                </div>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Oldingi versiya
                </div>
              </div>
              <strong style={{ fontSize: "14px", color: "var(--ok)" }}>
                20 / 20
              </strong>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 220px", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Tenglamalar to'g'ri tuzilgan
                </div>
              </div>
              <strong style={{ fontSize: "14px", color: "var(--warn)" }}>
                22 / 30
              </strong>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 220px", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Kod modelni to'g'ri hisoblaydi
                </div>
              </div>
              <strong style={{ fontSize: "14px", color: "var(--warn)" }}>
                25 / 30
              </strong>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", padding: "10px 0", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 220px", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Chegaralar va kamchiliklar muhokamasi
                </div>
              </div>
              <strong style={{ fontSize: "14px", color: "var(--warn)" }}>
                15 / 20
              </strong>
            </div>
          </section>
        </div>
        <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>
                1-versiya natijasi
              </h2>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                Qayta topshirish mumkin
              </span>
              <strong style={{ marginLeft: "auto", fontSize: "20px" }}>
                82 / 100
              </strong>
            </div>
            <div style={{ display: "flex", gap: "10px", padding: "12px", borderRadius: "12px", background: "var(--bg)", border: "1px solid var(--bd)" }}>
              <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                ShB
              </span>
              <div style={{ fontSize: "14px", lineHeight: "1.6" }}>
                <strong>
                  Sh. Boltibayev
                </strong>
                {" "}
                <span style={{ color: "var(--mu)", fontSize: "12px" }}>
                  · 14-noyabr
                </span>
                <div>
                  Taxminlar yaxshi yozilgan. Logistik modelda K ni ma'lumotning oxirgi qiymatidan olibsiz, bu o'sishni sun'iy cheklaydi. K ni ham parametr sifatida moslang va tenglama chiqarilishini qo'shing.
                </div>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 12px", fontSize: "16px", fontWeight: "600" }}>
              2-versiya: modelingiz
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <label style={{ display: "block" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  1. Taxminlar
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", margin: "2px 0 6px" }}>
                  Nimalarni oddiylashtirdingiz? Ko'chish, o'lim, resurslar...
                </span>
                <textarea rows={3} placeholder="Masalan: aholi yopiq tizim, migratsiya hisobga olinmaydi..." style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", font: "inherit", fontSize: "14px", lineHeight: "1.5", resize: "vertical" }} />
              </label>
              <label style={{ display: "block" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  2. O'zgaruvchilar va parametrlar
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", margin: "2px 0 6px" }}>
                  Har birining ma'nosi va o'lchov birligi
                </span>
                <textarea rows={3} placeholder="N(t): aholi soni (ming kishi), r: o'sish tezligi (1/yil)..." style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", font: "inherit", fontSize: "14px", lineHeight: "1.5", resize: "vertical" }} />
              </label>
              <label style={{ display: "block" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  3. Tenglamalar
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", margin: "2px 0 6px" }}>
                  LaTeX yoki oddiy yozuv. Formulalar ko'rinishi pastda ko'rsatiladi.
                </span>
                <textarea rows={3} placeholder="dN/dt = r N (1 - N / K)" style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", font: "inherit", fontSize: "14px", lineHeight: "1.5", resize: "vertical" }} />
              </label>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                  4. Kod (Python)
                </div>
                <div style={{ border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
                  <div style={{ display: "flex", background: "var(--bg)", borderTop: "1px solid var(--bd)", borderBottom: "1px solid var(--bd)", fontFamily: "JetBrains Mono, monospace", fontSize: "13px", lineHeight: "1.6", minHeight: "0px" }}>
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
                    </div>
                    <pre tabIndex={0} aria-label="Kod muharriri, Python" style={{ flex: "1 1 0", minWidth: "0", margin: "0", padding: "12px 14px 12px 6px", overflowX: "auto", font: "inherit", color: "var(--tx)" }}>
                      <span style={{ color: "var(--pu)" }}>
                        {"import"}
                      </span>
                      {" numpy "}
                      <span style={{ color: "var(--pu)" }}>
                        {"as"}
                      </span>
                      {" np\n"}
                      <span style={{ color: "var(--pu)" }}>
                        {"from"}
                      </span>
                      {" scipy.optimize "}
                      <span style={{ color: "var(--pu)" }}>
                        {"import"}
                      </span>
                      {" curve_fit\n\nt, N = np.loadtxt("}
                      <span style={{ color: "var(--ok)" }}>
                        {"\"demografiya.csv\""}
                      </span>
                      {", delimiter="}
                      <span style={{ color: "var(--ok)" }}>
                        {"\",\""}
                      </span>
                      {", unpack=True)\n\n"}
                      <span style={{ color: "var(--pu)" }}>
                        {"def"}
                      </span>
                      {" logistic(t, r, K, N0):\n    "}
                      <span style={{ color: "var(--pu)" }}>
                        {"return"}
                      </span>
                      {" K / ("}
                      <span style={{ color: "var(--warn)" }}>
                        {"1"}
                      </span>
                      {" + (K / N0 - "}
                      <span style={{ color: "var(--warn)" }}>
                        {"1"}
                      </span>
                      {") * np.exp(-r * t))\n\nparams, _ = curve_fit(logistic, t, N, p0=["}
                      <span style={{ color: "var(--warn)" }}>
                        {"0.02"}
                      </span>
                      {", "}
                      <span style={{ color: "var(--warn)" }}>
                        {"1.5"}
                      </span>
                      {" * N.max(), N["}
                      <span style={{ color: "var(--warn)" }}>
                        {"0"}
                      </span>
                      {"]])"}
                    </pre>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 4l13 8-13 8z"></path>
                    </svg>
                    Kodni ishga tushirish
                  </A>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 11l-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"></path>
                    </svg>
                    Fayl biriktirish
                  </A>
                  <span style={{ fontSize: "12px", color: "var(--mu)", alignSelf: "center" }}>
                    Kod 3 soniyada tugashi kerak
                  </span>
                </div>
              </div>
              <label style={{ display: "block" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  5. Chegaralar va xulosa
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", margin: "2px 0 6px" }}>
                  Model qachon ishlamaydi? Nimani yaxshilash mumkin?
                </span>
                <textarea rows={3} placeholder="Model uzoq muddatli prognoz uchun ishonchsiz, chunki..." style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--bg)", color: "var(--tx)", font: "inherit", fontSize: "14px", lineHeight: "1.5", resize: "vertical" }} />
              </label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "16px" }}>
              <span style={{ fontSize: "13px", color: "var(--mu)", flex: "1 1 220px" }}>
                Topshirilgach o'qituvchi ko'radi. XP baholangandan keyin beriladi.
              </span>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                Qoralama saqlash
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16V5"></path>
                  <path d="M7 9l5-5 5 5"></path>
                  <path d="M5 20h14"></path>
                </svg>
                Topshirish
              </A>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 12px", fontSize: "16px", fontWeight: "600" }}>
              Jarayon
            </h2>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 auto", width: "2px", minHeight: "14px", background: "var(--bd)" }}></span>
              </div>
              <div style={{ paddingBottom: "14px" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  1-versiya topshirildi
                </div>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  12-noyabr · 14:20
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 auto", width: "2px", minHeight: "14px", background: "var(--bd)" }}></span>
              </div>
              <div style={{ paddingBottom: "14px" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  O'qituvchi baholadi: 82/100
                </div>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  14-noyabr · qayta topshirish ochiq
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                    <path d="M14 6l3 3"></path>
                  </svg>
                </span>
              </div>
              <div style={{ paddingBottom: "14px" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  2-versiya: siz yozyapsiz
                </div>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Qoralama saqlanmagan
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}
