export const slides = [
  {
    id: "negocios",
    label: "Negocios",
    title: ["Escucha tus", "Moraditos.", "Sigue con lo tuyo."],
    description: "Recibe avisos de tus yapeos en otro celular o computadora, mientras atiendes tu negocio.",
    image: "/hero/negocios-background.webp",
    alt: "La mascota de Moraditos sobre el mostrador de una panadería",
    notification: "Nuevo Moradito",
    amount: "S/25.00",
    caption: "Aviso recibido · Ahora",
  },
  {
    id: "streamers",
    label: "Streamers",
    title: ["Tu live suena", "mejor con", "Moraditos."],
    description: "Convierte tus yapeos en alertas con imagen y sonido. Dale a cada aporte su momento en tu live.",
    image: "/hero/streamers-background.webp",
    alt: "La mascota de Moraditos con gafas en un escritorio de streaming",
    notification: "Nuevo aporte",
    amount: "S/25.00",
    caption: "¡Haz sonar tus Moraditos!",
  },
] as const;

export type HeroSlide = (typeof slides)[number];
