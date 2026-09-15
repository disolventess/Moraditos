export const slides = [
  {
    id: "negocios",
    label: "Negocios",
    title: ["Tus yapeos,", "al alcance", "de tu equipo."],
    description: "Consulta los avisos desde otro celular o computadora.",
    image: "/hero/negocios.png",
    alt: "La mascota de Moraditos sobre el mostrador de una panadería",
    notification: "Nuevo Moradito",
    amount: "S/25.00",
    caption: "Aviso recibido · Ahora",
  },
  {
    id: "streamers",
    label: "Streamers",
    title: ["Tu live suena", "mejor con", "Moraditos."],
    description: "Convierte tus yapeos en alertas con sonido para tu live.",
    image: "/hero/streamers.png",
    alt: "La mascota de Moraditos con gafas en un escritorio de streaming",
    notification: "Nuevo aporte",
    amount: "S/25.00",
    caption: "¡Haz sonar tus Moraditos!",
  },
] as const;

export type HeroSlide = (typeof slides)[number];
