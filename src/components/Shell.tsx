import { Fragment, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import { A } from "./A";
import { Icon, type IconName } from "./Icon";
import { useUI, type Accent, type Lang, type Theme } from "../store/ui";
import { useAuth, initials } from "../store/auth";
import { useShellVals } from "../store/useShellVals";
import { PAGES } from "../nav/pages";

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

function useIsMobile() {
  const [m, setM] = useState(() => typeof window !== "undefined" && window.matchMedia("(max-width:899px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(max-width:899px)");
    const f = () => setM(mq.matches);
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  return m;
}

/* ---------- sidebar ---------- */
function SideLink({ label, icon, href, active, badge, rail }: { label: string; icon: IconName; href: string; active: boolean; badge?: string; rail?: boolean }) {
  if (rail) {
    return (
      <A href={href} aria-label={label} title={label} aria-current={active ? "page" : undefined} className={`mw-sidelink${active ? " on" : ""}`} style={{ width: "40px", height: "38px", justifyContent: "center", padding: 0 }}>
        <Icon name={icon} size={18} />
        {badge ? <span style={{ position: "absolute", top: "6px", right: "7px", width: "7px", height: "7px", borderRadius: "999px", background: AC }} /> : null}
      </A>
    );
  }
  return (
    <A href={href} aria-current={active ? "page" : undefined} className={`mw-sidelink${active ? " on" : ""}`}>
      <Icon name={icon} size={16} />
      {label}
      {badge ? <span style={{ marginLeft: "auto", fontSize: "10.5px", fontWeight: 600, color: AC, background: BG, border: `1px solid ${BD}`, borderRadius: "999px", padding: "0 6px", lineHeight: "17px" }}>{badge}</span> : null}
    </A>
  );
}

const SideTitle = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: ".06em", color: MU, padding: "12px 9px 4px", textTransform: "uppercase" }}>{children}</div>
);

function Sidebar({ layer, subTitle, subActive, subItems, mobile }: Pick<ShellProps, "layer" | "subTitle" | "subActive" | "subItems"> & { mobile: boolean }) {
  const { t } = useTranslation();
  const { sideOpen, drawer } = useUI();
  const rail = !sideOpen && !mobile;
  const personal = [
    { label: t("nav.profile"), icon: "user" as const, href: "/profile", on: layer === "profile" },
    { label: "Jadval", icon: "list" as const, href: "/calendar", on: layer === "calendar" },
    { label: "Daraja va XP", icon: "trophy" as const, href: "/ranks", on: layer === "ranks" },
    { label: t("nav.settings"), icon: "gear" as const, href: "/settings", on: layer === "settings" },
  ];
  const divider = <div style={{ width: "26px", height: "1px", background: BD, margin: "6px 0" }} />;
  return (
    <>
      <nav id="sidenav" aria-label="Asosiy menyu" className={`mw-side${rail ? " rail mw-rail" : ""}${drawer ? " drawer" : ""}`}>
        {!rail && <SideTitle>{t("nav.platform")}</SideTitle>}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: rail ? "center" : "stretch" }}>
          {MAIN_ITEMS.map((m) => <SideLink key={m.key} rail={rail} label={t(m.label)} icon={m.icon} href={m.href} active={m.key === layer} />)}
        </div>
        {subItems.length > 0 && (rail ? divider : <SideTitle>{subTitle}</SideTitle>)}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: rail ? "center" : "stretch" }}>
          {subItems.map(([l, i, h, k, b]) => <SideLink key={k} rail={rail} label={l} icon={i} href={h} active={k === subActive} badge={b} />)}
        </div>
        {rail ? divider : <SideTitle>{t("nav.personal")}</SideTitle>}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: rail ? "center" : "stretch" }}>
          {personal.map((p) => <SideLink key={p.href} rail={rail} label={p.label} icon={p.icon} href={p.href} active={p.on} />)}
        </div>
        <div style={{ position: "sticky", bottom: 0, marginTop: "auto", padding: rail ? "10px 0 12px" : "10px 0 12px", background: SF, display: "flex", justifyContent: "center" }}>
          {rail ? (
            <A href="/ranks" title={t("rank.level")} aria-label={t("rank.level")} style={{ width: "34px", height: "34px", borderRadius: "999px", border: `2px solid ${AC}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600, color: TX }}>8</A>
          ) : (
            <A href="/ranks" style={{ display: "block", width: "100%", padding: "9px 10px", border: `1px solid ${BD}`, borderRadius: "8px", background: BG, color: TX }}>
              <div style={{ fontSize: "12px", fontWeight: 600 }}>{t("rank.level")}</div>
              <div role="progressbar" aria-label="Daraja ichidagi progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={30} style={{ height: "5px", background: "var(--h0)", borderRadius: "999px", marginTop: "6px" }}>
                <div style={{ width: "30%", height: "5px", background: AC, borderRadius: "999px" }} />
              </div>
              <div style={{ fontSize: "11px", color: MU, marginTop: "5px" }}>{t("rank.next")}</div>
            </A>
          )}
        </div>
      </nav>
      <button aria-label="Yopish" tabIndex={-1} className={`mw-scrim${drawer ? " on" : ""}`} onClick={() => useUI.getState().closeDrawer()} />
    </>
  );
}

function BottomNav({ layer }: { layer: string }) {
  const { t } = useTranslation();
  return (
    <nav aria-label="Tezkor menyu" className="mw-bottom">
      {MAIN_ITEMS.filter((m) => m.key !== "rank").map((m) => (
        <A key={m.key} href={m.href} className={m.key === layer ? "on" : ""} aria-current={m.key === layer ? "page" : undefined}>
          <Icon name={m.icon} size={20} />
          <span>{t(m.label)}</span>
        </A>
      ))}
    </nav>
  );
}

/* ---------- search / quick jump ---------- */
function SearchBox({ autoFocus = false, onDone, inputRef }: { autoFocus?: boolean; onDone?: () => void; inputRef?: React.RefObject<HTMLInputElement | null> }) {
  const { t } = useTranslation();
  const go = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return PAGES.slice(0, 7);
    return PAGES.filter((p) => `${p.label} ${p.section} ${p.kw ?? ""}`.toLowerCase().includes(n)).slice(0, 8);
  }, [q]);
  const pick = (to: string) => { setQ(""); setOpen(false); onDone?.(); go(to); };
  return (
    <div style={{ position: "relative", flex: "1 1 0", minWidth: 0 }}>
      <label style={{ display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 10px", border: `1px solid ${BD}`, borderRadius: "6px", background: BG, color: MU }}>
        <Icon name="search" />
        <input
          ref={inputRef} autoFocus={autoFocus} type="search" value={q} role="combobox" aria-expanded={open} aria-controls="search-list" aria-autocomplete="list"
          placeholder={t("top.search")} aria-label={t("top.search")}
          onChange={(e) => { setQ(e.target.value); setIdx(0); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, list.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
            else if (e.key === "Enter" && list[idx]) pick(list[idx]!.to);
            else if (e.key === "Escape") { setOpen(false); (e.target as HTMLInputElement).blur(); onDone?.(); }
          }}
          style={{ flex: "1 1 0", minWidth: 0, border: 0, outline: 0, background: "transparent", font: "inherit", fontSize: "13px", color: TX }}
        />
        <kbd className="mw-hide-sm" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", border: `1px solid ${BD}`, borderRadius: "4px", padding: "0 6px", background: SF }}>/</kbd>
      </label>
      {open && (
        <div id="search-list" role="listbox" className="mw-search-pop">
          {q.trim() === "" && <div style={{ fontSize: "11px", fontWeight: 600, color: MU, padding: "4px 10px" }}>TEZ O'TISH</div>}
          {list.length === 0 && <div style={{ padding: "10px", fontSize: "13px", color: MU }}>«{q}» bo'yicha sahifa topilmadi</div>}
          {list.map((p, i) => (
            <A key={p.to} href={p.to} role="option" aria-selected={i === idx} onMouseDown={(e) => { e.preventDefault(); pick(p.to); }} onClick={(e) => e.preventDefault()}>
              <span style={{ flex: 1 }}>{p.label}</span>
              <span style={{ fontSize: "11px", color: MU }}>{p.section}</span>
            </A>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- top bar ---------- */
const popBox: CSSProperties = { position: "absolute", top: "46px", right: 0, zIndex: 30, boxSizing: "border-box", background: SF, border: `1px solid ${BD}`, borderRadius: "10px", boxShadow: "var(--shadow)" };

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
    <div role="dialog" aria-label={title} className="mw-pop" style={{ ...popBox, width: "340px", maxWidth: "calc(100vw - 24px)", overflow: "hidden" }}>
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
  const user = useAuth((s) => s.user);
  const demo = useAuth((s) => s.demo);
  const signOut = useAuth((s) => s.signOut);
  const go = useNavigate();
  const smallHead: CSSProperties = { padding: "6px 6px 4px", fontSize: "12px", fontWeight: 600, color: MU };
  const name = user?.displayName ?? "Jahongirxon M.";
  return (
    <div role="menu" aria-label="Hisob menyusi" className="mw-pop" style={{ ...popBox, width: "300px", padding: "10px", maxHeight: "calc(100dvh - 64px)", overflowY: "auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px 10px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "999px", background: "var(--av)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "14px" }}>{initials(name)}</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: "14px", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</div>
          <div style={{ fontSize: "12px", color: MU }}>@{user?.username ?? "jahongirxon"} · AM-301{demo ? " · demo" : ""}</div>
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
      <MenuRow icon="help" label={t("menu.help")} href="/help" />
      <button role="menuitem" onClick={() => { signOut(); useUI.getState().closePop(); go("/login", { replace: true }); }} style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", minHeight: "40px", padding: "0 10px", border: 0, borderRadius: "6px", background: "transparent", fontSize: "14px", color: "var(--bad)", textAlign: "left" }}>
        <Icon name="out" />
        {t("menu.logout")}
      </button>
    </div>
  );
}

function TopBar({ crumbs, mobile }: { crumbs: [string, string][]; mobile: boolean }) {
  const { t } = useTranslation();
  const { pop, toggleSide, toggleDrawer, drawer, togglePop } = useUI();
  const user = useAuth((s) => s.user);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing = el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable);
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey) { e.preventDefault(); if (mobile) setSearchOpen(true); else searchRef.current?.focus(); }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); if (mobile) setSearchOpen(true); else searchRef.current?.focus(); }
      if (e.key === "Escape") { useUI.getState().closePop(); useUI.getState().closeDrawer(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobile]);

  if (searchOpen && mobile) {
    return (
      <header className="mw-top">
        <SearchBox autoFocus onDone={() => setSearchOpen(false)} />
        <button aria-label="Qidiruvni yopish" onClick={() => setSearchOpen(false)} style={{ width: "40px", height: "40px", border: 0, background: "transparent", color: TX }}><Icon name="xmark" size={18} /></button>
      </header>
    );
  }
  return (
    <header className="mw-top">
      <button aria-label={t("top.toggleSide")} aria-expanded={mobile ? drawer : undefined} aria-controls="sidenav" title="Yon menyu" onClick={mobile ? toggleDrawer : toggleSide} style={{ flex: "none", width: "38px", height: "38px", border: 0, borderRadius: "6px", background: "transparent", color: TX, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="panel" size={20} />
      </button>
      <A href="/" style={{ display: "flex", alignItems: "center", gap: "8px", color: TX, fontWeight: 600, fontSize: "16px", flex: "none" }}>
        <span style={{ width: "28px", height: "28px", borderRadius: "6px", background: TX, color: SF, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace", fontSize: "15px" }}>∫</span>
        <span className="mw-logo-text">MathWeb</span>
      </A>
      <nav aria-label="Joylashuv" className="mw-crumbs" style={{ fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", marginLeft: "6px", minWidth: 0, overflow: "hidden", whiteSpace: "nowrap" }}>
        {crumbs.map(([label, href], i) => (
          <Fragment key={href + i}>
            {i > 0 && <span style={{ color: MU }}>/</span>}
            <A href={href} aria-current={i === crumbs.length - 1 ? "page" : undefined} style={{ color: i === crumbs.length - 1 ? TX : MU, fontWeight: i === crumbs.length - 1 ? 600 : 400, overflow: "hidden", textOverflow: "ellipsis" }}>{label}</A>
          </Fragment>
        ))}
      </nav>
      <div style={{ flex: "1 1 0" }} />
      <div className="mw-search-wide" style={{ flex: "0 1 340px", minWidth: "160px", display: "flex" }}>
        <SearchBox inputRef={searchRef} />
      </div>
      <button className="mw-search-ico" aria-label={t("top.search")} onClick={() => setSearchOpen(true)} style={{ display: "none", flex: "none", width: "38px", height: "38px", border: `1px solid ${BD}`, borderRadius: "6px", background: SF, color: TX, alignItems: "center", justifyContent: "center" }}><Icon name="search" size={18} /></button>

      <div style={{ position: "relative", flex: "none" }}>
        <button aria-label={t("top.create")} aria-haspopup="menu" aria-expanded={pop === "plus"} title={t("top.create")} onClick={() => togglePop("plus")} style={{ height: "38px", padding: "0 9px", border: `1px solid ${BD}`, borderRadius: "6px", background: SF, color: TX, display: "flex", alignItems: "center", gap: "2px" }}>
          <Icon name="plus" size={18} />
          <span className="mw-hide-sm" style={{ display: "inline-flex" }}><Icon name="caret" size={14} /></span>
        </button>
        {pop === "plus" && (
          <div role="menu" aria-label={t("top.create")} className="mw-pop" style={{ ...popBox, width: "250px", padding: "8px" }}>
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
        <PopPanel title="Bildirishnomalar" footLabel="Barcha bildirishnomalar" footHref="/notifications" head={<A href="/notifications" style={{ fontSize: "12px" }}>Hammasini ko'rish</A>}>
          <PopRow icon="list" bg="var(--warnbg)" fg="var(--warn)" text={<>Yangi topshiriq: <strong>A9 amaliy ish</strong></>} sub="08:15" href="/education/practical" unread />
          <PopRow icon="star" bg="var(--pubg)" fg="var(--pu)" text={<><strong>rk4-solver</strong> yangi yulduzcha oldi</>} sub="07:40" href="/hub/repo" unread />
          <PopRow icon="chat" bg="var(--okbg)" fg="var(--ok)" text="Asilbek S. savolingizga javob berdi" sub="06:02" href="/community/question" />
          <PopRow icon="check" bg="var(--acbg)" fg={AC} text="Logistik model testi baholandi: +100 XP" sub="kecha" href="/education/results" />
        </PopPanel>
      </PopButton>

      <div style={{ position: "relative", flex: "none" }}>
        <button aria-label={t("top.account")} aria-haspopup="menu" aria-expanded={pop === "menu"} title="Hisob" onClick={() => togglePop("menu")} style={{ width: "38px", height: "38px", borderRadius: "999px", border: `1px solid ${BD}`, background: "var(--av)", color: TX, fontWeight: 600, fontSize: "13px" }}>{initials(user?.displayName ?? "Jahongirxon M.")}</button>
        {pop === "menu" && <AccountMenu />}
      </div>
    </header>
  );
}

export function Shell({ layer, subTitle, subActive, subItems, crumbs, maxW, children }: ShellProps) {
  const v = useShellVals();
  const mobile = useIsMobile();
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
    useUI.getState().closeDrawer();
    useUI.getState().closePop();
  }, [pathname]);
  useEffect(() => {
    const last = crumbs[crumbs.length - 1]?.[0];
    document.title = last ? `${last} · MathWeb` : "MathWeb";
  }, [crumbs]);
  useEffect(() => { if (!mobile) useUI.getState().closeDrawer(); }, [mobile]);
  return (
    <div data-theme={v.theme} data-accent={v.accent} className="mw-app">
      <a className="mw-skip" href="#main" onClick={(e) => { e.preventDefault(); mainRef.current?.focus(); }}>Asosiy mazmunga o'tish</a>
      {v.anyOpen && <button aria-label="Yopish" tabIndex={-1} onClick={v.closePop} style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 30, border: 0, background: "transparent", cursor: "default" }} />}
      <TopBar crumbs={crumbs} mobile={mobile} />
      <div className="mw-body">
        <Sidebar layer={layer} subTitle={subTitle} subActive={subActive} subItems={subItems} mobile={mobile} />
        <main id="main" tabIndex={-1} ref={mainRef} className="mw-main" style={{ outline: "none" }}>
          <div style={{ maxWidth: `${maxW}px`, margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>{children}</div>
        </main>
      </div>
      {mobile && <BottomNav layer={layer} />}
    </div>
  );
}
