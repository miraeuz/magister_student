import re, glob, os, json, html, collections, sys
from html.parser import HTMLParser
sys.argv = ["x", "/tmp/unused"]
src = open("/home/claude/work/frontend_tools/convert.py").read().split('if __name__')[0]
ns = {}; exec(src, ns); route = ns["route"]
TRUE = {"sideOpen", "attOpen", "ltDesc", "btRes", "lbGrp", "isLight", "isBlue", "pM"}
HOLE = re.compile(r"\{\{\s*(\w+)\s*\}\}")
P=ns["P"]; Node=ns["Node"]
class Res: pass
def parse(h, flags):
    p=P(); p.feed(h); p.close()
    r=Res(); r.tags=collections.Counter(); r.text=[]; r.hrefs=[]; r.styles=0
    def walk(n):
        if isinstance(n,str):
            d=re.sub(r"\s+"," ",n).strip()
            if d: r.text.append(d)
            return
        a=dict(n.attrs)
        if n.tag=="sc-if":
            m=HOLE.search(a.get("value","")); 
            if m and m.group(1) in flags:
                for k in n.kids: walk(k)
            return
        if n.tag in ("script","style","helmet","link","meta"): return
        if n.tag!="#root":
            r.tags[n.tag]+=1
            if "style" in a: r.styles+=1
            if n.tag=="a" and "href" in a: r.hrefs.append(route(a["href"]) if a["href"].endswith(".dc.html") else a["href"])
        for k in n.kids: walk(k)
    walk(p.root); return r
bad = 0
for f in sorted(glob.glob("/home/claude/work/render/*.html")):
    name = os.path.basename(f)[:-5]
    orig = open("/home/claude/work/design/project/%s.dc.html" % name, encoding="utf-8").read()
    body = orig[orig.index("<x-dc>") + 6: orig.index("</x-dc>")]
    body = body[body.index("</helmet>") + 9:]
    rend = re.sub(r"<!-- -->", "", open(f, encoding="utf-8").read())
    a = parse(body, TRUE); b = parse(rend, set())
    # rendered has already evaluated conditions: parse with no sc-if; compare
    issues = []
    ta, tb = +a.tags, +b.tags
    # original popovers: closed by default, rendered also closed
    if ta != tb: issues.append("tags: " + str({k: (ta.get(k, 0), tb.get(k, 0)) for k in set(ta) | set(tb) if ta.get(k, 0) != tb.get(k, 0)}))
    if a.hrefs != b.hrefs: issues.append("hrefs differ: %d vs %d" % (len(a.hrefs), len(b.hrefs)))
    ja = " ".join(a.text); jb = " ".join(b.text)
    ja_n = re.sub(r"\{\{[^}]*\}\}", "", ja)
    if name != "Lesson" and re.sub(r"\s+", "", ja_n) != re.sub(r"\s+", "", jb): issues.append("text differs")
    if a.styles != b.styles: issues.append("style attrs %d vs %d" % (a.styles, b.styles))
    if issues: bad += 1; print(name, "|", "; ".join(issues)[:400])
    else: print(name, "OK", sum(ta.values()), "elements,", len(a.hrefs), "links")
print("pages with differences:", bad)
