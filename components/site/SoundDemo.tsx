"use client";
import { useEffect, useRef, useState } from "react";
import PreviewIcon from "./PreviewIcon";
import s from "./SoundDemo.module.css";
export default function SoundDemo() {
  const audio = useRef<HTMLAudioElement>(null);
  const busy = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const player = audio.current;
    function stop() {
      if (document.hidden && player) { player.pause(); player.currentTime = 0; busy.current = false; setPlaying(false); }
    }
    document.addEventListener("visibilitychange", stop);
    return () => { document.removeEventListener("visibilitychange", stop); player?.pause(); };
  }, []);
  async function play() {
    if (busy.current || !audio.current) return;
    busy.current = true; setError(false); setPlaying(true);
    try { audio.current.currentTime = 0; await audio.current.play(); }
    catch { busy.current = false; setPlaying(false); setError(true); }
  }
  function finish() { busy.current = false; setPlaying(false); }
  return <div className={s.block}>
    <div className={s.copy}><span className={s.icon}><PreviewIcon name="play" /></span><div><h3>¿Quieres escuchar cómo suena?</h3><p>Prueba un sonido de aviso de Moraditos.</p></div></div>
    <button type="button" onClick={play} disabled={playing}><PreviewIcon name="volume" />{playing ? "Reproduciendo…" : "Reproducir alerta de prueba"}</button>
    <audio ref={audio} src="/audio/moradito-demo.wav" preload="none" onEnded={finish} onError={() => { finish(); setError(true); }} />
    <span className={s.status} role="status">{error ? "No se pudo reproducir. Inténtalo de nuevo." : ""}</span>
  </div>;
}
