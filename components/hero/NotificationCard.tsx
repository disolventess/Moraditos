import Icon from "./Icons";
import s from "./Notification.module.css";
export default function NotificationCard({ gamer = false }: { gamer?: boolean }) {
  return <div className={gamer ? s.gamer : s.card}>
    <span className={s.symbol} aria-hidden="true">{gamer ? <span className={s.mark} /> : <Icon name="bell" />}</span>
    <div className={s.text}>
      <span className={s.label}>{gamer ? "¡Jose Tin* te moradeó!" : "Nuevo Moradito"}</span>
      <strong className={s.amount}>S/25.00</strong>
      <span className={s.caption}>{gamer ? "¡Haz sonar tus Moraditos!" : "Aviso recibido · Ahora"}</span>
    </div>
    <span className={s.dot} aria-hidden="true" />
  </div>;
}
