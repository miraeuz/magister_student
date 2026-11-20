# MathWeb: talaba frontendi (React) — v2

Tasdiqlangan dizayn (41 sahifa) saqlangan holda React 19 + TypeScript. v2: tekshiruv, tuzatishlar, kirish/ro'yxatdan o'tish va yangi sahifalar.

## Ishga tushirish
```
npm install
npm run dev        # http://localhost:5173 ; /api -> http://localhost:8000 (Django)
npm run build      # tsc + vite build
npm test           # barcha sahifalar render qilinadi
```
Backend yo'q bo'lsa kirish sahifasi "Demo rejimda kirish" tugmasini beradi (`VITE_AUTH_DEMO=0` bilan o'chiriladi).

## v2 da nima o'zgardi
- **Qobiq (Shell):** yon menyu va yuqori panel qimirlamaydi, faqat asosiy qism aylanadi. Menyu ixchamlashtirildi (34 px qator). Telefonda menyu chap tortma (drawer) + pastki 5 tugmali navigatsiya. Barcha sahifalarda telefon kengligida gorizontal siljish yo'q.
- **Qidiruv:** `/` yoki `Ctrl+K`, sahifalarga tez o'tish, ↑ ↓ Enter, Esc.
- **Kirish/ro'yxatdan o'tish:** `/login`, `/register`, `/forgot`, `/auth/reset?uid&token` (Django `/api/auth/*` ga mos), himoyalangan marshrutlar, chiqish.
- **Yangi sahifalar:** Daraja va XP (`/ranks`), Jadval (`/calendar`), Yordam (`/help`), Shartlar (`/legal`), 404.
- **O'lik tugmalar:** dizaynda 487 ta boshqaruv hech narsa qilmasdi. Endi `src/components/actions.ts` ularni sahifaga qarab ishlatadi: marshrut, tab/filtr, yoqish-o'chirish (kuzatish, yulduzcha, saqlash), olib tashlash (qaytarish bilan), nusxalash, fayl tanlash, matn muharriri tugmalari (B, I, Kod, ∑), aks holda aniq xabar (toast).
- Switch'lar (Sozlamalar) endi haqiqatan yoqiladi/o'chadi; sahifa almashganda tepaga qaytadi; sarlavha (`document.title`); klaviatura fokusi; `prefers-reduced-motion`; favicon.

## Hali ulanmagan
Sahifa ma'lumotlari namunaviy (API hooklari tayyor), Monaco va KaTeX yo'q, sahifa matnlari faqat o'zbekcha (qobiq 3 tilda),
filtrlar/qidiruv natijalari statik ma'lumot ustida ishlamaydi.
