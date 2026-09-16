import m from "./Motion.module.css";
import Icon from "./Icons";
import { slides } from "./slides";
import s from "./Hero.module.css";
export default function HeroCopy({ active, phase, ctaHref }: { active: number; phase: string; ctaHref: string }) {
  return <div className={s.copy}>
    <div className={s.copyReserve}>
      {slides.map((slide, index) => <div key={slide.id} className={s.copyVariant}
        data-visible={index === active} data-phase={phase} aria-hidden={index !== active}>
        <h1>{slide.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{slide.description}</p>
      </div>)}
    </div>
    <div className={s.actions}>
      <a className={`${s.cta} ${m.slime}`} href={ctaHref}>{active === 0 ? "Probar para mi negocio" : "Activar alertas en mi live"} <Icon name="arrow" /></a>
      <a className={s.more} href="#que-es-moraditos">Más información</a>
    </div>
  </div>;
}
