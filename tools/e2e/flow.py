from playwright.sync_api import sync_playwright
U='http://127.0.0.1:4173'
ok=[];bad=[]
def chk(n,c): (ok if c else bad).append(n)
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    c=b.new_context(viewport={'width':1440,'height':900});pg=c.new_page()
    errs=[];pg.on('pageerror',lambda e:errs.append(str(e)));pg.on('console',lambda m:errs.append(m.text) if m.type=='error' and 'ERR_' not in m.text and 'fonts' not in m.text else None)
    pg.goto(U+'/hub');pg.wait_for_timeout(500)
    chk('guard redirects to login with next','/login?next=%2Fhub' in pg.url)
    pg.click('button[type=submit]');pg.wait_for_timeout(200)
    chk('empty login shows 2 errors',pg.locator('[role=alert]').count()==2)
    pg.fill('input[name=id]','jahongirxon');pg.fill('input[name=pw]','secret123');pg.click('button[type=submit]');pg.wait_for_timeout(600)
    chk('backend unreachable -> demo button',pg.get_by_text('Demo rejimda kirish').count()==1)
    pg.get_by_text('Demo rejimda kirish').click();pg.wait_for_timeout(700)
    chk('after login returns to next (/hub)',pg.url.endswith('/hub'))
    # fixed shell
    t0=pg.evaluate("document.querySelector('.mw-top').getBoundingClientRect().top"); s0=pg.evaluate("document.querySelector('.mw-side').getBoundingClientRect().top")
    pg.evaluate("document.querySelector('.mw-main').scrollTo(0,800)");pg.wait_for_timeout(200)
    chk('topbar+sidebar fixed while scrolling',pg.evaluate("document.querySelector('.mw-top').getBoundingClientRect().top")==t0 and pg.evaluate("document.querySelector('.mw-side').getBoundingClientRect().top")==s0 and pg.evaluate("document.querySelector('.mw-main').scrollTop")>0)
    chk('window itself does not scroll',pg.evaluate("window.scrollY")==0)
    # search
    pg.keyboard.press('/');pg.keyboard.type('daraja');pg.wait_for_timeout(200);pg.keyboard.press('Enter');pg.wait_for_timeout(500)
    chk('search "/" + type + Enter -> /ranks',pg.url.endswith('/ranks'))
    chk('scroll reset on navigation',pg.evaluate("document.querySelector('.mw-main').scrollTop")==0)
    # popovers + Esc
    pg.click('button[aria-label^=Bildirishnomalar]');chk('bell opens',pg.locator('[role=dialog]').count()==1)
    pg.keyboard.press('Escape');chk('Esc closes popover',pg.locator('[role=dialog]').count()==0)
    # theme persisted
    pg.click('button[aria-label=\"Hisob menyusi\"]');pg.get_by_role('button',name='Qorong\'i').click();pg.wait_for_timeout(200)
    chk('dark theme applied',pg.evaluate("document.documentElement.dataset.theme")=='dark')
    pg.reload();pg.wait_for_timeout(600);chk('theme persists after reload',pg.evaluate("document.documentElement.dataset.theme")=='dark')
    # rail collapse
    pg.click('button[aria-controls=sidenav]');pg.wait_for_timeout(200);chk('sidebar collapses to 56px rail',round(pg.evaluate("document.querySelector('.mw-side').getBoundingClientRect().width"))==57 or round(pg.evaluate("document.querySelector('.mw-side').getBoundingClientRect().width"))==56)
    pg.click('button[aria-controls=sidenav]')
    # settings switch
    pg.goto(U+'/settings');pg.wait_for_timeout(500)
    sw=pg.locator('[role=switch]').first;a0=sw.get_attribute('aria-checked');sw.click();chk('switch toggles',sw.get_attribute('aria-checked')!=a0)
    # undo remove
    pg.goto(U+'/community/chat');pg.wait_for_timeout(500)
    # 404
    pg.goto(U+'/nope-xyz');pg.wait_for_timeout(500);chk('404 page in shell',pg.get_by_text('Sahifa topilmadi').count()>=1 and pg.locator('.mw-side').count()==1)
    # logout
    pg.click('button[aria-label=\"Hisob menyusi\"]');pg.get_by_role('menuitem',name='Chiqish').click();pg.wait_for_timeout(500)
    chk('logout -> /login',pg.url.endswith('/login'))
    pg.goto(U+'/');pg.wait_for_timeout(400);chk('after logout app is protected','/login' in pg.url)
    # register validation
    pg.goto(U+'/register');pg.wait_for_timeout(400);pg.click('button[type=submit]');pg.wait_for_timeout(200)
    chk('register validation shows errors',pg.locator('[role=alert]').count()>=5)
    pg.fill('input[autocomplete=name]','Test Talaba');pg.fill('input[autocomplete=username]','Test User!');chk('username sanitised',pg.input_value('input[autocomplete=username]')=='testuser')
    pg.fill('input[autocomplete=email]','t@x.uz');pg.locator('input[autocomplete=new-password]').nth(0).fill('abc12345');pg.locator('input[autocomplete=new-password]').nth(1).fill('abc12345');pg.check('input[type=checkbox]');pg.click('button[type=submit]');pg.wait_for_timeout(700)
    chk('register offline -> demo option',pg.get_by_role('button',name='Demo rejimda davom etish').count()==1)
    pg.goto(U+'/forgot');pg.fill('input[type=email]','a@b.uz');pg.click('button[type=submit]');pg.wait_for_timeout(500);chk('forgot -> neutral sent screen',pg.get_by_text('Pochtangizni tekshiring').count()==1)
    pg.goto(U+'/auth/reset');pg.wait_for_timeout(400);chk('reset without token -> invalid link',pg.get_by_text('Havola yaroqsiz').count()>=1)
    # mobile
    m=b.new_context(viewport={'width':390,'height':844});m.add_init_script('localStorage.setItem("mathweb-auth",JSON.stringify({state:{user:{username:"j",displayName:"J M"},demo:true},version:0}))');mp=m.new_page()
    mp.goto(U+'/');mp.wait_for_timeout(500)
    chk('mobile: drawer closed initially',mp.evaluate("document.querySelector('.mw-side').getBoundingClientRect().right")<=0)
    mp.click('button[aria-controls=sidenav]');mp.wait_for_timeout(350);chk('mobile: drawer opens',mp.evaluate("document.querySelector('.mw-side').getBoundingClientRect().left")>=0)
    mp.get_by_role('link',name='Hub').first.click();mp.wait_for_timeout(500);chk('mobile: nav closes drawer',mp.evaluate("document.querySelector('.mw-side').getBoundingClientRect().right")<=0 and mp.url.endswith('/hub'))
    mp.click('.mw-bottom a[href=\"/community\"]');mp.wait_for_timeout(400);chk('mobile: bottom nav works',mp.url.endswith('/community'))
    b.close()
print('PASS',len(ok));print('FAIL',bad);print('errors',errs[:5])
