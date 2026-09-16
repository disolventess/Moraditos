import { useEffect, useRef, type ReactNode } from "react";
import s from "./Menu.module.css";

type Props = { open: boolean; onOpen: (open: boolean) => void; children: ReactNode };
export default function MobileMenu({ open, onOpen, children }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) onOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { onOpen(false); trigger.current?.focus(); }
    }
    function suspend() { onOpen(false); }
    function visibility() { if (document.hidden) suspend(); }
    const desktop = matchMedia("(min-width: 1201px)");
    function resize() { if (desktop.matches) suspend(); }
    window.addEventListener("blur", suspend);
    window.addEventListener("pagehide", suspend);
    document.addEventListener("visibilitychange", visibility);
    desktop.addEventListener("change", resize);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("blur", suspend);
      window.removeEventListener("pagehide", suspend);
      document.removeEventListener("visibilitychange", visibility);
      desktop.removeEventListener("change", resize);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open, onOpen]);
  return (
    <div ref={root} className={s.root} data-open={open}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) onOpen(false);
      }}>
      <button ref={trigger} type="button" className={s.trigger}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open} aria-controls="mobile-menu"
        onClick={() => onOpen(!open)}>
        <span /><span /><span />
      </button>
      <div className={s.reveal} aria-hidden={!open} inert={!open}>
        <nav id="mobile-menu" aria-label="Navegación móvil" className={s.panel}>
          {children}
        </nav>
      </div>
    </div>
  );
}
