import { useState, type ChangeEvent } from "react";
import { useShellVals } from "../store/useShellVals";

/** Logistic growth model: N(t) = K / (1 + ((K - N0) / N0) * e^(-r t)). Sliders change the plotted curve live. */
export function useLessonVals() {
  const shell = useShellVals();
  const [rPct, setRPct] = useState(50);
  const [K, setK] = useState(1000);
  const [n0, setN0] = useState(50);

  const r = rPct / 100;
  const ymaxRaw = Math.max(K, n0) * 1.12;
  const X0 = 44, X1 = 508, Y0 = 244, Y1 = 16, T = 30;
  const fy = (val: number) => Y0 - (val / ymaxRaw) * (Y0 - Y1);
  const N = (t: number) => K / (1 + ((K - n0) / n0) * Math.exp(-r * t));
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const t = (T * i) / 120;
    pts.push((X0 + ((X1 - X0) * i) / 120).toFixed(1) + "," + fy(N(t)).toFixed(1));
  }
  let remark = "son K ga pastdan yaqinlashadi: avval tez, keyin sekin (S shaklidagi egri chiziq).";
  if (n0 > K) remark = "boshlang'ich son K dan katta, shuning uchun son kamayib K ga tushadi.";
  else if (n0 === K) remark = "boshlang'ich son K ga teng: son o'zgarmaydi, bu muvozanat holati.";
  else if (r < 0.15) remark = "r kichik: 30 birlik vaqt ichida son K ga yetib ulgurmaydi.";
  else if (n0 > K / 2) remark = "boshlang'ich son K ning yarmidan katta: o'sish boshidanoq sekinlashib boradi.";

  const num = (e: ChangeEvent<HTMLInputElement>) => Number(e.target.value);
  return {
    ...shell,
    r: r.toFixed(2).replace(".", ","),
    rRaw: rPct,
    K: String(K),
    KRaw: K,
    n0: String(n0),
    n0Raw: n0,
    pts: pts.join(" "),
    ky: fy(K).toFixed(1),
    kty: (fy(K) - 6).toFixed(1),
    ymax: String(Math.round(ymaxRaw)),
    nEnd: String(Math.round(N(T))),
    remark,
    setR: (e: ChangeEvent<HTMLInputElement>) => setRPct(num(e)),
    setK: (e: ChangeEvent<HTMLInputElement>) => setK(num(e)),
    setN0: (e: ChangeEvent<HTMLInputElement>) => setN0(num(e)),
  };
}
