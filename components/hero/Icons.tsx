import type { SVGProps } from "react";

type Name =
  "left" | "right" | "down" | "arrow" | "sun" | "moon" | "grid" | "bell";
const paths: Record<Name, string> = {
  left: "m14 6-6 6 6 6",
  right: "m10 6 6 6-6 6",
  down: "m6 9 6 6 6-6",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  moon: "M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10Z",
  grid: "M3 3h6v6H3zm12 0h6v6h-6zM3 15h6v6H3zm12 0h6v6h-6z",
  bell: "M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9m4 12h4M12 1v2",
};
export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: Name }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
