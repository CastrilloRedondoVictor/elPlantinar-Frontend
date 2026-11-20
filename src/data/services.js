// `reason` es la opción del formulario que se preselecciona al pulsar «Consultar».
// Áreas de trabajo. `featured: true` les da más protagonismo en la composición.
export const services = [
  {
    id: 'universitarios',
    reason: 'Adaptación a la universidad o a una nueva ciudad',
    featured: true,
    icon: 'GraduationCap',
    title: 'Psicología para estudiantes universitarios',
    summary:
      'El primer año, los exámenes y la nueva vida académica llegan a la vez. Trabajamos para que esta etapa se viva con más calma y más recursos.',
    topics: [
      'Adaptación al primer año',
      'Estrés académico',
      'Organización y hábitos',
      'Miedo al fracaso',
      'Motivación',
      'Equilibrio entre estudios y vida personal',
    ],
  },
  {
    id: 'estres',
    reason: 'Estrés académico o ansiedad',
    featured: true,
    icon: 'Wind',
    title: 'Gestión del estrés y la ansiedad',
    summary:
      'Cuando la cabeza no para y cuesta desconectar, aprender a regular lo que sientes cambia la forma de afrontar cada semana.',
    topics: [
      'Estrés ante exámenes',
      'Preocupación anticipatoria',
      'Sobrecarga',
      'Dificultad para desconectar',
      'Autoexigencia',
      'Regulación emocional',
    ],
  },
  {
    id: 'cambios',
    reason: 'Adaptación a la universidad o a una nueva ciudad',
    icon: 'Compass',
    title: 'Adaptación a cambios vitales',
    summary: 'Mudarse, independizarse o empezar de cero en otra ciudad. Cada cambio pide su tiempo.',
    topics: [
      'Mudanzas e independencia',
      'Cambios de ciudad',
      'Nuevas etapas académicas',
      'Cambios en las relaciones',
      'Incertidumbre ante el futuro',
    ],
  },
  {
    id: 'autoestima',
    reason: 'Autoestima y desarrollo personal',
    icon: 'Sprout',
    title: 'Autoestima y desarrollo personal',
    summary: 'Conocerte mejor para decidir con más seguridad y poner límites sin culpa.',
    topics: [
      'Autoconocimiento',
      'Autoconcepto',
      'Inseguridad',
      'Comparación social',
      'Límites personales',
      'Toma de decisiones',
    ],
  },
  {
    id: 'relaciones',
    reason: 'Relaciones sociales y convivencia',
    icon: 'Users',
    title: 'Relaciones sociales y comunicación',
    summary: 'Construir vínculos en un entorno nuevo y comunicarte de forma más clara y asertiva.',
    topics: [
      'Habilidades sociales',
      'Asertividad',
      'Miedo al rechazo',
      'Conflictos interpersonales',
      'Relaciones afectivas',
      'Convivencia',
    ],
  },
  {
    id: 'infantojuvenil',
    reason: 'Psicología infantojuvenil u orientación familiar',
    icon: 'Shapes',
    title: 'Psicología infantojuvenil',
    summary:
      'Una línea complementaria del gabinete, con atención a la adaptación, el desarrollo emocional y la orientación a familias.',
    topics: ['Adaptación', 'Desarrollo emocional', 'Orientación a familias'],
  },
  {
    id: 'valoracion',
    reason: 'Primera valoración',
    icon: 'MessageCircle',
    title: 'Orientación y primera valoración',
    summary:
      'Un primer encuentro para conocer tu situación, aclarar necesidades y valorar juntos los siguientes pasos.',
    topics: [],
  },
];
