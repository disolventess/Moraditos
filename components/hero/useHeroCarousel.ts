import { useState } from "react";

// Manual selection only: no timers, busy locks or background-tab transitions.
export function useHeroCarousel() {
  const [active, setActive] = useState(0);
  return { active, select: (index: number) => setActive(index === 1 ? 1 : 0) };
}
