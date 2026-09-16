import BrandLogo from "./BrandLogo";
import SocialLinks from "./SocialLinks";
import { site } from "../../config/site";
const legalLabels = { privacy: "Privacidad", terms: "Términos y condiciones", complaints: "Libro de reclamaciones" };
export default function SiteFooter() {
  const hasContact = site.email || site.whatsapp || site.location || site.supportHours;
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <BrandLogo href="#hero" compact />
        <p>Tus avisos, más cerca.<br />Para tu negocio y para tu comunidad.</p>

      </div>
      <nav aria-label="Moraditos, producto"><h2>Moraditos</h2>
        <a href="#que-es-moraditos">Qué es Moraditos</a><a href="#para-negocios">Para negocios</a><a href="#para-streamers">Para streamers</a>
      </nav>
      <nav aria-label="Moraditos, ayuda"><h2>Explora</h2>
        <a href="#como-funciona">Cómo funciona</a><a href="#preguntas-frecuentes">Preguntas frecuentes</a>
        {site.email && <a href={`mailto:${site.email}`}>Contactar a soporte</a>}
      </nav>
      <SocialLinks />
      {hasContact && <div className="footer-contact"><h2>Hablemos</h2>
        {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
        {site.whatsapp && <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
        {site.location && <p>{site.location}</p>}{site.supportHours && <p>{site.supportHours}</p>}
      </div>}
    </div>
    <div className="footer-bottom">
      <div><span>© {new Date().getFullYear()} {site.legalName || site.brand}. Todos los derechos reservados.</span>
        {site.taxId && <span>RUC: {site.taxId}</span>}
      </div>
      <nav aria-label="Información legal">{Object.entries(site.legal).filter(([, url]) => url).map(([key, url]) => <a key={key} href={url}>{legalLabels[key as keyof typeof legalLabels]}</a>)}</nav>
    </div>
    <p className="footer-note">Moraditos es un servicio independiente y no está afiliado a Yape. Los avisos proceden de las notificaciones del dispositivo vinculado.</p>
  </footer>;
}
