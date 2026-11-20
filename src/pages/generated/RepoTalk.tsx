/* Generated from the approved student design (page: Hub: repozitoriya muhokamalari). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function RepoTalk() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["jahongirxon", "#"], ["rk4-solver", "/hub/repo"], ["Muhokamalar", "/hub/repo/talk"]]} maxW={1560}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 16px" }}>
          <div style={{ flex: "999 1 320px", minWidth: "0", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
              JM
            </span>
            <A href="/profile" style={{ fontSize: "18px", color: "var(--ac)" }}>
              jahongirxon
            </A>
            <span style={{ fontSize: "18px", color: "var(--mu)" }}>
              /
            </span>
            <A href="/hub/repo" style={{ fontSize: "20px", fontWeight: "600", color: "var(--ac)" }}>
              rk4-solver
            </A>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--sf)", whiteSpace: "nowrap" }}>
              Ochiq
            </span>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
              Kod va model
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                <circle cx="12" cy="12" r="3" />
              </svg>
              Kuzatish
              <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                4
              </span>
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="5" r="2.5" />
                <circle cx="18" cy="5" r="2.5" />
                <circle cx="12" cy="19" r="2.5" />
                <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                <path d="M12 12.5v4"></path>
              </svg>
              Fork
              <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                3
              </span>
            </A>
            <A href="/hub/repo/quiz" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
              </svg>
              Yulduzcha
              <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                12
              </span>
            </A>
          </div>
        </div>
        <nav aria-label="Repozitoriya bo'limlari" style={{ display: "flex", gap: "0 22px", overflowX: "auto", borderBottom: "1px solid var(--bd)" }}>
          <A href="/hub/repo" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 8l-5 4 5 4"></path>
              <path d="M16 8l5 4-5 4"></path>
              <path d="M13 5l-2 14"></path>
            </svg>
            Kod
          </A>
          <A href="/hub/repo/article" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
              <path d="M14 6l3 3"></path>
            </svg>
            Maqola
          </A>
          <A href="/hub/repo/media" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="6" width="13" height="12" rx="2" />
              <path d="M16 10l5-3v10l-5-3z"></path>
            </svg>
            Media
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              2
            </span>
          </A>
          <A href="/hub/repo/talk" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
            </svg>
            Muhokamalar
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              3
            </span>
          </A>
          <A href="/hub/repo/suggestions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="5" r="2.5" />
              <circle cx="6" cy="19" r="2.5" />
              <circle cx="18" cy="13" r="2.5" />
              <path d="M6 7.5v9"></path>
              <path d="M6 8a8 8 0 0 0 9.5 5"></path>
            </svg>
            Takliflar
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              1
            </span>
          </A>
          <A href="/hub/repo/versions" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
              <path d="M4 4v4h4"></path>
              <path d="M12 8v4l3 2"></path>
            </svg>
            Versiyalar
            <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
              15
            </span>
          </A>
          <A href="/hub/repo/quiz" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
            Yulduzcha testi
          </A>
          <A href="/hub/repo/settings" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent", whiteSpace: "nowrap" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3"></path>
              <path d="M12 19v3"></path>
              <path d="M2 12h3"></path>
              <path d="M19 12h3"></path>
              <path d="M5 5l2 2"></path>
              <path d="M17 17l2 2"></path>
              <path d="M19 5l-2 2"></path>
              <path d="M7 17l-2 2"></path>
            </svg>
            Sozlamalar
          </A>
        </nav>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <nav aria-label="Holat" style={{ display: "flex", gap: "6px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
                Ochiq
                <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                  2
                </span>
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
                Hal qilingan
                <span style={{ fontSize: "12px", padding: "1px 7px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)" }}>
                  1
                </span>
              </A>
            </nav>
            <span style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6"></path>
                  <path d="M12 16.5h.01"></path>
                </svg>
                O'qituvchini chaqirish
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
                Yangi muhokama
              </A>
            </span>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", background: "var(--bg)", fontSize: "13px", color: "var(--mu)" }}>
              Bu repozitoriyaga bog'langan Community muhokamalari
            </div>
            <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "6px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ display: "flex", color: "var(--ok)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
              </span>
              <span style={{ flex: "999 1 280px", minWidth: "0" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  RK4 da qadam hajmini qanday tanlash kerak?
                </span>
                {" "}
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Savol
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", marginTop: "3px" }}>
                  dilnoza_k ochdi · 3 soat oldin
                </span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--mu)" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
                4
              </span>
            </A>
            <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "6px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ display: "flex", color: "var(--ok)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
              </span>
              <span style={{ flex: "999 1 280px", minWidth: "0" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  Eyler usuli bilan solishtirish grafigida o'qlar logarifmik bo'lsinmi?
                </span>
                {" "}
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Taklif
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", marginTop: "3px" }}>
                  bekzod_t ochdi · kecha
                </span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--mu)" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
                2
              </span>
            </A>
            <A href="#" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "6px 12px", padding: "12px 16px", borderTop: "1px solid var(--bd)", color: "var(--tx)" }}>
              <span style={{ display: "flex", color: "var(--pu)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              <span style={{ flex: "999 1 280px", minWidth: "0" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  analysis.ipynb 3-katakda xato chiqyapti
                </span>
                {" "}
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Xato
                </span>
                <span style={{ display: "block", fontSize: "12px", color: "var(--mu)", marginTop: "3px" }}>
                  madina_r ochdi · 5 kun oldin
                </span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--mu)" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
                5
              </span>
            </A>
          </section>
          <h2 style={{ margin: "8px 0 0", fontSize: "18px", fontWeight: "600" }}>
            RK4 da qadam hajmini qanday tanlash kerak?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
              Ochiq
            </span>
            <span>
              dilnoza_k · 3 soat oldin · 4 ta izoh · hammaga ko'rinadi
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "600", color: "var(--tx)" }}>
              DK
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "8px 14px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", fontSize: "13px" }}>
                <strong>
                  dilnoza_k
                </strong>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Muallif emas
                </span>
                <span style={{ color: "var(--mu)" }}>
                  3 soat oldin
                </span>
              </div>
              <div style={{ padding: "12px 14px", fontSize: "14px", lineHeight: "1.6" }}>
                h = 0,5 qilganimda yechim aniq yechimdan ancha uzoqlashdi. Qadamni qanday tanlash kerakligining umumiy qoidasi bormi?
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "0 14px 10px", fontSize: "12px", color: "var(--mu)" }}>
                <B aria-label="Foydali" style={{ minHeight: "32px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5"></path>
                    <path d="M6 11l6-6 6 6"></path>
                  </svg>
                  3
                </B>
                <A href="#" style={{ fontSize: "12px" }}>
                  Javob yozish
                </A>
                <A href="#" style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Shikoyat
                </A>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "600", color: "var(--tx)" }}>
              JM
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "8px 14px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", fontSize: "13px" }}>
                <strong>
                  jahongirxon
                </strong>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Repozitoriya egasi
                </span>
                <span style={{ color: "var(--mu)" }}>
                  2 soat oldin
                </span>
              </div>
              <div style={{ padding: "12px 14px", fontSize: "14px", lineHeight: "1.6" }}>
                RK4 xatoligi h ning to'rtinchi darajasiga proporsional. Amalda h ni ikki barobar kichraytirib, natija qancha o'zgarishini tekshiraman: farq kichik bo'lsa, qadam yetarli. Bu
                {" "}
                <A href="#">
                  analysis.ipynb
                </A>
                {" "}
                ning 5-katagida ko'rsatilgan.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "0 14px 10px", fontSize: "12px", color: "var(--mu)" }}>
                <B aria-label="Foydali" style={{ minHeight: "32px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5"></path>
                    <path d="M6 11l6-6 6 6"></path>
                  </svg>
                  5
                </B>
                <A href="#" style={{ fontSize: "12px" }}>
                  Javob yozish
                </A>
                <A href="#" style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Shikoyat
                </A>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--okbg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "600", color: "var(--tx)" }}>
              ShB
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "8px 14px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", fontSize: "13px" }}>
                <strong>
                  Sh. Boltibayev
                </strong>
                <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                  O'qituvchi
                </span>
                <span style={{ color: "var(--mu)" }}>
                  1 soat oldin
                </span>
              </div>
              <div style={{ padding: "12px 14px", fontSize: "14px", lineHeight: "1.6" }}>
                To'g'ri. Qo'shimcha: tenglama qattiq (stiff) bo'lsa, qadamni kichraytirish yetmaydi, boshqa usul kerak. Buni 14.4-mavzuda ko'ramiz.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "0 14px 10px", fontSize: "12px", color: "var(--mu)" }}>
                <B aria-label="Foydali" style={{ minHeight: "32px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5"></path>
                    <path d="M6 11l6-6 6 6"></path>
                  </svg>
                  7
                </B>
                <A href="#" style={{ fontSize: "12px" }}>
                  Javob yozish
                </A>
                <A href="#" style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Shikoyat
                </A>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "600", color: "var(--tx)" }}>
              JM
            </span>
            <div style={{ flex: "1 1 0", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)" }}>
              <div style={{ display: "flex", gap: "4px", padding: "6px 10px", background: "var(--bg)", borderBottom: "1px solid var(--bd)" }}>
                <B aria-label="Qalin" title="Qalin" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  B
                </B>
                <B aria-label="Kursiv" title="Kursiv" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <em>
                    I
                  </em>
                </B>
                <B aria-label="Formula" title="Formula" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  ∑
                </B>
                <B aria-label="Kod" title="Kod" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8l-5 4 5 4"></path>
                    <path d="M16 8l5 4-5 4"></path>
                    <path d="M13 5l-2 14"></path>
                  </svg>
                </B>
                <B aria-label="Fayl biriktirish" title="Fayl biriktirish" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </B>
                <B aria-label="Havola" title="Havola" style={{ minWidth: "36px", height: "36px", padding: "0 8px", border: "0", borderRadius: "6px", background: "transparent", color: "var(--tx)", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path>
                    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"></path>
                  </svg>
                </B>
              </div>
              <label>
                <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
                  Izoh matni
                </span>
                <textarea rows={3} placeholder="Izoh yozing. Matn, formula (LaTeX), kod va fayl qo'shish mumkin." style={{ display: "block", width: "100%", boxSizing: "border-box", padding: "12px 14px", border: "0", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", resize: "vertical" }} />
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", padding: "8px 12px", borderTop: "1px solid var(--bd)" }}>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Izoh uchun test shart emas.
                </span>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                  Izoh qoldirish
                </A>
              </div>
            </div>
          </div>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Muhokama haqida
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                <path d="M18 14a6 6 0 0 1 3.5 6"></path>
              </svg>
              <span>
                3 ishtirokchi
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>
                Hammaga ko'rinadi
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path>
                <path d="M4 19V5"></path>
              </svg>
              <span>
                14.4-mavzuga bog'langan
              </span>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Ishtirokchilar
              </h2>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                DK
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                JM
              </span>
              <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", background: "var(--okbg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600", color: "var(--tx)" }}>
                ShB
              </span>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Tashqi muhokama
              </h2>
            </div>
            <A href="#" style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", fontSize: "13px" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L10 14"></path>
                <path d="M21 3l-7 18-4-7-7-4z"></path>
              </svg>
              Telegram: AM-301 modellashtirish
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bahs yomonlashsa
              </h2>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              O'qituvchini chaqirsangiz, unga bildirishnoma boradi. Kim chaqirganini faqat o'qituvchi ko'radi.
            </p>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v6"></path>
                <path d="M12 16.5h.01"></path>
              </svg>
              O'qituvchini chaqirish
            </A>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Bildirishnoma
              </h2>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Siz bu muhokamaga obuna bo'lgansiz.
            </p>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"></path>
                <path d="M10 20a2 2 0 0 0 4 0"></path>
              </svg>
              Obunani bekor qilish
            </A>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
