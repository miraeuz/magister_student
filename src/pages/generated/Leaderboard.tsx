/* Generated from the approved student design (page: Reyting). Markup is 1:1 with the design; do not edit while the design lock is on. */
/* eslint-disable */
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { useShellVals } from "../../store/useShellVals";
import { useLeaderboardVals } from "../../vals/Leaderboard";

export default function Leaderboard() {
  const v = useLeaderboardVals();
  return (
    <Shell layer="rank" subTitle="" subActive="" subItems={[]} crumbs={[["Reyting", "/leaderboard"]]} maxW={1560}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h1 style={{ margin: "0", fontSize: "26px", fontWeight: "600" }}>
                Reyting
              </h1>
              <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--mu)" }}>
                XP bo'yicha. Davr: bu oy (1–16 noyabr).
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <button aria-pressed={v.lbGrp} onClick={v.setLbGrp} style={{ minHeight: "40px", padding: "0 16px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "600" }}>
              Guruhim
            </button>
            <button aria-pressed={v.lbUni} onClick={v.setLbUni} style={{ minHeight: "40px", padding: "0 16px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "600" }}>
              Universitetim
            </button>
            <button aria-pressed={v.lbGlob} onClick={v.setLbGlob} style={{ minHeight: "40px", padding: "0 16px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "600" }}>
              Hamma
            </button>
            <span style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              <button aria-pressed={v.pW} onClick={v.setPW} style={{ minHeight: "40px", padding: "0 16px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "600" }}>
                Hafta
              </button>
              <button aria-pressed={v.pM} onClick={v.setPM} style={{ minHeight: "40px", padding: "0 16px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "600" }}>
                Oy
              </button>
              <button aria-pressed={v.pA} onClick={v.setPA} style={{ minHeight: "40px", padding: "0 16px", border: "1px solid var(--bd)", borderRadius: "999px", background: "var(--sf)", color: "var(--tx)", fontSize: "13px", fontWeight: "600" }}>
                Hamma vaqt
              </button>
            </span>
          </div>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", overflow: "hidden" }}>
            {v.lbGrp && (
              <>
                <div style={{ display: "flex", gap: "12px", padding: "10px 16px", fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
                  <span style={{ flex: "0 0 30px" }}>
                    #
                  </span>
                  <span style={{ flex: "999 1 190px" }}>
                    Foydalanuvchi
                  </span>
                  <span style={{ flex: "0 0 76px", textAlign: "right" }}>
                    XP
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right" }}>
                    Yechgan
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right" }}>
                    Streak
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--warn)" }}>
                    1
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    DI
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Dilnoza K.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      9-daraja · Mutaxassis
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    1 920
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    31
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    21
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--mu)" }}>
                    2
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    AS
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Asilbek S.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      8-daraja · Tadqiqotchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    1 760
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    27
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    9
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "var(--acbg)", borderLeft: "3px solid var(--ac)" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--pu)" }}>
                    3
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    JA
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Jahongirxon (siz)
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      8-daraja · Tadqiqotchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    1 840
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    23
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    14
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--mu)" }}>
                    4
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    MA
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Madina R.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      7-daraja · Muhandis
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    1 210
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    19
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    6
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--mu)" }}>
                    5
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    BE
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Bekzod T.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      6-daraja · Modellovchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    980
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    14
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    3
                  </span>
                </div>
              </>
            )}
            {v.lbUni && (
              <>
                <div style={{ display: "flex", gap: "12px", padding: "10px 16px", fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
                  <span style={{ flex: "0 0 30px" }}>
                    #
                  </span>
                  <span style={{ flex: "999 1 190px" }}>
                    Foydalanuvchi
                  </span>
                  <span style={{ flex: "0 0 76px", textAlign: "right" }}>
                    XP
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right" }}>
                    Yechgan
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right" }}>
                    Streak
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--warn)" }}>
                    1
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    NO
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Nodira K.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      13-daraja · Ustoz
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    6 420
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    88
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    33
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--mu)" }}>
                    2
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    OT
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Otabek T.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      12-daraja · Yo'lboshchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    5 980
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    81
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    27
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--pu)" }}>
                    3
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--okbg)", color: "var(--ok)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    ZA
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Zarina A.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      12-daraja · Yo'lboshchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    5 340
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    70
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    19
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "var(--acbg)", borderLeft: "3px solid var(--ac)" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--mu)" }}>
                    14
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    JA
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Jahongirxon (siz)
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      8-daraja · Tadqiqotchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    1 840
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    23
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    14
                  </span>
                </div>
              </>
            )}
            {v.lbGlob && (
              <>
                <div style={{ display: "flex", gap: "12px", padding: "10px 16px", fontSize: "12px", fontWeight: "600", color: "var(--mu)" }}>
                  <span style={{ flex: "0 0 30px" }}>
                    #
                  </span>
                  <span style={{ flex: "999 1 190px" }}>
                    Foydalanuvchi
                  </span>
                  <span style={{ flex: "0 0 76px", textAlign: "right" }}>
                    XP
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right" }}>
                    Yechgan
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right" }}>
                    Streak
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--warn)" }}>
                    1
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--badbg)", color: "var(--bad)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    FA
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Farrux R.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      14-daraja · Innovator
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    9 880
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    142
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    58
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--mu)" }}>
                    2
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--pubg)", color: "var(--pu)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    NO
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Nodira K.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      13-daraja · Ustoz
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    6 420
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    88
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    33
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "transparent", borderLeft: "3px solid transparent" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--pu)" }}>
                    3
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--acbg)", color: "var(--ac)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    OT
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Otabek T.
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      12-daraja · Yo'lboshchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    5 980
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    81
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    27
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 12px", minHeight: "52px", padding: "6px 16px", borderTop: "1px solid var(--bd)", background: "var(--acbg)", borderLeft: "3px solid var(--ac)" }}>
                  <span style={{ flex: "0 0 30px", fontSize: "15px", fontWeight: "600", color: "var(--mu)" }}>
                    212
                  </span>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "999px", background: "var(--warnbg)", color: "var(--warn)", border: "2px solid var(--sf)", boxShadow: "0 0 0 1px var(--bd)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600" }}>
                    JA
                  </span>
                  <A href="/profile" style={{ flex: "999 1 150px", minWidth: "0", color: "var(--tx)" }}>
                    <strong style={{ fontSize: "14px" }}>
                      Jahongirxon (siz)
                    </strong>
                    <span style={{ display: "block", fontSize: "12px", color: "var(--mu)" }}>
                      8-daraja · Tadqiqotchi
                    </span>
                  </A>
                  <span style={{ flex: "0 0 76px", textAlign: "right", fontSize: "14px", fontWeight: "600" }}>
                    1 840
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    23
                  </span>
                  <span style={{ flex: "0 0 56px", textAlign: "right", fontSize: "13px", color: "var(--mu)" }}>
                    14
                  </span>
                </div>
              </>
            )}
          </section>
          <div style={{ fontSize: "12px", color: "var(--mu)" }}>
            Namuna ma'lumot. Haqiqiy reytingni server hisoblaydi va har 5 daqiqada yangilaydi.
          </div>
        </div>
        <aside aria-label="Community yon paneli" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "600" }}>
              Mening o'rnim
            </h2>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ flex: "1 1 0", textAlign: "center", padding: "10px 4px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--bg)" }}>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  3
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)" }}>
                  guruhda
                </div>
              </div>
              <div style={{ flex: "1 1 0", textAlign: "center", padding: "10px 4px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--bg)" }}>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  14
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)" }}>
                  universitetda
                </div>
              </div>
              <div style={{ flex: "1 1 0", textAlign: "center", padding: "10px 4px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--bg)" }}>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  212
                </div>
                <div style={{ fontSize: "11px", color: "var(--mu)" }}>
                  hammada
                </div>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "var(--mu)", marginTop: "10px" }}>
              Guruhda 2-o'ringacha 80 XP.
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "16px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              Guruhlar reytingi
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "0 0 20px", fontWeight: "600", color: "var(--mu)" }}>
                1
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                AM-302
              </span>
              <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                38 400 XP
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "0 0 20px", fontWeight: "600", color: "var(--mu)" }}>
                2
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "600" }}>
                AM-301 (sizniki)
              </span>
              <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                36 120 XP
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "44px", borderTop: "1px solid var(--bd)" }}>
              <span style={{ flex: "0 0 20px", fontWeight: "600", color: "var(--mu)" }}>
                3
              </span>
              <span style={{ flex: "1 1 0", fontSize: "14px", fontWeight: "500" }}>
                MI-201
              </span>
              <span style={{ fontSize: "13px", color: "var(--mu)" }}>
                31 880 XP
              </span>
            </div>
          </section>
          <section style={{ background: "var(--sf)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "18px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: "600" }}>
              XP qanday hisoblanadi?
            </h2>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.6", color: "var(--mu)" }}>
              Dars, masala, amaliy ish va Community yordami XP beradi. Guruh musobaqalari XP bermaydi. Daraja: 8240 XP = 8-daraja.
            </p>
            <A href="/profile" style={{ display: "inline-block", marginTop: "8px", fontSize: "13px" }}>
              Profilimdagi nishonlar
            </A>
          </section>
        </aside>
      </div>
    </Shell>
  );
}
