import { useToast } from "../store/toast";

export function Toaster() {
  const items = useToast((s) => s.items);
  const dismiss = useToast((s) => s.dismiss);
  return (
    <div className="mw-toast-wrap" role="status" aria-live="polite">
      {items.map((t) => (
        <div key={t.id} data-id={t.id} className="mw-toast">
          <span>{t.text}</span>
          {t.undo && <button onClick={() => { t.undo?.(); dismiss(t.id); }}>Qaytarish</button>}
        </div>
      ))}
    </div>
  );
}
