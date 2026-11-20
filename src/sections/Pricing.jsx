import { Link } from 'react-router-dom';
import { pricing } from '../data/pricing.js';

const euro = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

export default function Pricing() {
  return (
    <section id="tarifas" className="section pricing">
      <div className="container pricing__grid">
        <header className="pricing__head" data-reveal>
          <p className="eyebrow">Tarifas</p>
          <h2 className="section-title">
            Claras <em>desde el principio.</em>
          </h2>
          <p>
            Si no sabes qué opción encaja contigo, la primera sesión de valoración sirve precisamente para
            conocerte y decidir juntos los siguientes pasos.
          </p>
          <Link className="link-arrow" to={{ pathname: '/', hash: '#cita' }}>
            Pedir una primera sesión
          </Link>
        </header>

        <ul className="price-list" data-reveal style={{ '--d': '120ms' }}>
          {pricing.map((p) => (
            <li className="price-list__item" key={p.name}>
              <div>
                <h3>{p.name}</h3>
                {p.duration && <p>{p.duration}</p>}
              </div>
              <span className="price-list__dots" aria-hidden="true" />
              <strong className="price-list__price">{euro.format(p.price)}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
