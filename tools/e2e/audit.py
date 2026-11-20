import json,sys
from playwright.sync_api import sync_playwright
routes=json.load(open('routes.json'))
W=int(sys.argv[1]) if len(sys.argv)>1 else 1440
out=[]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    ctx=b.new_context(viewport={'width':W,'height':900});ctx.add_init_script('if(!location.pathname.match(/login|register|forgot|reset|legal/))localStorage.setItem("mathweb-auth",JSON.stringify({state:{user:{username:"jahongirxon",displayName:"Jahongirxon M."},demo:true,access:null,refresh:null},version:0}))');pg=ctx.new_page()
    errs=[]
    pg.on('console',lambda m: errs.append(m.text) if m.type=='error' and 'fonts' not in m.text and 'ERR_' not in m.text else None)
    pg.on('pageerror',lambda e: errs.append('PAGEERR '+str(e)))
    for name,path in routes.items():
        errs.clear()
        pg.goto('http://127.0.0.1:4173'+path); 
        try: pg.wait_for_selector("main,form,.mw-main,nav,p",timeout=4000,state="attached")
        except Exception: out.append(dict(name=name,over=0,sideW=0,h=0,errs=["NO-RENDER"])); continue
        pg.wait_for_timeout(400)
        r=pg.evaluate('''()=>{const d=document.querySelector('.mw-main')||document.documentElement;
          const over=d.scrollWidth-d.clientWidth;
          const side=document.querySelector('.mw-side');const sr=side?side.getBoundingClientRect():null;
          return {over, sideW:sr?Math.round(sr.width):0, h:d.scrollHeight}}''')
        r.update(name=name,errs=list(errs)); out.append(r)
        if len(sys.argv)>2: pg.screenshot(path=f'{name}_{W}.png')
    b.close()
for r in out:
    flag=('OVERFLOW %d'%r['over'] if r['over']>1 else '')+(' ERR:'+'|'.join(r['errs'])[:150] if r['errs'] else '')
    print(r['name'],r['h'],r['sideW'],flag)
