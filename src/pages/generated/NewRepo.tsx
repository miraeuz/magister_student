/* Generated from the approved student design (page: Hub: yangi repozitoriya). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function NewRepo() {
  const v = useShellVals();
  return (
    <Shell layer="hub" subTitle="HUB" subActive="mine" subItems={[["Kashf qilish", "search", "/hub", "explore", ""], ["Mening repozitoriyalarim", "repo", "/hub/mine", "mine", "6"], ["Maqolalarim", "pen", "/hub/repo/article", "articles", ""], ["Yulduzcha qo'yganlarim", "star", "/hub", "stars", ""], ["Takliflar", "merge", "/hub/repo/suggestions", "sugg", "1"], ["Guruhim ishlari", "users", "/hub/group-works", "group", ""]]} crumbs={[["Hub", "/hub"], ["Mening repozitoriyalarim", "/hub/mine"], ["Yangi", "/hub/new"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
              Yangi repozitoriya
            </h1>
            <div style={{ fontSize: "14px", color: "var(--mu)", marginTop: "4px" }}>
              Repozitoriya ishingizning barcha fayllari, versiyalari va muhokamalarini bir joyda saqlaydi.
            </div>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Asosiy ma'lumot
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                  Egasi
                  <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", minWidth: "180px" }}>
                    <option>
                      jahongirxon
                    </option>
                  </select>
                </label>
                <span style={{ fontSize: "22px", color: "var(--mu)", paddingBottom: "8px" }}>
                  /
                </span>
                <div style={{ flex: "999 1 260px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Nomi
                    <input type="text" defaultValue="" placeholder="masalan, sir-modeli-tahlili" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                    <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                      Kichik harflar, raqamlar va chiziqcha. Nom bo'shligi darhol tekshiriladi.
                    </span>
                  </label>
                </div>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                Tavsif
                <input type="text" defaultValue="" placeholder="Ish nima haqida ekanini bir jumlada yozing" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                  Ro'yxatda va qidiruvda ko'rinadi.
                </span>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                Teglar
                <input type="text" defaultValue="" placeholder="Python, ODE, Epidemiya" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                  Vergul bilan ajrating, ko'pi bilan 5 ta.
                </span>
              </label>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Ish turi
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div role="radiogroup" aria-label="Ish turi" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", gap: "10px", padding: "12px 14px", border: "2px solid var(--ac)", borderRadius: "8px", background: "var(--acbg)", cursor: "pointer" }}>
                  <input type="radio" name="kind" defaultChecked={true} style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--ac)" }} />
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 8l-5 4 5 4"></path>
                        <path d="M16 8l5 4-5 4"></path>
                        <path d="M13 5l-2 14"></path>
                      </svg>
                      Kod va model
                    </span>
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "400", color: "var(--mu)", marginTop: "2px", lineHeight: "1.45" }}>
                      Fayllar, kod, notebook, ma'lumotlar. Versiyalar va variantlar bilan.
                    </span>
                  </span>
                </label>
                <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", gap: "10px", padding: "12px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", cursor: "pointer" }}>
                  <input type="radio" name="kind" style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--ac)" }} />
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 20l4-1 11-11-3-3L5 16z"></path>
                        <path d="M14 6l3 3"></path>
                      </svg>
                      Maqola
                    </span>
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "400", color: "var(--mu)", marginTop: "2px", lineHeight: "1.45" }}>
                      Boy matn: formula, rasm, kod va video bilan qisqa yoki katta maqola.
                    </span>
                  </span>
                </label>
                <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", gap: "10px", padding: "12px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", cursor: "pointer" }}>
                  <input type="radio" name="kind" style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--ac)" }} />
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="6" width="13" height="12" rx="2" />
                        <path d="M16 10l5-3v10l-5-3z"></path>
                      </svg>
                      Audio / video
                    </span>
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "400", color: "var(--mu)", marginTop: "2px", lineHeight: "1.45" }}>
                      Tushuntirish videosi, ma'ruza yozuvi yoki audio.
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Ko'rinish
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div role="radiogroup" aria-label="Ko'rinish" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", gap: "10px", padding: "12px 14px", border: "2px solid var(--ac)", borderRadius: "8px", background: "var(--acbg)", cursor: "pointer" }}>
                  <input type="radio" name="vis" defaultChecked={true} style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--ac)" }} />
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Ochiq
                    </span>
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "400", color: "var(--mu)", marginTop: "2px", lineHeight: "1.45" }}>
                      Hamma ko'radi, izoh yozadi va testdan o'tib yulduzcha qo'yadi.
                    </span>
                  </span>
                </label>
                <label style={{ flex: "1 1 200px", minWidth: "0", display: "flex", gap: "10px", padding: "12px 14px", border: "1px solid var(--bd)", borderRadius: "8px", background: "var(--sf)", cursor: "pointer" }}>
                  <input type="radio" name="vis" style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--ac)" }} />
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Yopiq
                    </span>
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "400", color: "var(--mu)", marginTop: "2px", lineHeight: "1.45" }}>
                      Faqat siz va guruh o'qituvchisi. Topshiriq va qoralamalar uchun.
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Bog'lanishlar
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ flex: "1 1 280px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Bog'langan mavzu (ixtiyoriy)
                    <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }}>
                      <option>
                        Tanlanmagan
                      </option>
                      <option>
                        6.2. Ferxyulst-Perl (logistik) modeli
                      </option>
                      <option>
                        9.3. SIR modeli va tarqalish soni
                      </option>
                      <option>
                        14.4. Runge-Kutta usuli
                      </option>
                    </select>
                    <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                      Mavzu sahifasida ham ko'rinadi.
                    </span>
                  </label>
                </div>
                <div style={{ flex: "1 1 280px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Topshiriq sifatida (ixtiyoriy)
                    <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }}>
                      <option>
                        Topshiriq emas
                      </option>
                      <option>
                        6.2 loyiha ishi
                      </option>
                      <option>
                        A9 amaliy ish
                      </option>
                      <option>
                        Kurs ishi
                      </option>
                    </select>
                    <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                      Tanlasangiz, o'qituvchi mezon bo'yicha baholaydi.
                    </span>
                  </label>
                </div>
              </div>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px", fontSize: "14px", fontWeight: "400" }}>
                <input type="checkbox" defaultChecked={true} style={{ width: "18px", height: "18px", accentColor: "var(--ac)" }} />
                README.md faylini qo'shish (ish haqida qisqa tushuntirish)
              </label>
            </div>
          </section>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
            <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
              Repozitoriya yaratish
            </A>
            <A href="/hub/mine" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
              Bekor qilish
            </A>
            <span style={{ fontSize: "12px", color: "var(--mu)" }}>
              Birinchi faylni yuklaganingizda +200 XP (fayl kamida 100 bayt va platformada yangi bo'lsa).
            </span>
          </div>
        </div>
        <aside aria-label="Hub o'ng menyusi" style={{ flex: "1 1 272px", maxWidth: "372px", minWidth: "0" }}>
          <div style={{ paddingBottom: "16px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "600" }}>
              Yaxshi repozitoriya
            </h2>
            <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.5", padding: "5px 0" }}>
              <span style={{ display: "flex", color: "var(--ok)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              <span>
                README da masala, model va natija qisqa yozilgan
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.5", padding: "5px 0" }}>
              <span style={{ display: "flex", color: "var(--ok)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              <span>
                Model tenglamalari formulada berilgan
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.5", padding: "5px 0" }}>
              <span style={{ display: "flex", color: "var(--ok)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              <span>
                Kod ishga tushadi va natijani qayta olish mumkin
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "13px", lineHeight: "1.5", padding: "5px 0" }}>
              <span style={{ display: "flex", color: "var(--ok)", marginTop: "2px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </span>
              <span>
                Ma'lumot manbasi ko'rsatilgan
              </span>
            </div>
          </div>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Yulduzcha qanday olinadi
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
              Ochiq ish uchun guruhingiz o'qituvchisi kamida 5 ta savol yozadi. Shundan keyin o'quvchilar testdan o'tib yulduzcha qo'ya oladi.
            </p>
          </section>
          <section style={{ padding: "16px 0", borderTop: "1px solid var(--bd)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h2 style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}>
                Fayl cheklovlari
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4"></path>
              </svg>
              <span>
                Bitta fayl: 10 MB gacha
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="13" height="12" rx="2" />
                <path d="M16 10l5-3v10l-5-3z"></path>
              </svg>
              <span>
                Audio va video: Media bo'limida
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minHeight: "30px", fontSize: "13px", color: "var(--mu)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
              </svg>
              <span>
                Parol va kalitlarni yuklamang
              </span>
            </div>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
