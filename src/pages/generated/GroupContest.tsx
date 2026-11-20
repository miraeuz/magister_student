/* Generated from the approved student design (page: Challenges: guruh musobaqasi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function GroupContest() {
  const v = useShellVals();
  return (
    <Shell layer="ch" subTitle="CHALLENGES" subActive="contest" subItems={[["Masalalar", "list", "/challenges", "list", ""], ["Ro'yxatlar", "bookmark", "/challenges/lists", "lists", ""], ["Modellash", "cube", "/challenges/modelling", "model", "1"], ["Guruh musobaqasi", "trophy", "/challenges/contest", "contest", "2"], ["Reyting", "chart", "/leaderboard", "rank", ""]]} crumbs={[["Challenges", "/challenges"], ["Guruh musobaqasi", "/challenges/contest"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600" }}>
                Guruh musobaqasi
              </h1>
              <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--mu)" }}>
                O'qituvchi AM-301 guruhi uchun uyushtirgan. Faqat guruh a'zolari qatnashadi.
              </p>
            </div>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
              <span style={{ flex: "none", width: "48px", height: "48px", borderRadius: "14px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8v5a4 4 0 0 1-8 0z"></path>
                  <path d="M8 6H4a4 4 0 0 0 4 4"></path>
                  <path d="M16 6h4a4 4 0 0 1-4 4"></path>
                  <path d="M12 13v4"></path>
                  <path d="M8 20h8"></path>
                </svg>
              </span>
              <div style={{ flex: "999 1 240px", minWidth: "0" }}>
                <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--ok)" }}>
                  JONLI · Tugashiga 47 daqiqa
                </div>
                <div style={{ fontSize: "18px", fontWeight: "600" }}>
                  Sonli usullar: 3 masalalik musobaqa
                </div>
                <div style={{ fontSize: "13px", color: "var(--mu)" }}>
                  Juma 15:00–16:30 · 18 / 24 talaba qatnashmoqda · XP berilmaydi
                </div>
              </div>
              <A href="/challenges/problem" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4l13 8-13 8z"></path>
                </svg>
                Masalalarni ochish
              </A>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <h2 style={{ margin: "0 0 6px", fontSize: "16px", fontWeight: "600" }}>
              Masalalar
            </h2>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "4px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>
                A
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "600" }}>
                Eyler usuli: bitta qadam
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                21 / 24 yechgan
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                Oson
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "4px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>
                B
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "600" }}>
                Logistik tenglama: RK4
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                9 / 24 yechgan
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                O'rta
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "4px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>
                C
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0", fontSize: "14px", fontWeight: "600" }}>
                Lotka-Volterra davri
              </span>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                2 / 24 yechgan
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--bad)", background: "var(--badbg)", whiteSpace: "nowrap" }}>
                Qiyin
              </span>
            </A>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", overflow: "hidden" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 16px" }}>
              <h2 style={{ margin: "0", fontSize: "16px", fontWeight: "600", flex: "1 1 auto" }}>
                Guruh jadvali
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                Jadval har 30 soniyada yangilanadi
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", padding: "4px 16px", fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
              <span style={{ flex: "0 0 28px" }}>
                #
              </span>
              <span style={{ flex: "999 1 172px" }}>
                Talaba
              </span>
              <span style={{ flex: "0 0 118px" }}>
                A · B · C
              </span>
              <span style={{ flex: "0 0 50px", textAlign: "right" }}>
                Yechdi
              </span>
              <span style={{ flex: "0 0 70px", textAlign: "right" }}>
                Jarima
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", padding: "10px 16px", borderTop: "1px solid var(--bd)", background: "transparent" }}>
              <span style={{ flex: "0 0 28px", fontSize: "14px", fontWeight: "600", color: "var(--mu)" }}>
                1
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                DI
              </span>
              <span style={{ flex: "999 1 140px", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                Dilnoza K.
              </span>
              <span style={{ display: "flex", gap: "4px" }}>
                <span title="A" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
                <span title="B" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
                <span title="C" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
              </span>
              <span style={{ flex: "0 0 50px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                3
              </span>
              <span style={{ flex: "0 0 70px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                58 daq
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", padding: "10px 16px", borderTop: "1px solid var(--bd)", background: "transparent" }}>
              <span style={{ flex: "0 0 28px", fontSize: "14px", fontWeight: "600", color: "var(--mu)" }}>
                2
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                AS
              </span>
              <span style={{ flex: "999 1 140px", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                Asilbek S.
              </span>
              <span style={{ display: "flex", gap: "4px" }}>
                <span title="A" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
                <span title="B" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
                <span title="C" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--bad)", background: "var(--badbg)" }}>
                  ✕
                </span>
              </span>
              <span style={{ flex: "0 0 50px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                2
              </span>
              <span style={{ flex: "0 0 70px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                41 daq
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", padding: "10px 16px", borderTop: "1px solid var(--bd)", background: "var(--acbg)" }}>
              <span style={{ flex: "0 0 28px", fontSize: "14px", fontWeight: "600", color: "var(--mu)" }}>
                3
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                JA
              </span>
              <span style={{ flex: "999 1 140px", minWidth: "0", fontSize: "14px", fontWeight: "600" }}>
                Jahongirxon (siz)
              </span>
              <span style={{ display: "flex", gap: "4px" }}>
                <span title="A" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
                <span title="B" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
                <span title="C" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)" }}>
                  —
                </span>
              </span>
              <span style={{ flex: "0 0 50px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                2
              </span>
              <span style={{ flex: "0 0 70px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                49 daq
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 12px", padding: "10px 16px", borderTop: "1px solid var(--bd)", background: "transparent" }}>
              <span style={{ flex: "0 0 28px", fontSize: "14px", fontWeight: "600", color: "var(--mu)" }}>
                4
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600" }}>
                MA
              </span>
              <span style={{ flex: "999 1 140px", minWidth: "0", fontSize: "14px", fontWeight: "500" }}>
                Madina R.
              </span>
              <span style={{ display: "flex", gap: "4px" }}>
                <span title="A" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--ok)", background: "var(--okbg)" }}>
                  ✓
                </span>
                <span title="B" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--bad)", background: "var(--badbg)" }}>
                  ✕
                </span>
                <span title="C" style={{ flex: "0 0 34px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)" }}>
                  —
                </span>
              </span>
              <span style={{ flex: "0 0 50px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                1
              </span>
              <span style={{ flex: "0 0 70px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                12 daq
              </span>
            </div>
          </section>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Berilgan masalalar
            </h2>
            <p style={{ margin: "0 0 8px", fontSize: "13px", color: "var(--mu)" }}>
              O'qituvchi guruhga bergan masalalar. Muddatigacha yeching.
            </p>
            <A href="/challenges/modelling" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Logistik model: kurs ishi
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  29-noyabr · model, baholanadi
                </span>
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                Kutilmoqda
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Lotka-Volterra: davr uzunligi
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  22-noyabr · avto-tekshiruv
                </span>
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                Urinilgan
              </span>
            </A>
            <A href="/challenges/problem" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>
                  Eyler usuli: bitta qadam
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                  10-noyabr
                </span>
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                Bajarildi
              </span>
            </A>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Qoidalar
            </h2>
            <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "13px", lineHeight: "1.7", color: "var(--mu)" }}>
              <li>
                Guruh musobaqasi XP bermaydi, faqat natija jadvali.
              </li>
              <li>
                Har bir xato urinish 5 daqiqa jarima qo'shadi.
              </li>
              <li>
                Berilgan masala uchun XP bir marta, bahoga qarab beriladi.
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
