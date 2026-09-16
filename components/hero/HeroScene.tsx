import Mascot from "./Mascot";
import DevicePreview from "./DevicePreview";
import NotificationCard from "./NotificationCard";
import s from "./Scene.module.css";

type Props = {
  target: number | null;
  copyIndex: number;
  phase: string;
};

export default function HeroScene({
  target,
  copyIndex,
  phase,
}: Props) {
  const streamer = copyIndex === 1;

  return (
    <div
      className={s.scene}
      data-changing={target !== null}
      data-streamer={streamer}
      role="group"
      aria-label={
        streamer
          ? "Ejemplo de alerta Moraditos en una laptop de streaming"
          : "Ejemplo de aviso Moraditos en otro celular"
      }
    >
      <div className={s.deviceLayer} data-phase={phase}>
        <DevicePreview streamer={streamer} />

        {!streamer && (
          <div className={s.noticeSlot}>
            <NotificationCard />
          </div>
        )}
      </div>

      <Mascot streamer={(target ?? copyIndex) === 1} />

      <span className={s.demo}>Vista de ejemplo</span>
    </div>
  );
}