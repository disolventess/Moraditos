import { useEffect, useRef } from "react";

export function useAutoHideHeader(menuOpen: boolean) {
  const header = useRef<HTMLDivElement>(null);
  const spacer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = header.current;
    const space = spacer.current;
    if (!node || !space) return;
    let previous = Math.max(0, window.scrollY);
    let distance = 0;
    let direction = 0;
    function show() {
      node!.dataset.hidden = "false";
      node!.inert = false;
    }
    function measure() { space!.style.height = `${node!.offsetHeight}px`; }
    function scroll() {
      const y = Math.max(0, window.scrollY);
      const delta = y - previous;
      previous = y;
      if (y < 100 || menuOpen || (node!.contains(document.activeElement) && document.activeElement?.matches(":focus-visible"))) { show(); distance = 0; return; }
      const nextDirection = Math.sign(delta);
      if (nextDirection !== direction) distance = 0;
      direction = nextDirection;
      distance += Math.abs(delta);
      if (distance < 12) return;
      const hidden = delta > 0;
      node!.dataset.hidden = String(hidden);
      node!.inert = hidden;
      distance = 0;
    }
    function resume() {
      if (!document.hidden) { previous = Math.max(0, window.scrollY); distance = 0; show(); }
    }
    measure(); show();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pageshow", resume);
    document.addEventListener("visibilitychange", resume);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pageshow", resume);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [menuOpen]);
  return { header, spacer };
}
