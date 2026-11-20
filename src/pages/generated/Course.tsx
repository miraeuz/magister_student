/* Generated from the approved student design (page: Ta'lim: kurs sahifasi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Course() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="course" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Matematik modellashtirish", "/education/course"]]} maxW={1560}>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
          <div style={{ flex: "999 1 320px", minWidth: "0" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                Majburiy fan
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
                MM15609 · 60540200 Amaliy matematika
              </span>
            </div>
            <h1 style={{ margin: "10px 0 4px", fontSize: "24px", fontWeight: "600" }}>
              Matematik modellashtirish
            </h1>
            <div style={{ fontSize: "14px", color: "var(--mu)", lineHeight: "1.5" }}>
              Turli jarayonlarning matematik modellarini yaratish, tahlil qilish va kompyuterda yechish. O'qituvchi: Sh. Boltibayev.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px", marginTop: "12px", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                16 paragraf
              </span>
              <span>
                59 mavzu
              </span>
              <span>
                60 soat ma'ruza
              </span>
              <span>
                60 soat amaliy
              </span>
              <span>
                Kurs ishi
              </span>
            </div>
          </div>
          <div style={{ flex: "1 1 220px", minWidth: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                Umumiy progress
              </span>
              <span style={{ fontSize: "22px", fontWeight: "600" }}>
                36%
              </span>
            </div>
            <div style={{ margin: "8px 0 12px" }}>
              <div role="img" aria-label="Kurs progressi 36 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                <div style={{ width: "36%", height: "8px", background: "var(--ok)", borderRadius: "999px" }}></div>
              </div>
            </div>
            <A href="/education/lesson" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 4l13 8-13 8z"></path>
              </svg>
              6.2-mavzuni davom ettirish
            </A>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
        <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", padding: "0 14px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "var(--sf)", background: "var(--tx)" }}>
          5-semestr · 29 mavzu
        </A>
        <A href="#" style={{ minHeight: "40px", display: "inline-flex", alignItems: "center", padding: "0 14px", borderRadius: "6px", fontSize: "14px", color: "var(--tx)", background: "var(--sf)", border: "1px solid var(--bd)" }}>
          6-semestr · 30 mavzu
        </A>
        <span style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "var(--mu)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--ok)" }}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6"></path>
            </svg>
            Tugatilgan
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--ac)" }}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 4l13 8-13 8z"></path>
            </svg>
            Joriy
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
            Oldingi mavzudan keyin ochiladi
          </span>
        </span>
      </div>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            01
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Model va modellashtirish tushunchalari
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M1
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            4 / 4 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 100 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "100%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            02
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Matematik modelni qurish va tadqiq qilish
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M2
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            5 / 5 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 100 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "100%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            03
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Saqlanish qonunlari asosida model qurish
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M3
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            4 / 4 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 100 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "100%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            04
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Analogiya, variatsion va iyerarxiya prinsiplari
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M4
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            3 / 3 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 100 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "100%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            05
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Chiziqli dasturlash masalalari
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M5
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            4 / 4 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 100 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "100%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--ok)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            5.1
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Optimallashtirish masalasi: maqsad funksiya va cheklovlar
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            40 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--ok)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            5.2
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Chiziqli dasturlashning umumiy masalasi. Grafik usul
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A6
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            60 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--ok)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            5.3
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Chiziqli dasturlash masalasini Pythonda yechish
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A6
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            45 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--ok)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            5.4
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Transport masalasi
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A6
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            60 daq.
          </span>
        </A>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            06
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Demografik modellar
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M6
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            1 / 4 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 25 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "25%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--ok)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            6.1
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Maltus modeli
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A9
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            45 daq.
          </span>
        </A>
        <A href="/education/lesson" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)", background: "var(--acbg)" }}>
          <span style={{ display: "flex", color: "var(--ac)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 4l13 8-13 8z"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            6.2
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "600" }}>
            Ferxyulst-Perl (logistik) modeli
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
            Davom ettirish
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A9
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A15
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            60 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--mu)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            6.3
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Chiziqsiz populyatsiya modelining uch rejimi
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A15
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            60 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--mu)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            6.4
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Jamiyat rivojlanishining demografik modeli
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A8
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            60 daq.
          </span>
        </A>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            07
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Raqobat modellari
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M7
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            0 / 4 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 0 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "0%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--mu)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            7.1
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Tenglamalar tizimi va fazaviy tekislik
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            60 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--mu)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            7.2
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            "Yirtqich-o'lja" (Lotka-Volterra) modeli
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A11
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            60 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--mu)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            7.3
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Ikki davlat o'rtasidagi qurollanish poygasi modeli
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A16
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            45 daq.
          </span>
        </A>
        <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", minHeight: "44px", padding: "8px 16px", borderTop: "1px solid var(--bd)", color: "var(--mu)", background: "var(--sf)" }}>
          <span style={{ display: "flex", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
          </span>
          <span style={{ width: "34px", fontSize: "12px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            7.4
          </span>
          <span style={{ flex: "999 1 260px", minWidth: "0", fontSize: "14px", fontWeight: "400" }}>
            Ikki armiyaning jangovar harakati modeli
          </span>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            A16
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            45 daq.
          </span>
        </A>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", padding: "14px 16px" }}>
          <span style={{ fontSize: "13px", color: "var(--mu)", fontFamily: "JetBrains Mono, monospace" }}>
            08
          </span>
          <h3 style={{ flex: "999 1 240px", minWidth: "0", margin: "0", fontSize: "15px", fontWeight: "600" }}>
            Biologik modellar
          </h3>
          <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
            M8, M9
          </span>
          <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
            0 / 2 mavzu
          </span>
          <div style={{ width: "90px" }}>
            <div role="img" aria-label="Paragraf progressi 0 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "0%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
