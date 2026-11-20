"""Convert exported design pages (HTML with {{ holes }}) into typed React components. Markup is kept 1:1."""
import json, glob, os, re, sys, html
from html.parser import HTMLParser

EXPORT = "/home/claude/work/export"
DESIGN = "/home/claude/work/design/project"
OUT = sys.argv[1]

ROUTES = {
 "Main": "/", "Mobile": "/mobile", "Education": "/education", "Course": "/education/course", "Lesson": "/education/lesson", "Assignment": "/education/assignment",
 "Tasks": "/education/tasks", "Results": "/education/results", "Materials": "/education/materials", "Group": "/education/group", "AssignResult": "/education/assignment/result", "Practical": "/education/practical",
 "Hub": "/hub", "Repo": "/hub/repo", "RepoTalk": "/hub/repo/talk", "RepoSuggest": "/hub/repo/suggestions", "RepoQuiz": "/hub/repo/quiz", "MyRepos": "/hub/mine", "NewRepo": "/hub/new",
 "RepoArticle": "/hub/repo/article", "RepoMedia": "/hub/repo/media", "RepoVersions": "/hub/repo/versions", "RepoSettings": "/hub/repo/settings", "RepoFile": "/hub/repo/file", "GroupWorks": "/hub/group-works",
 "Community": "/community", "Question": "/community/question", "Ask": "/community/ask", "Chat": "/community/chat", "StudyGroups": "/community/groups", "Mentors": "/community/mentors", "Saved": "/community/saved",
 "Challenges": "/challenges", "Problem": "/challenges/problem", "Modelling": "/challenges/modelling", "ChLists": "/challenges/lists", "GroupContest": "/challenges/contest",
 "Leaderboard": "/leaderboard", "Notifications": "/notifications", "Profile": "/profile", "Settings": "/settings",
}
def route(href):
    m = re.fullmatch(r"([A-Za-z]+)\.dc\.html", href)
    if m:
        if m.group(1) not in ROUTES: raise SystemExit("no route for " + href)
        return ROUTES[m.group(1)]
    return href

VOID = {"input", "br", "img", "hr", "meta", "link"}
ATTR = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "viewbox": "viewBox", "onclick": "onClick", "oninput": "onChange", "onchange": "onChange", "defaultchecked": "defaultChecked",
        "colspan": "colSpan", "rowspan": "rowSpan", "maxlength": "maxLength", "autocomplete": "autoComplete", "readonly": "readOnly", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
        "stroke-linejoin": "strokeLinejoin", "stroke-dasharray": "strokeDasharray", "stroke-dashoffset": "strokeDashoffset", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity",
        "text-anchor": "textAnchor", "font-size": "fontSize", "font-weight": "fontWeight", "font-family": "fontFamily", "preserveaspectratio": "preserveAspectRatio", "fill-rule": "fillRule", "clip-rule": "clipRule",
        "aria-hidden": "aria-hidden", "enctype": "encType", "accept-charset": "acceptCharset", "srcset": "srcSet", "datetime": "dateTime", "spellcheck": "spellCheck", "contenteditable": "contentEditable", "inputmode": "inputMode", "autocapitalize": "autoCapitalize", "enterkeyhint": "enterKeyHint", "minlength": "minLength"}
NUMERIC = {"rows", "cols", "colSpan", "rowSpan", "tabIndex", "maxLength", "minLength", "size", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-level", "aria-colcount", "aria-rowcount"}
DROP = {"hint-placeholder-val"}
HOLE = re.compile(r"\{\{\s*([\w]+)\s*\}\}")
UNKNOWN = set()

class Node:
    def __init__(s, tag, attrs): s.tag, s.attrs, s.kids = tag, attrs, []
class P(HTMLParser):
    def __init__(s): super().__init__(convert_charrefs=True); s.root = Node("#root", []); s.st = [s.root]
    def handle_starttag(s, t, a):
        n = Node(t, a); s.st[-1].kids.append(n)
        if t not in VOID: s.st.append(n)
    def handle_startendtag(s, t, a): s.st[-1].kids.append(Node(t, a))
    def handle_endtag(s, t):
        if t in VOID: return
        for i in range(len(s.st) - 1, 0, -1):
            if s.st[i].tag == t: del s.st[i:]; return
        raise ValueError("unmatched </%s>" % t)
    def handle_data(s, d): s.st[-1].kids.append(d)

def js(s): return json.dumps(s, ensure_ascii=False)
def style_obj(css):
    parts = []; depth = 0; cur = ""
    for ch in css:
        if ch == "(": depth += 1
        if ch == ")": depth -= 1
        if ch == ";" and depth == 0: parts.append(cur); cur = ""
        else: cur += ch
    if cur.strip(): parts.append(cur)
    items = {}
    for p in parts:
        if ":" not in p: continue
        k, v = p.split(":", 1); k = k.strip(); v = v.strip()
        if k.startswith("--"): key = js(k)
        else:
            k2 = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)
            if k.startswith("-webkit-") or k.startswith("-moz-") or k.startswith("-ms-"): k2 = k2[0].upper() + k2[1:]
            key = k2
        items.pop(key, None); items[key] = js(v)
    return "{{ " + ", ".join("%s: %s" % kv for kv in items.items()) + " }}"

def attr_str(tag, name, val, parent_tag):
    n = name
    if n in DROP: return ""
    n = ATTR.get(n, n)
    if n == "onClick" and val is None: return ""
    if n == "style": return "style=%s" % style_obj(val)
    if val is None: return n if n not in ("checked", "selected") else ""
    if n == "value" and tag in ("input", "textarea", "select") and not HOLE.fullmatch(val.strip()): n = "defaultValue"
    if n == "checked" and not HOLE.fullmatch(val.strip()): n = "defaultChecked"
    m = HOLE.fullmatch(val.strip())
    if m:
        name_ = m.group(1)
        if name_ in ("true", "false"): return "%s={%s}" % (n, name_)
        return "%s={v.%s}" % (n, name_)
    if HOLE.search(val):
        tpl = HOLE.sub(lambda m: "${v.%s}" % m.group(1), val.replace("`", "\\`"))
        return "%s={`%s`}" % (n, tpl)
    if n in NUMERIC and re.fullmatch(r"-?\d+(\.\d+)?", val.strip()): return "%s={%s}" % (n, val.strip())
    if n == "href" and tag == "a": val = route(val)
    if n.startswith("on") : UNKNOWN.add(n)
    if "\n" in val or '"' in val or "\\" in val: return "%s={%s}" % (n, js(val))
    return '%s="%s"' % (n, val)

def text_expr(t):
    """t is raw text possibly with holes -> list of JSX children strings"""
    out = []
    pos = 0
    for m in HOLE.finditer(t):
        if m.start() > pos: out.append(lit(t[pos:m.start()]))
        out.append("{v.%s}" % m.group(1)); pos = m.end()
    if pos < len(t): out.append(lit(t[pos:]))
    return out
def lit(t):
    if t == "": return ""
    if re.fullmatch(r"[^<>{}&\\\n]*", t) and t == t.strip() and "  " not in t: return t
    return "{%s}" % js(t)

def emit(n, ind, ctx):
    pad = "  " * ind
    if isinstance(n, str):
        if n.strip() == "" and "\n" in n and ctx.get("pre") is None: return []
        return [pad + x for x in text_expr(n)] if not ctx.get("pre") else [pad + "{%s}" % js(n)]
    tag = n.tag
    if tag == "sc-if":
        a = dict(n.attrs); m = HOLE.fullmatch(a.get("value", "").strip())
        cond = "v.%s" % m.group(1)
        inner = []
        for k in n.kids: inner += emit(k, ind + 2, ctx)
        return [pad + "{%s && (" % cond, pad + "  <>"] + inner + [pad + "  </>", pad + ")}"]
    jt = "A" if tag == "a" else tag
    attrs = []
    kids = n.kids
    if tag == "textarea":
        txt = "".join(k for k in kids if isinstance(k, str))
        if txt: attrs.append("defaultValue=%s" % ("{%s}" % js(txt)))
        kids = []
    if tag == "select":
        sel = [k for k in kids if not isinstance(k, str) and k.tag == "option" and any(a == "selected" for a, _ in k.attrs)]
        if sel:
            txt = "".join(x for x in sel[0].kids if isinstance(x, str)); attrs.append("defaultValue=%s" % ("{%s}" % js(txt)))
    # CSS var() does not work in SVG presentation attributes: move stroke/fill into the style object (same as the design build did)
    moved = [(k, v) for k, v in n.attrs if k in ("stroke", "fill") and v and v.startswith("var(")]
    if moved:
        keep = [(k, v) for k, v in n.attrs if not (k in ("stroke", "fill") and v and v.startswith("var("))]
        st = "".join("%s: %s; " % kv for kv in moved)
        merged = False; out_a = []
        for k, v in keep:
            if k == "style": out_a.append((k, (v.rstrip("; ") + "; " if v else "") + st)); merged = True
            else: out_a.append((k, v))
        if not merged: out_a.append(("style", st))
        n.attrs = out_a
    for name, val in n.attrs:
        if tag == "option" and name == "selected": continue
        s = attr_str(tag, name, val, tag)
        if s: attrs.append(s)
    if tag == "table":
        # wrap loose <tr> in tbody
        out = []; run = []
        for k in kids:
            if not isinstance(k, str) and k.tag == "tr": run.append(k)
            else:
                if run: tb = Node("tbody", []); tb.kids = run; out.append(tb); run = []
                out.append(k)
        if run: tb = Node("tbody", []); tb.kids = run; out.append(tb)
        kids = out
    head = pad + "<" + jt + ("" if not attrs else " " + " ".join(attrs))
    if tag in VOID or (not kids and tag not in ("a", "span", "div", "button", "section", "path")):
        return [head + " />"]
    sub = dict(ctx)
    if tag == "pre": sub["pre"] = True
    body = []
    for i, k in enumerate(kids):
        if isinstance(k, str) and not sub.get("pre"):
            if k.strip() == "":
                if "\n" not in k and len(kids) > 1: body.append("  " * (ind + 1) + '{" "}')
                continue
            lead = k[:1].isspace(); trail = k[-1:].isspace()
            core = k.strip() if True else k
            core = re.sub(r"\s+", " ", core)
            if lead: body.append("  " * (ind + 1) + '{" "}')
            body += ["  " * (ind + 1) + x for x in text_expr(core)]
            if trail: body.append("  " * (ind + 1) + '{" "}')
        else:
            body += emit(k, ind + 1, sub)
    if not body: return [head + "></%s>" % jt]
    return [head + ">"] + body + [pad + "</%s>" % jt]

def to_tsx(htmlstr):
    p = P(); p.feed(htmlstr); p.close()
    if len(p.st) != 1: raise ValueError("unclosed tags: " + str([x.tag for x in p.st[1:]]))
    lines = []
    for k in p.root.kids: lines += emit(k, 3, {})
    return "\n".join(lines)

def title_to_file():
    m = {}
    for f in glob.glob(DESIGN + "/*.dc.html"):
        t = re.search(r"<title>(.*?)</title>", open(f, encoding="utf-8").read(), re.S).group(1)
        m[html.unescape(t)] = os.path.basename(f).replace(".dc.html", "")
    return m

if __name__ == "__main__":
    t2f = title_to_file(); os.makedirs(OUT + "/src/pages/generated", exist_ok=True)
    done = []
    for f in sorted(glob.glob(EXPORT + "/*.json")):
        d = json.load(open(f, encoding="utf-8"))
        name = t2f.get(d["title"]) or t2f.get(html.unescape(d["title"]))
        if not name: print("NO FILE FOR", d["title"]); continue
        sh = d["shell"]
        content = sh["content"] if sh else d["body"]
        # strip shell-less root wrapper holes for Mobile
        tsx = to_tsx(content)
        stateful = name in ("Lesson", "Problem", "Chat", "Leaderboard")
        valsimp = 'import { use%sVals } from "../../vals/%s";\n' % (name, name) if stateful else ""
        hook = "use%sVals()" % name if stateful else "useShellVals()"
        shellprops = ""
        if sh:
            shellprops = "layer=%s subTitle=%s subActive=%s subItems={%s} crumbs={%s} maxW={%s}" % (js(sh["layer"]), js(html.unescape(sh["sub_title"])), js(sh["sub_active"]),
                js([[route(x) if i == 2 else html.unescape(x) for i, x in enumerate(r)] for r in sh["sub_items"]]), js([[html.unescape(c[0]), route(c[1])] for c in sh["crumbs"]]), sh["maxw"])
        body = ("\n" + tsx + "\n    ") if True else ""
        if sh:
            comp = ("export default function %s() {\n  const v = %s;\n  return (\n    <Shell %s>\n%s\n    </Shell>\n  );\n}\n" % (name, hook, shellprops, tsx))
        else:
            comp = ("export default function %s() {\n  const v = %s;\n  return (\n    <div data-theme={v.theme} data-accent={v.accent} style={{ minHeight: \"100vh\", background: \"var(--bg)\", color: \"var(--tx)\" }}>\n%s\n    </div>\n  );\n}\n" % (name, hook, tsx))
        head = "/* Generated from the approved student design (page: %s). Markup is 1:1 with the design; do not edit while the design lock is on. */\n/* eslint-disable */\n" % d["title"].replace("*/", "")
        imports = 'import { A } from "../../components/A";\nimport { Shell } from "../../components/Shell";\nimport { useShellVals } from "../../store/useShellVals";\n' + valsimp + "\n"
        open(OUT + "/src/pages/generated/%s.tsx" % name, "w", encoding="utf-8").write(head + imports + comp)
        done.append(name)
    json.dump({"pages": sorted(done), "routes": ROUTES}, open(OUT + "/src/pages/manifest.json", "w"), indent=1)
    print(len(done), "pages;", "unknown handlers:", UNKNOWN)
