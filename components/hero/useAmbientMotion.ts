import { useEffect, useRef, useState } from "react";

// Writes one CSS variable only on visibility changes, never on animation frames.
export function useAmbientMotion() {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let inView = true;
    const update = () => {
      setVisible(inView && !document.hidden);
      element.style.setProperty(
        "--ambient-play-state",
        inView && !document.hidden ? "running" : "paused",
      );
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return { ref, visible };
}
