import m from "./Motion.module.css";
import Icon from "./Icons";
import type { HeroSlide } from "./slides";
import s from "./Hero.module.css";

export default function HeroCopy({
  slide,
  ctaHref,
}: {
  slide: HeroSlide;
  ctaHref: string;
}) {
  return (
    <div className={s.copy}>
      <div key={slide.id} className={s.copyEnter}>
        <h1 id="hero-title" aria-label={slide.title.join(" ")}>
          {slide.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p>{slide.description}</p>
      </div>
      <a className={`${s.cta} ${m.slime}`} href={ctaHref}>
        Probar Moraditos
        <Icon name="arrow" />
      </a>
    </div>
  );
}
