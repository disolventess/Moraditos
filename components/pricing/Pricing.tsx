"use client";
import { useState } from "react";
import RevealOnce from "../site/RevealOnce";
import { plans } from "./plans";
import s from "./Pricing.module.css";
const format = (value: number) => value === 0 ? "0" : value.toFixed(2);
function Mark({ excluded = false }: { excluded?: boolean }) {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={excluded ? "m5 5 10 10M15 5 5 15" : "m3 10 4 4L17 4"} /></svg>;
}
export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  return <section id="suscripciones" className={s.section} aria-labelledby="pricing-title">
    <div className={s.waves} aria-hidden="true"><span /><span /></div>
    <div className={s.inner}><RevealOnce>
      <header className={s.heading}><h2 id="pricing-title">Elige tu plan</h2><p>Para tu negocio o tus transmisiones.</p></header>
      <div className={s.billing} role="group" aria-label="Periodo de suscripción">
        <button type="button" aria-pressed={!annual} aria-controls="pricing-cards" onClick={() => setAnnual(false)}>Mensual</button>
        <button type="button" aria-pressed={annual} aria-controls="pricing-cards" onClick={() => setAnnual(true)}>Anual</button>
      </div>
      <p className={s.periodNote} aria-live="polite">{annual ? "Los planes de pago muestran el total anual." : "Precios por mes."}</p>
      <div className={s.cards} id="pricing-cards">
        {plans.map(plan => {
          const free = plan.monthlyPrice === 0;
          const total = annual && !free ? plan.annualPrice ?? plan.monthlyPrice * 12 : plan.monthlyPrice;
          return <article key={plan.id} className={s.card} data-featured={!!plan.featured} aria-labelledby={`plan-${plan.id}`}>
            <div className={s.planHeader}>
              <span className={s.badge} aria-hidden={!plan.featured}>{plan.featured ? "PARA TU EQUIPO" : "\u00a0"}</span>
              <h3 id={`plan-${plan.id}`}>{plan.name}</h3><p>{plan.description}</p>
            </div>
            <div className={s.price}><strong>S/ {format(total)}</strong><span>/ {annual && !free ? "año" : "mes"}</span></div>
            <p className={s.equivalent}>{annual && !free ? `Equivale a S/ ${format(total / 12)} al mes.` : "\u00a0"}</p>
            <ul className={s.features} aria-label="Incluye">{plan.features.map(feature => <li key={feature}><Mark /><span>{feature}</span></li>)}</ul>
            {plan.exclusions && <div className={s.exclusions}><h4>No incluye</h4><ul>{plan.exclusions.map(feature => <li key={feature}><Mark excluded /><span>{feature}</span></li>)}</ul></div>}
            {plan.note && <p className={s.planNote}>{plan.note}</p>}
            <a className={s.cta} data-free={free} href={`${plan.href}${plan.href.includes("?") ? "&" : "?"}plan=${plan.id}&periodo=${annual && !free ? "anual" : "mensual"}`} aria-label={`${plan.cta}: ${plan.name}`}>{free ? plan.cta : <><span>Iniciar prueba gratis</span><span>de 7 días</span></>}</a>
          </article>;
        })}
      </div>
    </RevealOnce></div>
  </section>;
}
