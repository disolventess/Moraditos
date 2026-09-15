"use client";

import { useState } from "react";
import Header from "./Header";
import HeroCopy from "./HeroCopy";
import HeroScene from "./HeroScene";
import HeroControls from "./HeroControls";
import WaveBackground from "./WaveBackground";
import { useAmbientMotion } from "./useAmbientMotion";
import { useHeroTheme } from "./useHeroTheme";
import { slides } from "./slides";
import s from "./Hero.module.css";

type Props = { ctaHref?: string; panelHref?: string; scrollTarget?: string };
export default function Hero({
  ctaHref = "/registro",
  panelHref = "/panel",
  scrollTarget = "#como-funciona",
}: Props) {
  const [active, setActive] = useState(0);
  const { dark, toggleTheme } = useHeroTheme();
  const ref = useAmbientMotion();
  return (
    <section
      ref={ref}
      className={s.hero}
      data-theme={dark ? "dark" : "light"}
      aria-label="Moraditos para negocios y streamers"
      aria-roledescription="carrusel"
    >
      <WaveBackground />
      <Header
        dark={dark}
        onTheme={toggleTheme}
        active={active}
        onSelect={setActive}
        panelHref={panelHref}
      />
      <div className={s.body} id="hero-content">
        <HeroCopy slide={slides[active]} ctaHref={ctaHref} />
        <HeroScene active={active} />
      </div>
      <p className={s.srOnly} aria-live="polite" aria-atomic="true">
        {active + 1} de {slides.length}: {slides[active].label}
      </p>
      <HeroControls
        active={active}
        onSelect={setActive}
        scrollTarget={scrollTarget}
      />
    </section>
  );
}
