import s from "./BrandLogo.module.css";
// The original vector is used as a mask: symbol and letters share the exact color.
export default function BrandLogo({ href = "/", compact = false }: { href?: string; compact?: boolean }) {
  return <a href={href} className={s.logo} data-compact={compact} aria-label="Moraditos, inicio">
    <span className={s.symbol} aria-hidden="true" />
    <span className={s.name} aria-hidden="true">oraditos</span>
  </a>;
}
