import { slides } from "./slides";
import s from "./Controls.module.css";
type Props = { active: number; onSelect: (index: number) => void };
export default function HeroControls({ active, onSelect }: Props) {
  return <div className={s.controls} role="group" aria-label="Elegir público">
    {slides.map((slide, index) => <button type="button" key={slide.id} aria-controls="hero-content"
      aria-pressed={active === index} onClick={() => onSelect(index)}>
      <span className={s.radio} aria-hidden="true" /><span>Para {slide.label.toLowerCase()}</span>
    </button>)}
  </div>;
}
