import { useSyncExternalStore } from "react";

let fallback = "light";
const event = "moraditos-theme-change";
function snapshot() {
  try {
    return localStorage.getItem("moraditos-theme") || fallback;
  } catch {
    return fallback;
  }
}
function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(event, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(event, listener);
  };
}
export function useHeroTheme() {
  const theme = useSyncExternalStore(subscribe, snapshot, () => "light");
  function toggleTheme() {
    fallback = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("moraditos-theme", fallback);
    } catch {
      /* In-memory fallback. */
    }
    window.dispatchEvent(new Event(event));
  }
  return { dark: theme === "dark", toggleTheme };
}
