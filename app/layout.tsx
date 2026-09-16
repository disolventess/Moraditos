import type { Metadata } from "next";
import "@fontsource/fredoka/latin-600.css";
import "@fontsource/nunito-sans/latin-400.css";
import "@fontsource/nunito-sans/latin-700.css";
import "@fontsource/nunito-sans/latin-900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moraditos | Tus yapeos, al alcance de tu equipo",
  description:
    "Consulta los avisos de yapeos desde otro celular o computadora.",
  other: {
    google: "notranslate",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" translate="no">
      <body>{children}</body>
    </html>
  );
}
