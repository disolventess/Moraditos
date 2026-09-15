import Image from "next/image";
import Icon from "./Icons";
import { slides } from "./slides";
import s from "./Scene.module.css";

export default function HeroScene({ active }: { active: number }) {
  const slide = slides[active];
  return (
    <div className={s.scene}>
      {slides.map((item, index) => (
        <div
          key={item.id}
          className={s.layer}
          data-active={index === active}
          aria-hidden={index !== active}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            preload={index === 0}
            sizes="(max-width: 760px) 90vw, 58vw"
            className={s.photo}
          />
        </div>
      ))}
      <div className={s.notification}>
        <span className={s.bell}>
          <Icon name="bell" />
        </span>
        <div>
          <span className={s.label}>{slide.notification}</span>
          <strong>{slide.amount}</strong>
          <small>{slide.caption}</small>
        </div>
      </div>
    </div>
  );
}
