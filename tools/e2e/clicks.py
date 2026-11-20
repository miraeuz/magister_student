import json,collections
from playwright.sync_api import sync_playwright
AUTH='localStorage.setItem("mathweb-auth",JSON.stringify({state:{user:{username:"jahongirxon",displayName:"Jahongirxon M."},demo:true,access:null,refresh:null},version:0}))'
routes=json.load(open('routes.json'))
skip={'Login','Register','Forgot','Reset','Legal','NotFound'}
fall=collections.Counter(); res=collections.Counter(); errs=[]; nofx=[]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    c=b.new_context(viewport={'width':1440,'height':900}); c.add_init_script(AUTH)
    pg=c.new_page()
    pg.on('pageerror',lambda e: errs.append(str(e)))
    pg.on('console',lambda m: errs.append(m.text) if m.type=='error' and 'ERR_' not in m.text and 'fonts' not in m.text else None)
    for name,path in routes.items():
        if name in skip: continue
        pg.goto('http://127.0.0.1:4173'+path); pg.wait_for_timeout(300)
        n=pg.locator('[data-dead="1"]').count()
        for i in range(n):
            if pg.url.split('4173')[1]!=path: pg.goto('http://127.0.0.1:4173'+path); pg.wait_for_timeout(250)
            el=pg.locator('[data-dead="1"]').nth(i)
            try:
                lab=(el.get_attribute('aria-label') or el.inner_text() or '').strip().replace('\n',' ')[:40]
                before=pg.evaluate("(document.querySelector('.mw-main')||document.body).innerHTML.length")
                url0=pg.url; mx0=pg.evaluate("Math.max(0,...[...document.querySelectorAll('.mw-toast')].map(e=>+e.dataset.id))"); el.scroll_into_view_if_needed(timeout=1500); el.click(timeout=1500,force=True)
                pg.wait_for_timeout(60)
                t=pg.evaluate("(m)=>[...document.querySelectorAll('.mw-toast')].filter(e=>+e.dataset.id>m).map(e=>e.innerText)",mx0)
                navd=pg.url!=url0
                kind='nav' if navd else ('toast:fallback' if t and 'serverga ulanganda' in t[-1] else ('toast' if t else 'silent'))
                res[kind]+=1
                if kind=='toast:fallback': fall[(name,lab)]+=1
                if kind=='silent': nofx.append((name,lab))
            except Exception as e:
                res['err']+=1; nofx.append((name,'ERR '+str(e)[:50]))
    b.close()
print(dict(res)); print('console errors',errs[:5])
print('fallback toasts:',sum(fall.values())); 
for k,v in fall.items(): print(' ',k)
print('silent:',nofx)
