import { useAutoHideHeader } from "./useAutoHideHeader";
import BrandLogo from "../site/BrandLogo";
import m from "./Motion.module.css";
import MobileMenu from "./MobileMenu";
import Icon from "./Icons";
import s from "./Header.module.css";

type Props = {
  dark: boolean;
  active: number;
  onTheme: () => void;
  onSelect: (index: number) => void;
  panelHref: string;
  menuOpen: boolean;
  onMenuOpen: (open: boolean) => void;
};
export default function Header({
  dark,
  onTheme,
  onSelect,
  panelHref,
  menuOpen,
  onMenuOpen,
}: Props) {
  const { header, spacer } = useAutoHideHeader(menuOpen);
  function closeMenu() { onMenuOpen(false); }
  const links = (
    <>
      <a href="#como-funciona" onClick={closeMenu}>
        Cómo funciona
      </a>
      <button
        type="button"
        onClick={() => {
          onSelect(0);
          document.getElementById("hero")?.scrollIntoView();
          closeMenu();
        }}
      >
        Negocios
      </button>
      <button
        type="button"
        onClick={() => {
          onSelect(1);
          document.getElementById("hero")?.scrollIntoView();
          closeMenu();
        }}
      >
        Streamers
      </button>
      <a href="#que-es-moraditos" onClick={closeMenu}>
        Más información
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
    <div ref={spacer} className={s.headerSpace}>
    <div ref={header} className={s.headerGroup} data-hidden="false">
      <header className={s.header}>
        <BrandLogo />
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
          <MobileMenu open={menuOpen} onOpen={onMenuOpen}>
            {links}
            {panel}
          </MobileMenu>
        </div>
      </header>
      <div className={s.mobileIntro}>
        {panel}

      </div>
    </div>
    </div>
  );
}
