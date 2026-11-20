import { Fragment, type CSSProperties, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { A } from "./A";
import { Icon, type IconName } from "./Icon";
import { useUI, type Accent, type Lang, type Theme } from "../store/ui";
import { useShellVals } from "../store/useShellVals";

/** One entry of a section sub-menu: [label, icon, href, key, badge]. */
export type SubItem = [string, IconName, string, string, string];

interface ShellProps {
  layer: string;
  subTitle: string;
  subActive: string;
  subItems: SubItem[];
  crumbs: [string, string][];
  maxW: number;
  children: ReactNode;
}

const MAIN_ITEMS: { key: string; label: string; icon: IconName; href: string }[] = [
  { key: "home", label: "nav.home", icon: "home", href: "/" },
  { key: "edu", label: "nav.education", icon: "book", href: "/education" },
  { key: "hub", label: "nav.hub", icon: "repo", href: "/hub" },
  { key: "com", label: "nav.community", icon: "chat", href: "/community" },
  { key: "ch", label: "nav.challenges", icon: "code", href: "/challenges" },
  { key: "rank", label: "nav.rank", icon: "trophy", href: "/leaderboard" },
];

const BD = "var(--bd)", SF = "var(--sf)", TX = "var(--tx)", MU = "var(--mu)", AC = "var(--ac)", BG = "var(--bg)";
const SEP = <div style={{ height: "1px", background: BD, margin: "6px 0" }} />;

function SideLink({ label, icon, href, active, badge }: { label: string; icon: IconName; href: string; active: boolean; badge?: string }) {
  return (
    <A href={href} style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "40px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", fontWeight: active ? 600 : 400, color: active ? AC : TX, background: active ? "var(--acbg)" : "transparent" }}>
      <Icon name={icon} size={17} />
      {label}
      {badge ? <span style={{ marginLeft: "auto", fontSize: "11px", fontWeight: 600, color: AC, background: SF, border: `1px solid ${BD}`, borderRadius: "999px", padding: "1px 7px" }}>{badge}</span> : null}
    </A>
  );
}

function RailLink({ label, icon, href, active, badge }: { label: string; icon: IconName; href: string; active: boolean; badge?: string }) {
  return (
    <A href={href} aria-label={label} title={label} style={{ position: "relative", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", color: active ? AC : TX, background: active ? "var(--acbg)" : "transparent" }}>
      <Icon name={icon} size={19} />
      {badge ? <span style={{ position: "absolute", top: "6px", right: "6px", width: "8px", height: "8px", borderRadius: "999px", background: AC }} /> : null}
    </A>
  );
}

const SideTitle = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: ".04em", color: MU, padding: "14px 10px 6px" }}>{children}</div>
);

function Sidebar({ layer, subTitle, subActive, subItems }: Pick<ShellProps, "layer" | "subTitle" | "subActive" | "subItems">) {
  const { t } = useTranslation();
  const sideOpen = useUI((s) => s.sideOpen);
  const personal = [
    { label: t("nav.profile"), icon: "user" as const, href: "/profile", on: layer === "profile" },
    { label: t("nav.settings"), icon: "gear" as const, href: "/settings", on: layer === "settings" },
  ];
  const divider = <div style={{ width: "28px", height: "1px", background: BD, margin: "6px 0" }} />;
  if (!sideOpen) {
    return (
      <nav aria-label="Asosiy menyu (yig'ilgan)" style={{ flex: "0 0 60px", boxSizing: "border-box", padding: "8px 0 16px", borderRight: `1px solid ${BD}`, background: SF, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        {MAIN_ITEMS.map((m) => <RailLink key={m.key} label={t(m.label)} icon={m.icon} href={m.href} active={m.key === layer} />)}
        {subItems.length > 0 && divider}
        {subItems.map(([l, i, h, k, b]) => <RailLink key={k} label={l} icon={i} href={h} active={k === subActive} badge={b} />)}
        {divider}
        {personal.map((p) => <RailLink key={p.href} label={p.label} icon={p.icon} href={p.href} active={p.on} />)}
        <span title={t("rank.level")} style={{ marginTop: "auto", width: "36px", height: "36px", borderRadius: "999px", border: `2px solid ${AC}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 600 }}>8</span>
      </nav>
    );
  }
  return (
    <nav aria-label="Asosiy menyu" style={{ flex: "0 0 248px", boxSizing: "border-box", padding: "4px 12px 16px", borderRight: `1px solid ${BD}`, background: SF, display: "flex", flexDirection: "column", gap: "2px" }}>
      <SideTitle>{t("nav.platform")}</SideTitle>
      {MAIN_ITEMS.map((m) => <SideLink key={m.key} label={t(m.label)} icon={m.icon} href={m.href} active={m.key === layer} />)}
      {subItems.length > 0 && <SideTitle>{subTitle}</SideTitle>}
      {subItems.map(([l, i, h, k, b]) => <SideLink key={k} label={l} icon={i} href={h} active={k === subActive} badge={b} />)}
      <SideTitle>{t("nav.personal")}</SideTitle>
      {personal.map((p) => <SideLink key={p.href} label={p.label} icon={p.icon} href={p.href} active={p.on} />)}
      <div style={{ marginTop: "auto", paddingTop: "16px" }}>
        <div style={{ padding: "12px", border: `1px solid ${BD}`, borderRadius: "8px", background: BG }}>
          <div style={{ fontSize: "12px", fontWeight: 600 }}>{t("rank.level")}</div>
          <div role="img" aria-label="Daraja ichidagi progress 30 foiz" style={{ height: "6px", background: "var(--h0)", borderRadius: "999px", marginTop: "8px" }}>
            <div style={{ width: "30%", height: "6px", background: AC, borderRadius: "999px" }} />
          </div>
          <div style={{ fontSize: "11px", color: MU, marginTop: "6px" }}>{t("rank.next")}</div>
        </div>
      </div>
    </nav>
  );
}

/* ---------- top bar ---------- */
const popBox: CSSProperties = { position: "absolute", top: "48px", right: 0, zIndex: 30, boxSizing: "border-box", background: SF, border: `1px solid ${BD}`, borderRadius: "10px", boxShadow: "var(--shadow)" };

function MenuRow({ icon, label, href = "#", danger = false }: { icon: IconName; label: string; href?: string; danger?: boolean }) {
  return (
    <A href={href} style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "40px", padding: "0 10px", borderRadius: "6px", fontSize: "14px", color: danger ? "var(--bad)" : TX }}>
      <Icon name={icon} />
      {label}
    </A>
  );
}

function PopRow({ icon, bg, fg, text, sub, href, unread = false, badge }: { icon: IconName; bg: string; fg: string; text: ReactNode; sub: string; href: string; unread?: boolean; badge?: string }) {
  return (
    <A href={href} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 14px", borderTop: `1px solid ${BD}`, color: TX, background: unread ? "var(--acbg)" : "transparent" }}>
      <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: bg, color: fg, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={icon} /></span>
      <span style={{ flex: "1 1 0", minWidth: 0 }}>
        <span style={{ display: "block", fontSize: "13px", lineHeight: 1.45 }}>{text}</span>
        <span style={{ display: "block", fontSize: "12px", color: MU }}>{sub}</span>
      </span>
      {badge ? <span style={{ flex: "none", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "var(--acbtn)", color: "#ffffff", fontSize: "11px", fontWeight: 600, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{badge}</span> : null}
    </A>
  );
}

function PopPanel({ title, children, footLabel, footHref, head }: { title: string; children: ReactNode; footLabel: string; footHref: string; head?: ReactNode }) {
  return (
    <div role="dialog" aria-label={title} style={{ ...popBox, width: "340px", maxWidth: "calc(100vw - 24px)", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "10px 14px", borderBottom: `1px solid ${BD}` }}>
        <strong style={{ fontSize: "14px" }}>{title}</strong>
        {head}
      </div>
      {children}
      <A href={footHref} style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "44px", borderTop: `1px solid ${BD}`, fontSize: "13px", fontWeight: 600 }}>{footLabel}</A>
    </div>
  );
}

const dot = <span style={{ position: "absolute", top: "7px", right: "8px", width: "8px", height: "8px", borderRadius: "999px", background: AC }} />;

function PopButton({ icon, label, open, onToggle, withDot, children }: { icon: IconName; label: string; open: boolean; onToggle: () => void; withDot?: boolean; children: ReactNode }) {
  return (
    <div style={{ position: "relative", flex: "none" }}>
      <button aria-label={label} title={label} onClick={onToggle} style={{ position: "relative", width: "40px", height: "40px", boxSizing: "border-box", border: `1px solid ${BD}`, borderRadius: "6px", background: SF, color: TX, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name={icon} size={18} />
        {withDot ? dot : null}
      </button>
      {open ? children : null}
    </div>
  );
}

function Segmented({ icon, label, on, onClick }: { icon: IconName; label: string; on: boolean; onClick: () => void }) {
  return (
    <button aria-pressed={on} onClick={onClick} style={{ flex: "1 1 0", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", border: `1px solid ${BD}`, borderRadius: "6px", background: SF, color: TX, fontSize: "13px" }}>
      <Icon name={icon} size={15} />
      {label}
    </button>
  );
}

const ACCENTS: { id: Accent; name: string; color: string }[] = [
  { id: "blue", name: "Ko'k", color: "#0b5fd6" },
  { id: "green", name: "Yashil", color: "#1a7f37" },
  { id: "purple", name: "Binafsha", color: "#6639ba" },
  { id: "orange", name: "To'q sariq", color: "#a04a00" },
];
const LANGS: { id: Lang; label: string }[] = [{ id: "uz", label: "O'zbek" }, { id: "en", label: "English" }, { id: "ru", label: "Русский" }];

function AccountMenu() {
  const { t, i18n } = useTranslation();
  const { theme, accent, lang, setTheme, setAccent, setLang } = useUI();
  const smallHead: CSSProperties = { padding: "6px 6px 4px", fontSize: "12px", fontWeight: 600, color: MU };
  return (
    <div role="menu" aria-label="Hisob menyusi" style={{ ...popBox, width: "300px", padding: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px 10px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "999px", background: "var(--av)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "14px" }}>JM</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: "14px", fontWeight: 600 }}>Jahongirxon M.</div>
          <div style={{ fontSize: "12px", color: MU }}>@jahongirxon · AM-301</div>
        </div>
      </div>
      {SEP}
      <MenuRow icon="user" label={t("menu.profile")} href="/profile" />
      <MenuRow icon="gear" label={t("menu.settings")} href="/settings" />
      {SEP}
      <div style={smallHead}>{t("menu.theme")}</div>
      <div style={{ display: "flex", gap: "6px", padding: "0 4px" }}>
        {([["light", "sun", "menu.light"], ["dark", "moon", "menu.dark"], ["system", "screen", "menu.system"]] as [Theme, IconName, string][]).map(([id, icon, key]) => (
          <Segmented key={id} icon={icon} label={t(key)} on={theme === id} onClick={() => setTheme(id)} />
        ))}
      </div>
      <div style={{ ...smallHead, padding: "12px 6px 4px" }}>{t("menu.accent")}</div>
      <div style={{ display: "flex", gap: "8px", padding: "0 4px 4px" }}>
        {ACCENTS.map((a) => (
          <button key={a.id} aria-label={`${a.name} rang`} title={a.name} aria-pressed={accent === a.id} onClick={() => setAccent(a.id)} style={{ width: "40px", height: "40px", border: `2px solid ${BD}`, borderRadius: "999px", background: SF, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ width: "22px", height: "22px", borderRadius: "999px", background: a.color }} />
          </button>
        ))}
      </div>
      <div style={{ ...smallHead, padding: "10px 6px 4px" }}>{t("menu.language")}</div>
      <div style={{ display: "flex", gap: "6px", padding: "0 4px" }}>
        {LANGS.map((l) => (
          <button key={l.id} aria-pressed={lang === l.id} onClick={() => { setLang(l.id); void i18n.changeLanguage(l.id); }} style={{ flex: "1 1 0", minHeight: "40px", border: `1px solid ${BD}`, borderRadius: "6px", background: SF, color: TX, fontSize: "13px" }}>{l.label}</button>
        ))}
      </div>
      {SEP}
      <MenuRow icon="help" label={t("menu.help")} />
      <MenuRow icon="out" label={t("menu.logout")} danger />
    </div>
  );
}

function TopBar({ crumbs }: { crumbs: [string, string][] }) {
  const { t } = useTranslation();
  const { pop, toggleSide, togglePop } = useUI();
  return (
    <header style={{ position: "relative", zIndex: 20, background: SF, borderBottom: `1px solid ${BD}`, padding: "8px 16px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px" }}>
      <button aria-label={t("top.toggleSide")} title="Yon menyu" onClick={toggleSide} style={{ flex: "none", width: "40px", height: "40px", border: 0, borderRadius: "6px", background: "transparent", color: TX, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="panel" size={20} />
      </button>
      <A href="/" style={{ display: "flex", alignItems: "center", gap: "8px", color: TX, fontWeight: 600, fontSize: "16px" }}>
        <span style={{ width: "28px", height: "28px", borderRadius: "6px", background: TX, color: SF, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace", fontSize: "15px" }}>∫</span>
        MathWeb
      </A>
      <div style={{ fontSize: "14px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", marginLeft: "4px" }}>
        {crumbs.map(([label, href], i) => (
          <Fragment key={href + i}>
            {i > 0 && <span style={{ color: MU }}>/</span>}
            <A href={href} style={{ color: TX, fontWeight: i === crumbs.length - 1 ? 600 : 400 }}>{label}</A>
          </Fragment>
        ))}
      </div>
      <label style={{ flex: "999 1 200px", maxWidth: "340px", marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px", height: "40px", boxSizing: "border-box", padding: "0 10px", border: `1px solid ${BD}`, borderRadius: "6px", background: BG, color: MU }}>
        <Icon name="search" />
        <input type="search" placeholder={t("top.search")} aria-label={t("top.search")} style={{ flex: "1 1 0", minWidth: 0, border: 0, outline: 0, background: "transparent", font: "inherit", fontSize: "13px", color: TX }} />
        <kbd style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", border: `1px solid ${BD}`, borderRadius: "4px", padding: "1px 6px", background: SF }}>/</kbd>
      </label>

      <div style={{ position: "relative", flex: "none" }}>
        <button aria-label={t("top.create")} title={t("top.create")} onClick={() => togglePop("plus")} style={{ height: "40px", padding: "0 10px", border: `1px solid ${BD}`, borderRadius: "6px", background: SF, color: TX, display: "flex", alignItems: "center", gap: "4px" }}>
          <Icon name="plus" size={18} />
          <Icon name="caret" size={14} />
        </button>
        {pop === "plus" && (
          <div role="menu" aria-label={t("top.create")} style={{ ...popBox, width: "240px", padding: "8px" }}>
            <MenuRow icon="chat" label={t("plus.ask")} href="/community/ask" />
            <MenuRow icon="repo" label={t("plus.repo")} href="/hub/new" />
            <MenuRow icon="file" label={t("plus.article")} href="/hub/new" />
            <MenuRow icon="code" label={t("plus.solve")} href="/challenges" />
            <MenuRow icon="users" label={t("plus.join")} href="/education/group" />
          </div>
        )}
      </div>

      <PopButton icon="list" label={t("top.tasks")} open={pop === "tasks"} onToggle={() => togglePop("tasks")} withDot>
        <PopPanel title="Topshiriqlar" footLabel="Barcha topshiriqlar" footHref="/education/tasks" head={<span style={{ fontSize: "12px", color: MU }}>3 ta kutilmoqda</span>}>
          <PopRow icon="list" bg="var(--warnbg)" fg="var(--warn)" text={<strong>A9 amaliy ish</strong>} sub="Muddat 24-noyabr · Sh. Boltibayev" href="/education/practical" unread />
          <PopRow icon="check" bg="var(--acbg)" fg={AC} text={<strong>Lotka-Volterra: davr uzunligi</strong>} sub="Muddat 22-noyabr · masala" href="/challenges/problem" />
          <PopRow icon="file" bg="var(--pubg)" fg="var(--pu)" text={<strong>Logistik model: kurs ishi</strong>} sub="Muddat 29-noyabr · modellash" href="/challenges/modelling" />
        </PopPanel>
      </PopButton>
      <PopButton icon="inbox" label={t("top.chats")} open={pop === "chat"} onToggle={() => togglePop("chat")} withDot>
        <PopPanel title="Chatlar" footLabel="Guruh chatini ochish" footHref="/community/chat">
          <PopRow icon="users" bg="var(--acbg)" fg={AC} text={<><strong>AM-301 guruh chati</strong><br />Sh. Boltibayev: Juma kuni 15:00 da...</>} sub="10:42" href="/community/chat" unread badge="5" />
          <PopRow icon="code" bg="var(--pubg)" fg="var(--pu)" text={<><strong>ODE ni birga o'rganamiz</strong><br />Asilbek: fazaviy portretni chizdim</>} sub="kecha" href="/community/chat" />
          <PopRow icon="chart" bg="var(--okbg)" fg="var(--ok)" text={<><strong>Regressiya to'garagi</strong><br />Madina: ma'lumotni yukladim</>} sub="kecha" href="/community/chat" unread badge="2" />
        </PopPanel>
      </PopButton>
      <PopButton icon="bell" label={t("top.bell")} open={pop === "bell"} onToggle={() => togglePop("bell")} withDot>
        <PopPanel title="Bildirishnomalar" footLabel="Barcha bildirishnomalar" footHref="/notifications" head={<A href="/notifications" style={{ fontSize: "12px" }}>O'qilgan deb belgilash</A>}>
          <PopRow icon="list" bg="var(--warnbg)" fg="var(--warn)" text={<>Yangi topshiriq: <strong>A9 amaliy ish</strong></>} sub="08:15" href="/education/practical" unread />
          <PopRow icon="star" bg="var(--pubg)" fg="var(--pu)" text={<><strong>rk4-solver</strong> yangi yulduzcha oldi</>} sub="07:40" href="/hub/repo" unread />
          <PopRow icon="chat" bg="var(--okbg)" fg="var(--ok)" text="Asilbek S. savolingizga javob berdi" sub="06:02" href="/community/question" />
          <PopRow icon="check" bg="var(--acbg)" fg={AC} text="Logistik model testi baholandi: +100 XP" sub="kecha" href="/education/results" />
        </PopPanel>
      </PopButton>

      <div style={{ position: "relative", flex: "none" }}>
        <button aria-label={t("top.account")} title="Hisob" onClick={() => togglePop("menu")} style={{ width: "40px", height: "40px", borderRadius: "999px", border: `1px solid ${BD}`, background: "var(--av)", color: TX, fontWeight: 600, fontSize: "14px" }}>JM</button>
        {pop === "menu" && <AccountMenu />}
      </div>
    </header>
  );
}

export function Shell({ layer, subTitle, subActive, subItems, crumbs, maxW, children }: ShellProps) {
  const v = useShellVals();
  return (
    <div data-theme={v.theme} data-accent={v.accent} style={{ minHeight: "100vh", background: BG, color: TX, display: "flex", flexDirection: "column" }}>
      {v.anyOpen && <button aria-label="Yopish" tabIndex={-1} onClick={v.closePop} style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 15, border: 0, background: "transparent", cursor: "default" }} />}
      <TopBar crumbs={crumbs} />
      <div style={{ flex: "1 1 auto", display: "flex", alignItems: "stretch", minWidth: 0 }}>
        <Sidebar layer={layer} subTitle={subTitle} subActive={subActive} subItems={subItems} />
        <main style={{ flex: "1 1 0", minWidth: 0, boxSizing: "border-box", padding: "20px 24px 32px" }}>
          <div style={{ maxWidth: `${maxW}px`, margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>{children}</div>
        </main>
      </div>
    </div>
  );
}
