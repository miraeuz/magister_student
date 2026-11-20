import { useLocation } from "react-router";
import { A } from "../../components/A";
import { Shell } from "../../components/Shell";
import { Card } from "../../components/ui";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <Shell layer="none" subTitle="" subActive="" subItems={[]} crumbs={[["Sahifa topilmadi", pathname]]} maxW={560}>
      <Card style={{ textAlign: "center", padding: "40px 24px", marginTop: 24 }}>
        <div style={{ fontSize: 56, fontWeight: 600, color: "var(--ac)", fontFamily: "JetBrains Mono, monospace", lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: 20, margin: "12px 0 6px" }}>Sahifa topilmadi</h1>
        <p style={{ margin: 0, color: "var(--mu)", fontSize: 14 }}><code>{pathname}</code> manzili mavjud emas yoki ko'chirilgan.</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
          <A href="/" className="mw-btn primary">Bosh sahifa</A>
          <A href="/help" className="mw-btn">Yordam</A>
        </div>
      </Card>
    </Shell>
  );
}
