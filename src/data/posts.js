// Artículos de la sección Recursos.
// `body` es una lista de bloques: texto normal, { h: 'Subtítulo' } o { list: [...] }.

export const author = 'Equipo El Plantinar';

export const posts = [
  {
    slug: 'me-he-mudado-y-echo-de-menos-mi-casa',
    title: 'Me he mudado a otra ciudad y echo de menos mi casa: ¿qué puedo hacer?',
    category: 'Cambios vitales',
    minutes: 4,
    excerpt:
      'La morriña no significa que te hayas equivocado de decisión. Es una respuesta habitual ante un cambio grande.',
    body: [
      'Llegar a una ciudad nueva suele venir acompañado de ilusión, pero también de momentos en los que echas de menos a tu gente, tus calles y tus rutinas. Sentir nostalgia no significa que te hayas equivocado de decisión: es una respuesta muy habitual cuando dejamos atrás lo conocido.',
      { h: 'Dale nombre a lo que sientes' },
      'A veces la añoranza aparece de golpe, un domingo por la tarde o al volver a un piso en silencio. Reconocerla, en lugar de pelearte con ella, ayuda a que pierda intensidad. Puedes decirte algo tan sencillo como «hoy echo de menos mi casa, y es comprensible».',
      { h: 'Pequeños gestos que suelen ayudar' },
      {
        list: [
          'Mantén el contacto con los tuyos, pero sin que sustituya a tu vida aquí: una llamada fija a la semana puede ser suficiente.',
          'Lleva contigo objetos que te hagan sentir en casa: una foto, una manta, tu música.',
          'Explora tu barrio poco a poco. Tener un sitio para el café o un parque para pasear crea sensación de pertenencia.',
          'Date tiempo. Adaptarse no ocurre en una semana.',
        ],
      },
      'Si la tristeza se mantiene durante semanas, te cuesta dormir o te aísla de tu día a día, hablarlo con un profesional puede ayudarte a entender qué está pasando y a encontrar tu propio ritmo en la nueva ciudad.',
    ],
  },
  {
    slug: 'organizarte-primeras-semanas-universidad',
    title: 'Cómo organizarte durante las primeras semanas de universidad',
    category: 'Vida universitaria',
    minutes: 4,
    excerpt:
      'Horarios nuevos, asignaturas nuevas y, a veces, casa nueva. Una estructura sencilla puede darte mucha tranquilidad.',
    body: [
      'Las primeras semanas en la universidad pueden sentirse como un torbellino: horarios distintos, plataformas que no conoces, gente nueva y, muchas veces, una casa nueva que gestionar. Es normal sentir que todo va demasiado rápido.',
      { h: 'Empieza por lo básico' },
      'Antes de pensar en planes de estudio perfectos, asegúrate de tener a mano lo esencial: tu horario, las guías docentes y las fechas de entrega o de evaluación. Tenerlo todo en un único lugar, ya sea una agenda o el calendario del móvil, reduce mucho la sensación de caos.',
      { h: 'Una rutina flexible' },
      {
        list: [
          'Reserva bloques fijos para repasar lo visto en clase, aunque sean cortos.',
          'Incluye en tu semana tiempo para comprar, cocinar y descansar: también forman parte de la organización.',
          'Revisa cada domingo cómo ha ido la semana y ajusta lo que no ha funcionado.',
        ],
      },
      'No necesitas tenerlo todo controlado desde el primer día. La organización se construye probando, equivocándote y ajustando. Si sientes que la carga te desborda de forma continuada, pedir orientación puede ayudarte a recuperar el equilibrio.',
    ],
  },
  {
    slug: 'estres-antes-de-los-examenes',
    title: 'Estrés antes de los exámenes',
    category: 'Estrés académico',
    minutes: 5,
    excerpt:
      'Algo de tensión antes de un examen es esperable. Te contamos cómo evitar que se convierta en una carga difícil de manejar.',
    body: [
      'Sentir cierta tensión antes de un examen es esperable: el cuerpo se activa ante algo que nos importa. El problema aparece cuando esa activación se vuelve tan intensa que dificulta estudiar, dormir o concentrarse el día de la prueba.',
      { h: 'Señales a las que prestar atención' },
      {
        list: [
          'Pensamientos repetitivos del tipo «no me va a dar tiempo» o «voy a suspender».',
          'Dificultad para dormir o despertarte pensando en el examen.',
          'Tensión muscular, dolor de cabeza o molestias de estómago.',
          'Dejar el estudio para más tarde porque abrir los apuntes genera malestar.',
        ],
      },
      { h: 'Qué puedes probar' },
      'Divide el temario en partes pequeñas y concretas, y celebra cada una que completes. Alterna periodos de estudio con pausas breves y movimiento. Cuida lo básico: dormir, comer a horas regulares y salir un rato a la calle no son una pérdida de tiempo, sino parte de la preparación.',
      'Ensayar respiraciones lentas en momentos de calma hace que te resulte más fácil usarlas cuando aparezcan los nervios. Y si el estrés se repite en cada convocatoria y te afecta mucho, trabajarlo con un profesional puede ayudarte a desarrollar herramientas adaptadas a ti.',
    ],
  },
  {
    slug: 'no-he-hecho-amigos-en-la-universidad',
    title: 'No he hecho amigos en la universidad',
    category: 'Relaciones',
    minutes: 4,
    excerpt:
      'Las amistades suelen necesitar tiempo y encuentros repetidos. No llevar el ritmo de los demás no dice nada malo de ti.',
    body: [
      'Desde fuera puede parecer que todo el mundo encuentra su grupo en la primera semana. La realidad es que muchas personas se sienten solas al empezar la universidad, aunque no siempre lo cuenten.',
      { h: 'Las amistades necesitan tiempo' },
      'Los vínculos suelen surgir de encuentros repetidos: compartir clases, prácticas o una actividad. Por eso es habitual que las relaciones más cercanas aparezcan a lo largo del curso, no al principio.',
      { h: 'Algunas ideas para abrir puertas' },
      {
        list: [
          'Apúntate a alguna actividad que te guste: deporte, voluntariado, coro, asociaciones de estudiantes.',
          'Propón algo concreto y sencillo: un café después de clase o repasar juntos un tema.',
          'Fíjate en quién coincide contigo a menudo; a veces la conversación empieza por ahí.',
        ],
      },
      'Si el miedo al rechazo te frena o la soledad pesa cada vez más, puede ser útil trabajarlo con calma y acompañamiento. Las habilidades sociales se pueden entrenar, y no hay un único modo correcto de relacionarse.',
    ],
  },
  {
    slug: 'presion-por-elegir-bien-una-carrera',
    title: 'La presión por elegir bien una carrera',
    category: 'Decisiones',
    minutes: 4,
    excerpt:
      'Elegir carrera no es una decisión para toda la vida. Revisarla también forma parte del proceso.',
    body: [
      'A los dieciocho años se nos pide tomar una decisión que parece definitiva. No es raro sentir presión, dudas o miedo a equivocarse, sobre todo cuando hay expectativas propias o familiares en juego.',
      { h: 'Una decisión, no un destino' },
      'Elegir una carrera es un paso importante, pero no fija para siempre el camino profesional. Muchas personas cambian de grado, combinan estudios o descubren su vocación más adelante. Revisar una decisión también es una forma de cuidarse.',
      { h: 'Preguntas que pueden ayudarte' },
      {
        list: [
          '¿Qué me interesa de verdad, más allá de lo que se espera de mí?',
          '¿Qué asignaturas o actividades me hacen perder la noción del tiempo?',
          '¿Qué me preocupa exactamente si cambio de rumbo?',
        ],
      },
      'Si las dudas te bloquean o te generan mucho malestar, una sesión de orientación académica puede ayudarte a ordenar lo que sientes y a tomar decisiones con más claridad.',
    ],
  },
  {
    slug: 'vivir-con-companeros-de-piso',
    title: 'Aprender a vivir con compañeros de piso',
    category: 'Convivencia',
    minutes: 4,
    excerpt:
      'Compartir casa con personas a las que acabas de conocer requiere acuerdos claros y algo de paciencia.',
    body: [
      'Compartir piso suele ser la primera experiencia de convivencia fuera de la familia. Horarios distintos, formas diferentes de entender el orden o la limpieza y el reparto de gastos pueden generar roces, incluso entre personas que se llevan bien.',
      { h: 'Acordar antes de que haya conflicto' },
      'Hablar al principio sobre limpieza, visitas, ruido y gastos comunes evita muchos malentendidos. Poner los acuerdos por escrito, aunque sea en una nota en la nevera, ayuda a que todos tengan la misma referencia.',
      { h: 'Cuando algo molesta' },
      {
        list: [
          'Busca un momento tranquilo para hablarlo, no en plena discusión.',
          'Habla desde lo que te ocurre a ti: «me cuesta descansar cuando hay ruido tarde».',
          'Propón soluciones concretas y escucha las de los demás.',
        ],
      },
      'La convivencia es también una oportunidad para practicar la asertividad y la negociación. Si los conflictos se repiten y afectan a tu bienestar, puede ser útil trabajarlos con un profesional.',
    ],
  },
  {
    slug: 'equilibrio-entre-estudiar-y-descansar',
    title: 'Cómo encontrar un equilibrio entre estudiar y descansar',
    category: 'Bienestar',
    minutes: 4,
    excerpt:
      'Descansar no es perder el tiempo. Es una parte necesaria del aprendizaje y del bienestar.',
    body: [
      'Es fácil caer en la idea de que cada hora sin estudiar es una hora perdida. Sin embargo, el descanso es una parte necesaria del aprendizaje: sin él, la concentración y la memoria se resienten.',
      { h: 'Señales de que necesitas parar' },
      {
        list: [
          'Lees la misma página varias veces sin retener nada.',
          'Te sientes culpable cuando haces algo que no es estudiar.',
          'Te cuesta disfrutar de tu tiempo libre.',
        ],
      },
      { h: 'Ideas para equilibrar' },
      'Planifica el descanso igual que planificas el estudio: un paseo, una comida sin pantallas, quedar con alguien o hacer deporte. Intenta mantener horarios de sueño regulares, también en época de exámenes.',
      'Encontrar el equilibrio no es lograr un horario perfecto, sino escuchar lo que necesitas en cada momento. Si la autoexigencia no te deja parar, puede ser un buen tema para trabajar en consulta.',
    ],
  },
  {
    slug: 'comparacion-con-otros-en-redes-sociales',
    title: 'La comparación con otros estudiantes en redes sociales',
    category: 'Autoestima',
    minutes: 4,
    excerpt:
      'Las redes muestran fragmentos escogidos. Compararte con ellos suele dejarte con una imagen incompleta de ti.',
    body: [
      'En redes sociales vemos viajes, notas brillantes, grupos de amigos y planes constantes. Es fácil terminar pensando que los demás lo tienen todo resuelto y que tú vas por detrás.',
      { h: 'Lo que no se ve' },
      'Lo que se publica suele ser una selección de los mejores momentos. Detrás de cada foto hay días de dudas, cansancio o soledad que normalmente no se comparten. Comparar tu día a día completo con el escaparate de otras personas rara vez es justo contigo.',
      { h: 'Pequeños cambios que pueden ayudar' },
      {
        list: [
          'Observa cómo te sientes después de usar cada aplicación.',
          'Deja de seguir las cuentas que te hacen sentir peor de forma habitual.',
          'Pon límites de tiempo o momentos sin móvil, por ejemplo antes de dormir.',
          'Compárate con tu propio camino: ¿qué has aprendido este año?',
        ],
      },
      'Si la comparación afecta a cómo te ves o a tu estado de ánimo, trabajar la autoestima y el autoconcepto puede ayudarte a relacionarte con las redes de una forma más sana.',
    ],
  },
  {
    slug: 'cuando-sientes-que-no-llegas-a-todo',
    title: 'Qué hacer cuando sientes que no llegas a todo',
    category: 'Estrés',
    minutes: 4,
    excerpt:
      'Clases, trabajos, casa, familia y vida social. Cuando todo se acumula, conviene parar y ordenar.',
    body: [
      'Clases, entregas, tareas de casa, quizá un trabajo a media jornada, la familia, los amigos… Hay épocas en las que parece imposible llegar a todo, y la sensación de ir siempre tarde genera mucho desgaste.',
      { h: 'Parar para ordenar' },
      'Cuando todo se acumula, el primer impulso suele ser hacer más. A veces lo más útil es detenerse un momento y escribir todo lo que tienes pendiente. Verlo fuera de tu cabeza ya reduce parte de la carga.',
      { h: 'Prioriza y simplifica' },
      {
        list: [
          'Distingue lo urgente de lo importante y de lo que puede esperar.',
          'Pregúntate qué puedes delegar, posponer o hacer de forma más sencilla.',
          'Aprende a decir que no a algunas propuestas sin sentir culpa.',
        ],
      },
      'Si la sensación de no llegar es constante, puede estar relacionada con la autoexigencia o con la dificultad para poner límites. Son aspectos que se pueden trabajar con acompañamiento profesional.',
    ],
  },
  {
    slug: 'crear-una-rutina-en-una-ciudad-nueva',
    title: 'La importancia de crear una rutina en una ciudad nueva',
    category: 'Cambios vitales',
    minutes: 3,
    excerpt:
      'Las rutinas aportan seguridad cuando todo lo demás es nuevo. Pequeños hábitos que te ayudan a sentirte en casa.',
    body: [
      'Cuando llegamos a un sitio nuevo, casi todo es desconocido: el camino a clase, el supermercado, los horarios del barrio. Las rutinas aportan algo muy valioso en ese contexto: previsibilidad.',
      { h: 'Rutinas que crean hogar' },
      {
        list: [
          'Horarios más o menos estables para dormir y comer.',
          'Un momento fijo para moverte: caminar, correr, ir al gimnasio.',
          'Un lugar habitual para estudiar fuera de casa, como una biblioteca.',
          'Una actividad semanal que te conecte con otras personas.',
        ],
      },
      'No se trata de llenar la agenda, sino de crear puntos de apoyo que te ayuden a sentirte en casa. Con el tiempo, esas rutinas se convierten en parte de tu nueva vida en la ciudad.',
      'Si te cuesta encontrar tu sitio o la adaptación se está haciendo cuesta arriba, hablarlo puede ayudarte a recorrer este proceso con más calma.',
    ],
  },
];
