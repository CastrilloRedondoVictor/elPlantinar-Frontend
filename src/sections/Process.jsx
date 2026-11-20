const steps = [
  { title: 'Primer contacto', text: 'Nos cuentas brevemente qué necesitas y resolvemos tus dudas.' },
  { title: 'Primera sesión', text: 'Conocemos tu situación y aquello que te gustaría trabajar.' },
  { title: 'Plan de trabajo', text: 'Acordamos objetivos y una propuesta adaptada a ti.' },
  { title: 'Seguimiento', text: 'Revisamos los avances y ajustamos el proceso cuando hace falta.' },
];

const principles = [
  'Escucha sin juicios',
  'Objetivos personalizados',
  'Herramientas para el día a día',
  'Acompañamiento progresivo',
  'Cercanía y profesionalidad',
];

export default function Process() {
  return (
    <section id="como-trabajamos" className="section process" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head section-head--split" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light">Cómo trabajamos</p>
            <h2 id="process-title" className="section-title">
              Crecer también es <em>aprender a adaptarse.</em>
            </h2>
          </div>
          <p className="section-head__text">
            Un proceso claro, paso a paso, para que sepas en todo momento en qué punto estás y hacia dónde vas.
          </p>
        </header>

        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step" key={s.title} data-reveal style={{ '--d': `${i * 140}ms` }}>
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <ul className="principles" aria-label="Principios de trabajo" data-reveal>
          {principles.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
