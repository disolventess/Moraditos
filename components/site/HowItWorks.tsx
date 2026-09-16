"use client";
import { useState } from "react";
import StepIcon from "./StepIcon";
import RevealOnce from "./RevealOnce";
import s from "./HowItWorks.module.css";
const experiences = [
  [
    ["Conecta tu Android", "Activa las notificaciones."],
    ["Abre tu panel", "Desde otro dispositivo."],
    ["Recibe tus avisos", "Con imagen y sonido."],
  ],
  [
    ["Conecta tu Android", "Vincula tus avisos de yapeos."],
    ["Añade tu widget", "Como fuente de navegador."],
    ["Haz sonar tu live", "Cada aporte, una alerta."],
  ],
];
export default function HowItWorks() {
  const [active, setActive] = useState(0);
  return <section id="como-funciona" className={s.section}>
    <RevealOnce>
      <h2 className={s.title}>Tus Moraditos, en tres pasos.</h2>
      <div className={s.selector} role="group" aria-label="Cómo funciona según tu actividad">
        <button type="button" aria-pressed={active === 0} aria-controls="how-experience" onClick={() => setActive(0)}>Para negocios <span>(Caja y equipo)</span></button>
        <button type="button" aria-pressed={active === 1} aria-controls="how-experience" onClick={() => setActive(1)}>Para streamers <span>(OBS y lives)</span></button>
      </div>
      <ol id="how-experience" className={s.steps}>
        {experiences[active].map(([title, copy], index) => <li key={index}>
          <span className={s.number} aria-hidden="true">0{index + 1}</span>
          <span className={s.icon}><StepIcon step={index + 1} /></span>
          <h3>{title}</h3><p>{copy}</p>
        </li>)}
      </ol>
      <p className={s.note}>{active === 0 ? "Tu Android conectado. Tu equipo, al tanto." : "Tu Android conectado. Tu comunidad lo escucha."}</p>
    </RevealOnce>
  </section>;
}
