/* Generated from the approved student design (page: Ta'lim: topshiriq natijasi). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function AssignResult() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="results" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Natijalarim", "/education/results"], ["Maltus modeli", "/education/assignment/result"]]} maxW={1560}>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
          <div style={{ flex: "999 1 300px", minWidth: "0" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                Uy vazifasi
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                Baholangan
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                6.1-mavzu
              </span>
            </div>
            <h1 style={{ margin: "8px 0 4px", fontSize: "22px", fontWeight: "600" }}>
              Maltus modeli: uy vazifasi
            </h1>
            <div style={{ fontSize: "13px", color: "var(--mu)" }}>
              12-noyabr, 18:42 da topshirilgan · 1-urinish · 14 daqiqa sarflangan
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Natija
              </div>
              <div style={{ fontSize: "32px", fontWeight: "600", color: "var(--ok)", lineHeight: "1.1" }}>
                90%
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                9 / 10 ball
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Mukofot
              </div>
              <div style={{ fontSize: "32px", fontWeight: "600", lineHeight: "1.1" }}>
                +54
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                60 XP dan
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Guruh o'rtachasi
              </div>
              <div style={{ fontSize: "32px", fontWeight: "600", lineHeight: "1.1" }}>
                78%
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                22 ta topshirgan
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        <div style={{ flex: "2 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--mu)" }}>
                1-savol
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                To'g'ri
              </span>
              <span style={{ marginLeft: "auto", fontSize: "13px", fontWeight: "600" }}>
                1 / 1 ball
              </span>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.6" }}>
              Bakteriyalar soni har 20 daqiqada ikki barobar ko'paysa, 2 soatdan keyin 100 ta bakteriya nechtaga yetadi?
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", fontSize: "14px" }}>
              <span>
                <span style={{ color: "var(--mu)" }}>
                  Sizning javobingiz:
                </span>
                {" "}
                <strong style={{ color: "var(--ok)" }}>
                  6 400
                </strong>
              </span>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--mu)" }}>
                2-savol
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                To'g'ri
              </span>
              <span style={{ marginLeft: "auto", fontSize: "13px", fontWeight: "600" }}>
                1 / 1 ball
              </span>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.6" }}>
              Maltus modelida dN/dt = rN. Agar r = 0,1 va N₀ = 500 bo'lsa, N(10) taxminan nechaga teng?
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", fontSize: "14px" }}>
              <span>
                <span style={{ color: "var(--mu)" }}>
                  Sizning javobingiz:
                </span>
                {" "}
                <strong style={{ color: "var(--ok)" }}>
                  1 359
                </strong>
              </span>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--mu)" }}>
                3-savol
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--bad)", background: "var(--badbg)", whiteSpace: "nowrap" }}>
                Noto'g'ri
              </span>
              <span style={{ marginLeft: "auto", fontSize: "13px", fontWeight: "600" }}>
                0 / 1 ball
              </span>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "1.6" }}>
              Maltus modelining asosiy kamchiligi nimada?
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", fontSize: "14px" }}>
              <span>
                <span style={{ color: "var(--mu)" }}>
                  Sizning javobingiz:
                </span>
                {" "}
                <strong style={{ color: "var(--bad)" }}>
                  O'sish koeffitsiyenti manfiy bo'la olmaydi
                </strong>
              </span>
              <span>
                <span style={{ color: "var(--mu)" }}>
                  To'g'ri javob:
                </span>
                {" "}
                <strong>
                  Resurslar cheklanganini hisobga olmaydi
                </strong>
              </span>
            </div>
            <div style={{ marginTop: "10px", padding: "10px 12px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", lineHeight: "1.55" }}>
              <strong>
                Yechim.
              </strong>
              {" "}
              Maltus modelida son cheksiz o'sadi, chunki oziq-ovqat va joy cheklovi yo'q. Bu kamchilikni 6.2-mavzudagi logistik model tuzatadi. r manfiy bo'lishi mumkin: unda son kamayadi.
            </div>
          </section>
          <div style={{ fontSize: "13px", color: "var(--mu)" }}>
            Qolgan 7 ta savol to'g'ri.
            {" "}
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              Barcha savollarni ko'rsatish
            </A>
          </div>
        </div>
        <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Savollar
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span aria-label="1-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                1
              </span>
              <span aria-label="2-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                2
              </span>
              <span aria-label="3-savol: noto'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--bad)" }}>
                3
              </span>
              <span aria-label="4-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                4
              </span>
              <span aria-label="5-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                5
              </span>
              <span aria-label="6-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                6
              </span>
              <span aria-label="7-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                7
              </span>
              <span aria-label="8-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                8
              </span>
              <span aria-label="9-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                9
              </span>
              <span aria-label="10-savol: to'g'ri" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", fontSize: "14px", fontWeight: "600", color: "#ffffff", background: "var(--okbtn)" }}>
                10
              </span>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                O'qituvchi izohi
              </h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                ShB
              </span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55" }}>
                Yaxshi natija. 3-savoldagi xatoni 6.2-mavzuni o'qigach yana bir ko'rib chiqing.
              </p>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Keyingi qadam
              </h2>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Xato qilingan savol 6.2-mavzuga bog'liq.
            </p>
            <A href="/education/lesson" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 4l13 8-13 8z"></path>
              </svg>
              6.2-mavzuga o'tish
            </A>
            <div style={{ marginTop: "10px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
                Savol berish
              </A>
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}
