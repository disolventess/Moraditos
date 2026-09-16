import Image from "next/image";
import s from "./Scene.module.css";

// One persistent body; the accessory moves with its squash-and-stretch parent.
export default function Mascot({ streamer }: { streamer: boolean }) {
  return <div className={s.mascot} aria-hidden="true">
    <Image src="/hero/mascota.webp" alt="" fill preload sizes="(max-width: 760px) 60vw, 34vw" />
    <svg className={s.glasses} data-visible={streamer} viewBox="0 0 300 82" fill="none">
      <path d="M2 4H298V23H286V50H275V67H194V56H182V27H118V55H107V67H25V55H14V24H2Z" fill="#170d24" stroke="#090510" strokeWidth="3" />
      <path d="M23 8H278" stroke="#49314e" strokeWidth="3" />
      <g fill="#eee3f2">
        <path d="M28 20h12v12H28zm12 12h12v12H40zm12 12h12v12H52zm0-24h12v12H52zm12 12h12v12H64zm12 12h12v12H76z" />
        <path d="M199 20h12v12h-12zm12 12h12v12h-12zm12 12h12v12h-12zm0-24h12v12h-12zm12 12h12v12h-12zm12 12h12v12h-12z" />
      </g>
    </svg>
  </div>;
}
