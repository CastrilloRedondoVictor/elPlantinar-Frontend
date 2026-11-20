import { Link } from 'react-router-dom';
import { GraduationCap, Wind, Compass, Sprout, Users, Shapes, MessageCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { services } from '../data/services.js';

const icons = { GraduationCap, Wind, Compass, Sprout, Users, Shapes, MessageCircle };

function Icon({ name }) {
  const Cmp = icons[name] ?? Sprout;
  return <Cmp size={22} strokeWidth={1.6} aria-hidden="true" />;
}

// Enlace al formulario con el motivo ya seleccionado
const toForm = (reason) => ({ pathname: '/', search: `?motivo=${encodeURIComponent(reason)}`, hash: '#cita' });

export default function Services() {
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured && s.topics.length);
  const first = services.find((s) => s.id === 'valoracion');

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Servicios y áreas de trabajo</p>
          <h2 className="section-title">
            Acompañamos tus cambios, <em>fortalecemos tus recursos.</em>
          </h2>
          <p className="section-head__text">
            Nuestro trabajo se centra en la etapa universitaria y en los cambios que la acompañan, sin dejar de
            atender otras necesidades de jóvenes, adultos y familias.
          </p>
        </header>

        <div className="services__featured">
          {featured.map((s, i) => (
            <article className="service-feature" key={s.id} data-reveal style={{ '--d': `${i * 120}ms` }}>
              <span className="service-feature__icon">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <ul className="tags">
                {s.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Link className="service-feature__cta" to={toForm(s.reason)}>
                Consultar sobre esto
                <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="services__list">
          {rest.map((s, i) => (
            <article className="service-row" key={s.id} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <span className="service-row__icon">
                <Icon name={s.icon} />
              </span>
              <div className="service-row__main">
                <h3>
                  <Link className="service-row__link" to={toForm(s.reason)}>
                    {s.title}
                  </Link>
                </h3>
                <p>{s.summary}</p>
              </div>
              <p className="service-row__topics">{s.topics.join(' · ')}</p>
              <span className="service-row__arrow" aria-hidden="true">
                <ArrowUpRight size={20} strokeWidth={1.8} />
              </span>
            </article>
          ))}
        </div>

        {first && (
          <aside className="first-visit" data-reveal>
            <span className="first-visit__icon">
              <Icon name={first.icon} />
            </span>
            <div>
              <h3>{first.title}</h3>
              <p>{first.summary}</p>
            </div>
            <Link className="btn btn--light" to={toForm(first.reason)}>
              Solicitar primera sesión
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </aside>
        )}
      </div>
    </section>
  );
}
