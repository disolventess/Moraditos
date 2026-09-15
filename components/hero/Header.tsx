import Link from "next/link";
import Image from "next/image";
import { slides } from "./slides";
import m from "./Motion.module.css";
import { useRef } from "react";
import Icon from "./Icons";
import s from "./Header.module.css";

type Props = {
  dark: boolean;
  active: number;
  onTheme: () => void;
  onSelect: (index: number) => void;
  panelHref: string;
};
export default function Header({
  dark,
  onTheme,
  active,
  onSelect,
  panelHref,
}: Props) {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }
  const links = (
    <>
      <a href="#como-funciona" onClick={closeMenu}>
        CÓMO FUNCIONA
      </a>
      <button
        type="button"
        onClick={() => {
          onSelect(0);
          closeMenu();
        }}
      >
        PARA NEGOCIOS
      </button>
      <button
        type="button"
        onClick={() => {
          onSelect(1);
          closeMenu();
        }}
      >
        PARA STREAMERS
      </button>
      <a href="#preguntas-frecuentes" onClick={closeMenu}>
        PREGUNTAS FRECUENTES
      </a>
    </>
  );
  const panel = (
    <a className={`${s.panel} ${m.slime}`} href={panelHref}>
      <Icon name="grid" />
      Panel de control
    </a>
  );
  return (
    <div className={s.headerGroup}>
      <header className={s.header}>
        <Link className={s.logo} href="/" aria-label="Moraditos, inicio">
          <Image src="/hero/symbol.svg" width={72} height={55} alt="" />
          <span>oraditos</span>
        </Link>
        <div className={s.bar}>
          <nav className={s.desktop} aria-label="Navegación principal">
            {links}
          </nav>
          <button
            type="button"
            className={`${s.theme} ${m.slime}`}
            onClick={onTheme}
            aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
          >
            <Icon name="sun" className={dark ? s.inactiveIcon : s.selected} />
            <Icon name="moon" className={dark ? s.selected : s.inactiveIcon} />
          </button>
          <div className={s.desktopPanel}>{panel}</div>
          <details
            ref={menu}
            className={s.mobile}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeMenu();
                menu.current?.querySelector("summary")?.focus();
              }
            }}
          >
            <summary aria-label="Abrir menú">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Navegación móvil">
              {links}
              {panel}
            </nav>
          </details>
        </div>
      </header>
      <div className={s.mobileIntro}>
        {panel}
        <div className={s.audience} role="group" aria-label="Elegir público">
          <span
            className={s.selection}
            data-index={active}
            aria-hidden="true"
          />
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              aria-pressed={active === index}
              className={m.slime}
              onClick={() => onSelect(index)}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
