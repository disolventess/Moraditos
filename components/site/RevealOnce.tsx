"use client";
import { useEffect, useRef, type ReactNode } from "react";
import s from "./ProductInfo.module.css";
/** Progressive enhancement: content is visible without JS; each observer disconnects after its first reveal. */
export default function RevealOnce({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.dataset.reveal = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.reveal = "shown";
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${s.reveal} ${className}`}>{children}</div>;
}
