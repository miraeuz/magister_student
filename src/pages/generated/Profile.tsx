/* Generated from the approved student design (page: Profil). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Profile() {
  const v = useShellVals();
  return (
    <Shell layer="profile" subTitle="" subActive="" subItems={[]} crumbs={[["Profil", "/profile"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "flex-start" }}>
        <aside aria-label="Profil ma'lumotlari" style={{ flex: "1 1 250px", maxWidth: "310px", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ width: "180px", maxWidth: "100%", aspectRatio: "1 / 1", borderRadius: "999px", background: "var(--av)", border: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "56px", fontWeight: "600" }}>
              JM
            </div>
            <div>
              <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2" }}>
                Jahongirxon Muhammadiev
              </h1>
              <div style={{ fontSize: "16px", color: "var(--mu)" }}>
                @jahongirxon
              </div>
            </div>
            <div>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                8-daraja · Tadqiqotchi
              </span>
            </div>
            <div>
              <div role="img" aria-label="Daraja ichidagi progress 30 foiz" style={{ height: "8px", background: "var(--h0)", borderRadius: "999px" }}>
                <div style={{ width: "30%", height: "8px", background: "var(--ac)", borderRadius: "999px" }}></div>
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "6px" }}>
                8 240 XP · Mutaxassis darajasigacha 1 760 XP
              </div>
            </div>
            <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55" }}>
              Amaliy matematika, 3-kurs. Differensial tenglamalar va sonli usullarga qiziqaman.
            </p>
            <A href="/settings" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                <path d="M14 6l3 3"></path>
              </svg>
              Profilni tahrirlash
            </A>
            <div style={{ display: "flex", gap: "14px", fontSize: "13px", color: "var(--mu)" }}>
              <span>
                <strong style={{ color: "var(--tx)" }}>
                  18
                </strong>
                {" "}
                kuzatuvchi
              </span>
              <span>
                <strong style={{ color: "var(--tx)" }}>
                  11
                </strong>
                {" "}
                kuzatadi
              </span>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Ta'lim ma'lumotlari
              </h2>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "7px 0", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
              <span style={{ flex: "0 0 110px", color: "var(--mu)" }}>
                Universitet
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                Namangan davlat universiteti
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "7px 0", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
              <span style={{ flex: "0 0 110px", color: "var(--mu)" }}>
                Fakultet
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                Fizika-matematika
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "7px 0", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
              <span style={{ flex: "0 0 110px", color: "var(--mu)" }}>
                Yo'nalish
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                60540200 Amaliy matematika
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "7px 0", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
              <span style={{ flex: "0 0 110px", color: "var(--mu)" }}>
                Guruh
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                <A href="/education/group">
                  AM-301
                </A>
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "7px 0", borderTop: "1px solid var(--bd)", fontSize: "13px" }}>
              <span style={{ flex: "0 0 110px", color: "var(--mu)" }}>
                O'qish davri
              </span>
              <span style={{ flex: "1 1 0", minWidth: "0" }}>
                2024 – 2028
              </span>
            </div>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Aloqa
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                faqat siz to'ldirganlar
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L10 14"></path>
                <path d="M21 3l-7 18-4-7-7-4z"></path>
              </svg>
              <span>
                Telegram: @jahongirxon
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path>
                <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"></path>
              </svg>
              <span>
                github.com/jahongirxon
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6"></path>
              </svg>
              <span>
                Universitet pochtasi yashirilgan
              </span>
            </div>
          </section>
        </aside>
        <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <nav aria-label="Profil bo'limlari" style={{ display: "flex", flexWrap: "wrap", gap: "0 22px", borderBottom: "1px solid var(--bd)" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)" }}>
              Umumiy
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
              Darslar
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
              Hub (4)
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
              Community
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
              Challenges (17)
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
              Nishonlar (4)
            </A>
          </nav>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--ac)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                  </svg>
                </span>
                Jami XP
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                8 240
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Bu oy 1 840
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--warn)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"></path>
                  </svg>
                </span>
                Ketma-ket faollik
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                14 kun
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Eng uzuni: 21 kun
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--ok)", display: "flex" }}>
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
                36 foiz
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
                2 tasi modellashtirish
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
                <span style={{ color: "var(--ac)", display: "flex" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                  </svg>
                </span>
                Eng yaxshi javoblar
              </div>
              <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
                6
              </div>
              <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                Community
              </div>
            </section>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", flex: "3 1 380px", minWidth: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
                <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                  Haftalik XP: oxirgi 16 hafta
                </h2>
                <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                  bu hafta 320
                </span>
              </div>
              <svg role="img" aria-label="Oxirgi 16 haftadagi haftalik XP" viewBox="0 0 640 130" style={{ width: "100%", height: "auto", display: "block" }}>
                <line x1="8" y1="118" x2="632" y2="118" strokeWidth="1" style={{ stroke: "var(--bd)" }} />
                <polygon points="8,118 8.0,105.2 49.6,79.8 91.2,98.9 132.8,118.0 174.4,54.2 216.0,70.2 257.6,89.3 299.2,47.9 340.8,92.5 382.4,35.1 424.0,73.4 465.6,98.9 507.2,60.6 548.8,86.1 590.4,41.5 632.0,16.0 632,118" style={{ fill: "var(--acbg)" }} />
                <polyline points="8.0,105.2 49.6,79.8 91.2,98.9 132.8,118.0 174.4,54.2 216.0,70.2 257.6,89.3 299.2,47.9 340.8,92.5 382.4,35.1 424.0,73.4 465.6,98.9 507.2,60.6 548.8,86.1 590.4,41.5 632.0,16.0" fill="none" strokeWidth="2" strokeLinejoin="round" style={{ stroke: "var(--ac)" }} />
                <circle cx="632.0" cy="16.0" r="4" style={{ fill: "var(--ac)" }} />
              </svg>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", flex: "2 1 260px", minWidth: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
                <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                  Faollik: 12 hafta
                </h2>
              </div>
              <div role="img" aria-label="Oxirgi 12 haftadagi kunlik faollik" style={{ display: "flex", gap: "3px", overflowX: "auto" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h4)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h4)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h4)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h4)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h4)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "10px", fontSize: "12px", color: "var(--mu)" }}>
                <span>
                  Kam
                </span>
                <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h0)" }}></div>
                <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h1)" }}></div>
                <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h2)" }}></div>
                <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h3)" }}></div>
                <div style={{ width: "13px", height: "13px", borderRadius: "3px", background: "var(--h4)" }}></div>
                <span>
                  Ko'p
                </span>
              </div>
            </section>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
              Mahkamlangan ishlar
            </h2>
            <A href="/hub/mine" style={{ fontSize: "12px" }}>
              Barcha repozitoriyalar
            </A>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <A href="/hub/repo" style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px 16px", color: "var(--tx)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8l-5 4 5 4"></path>
                    <path d="M16 8l5 4-5 4"></path>
                    <path d="M13 5l-2 14"></path>
                  </svg>
                </span>
                <strong style={{ fontSize: "15px", color: "var(--ac)" }}>
                  rk4-solver
                </strong>
                <span style={{ marginLeft: "auto" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Ochiq
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--mu)", flex: "1 1 auto" }}>
                Runge-Kutta 4 usuli va Eyler bilan solishtirish.
              </span>
              <span style={{ display: "flex", gap: "14px", fontSize: "12px", color: "var(--mu)" }}>
                <span>
                  Kod va model
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                  </svg>
                  12
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="5" r="2.5" />
                    <circle cx="18" cy="5" r="2.5" />
                    <circle cx="12" cy="19" r="2.5" />
                    <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                    <path d="M12 12.5v4"></path>
                  </svg>
                  3
                </span>
              </span>
            </A>
            <A href="/hub/repo" style={{ flex: "1 1 280px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px 16px", color: "var(--tx)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", color: "var(--mu)" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                    <path d="M14 6l3 3"></path>
                  </svg>
                </span>
                <strong style={{ fontSize: "15px", color: "var(--ac)" }}>
                  logistik-eslatma
                </strong>
                <span style={{ marginLeft: "auto" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Ochiq
                  </span>
                </span>
              </span>
              <span style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--mu)", flex: "1 1 auto" }}>
                Logistik model bo'yicha qisqa maqola va misollar.
              </span>
              <span style={{ display: "flex", gap: "14px", fontSize: "12px", color: "var(--mu)" }}>
                <span>
                  Maqola
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                  </svg>
                  9
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="5" r="2.5" />
                    <circle cx="18" cy="5" r="2.5" />
                    <circle cx="12" cy="19" r="2.5" />
                    <path d="M6 7.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"></path>
                    <path d="M12 12.5v4"></path>
                  </svg>
                  0
                </span>
              </span>
            </A>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", flex: "1 1 340px", minWidth: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
                <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                  Nishonlar
                </h2>
                <A href="#" style={{ fontSize: "12px" }}>
                  Qanday olinadi?
                </A>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <div style={{ flex: "1 1 120px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "12px 8px", border: "1px solid var(--bd)", borderRadius: "8px", textAlign: "center", opacity: "1" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"></path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "1.3" }}>
                    14 kunlik faollik
                  </span>
                </div>
                <div style={{ flex: "1 1 120px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "12px 8px", border: "1px solid var(--bd)", borderRadius: "8px", textAlign: "center", opacity: "1" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3v12"></path>
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <path d="M18 9a9 9 0 0 1-9 9"></path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "1.3" }}>
                    Birinchi repozitoriya
                  </span>
                </div>
                <div style={{ flex: "1 1 120px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "12px 8px", border: "1px solid var(--bd)", borderRadius: "8px", textAlign: "center", opacity: "1" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 12l3 3 5-6"></path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "1.3" }}>
                    10 ta dars
                  </span>
                </div>
                <div style={{ flex: "1 1 120px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "12px 8px", border: "1px solid var(--bd)", borderRadius: "8px", textAlign: "center", opacity: "1" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "1.3" }}>
                    Eng yaxshi javob
                  </span>
                </div>
                <div style={{ flex: "1 1 120px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "12px 8px", border: "1px solid var(--bd)", borderRadius: "8px", textAlign: "center", opacity: "0.5" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "var(--bg)", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 4h8v5a4 4 0 0 1-8 0z"></path>
                      <path d="M8 6H4a4 4 0 0 0 4 4"></path>
                      <path d="M16 6h4a4 4 0 0 1-4 4"></path>
                      <path d="M12 13v4"></path>
                      <path d="M8 20h8"></path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "1.3" }}>
                    Musobaqa g'olibi
                  </span>
                </div>
                <div style={{ flex: "1 1 120px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "12px 8px", border: "1px solid var(--bd)", borderRadius: "8px", textAlign: "center", opacity: "0.5" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "var(--bg)", color: "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "1.3" }}>
                    50 yulduzcha
                  </span>
                </div>
              </div>
            </section>
            <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px", flex: "1 1 340px", minWidth: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
                <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                  Faoliyat
                </h2>
              </div>
              <div style={{ display: "flex", gap: "10px", padding: "9px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.5" }}>
                <span style={{ display: "flex", color: "var(--mu)", marginTop: "3px" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12a8 8 0 1 0 2.5-5.8"></path>
                    <path d="M4 4v4h4"></path>
                    <path d="M12 8v4l3 2"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0" }}>
                  <strong>
                    rk4-solver
                  </strong>
                  {" "}
                  ga 2 ta versiya qo'shdi
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  2 kun oldin
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", padding: "9px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.5" }}>
                <span style={{ display: "flex", color: "var(--ok)", marginTop: "3px" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0" }}>
                  <strong>
                    6.1. Maltus modeli
                  </strong>
                  {" "}
                  mavzusini tugatdi
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  4 kun oldin
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", padding: "9px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.5" }}>
                <span style={{ display: "flex", color: "var(--pu)", marginTop: "3px" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8l-5 4 5 4"></path>
                    <path d="M16 8l5 4-5 4"></path>
                    <path d="M13 5l-2 14"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0" }}>
                  <strong>
                    Populyatsiya o'sishi
                  </strong>
                  {" "}
                  masalasiga model topshirdi
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  5 kun oldin
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", padding: "9px 0", borderTop: "1px solid var(--bd)", fontSize: "14px", lineHeight: "1.5" }}>
                <span style={{ display: "flex", color: "var(--ac)", marginTop: "3px" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                  </svg>
                </span>
                <span style={{ flex: "1 1 0" }}>
                  <strong>
                    RK4 da qadam hajmi
                  </strong>
                  {" "}
                  muhokamasiga javob yozdi
                </span>
                <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  1 hafta oldin
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Shell>
  );
}
