import { Armchair, Ear, NotebookPen, HeartHandshake } from 'lucide-react';
import fachada from '../assets/img/fachada.webp';

const items = [
  {
    icon: Ear,
    title: 'Un espacio para hablar con calma',
    text: 'Sin prisas ni juicios. Puedes venir aunque todavía no sepas poner nombre a lo que te ocurre.',
  },
  {
    icon: NotebookPen,
    title: 'Herramientas para tu día a día',
    text: 'Trabajamos recursos concretos para el estudio, la convivencia, las relaciones y el descanso.',
  },
  {
    icon: HeartHandshake,
    title: 'Un equipo que te conoce',
    text: 'Cinco profesionales coordinadas que te orientan desde el primer contacto hacia el área adecuada.',
  },
  {
    icon: Armchair,
    title: 'Un lugar tranquilo en tu barrio',
    text: 'Un local luminoso y acogedor en El Plantinar, pensado para que te sientas en casa.',
  },
];

export default function Highlights() {
  return (
    <section className="section highlights" aria-labelledby="highlights-title">
      <div className="container highlights__grid">
        <div className="highlights__copy" data-reveal>
          <p className="eyebrow">Qué puedes encontrar en El Plantinar</p>
          <h2 id="highlights-title" className="section-title">
            Un espacio para adaptarte, crecer y <em>sentirte en casa.</em>
          </h2>
          <ul className="highlights__list">
            {items.map((item, i) => (
              <li key={item.title} data-reveal style={{ '--d': `${i * 100}ms` }}>
                <span className="highlights__icon">
                  <item.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <figure className="highlights__media" data-reveal="image">
          <img
            src={fachada}
            alt="Fachada del gabinete El Plantinar & Co., en un local de esquina con macetas de olivo junto a la entrada"
            width="1200"
            height="1500"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
