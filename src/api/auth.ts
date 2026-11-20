// Auth calls for the Django backend (apps/users: /auth/register/, /auth/login/, /auth/password-reset/ ...).
// When the API is not reachable (a static preview, no backend yet) the pages fall back to DEMO mode so the
// whole app can still be explored. Demo mode is clearly labelled in the UI and never calls itself "real".
const BASE = import.meta.env.VITE_API_URL ?? "/api";
export const DEMO_ALLOWED = import.meta.env.VITE_AUTH_DEMO !== "0";

export type FieldErrors = Record<string, string>;
export class AuthError extends Error {
  constructor(message: string, public fields: FieldErrors = {}, public unreachable = false) { super(message); }
}

async function post(path: string, body: unknown): Promise<unknown> {
  let res: Response;
  try {
    res = await fetch(`${BASE}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  } catch {
    throw new AuthError("Serverga ulanib bo'lmadi.", {}, true);
  }
  const isJson = (res.headers.get("content-type") ?? "").includes("json");
  if (!isJson) throw new AuthError("Server javob bermadi.", {}, true); // e.g. the static host answers with index.html
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (res.ok) return data;
  const fields: FieldErrors = {};
  for (const [k, v] of Object.entries(data)) if (k !== "detail") fields[k] = Array.isArray(v) ? String(v[0]) : String(v);
  const detail = typeof data.detail === "string" ? data.detail : res.status === 401 ? "Login yoki parol noto'g'ri." : res.status === 429 ? "Juda ko'p urinish. Birozdan keyin qayta urining." : "Xatolik yuz berdi.";
  throw new AuthError(detail, fields);
}

export const login = (username: string, password: string) => post("/auth/login/", { username, password }) as Promise<{ access: string; refresh: string }>;
export const register = (p: { username: string; email: string; password: string; display_name: string; language: string }) => post("/auth/register/", p) as Promise<{ id: number; username: string }>;
export const requestReset = (email: string) => post("/auth/password-reset/", { email }) as Promise<{ detail: string }>;
export const confirmReset = (p: { uid: string; token: string; password: string }) => post("/auth/password-reset/confirm/", p) as Promise<{ detail: string }>;
