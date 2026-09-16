import Image from "next/image";
import NotificationCard from "../hero/NotificationCard";
import RevealOnce from "./RevealOnce";
import HowItWorks from "./HowItWorks";
import UseCases from "./UseCases";
import Icon from "../hero/Icons";
import s from "./ProductInfo.module.css";
import Pricing from "../pricing/Pricing";
import waves from "./IntroWaves.module.css";
export default function ProductInfo() {
  return <div className={s.sections}>
    <section className={`${s.intro} ${waves.section}`} id="que-es-moraditos">
      <RevealOnce className={s.portrait}>
        <div className={s.halo} aria-hidden="true" />
        <Image src="/hero/negociante.webp" alt="Una comerciante revisa un aviso en su celular" width={800} height={1200} sizes="(max-width: 760px) 90vw, 38vw" />
        <div className={s.portraitNotice}><NotificationCard /></div>
      </RevealOnce>
      <RevealOnce className={s.explanation}>
        <span className={s.eyebrow}>¿QUÉ ES MORADITOS?</span>
        <h2>Menos «¿ya llegó?».<br />Más tiempo para atender.</h2>
        <p>El yapeo llega al Android vinculado. Moraditos comparte el aviso en otro celular o computadora para que tu equipo también pueda verlo y escucharlo.</p>
        <div className={s.benefit} id="para-negocios"><span aria-hidden="true">✓</span> Tú sigues con lo tuyo. Tu equipo se mantiene al tanto.</div>
        <a className={s.primaryCta} href="#como-funciona">Conoce cómo funciona <Icon name="arrow" /></a>
      </RevealOnce>
    </section>
    <HowItWorks />
    <UseCases />
    <Pricing />
    <section className={s.faq} id="preguntas-frecuentes"><RevealOnce>
      <span className={s.eyebrow}>ANTES DE COMENZAR</span><h2>Lo esencial, sin vueltas.</h2>
      <details><summary>¿Necesito Yape en cada dispositivo?</summary><p>No. El Android vinculado recibe la notificación de Yape. Los demás dispositivos autorizados consultan los avisos desde el panel de Moraditos.</p></details>
      <details><summary>¿Puedo consultar los avisos desde una computadora?</summary><p>Sí, desde el panel web. También puedes abrirlo en otro celular con acceso autorizado.</p></details>
      <details><summary>¿Moraditos verifica los abonos con el banco?</summary><p>No. Comparte avisos detectados en las notificaciones del Android; no verifica directamente los abonos bancarios.</p></details>
    </RevealOnce></section>
  </div>;
}
