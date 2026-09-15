import s from "./Motion.module.css";

export default function WaveBackground() {
  return (
    <div className={s.waves} aria-hidden="true">
      <span className={s.top} />
      <span className={s.left} />
      <span className={s.right} />
    </div>
  );
}
