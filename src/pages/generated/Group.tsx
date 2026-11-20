/* Generated from the approved student design (page: Ta'lim: guruhim). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Group() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="group" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Guruhim", "/education/group"]]} maxW={1560}>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }}>
          <div style={{ flex: "999 1 320px", minWidth: "0" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                Akademik guruh
              </span>
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                5-semestr
              </span>
            </div>
            <h1 style={{ margin: "10px 0 4px", fontSize: "26px", fontWeight: "600" }}>
              AM-301
            </h1>
            <div style={{ fontSize: "14px", color: "var(--mu)", lineHeight: "1.5" }}>
              Namangan davlat universiteti · Fizika-matematika fakulteti · 60540200 Amaliy matematika · 2024-2028
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--acbtn)", color: "#ffffff", border: "1px solid var(--acbtn)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
              </svg>
              Guruh chati
            </A>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "6px", fontWeight: "600", fontSize: "14px", background: "var(--bg)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L10 14"></path>
                <path d="M21 3l-7 18-4-7-7-4z"></path>
              </svg>
              Telegram guruhi
            </A>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--ac)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                <path d="M16 5a3.5 3.5 0 0 1 0 7"></path>
                <path d="M18 14a6 6 0 0 1 3.5 6"></path>
              </svg>
            </span>
            Talabalar
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            24
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            Hammasi tasdiqlangan
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
            Guruh o'rtacha progressi
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            34%
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            Siz: 36%
          </div>
        </section>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--warn)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l3 3 5-6"></path>
              </svg>
            </span>
            Guruh o'rtacha natijasi
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            76%
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            Siz: 81%
          </div>
        </section>
        <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "14px", flex: "1 1 150px", minWidth: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--mu)", fontSize: "13px" }}>
            <span style={{ color: "var(--pu)", display: "flex" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4h8v5a4 4 0 0 1-8 0z"></path>
                <path d="M8 6H4a4 4 0 0 0 4 4"></path>
                <path d="M16 6h4a4 4 0 0 1-4 4"></path>
                <path d="M12 13v4"></path>
                <path d="M8 20h8"></path>
              </svg>
            </span>
            Sizning o'rningiz
          </div>
          <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "6px", lineHeight: "1.2" }}>
            4
          </div>
          <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
            Bu hafta XP bo'yicha
          </div>
        </section>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        <section style={{ flex: "2 1 480px", minWidth: "0", background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
          <div style={{ padding: "12px 16px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
            <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
              Guruh reytingi
            </h2>
            <nav aria-label="Davr" style={{ display: "flex", gap: "0 18px" }}>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)" }}>
                Bu hafta
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Bu oy
              </A>
              <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
                Semestr
              </A>
            </nav>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    #
                  </th>
                  <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Talaba
                  </th>
                  <th scope="col" style={{ padding: "10px 16px", textAlign: "right", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    XP
                  </th>
                  <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Kurs progressi
                  </th>
                  <th scope="col" style={{ padding: "10px 16px", textAlign: "right", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    O'rtacha
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "transparent" }}>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", width: "40px", fontWeight: "600" }}>
                    1
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                        DK
                      </span>
                      <A href="/profile" style={{ fontSize: "14px", fontWeight: "500", color: "var(--tx)" }}>
                        Dilnoza K.
                      </A>
                    </span>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                    1 120
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "150px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ flex: "1 1 0" }}>
                        <div role="img" aria-label="Kurs progressi 44 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                          <div style={{ width: "44%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                        </div>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                        26 / 59
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", fontWeight: "600" }}>
                    88%
                  </td>
                </tr>
                <tr style={{ background: "transparent" }}>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", width: "40px", fontWeight: "600" }}>
                    2
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                        AS
                      </span>
                      <A href="/profile" style={{ fontSize: "14px", fontWeight: "500", color: "var(--tx)" }}>
                        Asilbek S.
                      </A>
                    </span>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                    980
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "150px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ flex: "1 1 0" }}>
                        <div role="img" aria-label="Kurs progressi 41 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                          <div style={{ width: "41%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                        </div>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                        24 / 59
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", fontWeight: "600" }}>
                    84%
                  </td>
                </tr>
                <tr style={{ background: "transparent" }}>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", width: "40px", fontWeight: "600" }}>
                    3
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                        MR
                      </span>
                      <A href="/profile" style={{ fontSize: "14px", fontWeight: "500", color: "var(--tx)" }}>
                        Madina R.
                      </A>
                    </span>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                    910
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "150px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ flex: "1 1 0" }}>
                        <div role="img" aria-label="Kurs progressi 39 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                          <div style={{ width: "39%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                        </div>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                        23 / 59
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", fontWeight: "600" }}>
                    86%
                  </td>
                </tr>
                <tr style={{ background: "var(--acbg)" }}>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", width: "40px", fontWeight: "600" }}>
                    4
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                        JM
                      </span>
                      <A href="/profile" style={{ fontSize: "14px", fontWeight: "600", color: "var(--tx)" }}>
                        Jahongirxon M.
                      </A>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--sf)", whiteSpace: "nowrap" }}>
                        Siz
                      </span>
                    </span>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                    640
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "150px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ flex: "1 1 0" }}>
                        <div role="img" aria-label="Kurs progressi 36 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                          <div style={{ width: "36%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                        </div>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                        21 / 59
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", fontWeight: "600" }}>
                    81%
                  </td>
                </tr>
                <tr style={{ background: "transparent" }}>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", width: "40px", fontWeight: "600" }}>
                    5
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                        BT
                      </span>
                      <A href="/profile" style={{ fontSize: "14px", fontWeight: "500", color: "var(--tx)" }}>
                        Bekzod T.
                      </A>
                    </span>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                    600
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "150px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ flex: "1 1 0" }}>
                        <div role="img" aria-label="Kurs progressi 34 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                          <div style={{ width: "34%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                        </div>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                        20 / 59
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", fontWeight: "600" }}>
                    74%
                  </td>
                </tr>
                <tr style={{ background: "transparent" }}>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", width: "40px", fontWeight: "600" }}>
                    6
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "999px", background: "var(--av)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "var(--tx)" }}>
                        SO
                      </span>
                      <A href="/profile" style={{ fontSize: "14px", fontWeight: "500", color: "var(--tx)" }}>
                        Sardor O.
                      </A>
                    </span>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                    540
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "150px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ flex: "1 1 0" }}>
                        <div role="img" aria-label="Kurs progressi 32 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
                          <div style={{ width: "32%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
                        </div>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                        19 / 59
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", fontWeight: "600" }}>
                    70%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "12px", color: "var(--mu)" }}>
            24 talabadan 6 tasi ko'rsatilgan. Faolligini yashirgan talabalar ro'yxatda chiqmaydi.
          </div>
        </section>
        <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                O'qituvchilar
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0" }}>
              <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "19px", fontWeight: "600", color: "var(--tx)" }}>
                ShB
              </span>
              <div style={{ flex: "1 1 0", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Sh. Boltibayev
                </div>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  Kurator · ma'ruza va amaliy
                </div>
              </div>
              <A href="#" aria-label="Sh. Boltibayev ga savol berish" title="Savol berish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
              </A>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0" }}>
              <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "999px", background: "var(--pubg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "19px", fontWeight: "600", color: "var(--tx)" }}>
                MD
              </span>
              <div style={{ flex: "1 1 0", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  M. Dadaxanov
                </div>
                <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                  O'qituvchi · amaliy mashg'ulot
                </div>
              </div>
              <A href="#" aria-label="M. Dadaxanov ga savol berish" title="Savol berish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"></path>
                </svg>
              </A>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Guruhga berilgan kurslar
              </h2>
            </div>
            <A href="/education/course" style={{ display: "block", fontSize: "14px", fontWeight: "500" }}>
              Matematik modellashtirish
            </A>
            <div style={{ fontSize: "12px", color: "var(--mu)", margin: "2px 0 8px" }}>
              MM15609 · 59 mavzu
            </div>
            <div role="img" aria-label="Guruh progressi 34 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px" }}>
              <div style={{ width: "34%", height: "6px", background: "var(--ok)", borderRadius: "999px" }}></div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Guruh e'lonlari
              </h2>
            </div>
            <div style={{ padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "13px", lineHeight: "1.5" }}>
              Juma kuni 15:00 da guruh musobaqasi: 3 ta masala, 2 soat.
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                Sh. Boltibayev · bugun
              </div>
            </div>
            <div style={{ padding: "8px 0", borderTop: "1px solid var(--bd)", fontSize: "13px", lineHeight: "1.5" }}>
              A9 amaliy ish muddati 24-noyabrgacha uzaytirildi.
              <div style={{ fontSize: "12px", color: "var(--mu)" }}>
                M. Dadaxanov · kecha
              </div>
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}
