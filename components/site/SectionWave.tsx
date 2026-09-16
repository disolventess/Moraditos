export default function SectionWave() {
  return <div className="section-wave" aria-hidden="true">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path className="wave-back" d="M0 42C260 145 420-5 720 48s460 72 720-23v95H0Z" />
      <path className="wave-front" d="M0 64C240 144 420 6 720 64s470 49 720-5v61H0Z" />
    </svg>
  </div>;
}
