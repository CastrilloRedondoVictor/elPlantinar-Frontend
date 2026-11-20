import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { site, telHref } from '../data/site.js';
import AppointmentForm from '../components/AppointmentForm.jsx';
import UrgentHelp from '../components/UrgentHelp.jsx';

function mapSrc({ lat, lng }) {
  const d = 0.004;
  const bbox = [lng - d, lat - d * 0.6, lng + d, lat + d * 0.6].join(',');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
}

export default function Contact() {
  const c = site.contact;
  const address = c.street ? `${c.street}, ${c.postalCode} ${c.city}` : '';
  const hasMap = Boolean(c.street && c.map?.lat && c.map?.lng);
  const hasInfo = Boolean(address || c.phone || c.email || c.hours?.length);

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <header className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Ubicación y contacto</p>
          <h2 className="section-title">
            Da el primer paso, <em>a tu ritmo.</em>
          </h2>
          <p className="section-head__text">
            Escríbenos y te responderemos para orientarte y concertar tu primera sesión en nuestro gabinete de{' '}
            {c.area}, {c.city}.
          </p>
        </header>

        <div className={`contact__grid${hasInfo ? '' : ' contact__grid--single'}`}>
          {hasInfo && (
            <aside className="contact__info" data-reveal style={{ '--d': '120ms' }}>
              <ul className="contact__details">
                {address && (
                  <li>
                    <MapPin size={20} strokeWidth={1.6} aria-hidden="true" />
                    <div>
                      <span className="contact__label">Dirección</span>
                      <a
                        href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {c.street}
                        <br />
                        {c.postalCode} {c.city} · {c.area}
                      </a>
                    </div>
                  </li>
                )}
                {c.phone && (
                  <li>
                    <Phone size={20} strokeWidth={1.6} aria-hidden="true" />
                    <div>
                      <span className="contact__label">Teléfono</span>
                      <a href={telHref(c.phone)}>{c.phone}</a>
                    </div>
                  </li>
                )}
                {c.email && (
                  <li>
                    <Mail size={20} strokeWidth={1.6} aria-hidden="true" />
                    <div>
                      <span className="contact__label">Correo electrónico</span>
                      <a href={`mailto:${c.email}`}>{c.email}</a>
                    </div>
                  </li>
                )}
                {c.hours?.length > 0 && (
                  <li>
                    <Clock size={20} strokeWidth={1.6} aria-hidden="true" />
                    <div>
                      <span className="contact__label">Horario</span>
                      <dl className="hours">
                        {c.hours.map((h) => (
                          <div key={h.days}>
                            <dt>{h.days}</dt>
                            <dd>{h.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </li>
                )}
              </ul>

              {hasMap && (
                <div className="contact__map">
                  <iframe
                    title={`Mapa de la ubicación de ${site.name}`}
                    src={mapSrc(c.map)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <UrgentHelp />
            </aside>
          )}

          <div id="cita" className="contact__form" data-reveal>
            <AppointmentForm />
            {!hasInfo && <UrgentHelp />}
          </div>
        </div>
      </div>
    </section>
  );
}
