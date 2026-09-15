import m from "./Motion.module.css";
import Icon from "./Icons";
import { slides } from "./slides";
import s from "./Controls.module.css";

type Props = {
  active: number;
  onSelect: (index: number) => void;
  scrollTarget: string;
};
export default function HeroControls({
  active,
  onSelect,
  scrollTarget,
}: Props) {
  return (
    <>
      <button
        type="button"
        className={`${s.side} ${s.previous} ${m.slime}`}
        aria-label="Diapositiva anterior"
        aria-controls="hero-content"
        onClick={() => onSelect((active + slides.length - 1) % slides.length)}
      >
        <Icon name="left" />
      </button>
      <button
        type="button"
        className={`${s.side} ${s.next} ${m.slime}`}
        aria-label="Diapositiva siguiente"
        aria-controls="hero-content"
        onClick={() => onSelect((active + 1) % slides.length)}
      >
        <Icon name="right" />
      </button>
      <div className={s.controls}>
        <div className={s.dots} aria-label="Elegir público">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={m.slime}
              aria-label={`Mostrar ${slide.label}`}
              aria-pressed={active === index}
              onClick={() => onSelect(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <a
          className={`${s.scroll} ${m.slime}`}
          href={scrollTarget}
          aria-label="Bajar a cómo funciona"
        >
          <Icon name="down" />
          <Icon name="down" />
          <Icon name="down" />
        </a>
      </div>
    </>
  );
}
