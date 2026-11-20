import { Suspense, lazy, useEffect, type ComponentType, type ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { ROUTES, type PageName } from "./routes";
import { useUI } from "./store/ui";
import { useAuth } from "./store/auth";
import { useShellVals } from "./store/useShellVals";
import { Toaster } from "./components/Toaster";

// generated (from the approved design) + hand-written signed-in pages
const modules = import.meta.glob<{ default: ComponentType }>(["./pages/generated/*.tsx", "./pages/app/*.tsx"]);
const loader = (name: string) => (modules[`./pages/generated/${name}.tsx`] ?? modules[`./pages/app/${name}.tsx`])!;
const pages = (Object.keys(ROUTES) as PageName[]).map((name) => ({ name, path: ROUTES[name], Component: lazy(loader(name)) }));

const authModules = import.meta.glob<{ default: ComponentType }>("./pages/auth/{Login,Register,Forgot,Reset}.tsx");
const auth = (n: string) => lazy(authModules[`./pages/auth/${n}.tsx`]!);
const Login = auth("Login"), Register = auth("Register"), Forgot = auth("Forgot"), Reset = auth("Reset");
const Legal = lazy(modules["./pages/app/Legal.tsx"]!);
const NotFound = lazy(modules["./pages/app/NotFound.tsx"]!);

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
  useEffect(() => { void i18n.changeLanguage(lang); }, [lang, i18n]);
}

function RequireAuth({ children }: { children: ReactNode }) {
  const signedIn = useAuth((s) => !!s.user);
  const loggedOut = useAuth((s) => s.loggedOut);
  const { pathname, search } = useLocation();
  if (!signedIn) return <Navigate to={`/login${pathname === "/" || loggedOut ? "" : `?next=${encodeURIComponent(pathname + search)}`}`} replace />;
  return <>{children}</>;
}

const Loading = () => <div role="status" aria-label="Yuklanmoqda" style={{ height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mu)", fontSize: 14 }}>Yuklanmoqda…</div>;

export function App() {
  useDocumentSettings();
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auth/login" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/register" element={<Navigate to="/register" replace />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/auth/reset" element={<Reset />} />
          <Route path="/legal" element={<Legal />} />
          {pages.map(({ name, path, Component }) => (
            <Route key={name} path={path} element={<RequireAuth><Component /></RequireAuth>} />
          ))}
          <Route path="*" element={<RequireAuth><NotFound /></RequireAuth>} />
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
}
