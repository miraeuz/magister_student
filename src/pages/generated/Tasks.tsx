/* Generated from the approved student design (page: Ta'lim: topshiriqlar ro'yxati). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Tasks() {
  const v = useShellVals();
  return (
    <Shell layer="edu" subTitle="TA'LIM" subActive="tasks" subItems={[["Umumiy ko'rinish", "chart", "/education", "home", ""], ["Kurslarim", "book", "/education/course", "course", ""], ["Topshiriqlar", "list", "/education/tasks", "tasks", "3"], ["Natijalarim", "check", "/education/results", "results", ""], ["Materiallar", "file", "/education/materials", "files", ""], ["Guruhim", "users", "/education/group", "group", ""]]} crumbs={[["Ta'lim", "/education"], ["Topshiriqlar", "/education/tasks"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
        <div>
          <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
            Topshiriqlar
          </h1>
          <div style={{ fontSize: "14px", color: "var(--mu)", marginTop: "4px" }}>
            O'qituvchi guruhingizga bergan uy vazifalari, testlar, imtihonlar, amaliy ishlar va masalalar.
          </div>
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mu)" }}>
          Tur
          <select aria-label="Topshiriq turi" style={{ height: "40px", padding: "0 10px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "13px" }}>
            <option>
              Barchasi
            </option>
            <option>
              Uy vazifasi
            </option>
            <option>
              Test
            </option>
            <option>
              Imtihon
            </option>
            <option>
              Amaliy ish
            </option>
            <option>
              Masala
            </option>
          </select>
        </label>
      </div>
      <nav aria-label="Holat bo'yicha" style={{ display: "flex", flexWrap: "wrap", gap: "0 24px", borderBottom: "1px solid var(--bd)" }}>
        <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "600", color: "var(--tx)", borderBottom: "2px solid var(--ac)" }}>
          Kutilmoqda
          <span style={{ fontSize: "12px", padding: "1px 8px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
            3
          </span>
        </A>
        <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
          Tekshiruvda
          <span style={{ fontSize: "12px", padding: "1px 8px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
            2
          </span>
        </A>
        <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
          Baholangan
          <span style={{ fontSize: "12px", padding: "1px 8px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
            9
          </span>
        </A>
        <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 4px", fontSize: "14px", fontWeight: "400", color: "var(--tx)", borderBottom: "2px solid transparent" }}>
          Muddati o'tgan
          <span style={{ fontSize: "12px", padding: "1px 8px", borderRadius: "999px", background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--mu)" }}>
            1
          </span>
        </A>
      </nav>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Tur
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Topshiriq
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Muddat
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Urinish
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  XP
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Holat
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "right", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ac)", background: "var(--acbg)", whiteSpace: "nowrap" }}>
                    Uy vazifasi
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", minWidth: "240px" }}>
                  <A href="/education/assignment" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Logistik model: 10 ta savol
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    6.2-mavzu · 30 daqiqa
                  </div>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--bad)", background: "var(--badbg)", whiteSpace: "nowrap" }}>
                    Bugun 20:00
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  0 / 1
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  60 gacha
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "500", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Boshlanmagan
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", textAlign: "right" }}>
                  <A href="/education/assignment" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Boshlash
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--pu)", background: "var(--pubg)", whiteSpace: "nowrap" }}>
                    Masala
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", minWidth: "240px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Populyatsiya o'sishi (modellashtirish)
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    Challenges · o'z modelingiz va kodi
                  </div>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                    18-noyabr
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  cheklanmagan
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  400 gacha
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "500", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Boshlanmagan
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", textAlign: "right" }}>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Ochish
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--ok)", background: "var(--okbg)", whiteSpace: "nowrap" }}>
                    Test
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", minWidth: "240px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    Demografik modellar: oraliq test
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    6-paragraf · 20 savol · 40 daqiqa
                  </div>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    21-noyabr
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  0 / 2
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  100 gacha
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "500", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  Hali ochilmagan
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", textAlign: "right" }}>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Ko'rish
                  </A>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <h2 style={{ margin: "8px 0 0", fontSize: "16px", fontWeight: "600" }}>
        Tekshiruvda
      </h2>
      <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Tur
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Topshiriq
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Topshirilgan
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Urinish
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  XP
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                  Holat
                </th>
                <th scope="col" style={{ padding: "10px 16px", textAlign: "right", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--warn)", background: "var(--warnbg)", whiteSpace: "nowrap" }}>
                    Amaliy ish
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", minWidth: "240px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    A9: Demografik modellarga doir masalalar
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    Fayl: a9_yechim.pdf · mezon bo'yicha baholanadi
                  </div>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    14-noyabr
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  1 / 1
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  200 gacha
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "500", color: "var(--warn)", whiteSpace: "nowrap" }}>
                  O'qituvchi tekshirmoqda
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", textAlign: "right" }}>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Ko'rish
                  </A>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--bad)", background: "var(--badbg)", whiteSpace: "nowrap" }}>
                    Imtihon
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", minWidth: "240px" }}>
                  <A href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                    1-oraliq nazorat
                  </A>
                  <div style={{ fontSize: "12px", color: "var(--mu)", marginTop: "2px" }}>
                    1-5-paragraflar · yozma savol o'qituvchi tomonidan baholanadi
                  </div>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", whiteSpace: "nowrap" }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    10-noyabr
                  </span>
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", color: "var(--mu)", whiteSpace: "nowrap" }}>
                  1 / 1
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", whiteSpace: "nowrap" }}>
                  -
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", fontSize: "13px", fontWeight: "500", color: "var(--warn)", whiteSpace: "nowrap" }}>
                  1 ta savol tekshirilmoqda
                </td>
                <td style={{ padding: "12px 16px", borderTop: "1px solid var(--bd)", textAlign: "right" }}>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "var(--tx)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                    Ko'rish
                  </A>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
        Imtihonni qayta topshirish faqat o'qituvchi ruxsati bilan. Muddatdan 60 soniyadan ko'p kechikkan javob hisobga olinmaydi.
      </div>
    </Shell>
  );
}
