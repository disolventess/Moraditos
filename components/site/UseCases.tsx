import RevealOnce from "./RevealOnce";
import PreviewIcon from "./PreviewIcon";
import SoundDemo from "./SoundDemo";
import s from "./UseCases.module.css";
export default function UseCases() {
  return <section className={s.section} aria-labelledby="use-cases-title">
    <div className={s.inner}>
      <RevealOnce>
        <header className={s.heading}><h2 id="use-cases-title">Así se ve en tu día a día.</h2><p>En el mostrador o en tu transmisión, cada aviso tiene su lugar.</p></header>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.tag}>EN TU NEGOCIO</span><h3>Sigue atendiendo.</h3><p>Tu equipo ve y escucha el aviso desde el panel.</p>
            <div className={s.panel} role="img" aria-label="Ejemplo de panel del negocio: nuevo Moradito de S/25.00, Andrea P.">
              <div aria-hidden="true">
                <div className={s.panelTop}><span><b>Moraditos</b><i>/</i>Mi negocio</span><span className={s.panelTools}><PreviewIcon name="settings" /><PreviewIcon name="person" /></span></div>
                <div className={s.panelBody}>
                  <div className={s.sidebar}><span data-active="true"><PreviewIcon name="bell" />Avisos</span><span><PreviewIcon name="clock" />Historial</span><span><PreviewIcon name="phone" />Dispositivos</span><span><PreviewIcon name="settings" />Configuración</span></div>
                  <div className={s.noticeArea}><div className={s.notice}><span className={s.bell}><PreviewIcon name="bell" /></span><div><b>Nuevo Moradito</b><strong>S/25.00</strong><small>Andrea P. · Ahora</small></div><i /></div></div>
                </div>
              </div>
            </div>
          </article>
          <article className={s.card} id="para-streamers">
            <span className={s.tag}>EN TU STREAM</span><h3>Hazlo parte del directo.</h3><p>Muestra los aportes y dales tu propio sonido.</p>
            <div className={s.stream} role="img" aria-label="Ejemplo de una transmisión con una alerta: Diego M. envió S/10.">
              <div aria-hidden="true" className={s.streamInner}>
                <div className={s.live}><span><i />EN VIVO</span><span><PreviewIcon name="person" />1.2K</span></div>
                <div className={s.streamAlert}><span className={s.streamBell}><PreviewIcon name="bell" /></span><div><strong>¡Diego M. envió S/10!</strong><span>Un moradito para el directo</span></div></div>
                <div className={s.player}><PreviewIcon name="pause" /><PreviewIcon name="volume" /><span className={s.progress} /><span className={s.playerSpace} /><PreviewIcon name="settings" /><PreviewIcon name="screen" /><PreviewIcon name="expand" /></div>
              </div>
            </div>
          </article>
        </div>
        <p className={s.example}>Vistas de ejemplo de Moraditos.</p>
      </RevealOnce>
      <RevealOnce><SoundDemo /></RevealOnce>
    </div>
  </section>;
}
