import { useMemo, useState } from "react";
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { Card, PageHead } from "../../components/ui";

type Ev = { date: string; title: string; kind: "task" | "test" | "contest" | "lesson"; to: string; time?: string };
const EVENTS: Ev[] = [
  { date: "2026-11-22", title: "Lotka-Volterra: davr uzunligi", kind: "task", to: "/challenges/problem" },
  { date: "2026-11-24", title: "A9 amaliy ish topshirish", kind: "task", to: "/education/practical", time: "23:59" },
  { date: "2026-11-25", title: "6.3. Uch rejim: dars", kind: "lesson", to: "/education/lesson", time: "09:00" },
  { date: "2026-11-27", title: "Guruh musobaqasi", kind: "contest", to: "/challenges/contest", time: "15:00" },
  { date: "2026-11-29", title: "Logistik model: kurs ishi", kind: "task", to: "/challenges/modelling" },
  { date: "2026-12-02", title: "Demografik modellar: oraliq test", kind: "test", to: "/education/assignment", time: "10:00" },
  { date: "2026-12-10", title: "1-oraliq nazorat natijalari", kind: "test", to: "/education/results" },
];
const KIND: Record<Ev["kind"], [string, string]> = { task: ["Topshiriq", "var(--warn)"], test: ["Test", "var(--ac)"], contest: ["Musobaqa", "var(--pu)"], lesson: ["Dars", "var(--ok)"] };
const MONTHS = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
const DAYS = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
const key = (y: number, m: number, d: number) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

export default function Calendar() {
  const now = new Date();
  const [ym, setYm] = useState({ y: now.getFullYear(), m: now.getMonth() });
  const [sel, setSel] = useState(key(now.getFullYear(), now.getMonth(), now.getDate()));
  const today = key(now.getFullYear(), now.getMonth(), now.getDate());
  const cells = useMemo(() => {
    const first = (new Date(ym.y, ym.m, 1).getDay() + 6) % 7;
    const len = new Date(ym.y, ym.m + 1, 0).getDate();
    return [...Array(first).fill(null), ...Array.from({ length: len }, (_, i) => i + 1)];
  }, [ym]);
  const move = (d: number) => setYm(({ y, m }) => { const n = new Date(y, m + d, 1); return { y: n.getFullYear(), m: n.getMonth() }; });
  const byDay = (k: string) => EVENTS.filter((e) => e.date === k);
  const upcoming = EVENTS.filter((e) => e.date >= today).slice(0, 6);
  const list = byDay(sel);
  return (
    <Shell layer="calendar" subTitle="" subActive="" subItems={[]} crumbs={[["Jadval", "/calendar"]]} maxW={1100}>
      <PageHead title="Jadval va muddatlar" sub="Topshiriqlar, testlar va musobaqalar bir joyda." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 16, alignItems: "start" }}>
        <Card title={`${MONTHS[ym.m]} ${ym.y}`} aside={
          <div style={{ display: "flex", gap: 6 }}>
            <button className="mw-btn" aria-label="Oldingi oy" onClick={() => move(-1)} style={{ height: 34, padding: "0 12px" }}>‹</button>
            <button className="mw-btn" onClick={() => { setYm({ y: now.getFullYear(), m: now.getMonth() }); setSel(today); }} style={{ height: 34, padding: "0 12px" }}>Bugun</button>
            <button className="mw-btn" aria-label="Keyingi oy" onClick={() => move(1)} style={{ height: 34, padding: "0 12px" }}>›</button>
          </div>}>
          <div role="grid" aria-label="Oy kalendari" style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
            {DAYS.map((d) => <div key={d} role="columnheader" style={{ textAlign: "center", fontSize: 12, color: "var(--mu)", fontWeight: 600, padding: "4px 0" }}>{d}</div>)}
            {cells.map((d, i) => {
              if (!d) return <div key={`e${i}`} />;
              const k = key(ym.y, ym.m, d), ev = byDay(k), isSel = k === sel, isToday = k === today;
              return (
                <button key={k} role="gridcell" aria-selected={isSel} aria-label={`${d} ${MONTHS[ym.m]}${ev.length ? `, ${ev.length} ta voqea` : ""}${isToday ? ", bugun" : ""}`} onClick={() => setSel(k)} style={{ minHeight: 52, border: `1px solid ${isSel ? "var(--ac)" : "var(--bd)"}`, borderRadius: 8, background: isSel ? "var(--acbg)" : "var(--sf)", color: "var(--tx)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: 4, paddingTop: 6, fontWeight: isToday ? 700 : 400 }}>
                  <span style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: isToday ? "var(--acbtn)" : "transparent", color: isToday ? "#fff" : undefined, fontSize: 13 }}>{d}</span>
                  <span style={{ display: "flex", gap: 3 }}>{ev.slice(0, 3).map((e, j) => <span key={j} style={{ width: 6, height: 6, borderRadius: 999, background: KIND[e.kind][1] }} />)}</span>
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 12, fontSize: 12, color: "var(--mu)" }}>
            {Object.values(KIND).map(([n, c]) => <span key={n} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 999, background: c }} />{n}</span>)}
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card title={`${Number(sel.slice(8))}-${MONTHS[Number(sel.slice(5, 7)) - 1]!.toLowerCase()}`}>
            {list.length === 0 ? <p style={{ margin: 0, color: "var(--mu)", fontSize: 14 }}>Bu kunga voqea rejalashtirilmagan.</p> : (
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {list.map((e) => <EventRow key={e.title} e={e} />)}
              </ul>)}
          </Card>
          <Card title="Yaqin muddatlar">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {upcoming.map((e) => <EventRow key={e.title} e={e} withDate />)}
            </ul>
          </Card>
        </div>
      </div>
    </Shell>
  );
}

function EventRow({ e, withDate }: { e: Ev; withDate?: boolean }) {
  const [n, c] = KIND[e.kind];
  const d = new Date(e.date + "T00:00:00");
  return (
    <li>
      <A href={e.to} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 10px", border: "1px solid var(--bd)", borderRadius: 8, color: "var(--tx)" }}>
        <span style={{ width: 4, alignSelf: "stretch", borderRadius: 4, background: c }} />
        <span style={{ flex: 1, minWidth: 0, fontSize: 13.5 }}><strong>{e.title}</strong><br /><span style={{ color: "var(--mu)", fontSize: 12.5 }}>{n}{withDate ? ` · ${d.getDate()}-${MONTHS[d.getMonth()]!.toLowerCase()}` : ""}{e.time ? ` · ${e.time}` : ""}</span></span>
      </A>
    </li>
  );
}
