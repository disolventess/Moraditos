import Hero from "../components/hero/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero ctaHref="/registro" panelHref="/panel" />
      {/* Secciones de ejemplo: reemplázalas por las de tu página. */}
      <section className="info" id="como-funciona">
        <h2>Del celular a tu equipo.</h2>
        <ol>
          <li>Vincula el Android que recibe tus notificaciones de Yape.</li>
          <li>Autoriza el dispositivo donde consultarás los avisos.</li>
          <li>Consulta los nuevos avisos y el estado de conexión.</li>
        </ol>
        <p>
          Moraditos transmite notificaciones detectadas; no verifica
          directamente los abonos bancarios.
        </p>
      </section>
      <section className="info" id="preguntas-frecuentes">
        <h2>Preguntas frecuentes</h2>
        <details>
          <summary>¿Desde dónde puedo consultar los avisos?</summary>
          <p>Desde el panel web en un celular o computadora autorizado.</p>
        </details>
        <details>
          <summary>¿Necesito mantener conectado el Android?</summary>
          <p>
            Sí. El dispositivo vinculado necesita permisos y conexión para
            sincronizar las notificaciones.
          </p>
        </details>
      </section>
    </main>
  );
}
