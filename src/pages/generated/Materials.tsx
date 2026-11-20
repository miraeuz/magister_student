/* Generated from the approved student design (page: Ta'lim: materiallar). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Materials() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="files" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Materiallar", "/education/materials"]]} maxW={1560}>
      <div>
        <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
          Materiallar
        </h1>
        <div style={{ fontSize: "14px", color: "var(--mu)", marginTop: "4px" }}>
          Kursdagi barcha videolar, slaydlar, fayllar va ma'lumotlar to'plamlari bir joyda.
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <label style={{ flex: "999 1 240px", display: "flex", alignItems: "center", gap: "8px", height: "40px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--mu)" }}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5"></path>
          </svg>
          <input type="search" placeholder="Material qidirish" aria-label="Material qidirish" style={{ flex: "1 1 0", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "14px", color: "var(--tx)" }} />
        </label>
        <select aria-label="Tur" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
          <option>
            Tur: barchasi
          </option>
          <option>
            Video
          </option>
          <option>
            Slayd
          </option>
          <option>
            Fayl
          </option>
          <option>
            Ma'lumotlar
          </option>
        </select>
        <select aria-label="Paragraf" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
          <option>
            Paragraf: barchasi
          </option>
          <option>
            5. Chiziqli dasturlash
          </option>
          <option>
            6. Demografik modellar
          </option>
        </select>
        <select aria-label="Holat" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
          <option>
            Holat: barchasi
          </option>
          <option>
            Ko'rilmagan
          </option>
          <option>
            Majburiy
          </option>
        </select>
      </div>
      <h2 style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: "600" }}>
        Yaqinda ochilganlar
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <A href="#" style={{ flex: "1 1 220px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ height: "110px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="6" width="13" height="12" rx="2" />
              <path d="M16 10l5-3v10l-5-3z"></path>
            </svg>
          </div>
          <div style={{ padding: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--mu)" }}>
              VIDEO · 12 daqiqa
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500", margin: "2px 0" }}>
              Logistik model: ma'ruza qismi
            </div>
            <div style={{ fontSize: "12px", color: "var(--mu)" }}>
              6.2-mavzu · kecha
            </div>
          </div>
        </A>
        <A href="#" style={{ flex: "1 1 220px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ height: "110px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <path d="M12 16v4"></path>
              <path d="M8 20h8"></path>
            </svg>
          </div>
          <div style={{ padding: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--mu)" }}>
              SLAYD · 18 ta
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500", margin: "2px 0" }}>
              M6. Demografik modellar
            </div>
            <div style={{ fontSize: "12px", color: "var(--mu)" }}>
              6-paragraf · kecha
            </div>
          </div>
        </A>
        <A href="#" style={{ flex: "1 1 220px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ height: "110px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h8l4 4v14H6z"></path>
              <path d="M14 3v4h4"></path>
            </svg>
          </div>
          <div style={{ padding: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--mu)" }}>
              MA'LUMOTLAR · CSV
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500", margin: "2px 0" }}>
              aholi_1990_2025.csv
            </div>
            <div style={{ fontSize: "12px", color: "var(--mu)" }}>
              6.4-mavzu · 3 kun oldin
            </div>
          </div>
        </A>
        <A href="#" style={{ flex: "1 1 220px", minWidth: "0", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden", background: "var(--sf)", color: "var(--tx)" }}>
          <div style={{ height: "110px", background: "var(--bg)", borderBottom: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)" }}>
            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <path d="M12 16v4"></path>
              <path d="M8 20h8"></path>
            </svg>
          </div>
          <div style={{ padding: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--mu)" }}>
              SLAYD · 24 ta
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500", margin: "2px 0" }}>
              M5. Chiziqli dasturlash
            </div>
            <div style={{ fontSize: "12px", color: "var(--mu)" }}>
              5-paragraf · 1 hafta oldin
            </div>
          </div>
        </A>
      </div>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ padding: "12px 16px", fontSize: "14px", fontWeight: "600" }}>
          6-paragraf. Demografik modellar
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Tur
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Nomi
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Mavzu
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Hajmi
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Holat
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="13" height="12" rx="2" />
                      <path d="M16 10l5-3v10l-5-3z"></path>
                    </svg>
                    Video
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Maltus modeli: ma'ruza qismi
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  6.1
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  10 daqiqa
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Ko'rilgan
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="Maltus modeli: ma'ruza qismi: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="13" height="12" rx="2" />
                      <path d="M16 10l5-3v10l-5-3z"></path>
                    </svg>
                    Video
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Logistik model: ma'ruza qismi
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  6.2
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  12 daqiqa
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Ko'rilgan
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="Logistik model: ma'ruza qismi: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M12 16v4"></path>
                      <path d="M8 20h8"></path>
                    </svg>
                    Slayd
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    M6. Demografik modellar
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  6.1-6.4
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  18 slayd · PDF
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Ko'rilgan
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="M6. Demografik modellar: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="13" height="12" rx="2" />
                      <path d="M16 10l5-3v10l-5-3z"></path>
                    </svg>
                    Video
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Uch rejim: baliq ovlash misoli
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  6.3
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  9 daqiqa
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--bad)", background: "var(--badbg)", whiteSpace: "nowrap" }}>
                    Majburiy
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="Uch rejim: baliq ovlash misoli: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h8l4 4v14H6z"></path>
                      <path d="M14 3v4h4"></path>
                    </svg>
                    Ma'lumotlar
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    aholi_1990_2025.csv
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  6.4
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  36 qator · 2 KB
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Ko'rilgan
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="aholi_1990_2025.csv: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h8l4 4v14H6z"></path>
                      <path d="M14 3v4h4"></path>
                    </svg>
                    Fayl
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    A9 amaliy mashg'ulot masalalari
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  6.1-6.2
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  PDF · 4 bet
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Yangi
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="A9 amaliy mashg'ulot masalalari: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ padding: "12px 16px", fontSize: "14px", fontWeight: "600" }}>
          5-paragraf. Chiziqli dasturlash masalalari
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Tur
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Nomi
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Mavzu
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Hajmi
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Holat
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M12 16v4"></path>
                      <path d="M8 20h8"></path>
                    </svg>
                    Slayd
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    M5. Chiziqli dasturlash
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  5.1-5.4
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  24 slayd · PDF
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Ko'rilgan
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="M5. Chiziqli dasturlash: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="13" height="12" rx="2" />
                      <path d="M16 10l5-3v10l-5-3z"></path>
                    </svg>
                    Video
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Transport masalasi: yechish namunasi
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  5.4
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  14 daqiqa
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Ko'rilgan
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="Transport masalasi: yechish namunasi: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--mu)" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h8l4 4v14H6z"></path>
                      <path d="M14 3v4h4"></path>
                    </svg>
                    Ma'lumotlar
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", minWidth: "260px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    transport_xarajatlari.csv
                  </A>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  5.4
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  12 qator · 1 KB
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Ko'rilgan
                  </span>
                </td>
                <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <A href="#" aria-label="transport_xarajatlari.csv: yuklab olish" title="Yuklab olish" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid var(--bd)", borderRadius: "6px", color: "var(--tx)", background: "var(--bg)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </A>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Shell>
  );
}
