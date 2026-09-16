export type Plan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number | null;
  featured?: boolean;
  features: string[];
  exclusions?: string[];
  note?: string;
  cta: string;
  href: string;
};

// Annual fallback = 12 monthly payments, with no discount.
// Set annualPrice to your approved annual total when you define a different price.
// Replace /registro with your real signup route; these links do not process payments.
export const plans: Plan[] = [
  {
    id: "streamer-gratis", name: "Streamer Gratis",
    description: "Tus primeras alertas en vivo.", monthlyPrice: 0, annualPrice: 0,
    features: ["Hasta 50 alertas al mes", "Alerta visual básica", "Sonido predeterminado"],
    exclusions: ["Sonidos según el monto", "Imágenes y GIF propios", "Historial de aportes"],
    cta: "Comenzar gratis", href: "/registro",
  },
  {
    id: "negocio", name: "Negocio", featured: true,
    description: "Tu equipo ve y escucha cada aviso.", monthlyPrice: 29.9, annualPrice: null,
    features: ["Acceso para 1 correo invitado", "Avisos visibles en el panel", "Sonido al recibir notificaciones", "Monto y remitente a la vista", "Consulta en celular o computadora", "Sin compartir tu contraseña"],
    note: "El invitado solo accede a las notificaciones.",
    cta: "Iniciar prueba gratis de 7 días", href: "/registro",
  },
  {
    id: "streamer-pro", name: "Streamer Pro",
    description: "Alertas con el estilo de tu canal.", monthlyPrice: 19.9, annualPrice: null,
    features: ["Apariencia de alertas personalizable", "Sonidos según el monto", "Tus propias imágenes y GIF", "Aportes visibles en el directo", "Historial de aportes", "Nombre y monto en cada alerta"],
    cta: "Iniciar prueba gratis de 7 días", href: "/registro",
  },
];
