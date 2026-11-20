# MathWeb: talaba frontendi (React)

Tasdiqlangan dizayn (41 sahifa) 1:1 saqlangan holda React 19 + TypeScript ga o'tkazilgan.

## Texnologiyalar
React 19, TypeScript, Vite, React Router, Zustand (mavzu, rang, yon menyu, ochiladigan panellar; localStorage'da saqlanadi),
TanStack Query (API qatlami tayyor, hali sahifalarga ulanmagan), react-i18next (UZ/EN/RU: hozircha yuqori panel va yon menyu), Vitest.

## Ishga tushirish
```
npm install
npm run dev        # http://localhost:5173 ; /api -> http://localhost:8000 (Django)
npm run build      # tsc + vite build
npm test           # 41 sahifaning har biri render qilinadi
```

## Tuzilma
- `src/pages/generated/` dizayndan avtomatik o'tkazilgan 41 sahifa (markup 1:1).
- `src/components/Shell.tsx` umumiy qobiq: yuqori panel (4 ta ochiladigan panel), chap menyu (yig'iladigan), hisob menyusi.
- `src/vals/` interaktiv sahifalar: Lesson (logistik model slayderlari), Problem (tablar), Chat (biriktirish menyusi), Leaderboard.
- `src/store/ui.ts` Zustand; `src/api/` fetch klienti va Django endpointlari uchun hooklar.
- `src/routes.ts` marshrutlar jadvali; `tools/` o'tkazgich va solishtirish skriptlari.

## Hozircha yo'q (qulf ochilgach)
Sahifalardagi ma'lumotlar namunaviy (API'ga ulanmagan), kod muharriri statik (Monaco yo'q), formulalar oddiy matn (KaTeX yo'q),
sahifa matnlari faqat o'zbekcha, takrorlanuvchi bloklar komponentlarga ajratilmagan.

Qarang: `DESIGN_LOCK.md`.
