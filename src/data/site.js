// Datos generales del gabinete.
// Cualquier campo vacío ('' o null) oculta automáticamente el elemento que depende de él.

export const site = {
  name: 'El Plantinar & Co.',
  shortName: 'El Plantinar',
  tagline: 'Un espacio para adaptarte, crecer y sentirte en casa.',
  description:
    'Gabinete de psicología en El Plantinar, Sevilla. Acompañamos a jóvenes y adultos jóvenes en la adaptación a la universidad, la gestión del estrés y los cambios vitales.',
  url: 'https://www.elplantinar.es',

  contact: {
    // Dirección postal. Si `street` está vacío, no se muestran dirección ni mapa.
    street: 'Avenida de Ramón y Cajal, 31, local B',
    postalCode: '41005',
    city: 'Sevilla',
    area: 'El Plantinar',
    phone: '954 21 63 48', // Formato visible. El enlace tel: se genera solo.
    email: 'hola@elplantinar.es',
    hours: [
      { days: 'Lunes a jueves', time: '10:00 – 14:00 y 16:00 – 21:00' },
      { days: 'Viernes', time: '10:00 – 15:00' },
    ],
    // Coordenadas para el mapa (OpenStreetMap). Vacías = sin mapa.
    map: { lat: 37.3778, lng: -5.9716 },
  },

  // Titular de la web (aviso legal y política de privacidad).
  legal: {
    owner: 'El Plantinar & Co. Psicología, S.L.',
    taxId: 'B90512347',
    address: 'Avenida de Ramón y Cajal, 31, local B, 41005 Sevilla',
    email: 'hola@elplantinar.es',
    registry: 'Registro Mercantil de Sevilla, tomo 6.814, folio 112, hoja SE-118.903',
    healthCenterId: '', // Nº de inscripción en el Registro de Centros Sanitarios de Andalucía
    lastUpdated: 'noviembre de 2026',
  },

  // Envío del formulario de cita.
  // Con `endpoint` vacío, el formulario valida los datos y muestra la confirmación sin enviarlos.
  // Para recibir las solicitudes por correo, pega aquí un endpoint compatible (p. ej. https://formspree.io/f/xxxx).
  form: {
    endpoint: '',
  },
};

export const telHref = (phone) => `tel:+34${phone.replace(/\D/g, '')}`;
