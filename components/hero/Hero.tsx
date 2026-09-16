"use client";
import { useState } from "react";
import Header from "./Header";
import HeroCopy from "./HeroCopy";
import HeroScene from "./HeroScene";
import HeroControls from "./HeroControls";
import { useHeroTheme } from "./useHeroTheme";
import { useHeroCarousel } from "./useHeroCarousel";
import { slides } from "./slides";
import s from "./Hero.module.css";

type Props = { ctaHref?: string; panelHref?: string; scrollTarget?: string };
export default function Hero({ ctaHref = "/registro", panelHref = "/panel" }: Props) {
  const carousel = useHeroCarousel();
  const { active, select } = carousel;
  const { dark, toggleTheme } = useHeroTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return <section id="hero" className={s.hero} data-theme={dark ? "dark" : "light"}
    aria-label="Moraditos para negocios y streamers">
    <Header dark={dark} onTheme={toggleTheme} active={active} onSelect={select}
      panelHref={panelHref} menuOpen={menuOpen} onMenuOpen={setMenuOpen} />
    <div className={s.body} id="hero-content">
      <svg className={s.backdrop} viewBox="0 0 900 700" preserveAspectRatio="none" aria-hidden="true">
        <path className={s.curveEdge} d="M0 0H900V700H790C475 685 286 691 252 440C225 224 31 245 0 0Z" />
        <path className={s.curve} d="M24 0H900V700H830C504 686 310 682 276 438C249 224 57 239 24 0Z" />
      </svg>
      <div className={s.content}>
        <HeroCopy active={active} phase="idle" ctaHref={ctaHref} />
        <HeroControls active={active} onSelect={select} />
      </div>
      <HeroScene target={null} copyIndex={active} phase="idle" />
    </div>
    <p className={s.srOnly} aria-live="polite" aria-atomic="true">
      {active + 1} de {slides.length}: {slides[active].label}
    </p>
  </section>;
}
