import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { team } from '../data/team.js';

function Member({ person, wide = false, delay = 0 }) {
  const firstName = person.name.split(' ')[0];
  return (
    <article className={`member${wide ? ' member--wide' : ''}`} data-reveal style={{ '--d': `${delay}ms` }}>
      <div className="member__photo">
        <img
          src={person.photo}
          alt={`Retrato de ${person.name}`}
          loading="lazy"
          style={{ objectPosition: person.photoPosition }}
        />
      </div>
      <div className="member__body">
        <p className="member__role">{person.role}</p>
        <h3 className="member__name">{person.name}</h3>
        <ul className="member__creds">
          {person.credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="member__bio">{person.bio}</p>
        <ul className="tags tags--small" aria-label={`Áreas de ${firstName}`}>
          {person.areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <Link className="member__cta" to={{ pathname: '/', search: `?con=${person.id}`, hash: '#cita' }}>
          Pedir cita con {firstName}
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function Team() {
  const [lead, sub, ...rest] = team;

  return (
    <section id="equipo" className="section team">
      <div className="container">
        <header className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Equipo profesional</p>
          <h2 className="section-title">
            Cinco psicólogas, <em>un mismo cuidado.</em>
          </h2>
          <p className="section-head__text">
            Todas las profesionales de El Plantinar están habilitadas como psicólogas generales sanitarias y
            trabajan de forma coordinada entre el área de adultos y el área infantojuvenil.
          </p>
        </header>

        <div className="team__lead">
          <Member person={lead} wide />
          <Member person={sub} wide delay={120} />
        </div>
        <div className="team__grid">
          {rest.map((p, i) => (
            <Member key={p.id} person={p} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
