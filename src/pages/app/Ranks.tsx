import { Shell } from "../../components/Shell";
import { Card, PageHead } from "../../components/ui";
import { Icon, type IconName } from "../../components/Icon";

const RANKS: [string, string, number][] = [
  ["Yangi boshlagan", "Novice", 0], ["Shogird", "Apprentice", 200], ["Talaba", "Student", 500], ["Olim shogirdi", "Scholar", 1000], ["Tahlilchi", "Analyst", 2000],
  ["Modellovchi", "Modeler", 3500], ["Muhandis", "Engineer", 5000], ["Tadqiqotchi", "Researcher", 7500], ["Mutaxassis", "Specialist", 10000], ["Katta mutaxassis", "Senior", 14000],
  ["Ekspert", "Expert", 19000], ["Yo'lboshchi", "Lead", 25000], ["Ustoz", "Mentor", 33000], ["Innovator", "Innovator", 43000], ["Arxitektor", "Architect", 55000],
  ["Olim", "Scientist", 70000], ["Professor", "Professor", 88000], ["Yorug' yulduz", "Luminary", 110000], ["Afsona", "Legend", 140000], ["Buyuk Ustoz", "Grand Master", 200000],
];
const XP_NOW = 8240;
const SOURCES: [string, string][] = [
  ["Dars tugatish (oddiy / murakkab)", "+50 / +150"], ["Dars testini to'liq yechish", "+100"], ["Mashq: birinchi urinishda to'g'ri", "+50"], ["Mashq: maslahat bilan", "+25"],
  ["Challenge: kyu 8–6 / 5–3 / 2–1", "+100…200 / +300…500 / +800…1500"], ["Hub: repozitoriya yuklash", "+200"], ["Hub: har bir yulduzcha", "+10"],
  ["Community: savol / javob", "+30 / +50"], ["Javob «eng yaxshi» tanlansa", "+150"], ["Haftalik musobaqa: 1 / 2 / 3-o'rin", "+1000 / +600 / +300"],
  ["Kunlik faollik (streak)", "+20 / kun"], ["7 kunlik / 30 kunlik streak bonusi", "+100 / +500"],
];
const BADGES: [IconName, string, string, boolean][] = [
  ["flame", "14 kunlik streak", "14 kun ketma-ket faol bo'ling", true], ["code", "Birinchi 10 masala", "10 ta challenge yeching", true],
  ["repo", "Hub muallifi", "Birinchi repozitoriyani yuklang", true], ["chat", "Foydali javob", "Javobingiz «eng yaxshi» deb tanlansin", true],
  ["trophy", "Musobaqa g'olibi", "Haftalik musobaqada 1–3-o'rin", false], ["star", "50 yulduzcha", "Repozitoriyalaringiz 50 yulduzcha olsin", false],
  ["users", "Mentor", "12-darajaga yeting va yangi talabaga yordam bering", false], ["bolt", "Kyu 1 masala", "Eng qiyin darajadagi masalani yeching", false],
];
const nf = (n: number) => n.toLocaleString("fr-FR").replace(/ | /g, " ");

export default function Ranks() {
  const cur = RANKS.reduce((a, r, i) => (XP_NOW >= r[2] ? i : a), 0);
  const next = RANKS[cur + 1]!;
  const pct = Math.round(((XP_NOW - RANKS[cur]![2]) / (next[2] - RANKS[cur]![2])) * 100);
  return (
    <Shell layer="ranks" subTitle="" subActive="" subItems={[]} crumbs={[["Daraja va XP", "/ranks"]]} maxW={1100}>
      <PageHead title="Daraja va XP" sub="Faolligingiz uchun ball (XP) olasiz. Ball yig'ilgan sari daraja oshadi." />
      <Card>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, border: "3px solid var(--ac)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 600 }}>{cur + 1}</div>
          <div style={{ flex: "1 1 260px", minWidth: 0 }}>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{cur + 1}-daraja · {RANKS[cur]![0]}</div>
            <div style={{ color: "var(--mu)", fontSize: 13.5 }}>{nf(XP_NOW)} XP · keyingi daraja «{next[0]}» uchun yana {nf(next[2] - XP_NOW)} XP</div>
            <div role="progressbar" aria-label="Keyingi darajagacha" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} style={{ height: 8, borderRadius: 999, background: "var(--h0)", marginTop: 10 }}>
              <div style={{ width: `${pct}%`, height: 8, borderRadius: 999, background: "var(--ac)" }} />
            </div>
          </div>
        </div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 16, alignItems: "start" }}>
        <Card title="20 daraja">
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            {RANKS.map((r, i) => (
              <li key={r[1]} aria-current={i === cur ? "true" : undefined} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 10px", borderTop: i ? "1px solid var(--bd)" : 0, background: i === cur ? "var(--acbg)" : "transparent", borderRadius: 6, opacity: i > cur ? 0.75 : 1 }}>
                <span style={{ flex: "none", width: 28, height: 28, borderRadius: 999, border: `2px solid ${i <= cur ? "var(--ac)" : "var(--bd)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600 }}>{i + 1}</span>
                <span style={{ flex: 1, minWidth: 0 }}><strong style={{ fontSize: 14 }}>{r[0]}</strong> <span style={{ color: "var(--mu)", fontSize: 12.5 }}>{r[1]}</span></span>
                <span style={{ fontSize: 12.5, color: "var(--mu)", whiteSpace: "nowrap" }}>{nf(r[2])}+ XP</span>
              </li>
            ))}
          </ol>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card title="XP qanday olinadi?">
            <dl style={{ margin: 0 }}>
              {SOURCES.map(([k, v], i) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "8px 0", borderTop: i ? "1px solid var(--bd)" : 0, fontSize: 13.5 }}>
                  <dt style={{ color: "var(--tx)" }}>{k}</dt><dd style={{ margin: 0, fontWeight: 600, textAlign: "right" }}>{v}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <Card title="Nishonlar" aside={<span style={{ fontSize: 12.5, color: "var(--mu)" }}>{BADGES.filter((b) => b[3]).length} / {BADGES.length}</span>}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 10 }}>
              {BADGES.map(([ic, t, how, got]) => (
                <li key={t} title={got ? "Olingan" : how} style={{ display: "flex", gap: 10, padding: 10, border: "1px solid var(--bd)", borderRadius: 8, opacity: got ? 1 : 0.6 }}>
                  <span style={{ flex: "none", width: 34, height: 34, borderRadius: 8, background: got ? "var(--acbg)" : "var(--h0)", color: got ? "var(--ac)" : "var(--mu)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic} size={17} /></span>
                  <span style={{ fontSize: 13 }}><strong>{t}</strong><br /><span style={{ color: "var(--mu)", fontSize: 12 }}>{got ? "Olingan" : how}</span></span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Shell>
  );
}
