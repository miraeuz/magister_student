import { Suspense, lazy, useEffect, type ComponentType } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { useTranslation } from "react-i18next";
import { ROUTES, type PageName } from "./routes";
import { useUI } from "./store/ui";
import { useShellVals } from "./store/useShellVals";

const modules = import.meta.glob<{ default: ComponentType }>("./pages/generated/*.tsx");

const pages = (Object.keys(ROUTES) as PageName[]).map((name) => ({
  name,
  path: ROUTES[name],
  Component: lazy(modules[`./pages/generated/${name}.tsx`]!),
}));

/** Keeps <html> in sync with the chosen theme and language so the page background follows the theme. */
function useDocumentSettings() {
  const { theme, accent } = useShellVals();
  const lang = useUI((s) => s.lang);
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.accent = accent;
    document.documentElement.lang = lang;
    document.body.style.background = "var(--bg)";
  }, [theme, accent, lang]);
  useEffect(() => {
    void i18n.changeLanguage(lang);
  }, [lang, i18n]);
}

export function App() {
  useDocumentSettings();
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Suspense fallback={null}>
        <Routes>
          {pages.map(({ name, path, Component }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<p style={{ padding: 24 }}>Sahifa topilmadi.</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
