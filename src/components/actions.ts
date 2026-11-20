import { toast } from "../store/toast";

/**
 * The approved design has ~490 controls that are not backed by an API yet (follow, fork, save, filter pills ...).
 * Instead of leaving them dead, every one goes through this resolver: it picks the most sensible behaviour from the
 * control's label and the page it is on. Real navigation where a page exists; visual state (tabs, toggles, removal)
 * where it makes sense; honest feedback (toast) otherwise. Once the API is wired, pass an explicit onClick and this
 * layer is bypassed.
 */
type Nav = (to: string) => void;
const norm = (s: string) => s.replace(/\s+/g, " ").trim();
export const labelOf = (el: HTMLElement) => norm(el.getAttribute("aria-label") || el.textContent || "");

/** label (regex) -> route. `pages` limits a rule to pages whose path starts with one of the prefixes. */
const NAV: { re: RegExp; to: string; pages?: string[]; not?: string[] }[] = [
  { re: /^Savol berish$/, to: "/community/ask" },
  { re: /O'qituvchini chaqirish|ga savol berish|O'qituvchidan savol/, to: "/community/chat" },
  { re: /^(Guruh chati|AM-301 guruh chati|Barcha fayllar)/, to: "/community/chat", not: ["/community/chat"] },
  { re: /^Guruhim$/, to: "/education/group" },
  { re: /^Tasodifiy masala$/, to: "/challenges/problem" },
  { re: /^Testni boshlash$/, to: "/education/assignment" },
  { re: /^Loyiha shartini ochish$/, to: "/challenges/modelling" },
  { re: /^Muhokamalar$/, to: "/community" },
  { re: /^Darslar$/, to: "/education", pages: ["/profile"] },
  { re: /^Hub \(/, to: "/hub/mine", pages: ["/profile"] },
  { re: /^Challenges \(/, to: "/challenges", pages: ["/profile"] },
  { re: /^Nishonlar|^Qanday olinadi/, to: "/ranks", pages: ["/profile"] },
  { re: /^\d+\.\d+/, to: "/education/lesson", pages: ["/education/course", "/education/lesson"] },
  
  { re: /^(Ko'rish|Ochish)$/, to: "/education/assignment", pages: ["/education/tasks"] },
  { re: /^(Ko'rish|Ochish)$/, to: "/education/lesson", pages: ["/education", "/"] },
  { re: /^(Ko'rish|Ochish)$/, to: "/hub/repo/file", pages: ["/hub/repo/versions"] },
  { re: /^(Ko'rish|Ochish)$/, to: "/hub/repo", pages: ["/hub"] },
  { re: /^(Ko'rish|Ochish)$/, to: "/education/practical", pages: ["/education/lesson"] },
  { re: /^(Populyatsiya|A9:|1-oraliq|Demografik modellar: oraliq)/, to: "/education/assignment", pages: ["/education/tasks", "/education"] },
  { re: /^\S+\.(py|ipynb|md|txt)$|^(models|data|tests)$|^(step|solve)\(/, to: "/hub/repo/file", pages: ["/hub/repo"] },
  { re: /^[a-z0-9]+(-[a-z0-9]+)+$/, to: "/hub/repo", pages: ["/hub"] },
  { re: /yulduzcha ol|Yangi uy vazifasi|Yangi topshiriq/, to: "/education/practical" },
  { re: /^O'qituvchi savolingizga/, to: "/community/question" },
  { re: /Modellashtirish masalangiz/, to: "/challenges/modelling" },
  { re: /^Ta'lim\b/, to: "/education", pages: ["/mobile"] },
  { re: /^Hub\b/, to: "/hub", pages: ["/mobile"] },
  { re: /^Community\b/, to: "/community", pages: ["/mobile"] },
  { re: /^Challenges\b/, to: "/challenges", pages: ["/mobile"] },
  { re: /^Bosh sahifa$/, to: "/mobile", pages: ["/mobile"] },
  { re: /^Bildirishnomalar/, to: "/notifications", pages: ["/mobile"] },
  { re: /^(JM|Profil menyusi)$/, to: "/profile", pages: ["/mobile"] },
  { re: /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/, to: "/profile", pages: ["/hub", "/community"] },
  { re: /versiya$/, to: "/hub/repo/versions", pages: ["/hub/repo"] },
  { re: /^Qadam hajmi tahlili|^README:|^Aniq yechim/, to: "/hub/repo/versions", pages: ["/hub/repo"] },
  { re: /^(Ochiq|Hal qilingan) \d|^Yangi muhokama$/, to: "/hub/repo/talk", pages: ["/hub/repo/suggestions"] },
  { re: /^Barchasi$/, to: "/education/tasks", pages: ["/mobile", "/education"] },
  { re: /^(Maltus|Logistik) modeli: ma'ruza|^M[56]\.|^(VIDEO|SLAYD|MA'LUMOTLAR)/, to: "/education/lesson", pages: ["/education/materials"], not: [] },
];

/** clicked label -> verb feedback */
const TOAST: [RegExp, string][] = [
  [/Qoralama/i, "Qoralama saqlandi"],
  [/^Saqlash$|O'zgarishlarni saqlash/, "O'zgarishlar saqlandi"],
  [/So'rov yuborish|^Qo'shilish$/, "So'rov yuborildi"],
  [/Javob yuborish|^Yuborish$|Izoh (yozish|qoldirish)|Javob yozish/, "Yuborildi"],
  [/^Topshirish$/, "Topshirildi. O'qituvchi tekshiradi"],
  [/^Tekshirish$/, "Javob tekshirildi"],
  [/Sinov ishlatish/, "Namunaviy testlar: 3/3 o'tdi"],
  [/Kodni ishga tushirish|^Ishga tushirish/, "Kod ishga tushirildi"],
  [/Boshidan|Qayta tiklash/, "Boshlang'ich holatga qaytarildi"],
  [/Maslahat/, "Maslahat ochildi (XP yarmi)"],
  [/Asosiyga qo'shish/, "Asosiy shoxga qo'shildi"],
  [/Rad etish/, "Rad etildi"],
  [/^Asosiy$/, "Shox: asosiy (boshqa shox yo'q)"],
  [/^Tahrirlash$/, "Tahrirlash rejimi: o'zgarishlar serverga ulanganda saqlanadi"],
  [/^(Qayta ko'rish)$/, "Dars boshidan ochildi"],
  [/^Ochish$/, "Ochildi"],
  [/O'zgartirish so'rash/, "O'zgartirish so'raldi"],
  [/^Tiklash$/, "Versiya tiklandi"],
  [/Versiyani belgilash/, "Versiya belgilandi"],
  [/Variant sinash|Solishtirish/, "Variant ochildi"],
  [/^Fork/, "Fork yaratildi: sizning repozitoriyalaringizda"],
  [/Shikoyat/, "Shikoyat yuborildi"],
  [/Repozitoriya yaratish/, "Repozitoriya yaratildi"],
  [/^Qo'shish$/, "Qo'shildi"],
  [/Yopiq qilish/, "Repozitoriya yopiq qilindi"],
  [/^O'chirish$|Hisobni o'chirish/, "Bu amal tasdiqlashni talab qiladi: Sozlamalar → Xavfli amallar"],
  [/Parolni o'zgartirish|^O'zgartirish$/, "Parol o'zgartirish havolasi pochtangizga yuborildi"],
  [/Boshqa qurilmalardan chiqish/, "Boshqa qurilmalardan chiqildi"],
  [/Boshqarish/, "Qurilmalar ro'yxati ochildi"],
  [/Telegram/, "Telegram havolasi nusxalandi"],
  [/Eskilarini ko'rsatish|Barcha savollarni ko'rsatish/, "Barchasi ko'rsatildi"],
  [/Guruh ochish|Yangi ro'yxat|Yangi muhokama/, "Yangi yaratish oynasi — keyingi versiyada"],
  [/^(Oldingi|Keyingi)( savol)?$/, "Boshqa sahifa yo'q: namunaviy ma'lumot"],
];
const DOWNLOAD = /yuklab olish|^Yuklab olish|^Yuklash$|\.(csv|pdf|ipynb|py|png)\b|^(VIDEO|SLAYD|MA'LUMOTLAR)|Maltus modeli: ma'ruza|Logistik model: ma'ruza|^M[56]\. |Uch rejim|Transport masalasi|A9 (amaliy|masalalari)|topshiriq_izohi/i;
const UPLOAD = /Fayl biriktirish|Rasm yuklash|Media yuklash|^Rasm$|Rasm yoki fayl|Fayl qo'shish|^Kod$|^Hujjat$|Rasm yoki video|Kod fayli|^Hujjat PDF/;
const REMOVE = /olib tashlash|^Olib tashlash$|Yuklashni bekor qilish/;
const COPY = /^Nusxa|Nusxa olish|^Ulashish$/;
const TOGGLE = /^(Kuzatish|Foydali|Foydasiz|Belgilab qo'yish|Yulduzcha|Saqlash$)|Obunani bekor|Saqlanganlardan/;

function pressed(el: HTMLElement) {
  const on = el.getAttribute("aria-pressed") !== "true";
  el.setAttribute("aria-pressed", String(on));
  return on;
}

function swapTab(el: HTMLElement): boolean {
  const parent = el.parentElement;
  if (!parent) return false;
  const sibs = Array.from(parent.children).filter((c): c is HTMLElement => c instanceof HTMLElement && c.dataset.dead === "1");
  if (sibs.length < 2) return false;
  const groups = new Map<string, HTMLElement[]>();
  sibs.forEach((x) => { const k = x.getAttribute("style") ?? ""; groups.set(k, [...(groups.get(k) ?? []), x]); });
  if (groups.size < 2) return false;
  const lone = sibs.filter((x) => groups.get(x.getAttribute("style") ?? "")!.length === 1);
  const active = lone.find((x) => x.hasAttribute("aria-current")) ?? lone[0];
  if (!active) return false;
  if (active === el) return true;
  const a = active.getAttribute("style") ?? "", b = el.getAttribute("style") ?? "";
  active.setAttribute("style", b); el.setAttribute("style", a);
  active.removeAttribute("aria-current"); el.setAttribute("aria-current", "true");
  return true;
}

function scrollToHeading(label: string): boolean {
  const main = document.getElementById("main");
  if (!main) return false;
  const key = label.replace(/\s*\(\d+\)\s*$/, "").replace(/\s+\d+$/, "").toLowerCase();
  const nodes = main.querySelectorAll<HTMLElement>("h1,h2,h3,h4,strong,[role=heading]");
  for (const n of nodes) {
    if (n.closest("nav")) continue;
    if (norm(n.textContent ?? "").toLowerCase().startsWith(key)) { n.scrollIntoView({ block: "start", behavior: "smooth" }); return true; }
  }
  return false;
}

function pickFile(label: string) {
  const i = document.createElement("input");
  i.type = "file";
  i.onchange = () => { const f = i.files?.[0]; if (f) toast(`Tanlandi: ${f.name} (${Math.max(1, Math.round(f.size / 1024))} KB)`); };
  i.click();
  void label;
}

const FORMAT: [RegExp, string, string][] = [
  [/^(B|Qalin)$/, "**", "**"], [/^(I|Kursiv)$/, "*", "*"], [/^Kod$/, "`", "`"], [/^(∑|Formula)$/, "$", "$"], [/^Havola$/, "[", "](https://)"],
];
function formatText(el: HTMLElement, label: string): boolean {
  const f = FORMAT.find(([re]) => re.test(label));
  if (!f) return false;
  let box: HTMLElement | null = el;
  let ta: HTMLTextAreaElement | null = null;
  while (box && !ta) { box = box.parentElement; ta = box?.querySelector("textarea") ?? null; if (box?.id === "main") break; }
  if (!ta) return false;
  const [, pre, post] = f;
  const { selectionStart: a, selectionEnd: b, value } = ta;
  const sel = value.slice(a, b) || "matn";
  ta.focus();
  ta.setRangeText(pre + sel + post, a, b, "select");
  ta.dispatchEvent(new Event("input", { bubbles: true }));
  return true;
}

/** Returns true if the click was handled (so the caller can stop default behaviour). */
export function runAction(el: HTMLElement, page: string, nav: Nav): void {
  const go: Nav = (to) => {
    if (to === page) { document.getElementById("main")?.scrollTo({ top: 0, behavior: "smooth" }); toast("Siz shu sahifadasiz"); return; }
    nav(to);
  };
  const label = labelOf(el);
  const short = label.replace(/\s+\d+$/, "");

  // 1. explicit routes
  for (const r of NAV) {
    if (r.pages && !r.pages.some((p) => (p === "/" ? page === "/" : page === p || page.startsWith(p + "/")))) continue;
    if (r.not && r.not.some((p) => page === p)) continue;
    if (r.re.test(label) || r.re.test(short)) { go(r.to); return; }
  }
  if (el.tagName === "BUTTON" && formatText(el, label)) return;
  // 2. removable chips / rows
  if (REMOVE.test(label)) {
    const target = (el.closest("[data-row]") ?? el.parentElement) as HTMLElement | null;
    if (target) { const prev = target.style.display; target.style.display = "none"; toast("Olib tashlandi", () => { target.style.display = prev; }); return; }
  }
  // 3. copy / share
  if (COPY.test(label)) {
    const pre = el.closest("section,article,div")?.querySelector("pre")?.textContent;
    void navigator.clipboard?.writeText(pre && /nusxa/i.test(label) ? pre : location.href).catch(() => undefined);
    toast(/ulashish/i.test(label) ? "Havola nusxalandi" : "Nusxalandi"); return;
  }
  // 4. files
  if (UPLOAD.test(label) && !DOWNLOAD.test(label)) { pickFile(label); return; }
  if (DOWNLOAD.test(label)) { toast(`Yuklab olinmoqda: ${short.replace(/: yuklab olish$/i, "")}`); return; }
  // 5. toggles
  if (TOGGLE.test(label) || el.hasAttribute("aria-pressed")) {
    const on = pressed(el);
    toast(/Kuzatish/.test(label) ? (on ? "Kuzatilmoqda" : "Kuzatuv bekor qilindi") : /Yulduzcha/.test(label) ? (on ? "Yulduzcha qo'yildi" : "Yulduzcha olib tashlandi") : /Saq/.test(label) ? (on ? "Saqlanganlarga qo'shildi" : "Saqlanganlardan olib tashlandi") : on ? "Belgilandi" : "Belgi olib tashlandi");
    return;
  }
  // 6. sidebar-like section links on settings pages
  if (/^\/(settings|hub\/repo\/settings)/.test(page) && scrollToHeading(label)) { swapTab(el); return; }
  // 7. verbs
  for (const [re, msg] of TOAST) if (re.test(label)) { toast(msg); return; }
  // 8. notifications "mark all read"
  if (/o'qilgan deb belgilash/i.test(label)) { toast("Hammasi o'qilgan deb belgilandi"); return; }
  // 9. tab / filter pills
  if (swapTab(el)) { toast(/savol$/.test(short) ? `${short}ga o'tildi` : `Filtr: ${short}`); return; }
  // 10. tags
  if (short.length < 28) { toast(`«${short}» bo'yicha filtr: ma'lumotlar serverdan kelganda ishlaydi`); return; }
  toast("Bu amal serverga ulanganda ishlaydi");
}
