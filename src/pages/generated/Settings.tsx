/* Generated from the approved student design (page: Sozlamalar). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { B, Switch } from "../../components/B";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";

export default function Settings() {
  const v = useShellVals();
  return (
    <Shell layer="settings" subTitle="" subActive="" subItems={[]} crumbs={[["Sozlamalar", "/settings"]]} maxW={1560}>
      <div>
        <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
          Sozlamalar
        </h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <nav aria-label="Sozlamalar bo'limlari" style={{ flex: "1 1 200px", maxWidth: "250px", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
          <A href="#" style={{ minHeight: "40px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: "var(--ac)", background: "var(--acbg)", fontWeight: "600" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0"></path>
            </svg>
            Profil
          </A>
          <A href="#" style={{ minHeight: "40px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="15" r="4" />
              <path d="M11 12l9-9"></path>
              <path d="M16 7l3 3"></path>
            </svg>
            Hisob va xavfsizlik
          </A>
          <A href="#" style={{ minHeight: "40px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"></path>
              <path d="M10 20a2 2 0 0 0 4 0"></path>
            </svg>
            Bildirishnomalar
          </A>
          <A href="#" style={{ minHeight: "40px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="M5 5l1.5 1.5"></path>
              <path d="M17.5 17.5L19 19"></path>
              <path d="M19 5l-1.5 1.5"></path>
              <path d="M6.5 17.5L5 19"></path>
            </svg>
            Ko'rinish
          </A>
          <A href="#" style={{ minHeight: "40px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
              <circle cx="12" cy="12" r="3" />
            </svg>
            Maxfiylik
          </A>
          <A href="#" style={{ minHeight: "40px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18"></path>
              <path d="M12 3a14 14 0 0 1 0 18"></path>
              <path d="M12 3a14 14 0 0 0 0 18"></path>
            </svg>
            Til va hudud
          </A>
          <A href="#" style={{ minHeight: "40px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: "var(--tx)", background: "transparent", fontWeight: "400" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v6"></path>
              <path d="M12 16.5h.01"></path>
            </svg>
            Xavfli amallar
          </A>
        </nav>
        <div style={{ flex: "999 1 560px", minWidth: "0", maxWidth: "1040px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Profil
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "96px", height: "96px", borderRadius: "999px", background: "var(--av)", border: "1px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>
                    JM
                  </div>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 16V5"></path>
                      <path d="M7 9l5-5 5 5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                    Rasm yuklash
                  </A>
                  <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                    5 MB gacha
                  </span>
                </div>
                <div style={{ flex: "999 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                    <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                        Ko'rinadigan ism
                        <input type="text" defaultValue="Jahongirxon Muhammadiev" placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                      </label>
                    </div>
                    <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                        Foydalanuvchi nomi
                        <input type="text" defaultValue="jahongirxon" placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                        <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                          Bo'shligi darhol tekshiriladi.
                        </span>
                      </label>
                    </div>
                  </div>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    O'zim haqimda
                    <textarea defaultValue={"Amaliy matematika, 3-kurs. Differensial tenglamalar va sonli usullarga qiziqaman."} rows={2} style={{ boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", resize: "vertical" }} />
                    <span style={{ fontSize: "12px", fontWeight: "400", color: "var(--mu)" }}>
                      106 / 200 belgi
                    </span>
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                    <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                        Telegram
                        <input type="text" defaultValue="@jahongirxon" placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                      </label>
                    </div>
                    <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                        GitHub
                        <input type="text" defaultValue="jahongirxon" placeholder="" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                      </label>
                    </div>
                    <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                        ORCID
                        <input type="text" defaultValue="" placeholder="0000-0000-0000-0000" style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "12px 14px", background: "var(--bg)", border: "1px solid var(--bd)", borderRadius: "6px", fontSize: "13px", lineHeight: "1.55", color: "var(--mu)" }}>
                Universitet, fakultet, yo'nalish va guruh (
                <strong style={{ color: "var(--tx)" }}>
                  NamDU · AM-301
                </strong>
                ) universitet tomonidan belgilanadi. Xato bo'lsa, o'quv bo'limiga murojaat qiling.
              </div>
              <div>
                <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--okbtn)", color: "#ffffff", border: "1px solid var(--okbtn)" }}>
                  O'zgarishlarni saqlash
                </A>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Hisob va xavfsizlik
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ marginTop: "-12px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Elektron pochta
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      j***@gmail.com · tasdiqlangan
                    </div>
                  </div>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    O'zgartirish
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Parol
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Oxirgi marta 3 oy oldin o'zgartirilgan
                    </div>
                  </div>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="15" r="4" />
                      <path d="M11 12l9-9"></path>
                      <path d="M16 7l3 3"></path>
                    </svg>
                    Parolni o'zgartirish
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Ikki bosqichli kirish
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Kirishda telefoningizdagi ilovadan kod so'raladi
                    </div>
                  </div>
                  <Switch role="switch" aria-checked="false" aria-label="Ikki bosqichli kirish" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--bg)", position: "relative", padding: "0" }}>
                    <span style={{ position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                  </Switch>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Ulangan hisoblar
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Google: ulangan · GitHub: ulanmagan
                    </div>
                  </div>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    Boshqarish
                  </A>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Faol seanslar
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Bu qurilma va yana 1 ta qurilma
                    </div>
                  </div>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    Boshqa qurilmalardan chiqish
                  </A>
                </div>
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
              <div>
                <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>
                  Mavzu
                </div>
                <div style={{ display: "flex", gap: "8px", maxWidth: "420px" }}>
                  <button aria-pressed={v.isLight} onClick={v.setLight} style={{ flex: "1 1 0", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="M5 5l1.5 1.5"></path>
                      <path d="M17.5 17.5L19 19"></path>
                      <path d="M19 5l-1.5 1.5"></path>
                      <path d="M6.5 17.5L5 19"></path>
                    </svg>
                    Yorug'
                  </button>
                  <button aria-pressed={v.isDark} onClick={v.setDark} style={{ flex: "1 1 0", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"></path>
                    </svg>
                    Qorong'i
                  </button>
                  <button aria-pressed={v.isSystem} onClick={v.setSystem} style={{ flex: "1 1 0", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M8 20h8"></path>
                      <path d="M12 16v4"></path>
                    </svg>
                    Tizim
                  </button>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>
                  Asosiy rang
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button aria-label="Ko'k rang" title="Ko'k" aria-pressed={v.isBlue} onClick={v.setBlue} style={{ width: "40px", height: "40px", border: "2px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "999px", background: "#0b5fd6" }}></span>
                  </button>
                  <button aria-label="Yashil rang" title="Yashil" aria-pressed={v.isGreen} onClick={v.setGreen} style={{ width: "40px", height: "40px", border: "2px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "999px", background: "#1a7f37" }}></span>
                  </button>
                  <button aria-label="Binafsha rang" title="Binafsha" aria-pressed={v.isPurple} onClick={v.setPurple} style={{ width: "40px", height: "40px", border: "2px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "999px", background: "#6639ba" }}></span>
                  </button>
                  <button aria-label="To'q sariq rang" title="To'q sariq" aria-pressed={v.isOrange} onClick={v.setOrange} style={{ width: "40px", height: "40px", border: "2px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "999px", background: "#a04a00" }}></span>
                  </button>
                </div>
              </div>
              <div style={{ marginTop: "-4px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Kod muharriri mavzusi
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Kod maydoni va fayl ko'rinishi uchun
                    </div>
                  </div>
                  <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", minWidth: "200px" }}>
                    <option>
                      Qorong'i
                    </option>
                    <option>
                      Yorug'
                    </option>
                    <option>
                      Sayt mavzusiga mos
                    </option>
                  </select>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Kod shrifti o'lchami
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      12 dan 18 gacha
                    </div>
                  </div>
                  <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", minWidth: "120px" }}>
                    <option>
                      13 px
                    </option>
                    <option>
                      14 px
                    </option>
                    <option>
                      16 px
                    </option>
                  </select>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Animatsiyalarni kamaytirish
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Harakatli effektlar o'chiriladi
                    </div>
                  </div>
                  <Switch role="switch" aria-checked="false" aria-label="Animatsiyalarni kamaytirish" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--bg)", position: "relative", padding: "0" }}>
                    <span style={{ position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                  </Switch>
                </div>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Bildirishnomalar
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}>
                Tinch soatlar: 22:00 – 07:00
              </span>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Hodisa
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "center", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Saytda
                    </th>
                    <th scope="col" style={{ padding: "10px 16px", textAlign: "center", fontSize: "12px", fontWeight: "600", color: "var(--mu)", background: "var(--bg)", whiteSpace: "nowrap" }}>
                      Pochta
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", verticalAlign: "top", minWidth: "240px", fontSize: "14px" }}>
                      Yangi topshiriq va muddat eslatmasi
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Yangi topshiriq va muddat eslatmasi: saytda" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Yangi topshiriq va muddat eslatmasi: pochta" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", verticalAlign: "top", minWidth: "240px", fontSize: "14px" }}>
                      Topshiriq baholandi
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Topshiriq baholandi: saytda" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Topshiriq baholandi: pochta" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", verticalAlign: "top", minWidth: "240px", fontSize: "14px" }}>
                      Savolimga javob keldi
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Savolimga javob keldi: saytda" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="false" aria-label="Savolimga javob keldi: pochta" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--bg)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", verticalAlign: "top", minWidth: "240px", fontSize: "14px" }}>
                      Repozitoriyam yulduzcha oldi
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Repozitoriyam yulduzcha oldi: saytda" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="false" aria-label="Repozitoriyam yulduzcha oldi: pochta" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--bg)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", verticalAlign: "top", minWidth: "240px", fontSize: "14px" }}>
                      Guruh chatidagi xabarlar
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Guruh chatidagi xabarlar: saytda" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="false" aria-label="Guruh chatidagi xabarlar: pochta" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--bg)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", verticalAlign: "top", minWidth: "240px", fontSize: "14px" }}>
                      Faollik uzilishi haqida ogohlantirish (20:00)
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="true" aria-label="Faollik uzilishi haqida ogohlantirish (20:00): saytda" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                    <td style={{ padding: "12px 14px", borderTop: "1px solid var(--bd)", fontSize: "13px", verticalAlign: "top", textAlign: "center" }}>
                      <Switch role="switch" aria-checked="false" aria-label="Faollik uzilishi haqida ogohlantirish (20:00): pochta" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--bg)", position: "relative", padding: "0" }}>
                        <span style={{ position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                      </Switch>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Maxfiylik
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ marginTop: "-12px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Profil ko'rinishi
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Profilingizni kim ko'ra oladi
                    </div>
                  </div>
                  <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400", minWidth: "200px" }}>
                    <option>
                      Hamma
                    </option>
                    <option>
                      Faqat universitetim
                    </option>
                    <option>
                      Faqat guruhim
                    </option>
                  </select>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Faollikni ko'rsatish
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      XP, faollik va reytingdagi o'rningiz boshqalarga ko'rinadi
                    </div>
                  </div>
                  <Switch role="switch" aria-checked="true" aria-label="Faollikni ko'rsatish" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                    <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                  </Switch>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Universitet ma'lumotlarini ko'rsatish
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Universitet va guruh profilda ko'rinadi
                    </div>
                  </div>
                  <Switch role="switch" aria-checked="true" aria-label="Universitet ma'lumotlari" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--acbtn)", background: "var(--acbtn)", position: "relative", padding: "0" }}>
                    <span style={{ position: "absolute", top: "2px", left: "20px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                  </Switch>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Pochtani ko'rsatish
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Elektron pochta profilda ko'rinadi
                    </div>
                  </div>
                  <Switch role="switch" aria-checked="false" aria-label="Pochtani ko'rsatish" style={{ flex: "none", width: "44px", height: "26px", borderRadius: "999px", border: "1px solid var(--bd)", background: "var(--bg)", position: "relative", padding: "0" }}>
                    <span style={{ position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", borderRadius: "999px", background: "#ffffff", border: "1px solid var(--bd)" }}></span>
                  </Switch>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
                  <div style={{ flex: "999 1 280px", minWidth: "0" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      Ma'lumotlarimni yuklab olish
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                      Barcha ma'lumotlaringiz bitta faylda
                    </div>
                  </div>
                  <A href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "40px", padding: "0 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", background: "var(--sf)", color: "var(--tx)", border: "1px solid var(--bd)" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 11l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                    So'rov yuborish
                  </A>
                </div>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600" }}>
                Til va hudud
              </h2>
              <span style={{ fontSize: "12px", color: "var(--mu)" }}></span>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <div style={{ flex: "1 1 200px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Interfeys tili
                    <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }}>
                      <option>
                        O'zbek
                      </option>
                      <option>
                        English
                      </option>
                      <option>
                        Русский
                      </option>
                    </select>
                  </label>
                </div>
                <div style={{ flex: "1 1 200px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Sana ko'rinishi
                    <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }}>
                      <option>
                        16.11.2026
                      </option>
                      <option>
                        2026-11-16
                      </option>
                      <option>
                        11/16/2026
                      </option>
                    </select>
                  </label>
                </div>
                <div style={{ flex: "1 1 200px", minWidth: "0" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                    Vaqt mintaqasi
                    <select style={{ height: "44px", boxSizing: "border-box", padding: "0 12px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--sf)", color: "var(--tx)", font: "inherit", fontSize: "14px", fontWeight: "400" }}>
                      <option>
                        Toshkent (UTC+5)
                      </option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bad)", borderRadius: "8px", padding: "4px 16px 8px" }}>
            <h2 style={{ margin: "12px 0 4px", fontSize: "15px", fontWeight: "600", color: "var(--bad)" }}>
              Xavfli amallar
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid var(--bd)" }}>
              <div style={{ flex: "999 1 300px", minWidth: "0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  Hisobni o'chirish
                </div>
                <div style={{ fontSize: "13px", color: "var(--mu)", lineHeight: "1.5" }}>
                  Hisob 30 kun davomida tiklanishi mumkin, keyin butunlay o'chadi.
                </div>
              </div>
              <B style={{ minHeight: "40px", padding: "0 14px", border: "1px solid var(--bad)", borderRadius: "6px", background: "var(--sf)", color: "var(--bad)", fontSize: "13px", fontWeight: "600" }}>
                Hisobni o'chirish
              </B>
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}
