import Image from "next/image";
import NotificationCard from "./NotificationCard";
import s from "./Devices.module.css";
export default function DevicePreview({ streamer }: { streamer: boolean }) {
  if (streamer) return <div className={s.laptop}>
    <div className={s.lid}>
      <span className={s.camera} />
      <div className={s.display}>
        <Image src="/hero/game-world.webp" alt="Videojuego de aventura difuminado detrás de una alerta" fill sizes="(max-width: 760px) 90vw, 44vw" />
        <span className={s.live}><i /> EN VIVO</span>
        <div className={s.widget}><NotificationCard gamer /></div>
      </div>
    </div>
    <div className={s.base}><span /></div>
  </div>;
  return <div className={s.phone} aria-hidden="true">
    <div className={s.phoneScreen}>
      <span className={s.status}>9:41 <span>◒ ▰</span></span>
      <span className={s.punch} />
      <div className={s.clock}><span>Lunes, 14 de abril</span><strong>09:41</strong></div>
      <span className={s.phoneLine} />
    </div>
  </div>;
}
