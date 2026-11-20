import recepcion from '../assets/img/recepcion.webp';

const values = [
  { title: 'Cercanía', text: 'Un trato cálido y un lenguaje claro, sin tecnicismos innecesarios.' },
  { title: 'Atención individualizada', text: 'Cada proceso parte de tu situación y de lo que quieres trabajar.' },
  { title: 'Profesionalidad', text: 'Un equipo de psicólogas generales sanitarias que trabaja de forma coordinada.' },
  { title: 'Etapas de cambio', text: 'Especial atención a la vida universitaria y a las transiciones vitales.' },
];

export default function About() {
  return (
    <section id="gabinete" className="section about">
      <div className="container about__grid">
        <figure className="about__media" data-reveal="image">
          <img
            src={recepcion}
            alt="Sala de espera de El Plantinar con sillas verdes, recepción de madera y el lema «Los cambios también son positivos»"
            width="1200"
            height="1494"
            loading="lazy"
          />
        </figure>

        <div className="about__copy" data-reveal>
          <p className="eyebrow">El gabinete</p>
          <h2 className="section-title">
            Tu nueva etapa también necesita <em>cuidar de ti.</em>
          </h2>
          <p className="lead">
            El Plantinar es un gabinete de psicología pensado para acompañar a jóvenes y adultos jóvenes durante
            una de las etapas con más cambios de la vida: el paso a la universidad y la construcción de una nueva
            etapa personal.
          </p>
          <p>
            Desde nuestro espacio en el barrio de El Plantinar, en Sevilla, proponemos un lugar cercano y
            tranquilo donde trabajar la adaptación a nuevos entornos, la gestión del estrés, la autonomía, las
            relaciones personales y el bienestar emocional.
          </p>

          <dl className="values">
            {values.map((v, i) => (
              <div className="values__item" key={v.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <dt>
                  <span className="values__num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {v.title}
                </dt>
                <dd>{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
