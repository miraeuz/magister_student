/* Generated from the approved student design (page: Challenges: ro'yxatlar). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function ChLists() {
  const v = useShellVals();
  return (
    <Shell layer="ch" subTitle="CHALLENGES" subActive="lists" subItems={[["Masalalar", "list", "/challenges", "list", ""], ["Ro'yxatlar", "bookmark", "/challenges/lists", "lists", ""], ["Modellash", "cube", "/challenges/modelling", "model", "1"], ["Guruh musobaqasi", "trophy", "/challenges/contest", "contest", "2"], ["Reyting", "chart", "/leaderboard", "rank", ""]]} crumbs={[["Challenges", "/challenges"], ["Ro'yxatlar", "/challenges/lists"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
        <div>
          <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600" }}>
            Ro'yxatlar
          </h1>
          <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--mu)" }}>
            Masalalarni mavzu bo'yicha yo'l xaritasiga yig'ing. O'qituvchilar ro'yxati kurs bilan bog'langan.
          </p>
        </div>
        <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
          </svg>
          Yangi ro'yxat
        </A>
      </div>
      <h2 style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: "600" }}>
        O'qituvchi ro'yxatlari
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
        <A href="/challenges" style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                Sonli usullar: asoslar
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Sh. Boltibayev · ODE 3-bo'lim bilan bog'liq
              </div>
            </div>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
              Kurs
            </span>
          </div>
          <div role="img" aria-label="Sonli usullar: asoslar 58 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
            <div style={{ width: "58%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--mu)" }}>
            <span>
              7 / 12 yechilgan
            </span>
            <span>
              58%
            </span>
          </div>
        </A>
        <A href="/challenges" style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <path d="M8 16v-4"></path>
                <path d="M12 16V8"></path>
                <path d="M16 16v-7"></path>
              </svg>
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                Regressiya yo'l xaritasi
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                M. Dadaxanov
              </div>
            </div>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
              Kurs
            </span>
          </div>
          <div role="img" aria-label="Regressiya yo'l xaritasi 44 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
            <div style={{ width: "44%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--mu)" }}>
            <span>
              4 / 9 yechilgan
            </span>
            <span>
              44%
            </span>
          </div>
        </A>
        <A href="/challenges" style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"></path>
                <path d="M12 12l8-4.5"></path>
                <path d="M12 12v9"></path>
                <path d="M12 12L4 7.5"></path>
              </svg>
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                Modellash: boshlang'ich
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Sh. Boltibayev
              </div>
            </div>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
              Kurs
            </span>
          </div>
          <div role="img" aria-label="Modellash: boshlang'ich 20 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
            <div style={{ width: "20%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--mu)" }}>
            <span>
              1 / 5 yechilgan
            </span>
            <span>
              20%
            </span>
          </div>
        </A>
      </div>
      <h2 style={{ margin: "8px 0 0", fontSize: "16px", fontWeight: "600" }}>
        Mening ro'yxatlarim
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
        <A href="/challenges" style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12v18l-6-4-6 4z"></path>
              </svg>
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                Imtihon oldidan takrorlash
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Shaxsiy · yopiq
              </div>
            </div>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
              Yopiq
            </span>
          </div>
          <div role="img" aria-label="Imtihon oldidan takrorlash 38 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
            <div style={{ width: "38%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--mu)" }}>
            <span>
              3 / 8 yechilgan
            </span>
            <span>
              38%
            </span>
          </div>
        </A>
        <A href="/challenges" style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: "var(--badbg)", color: "var(--bad)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"></path>
              </svg>
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                Qiyin ODE masalalari
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Shaxsiy · guruhga ochiq
              </div>
            </div>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
              Guruh
            </span>
          </div>
          <div role="img" aria-label="Qiyin ODE masalalari 0 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
            <div style={{ width: "0%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--mu)" }}>
            <span>
              0 / 6 yechilgan
            </span>
            <span>
              0%
            </span>
          </div>
        </A>
      </div>
      <h2 style={{ margin: "8px 0 0", fontSize: "16px", fontWeight: "600" }}>
        Ommabop (universitet)
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
        <A href="/challenges" style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
              </svg>
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                Python bilan 10 ta klassik model
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Dilnoza K. · 31 kishi saqlagan
              </div>
            </div>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
              Ochiq
            </span>
          </div>
          <div role="img" aria-label="Python bilan 10 ta klassik model 20 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
            <div style={{ width: "20%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--mu)" }}>
            <span>
              2 / 10 yechilgan
            </span>
            <span>
              20%
            </span>
          </div>
        </A>
        <A href="/challenges" style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8l-5 4 5 4"></path>
                <path d="M16 8l5 4-5 4"></path>
                <path d="M13 5l-2 14"></path>
              </svg>
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0" }}>
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                Optimizatsiya: bosqichma-bosqich
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Otabek T. · 18 kishi saqlagan
              </div>
            </div>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
              Ochiq
            </span>
          </div>
          <div role="img" aria-label="Optimizatsiya: bosqichma-bosqich 0 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
            <div style={{ width: "0%", height: "6px", background: "var(--ac)", borderRadius: "999px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--mu)" }}>
            <span>
              0 / 7 yechilgan
            </span>
            <span>
              0%
            </span>
          </div>
        </A>
      </div>
    </Shell>
  );
}
