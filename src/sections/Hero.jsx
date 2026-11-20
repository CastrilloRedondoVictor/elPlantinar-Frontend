import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import despacho from '../assets/img/despacho.webp';
import { site } from '../data/site.js';
import { LogoMark } from '../components/Logo.jsx';
import { prefersReducedMotion, useScrollY } from '../lib/motion.js';

export default function Hero() {
  const y = useScrollY();
  // Parallax suave: solo mientras el hero está cerca de la pantalla y sin "reducir movimiento"
  const shift = prefersReducedMotion() ? 0 : Math.min(y, 900);

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy hero__copy--enter">
          <p className="eyebrow">
            <MapPin size={15} strokeWidth={2} aria-hidden="true" />
            Gabinete de psicología · {site.contact.area}, {site.contact.city}
          </p>
          <h1 className="hero__title">
            Cada cambio merece un espacio para ser <em>comprendido.</em>
          </h1>
          <p className="hero__lead">
            Empezar la universidad, mudarte de ciudad o construir una nueva etapa puede traer emociones que no
            siempre son fáciles de gestionar. En El Plantinar te ofrecemos un espacio para trabajar la
            adaptación, el estrés y tu bienestar emocional.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary btn--lg" to={{ pathname: '/', hash: '#cita' }}>
              Pedir cita
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link className="btn btn--ghost btn--lg" to={{ pathname: '/', hash: '#gabinete' }}>
              Conócenos
            </Link>
          </div>
        </div>

        <figure className="hero__media hero__media--enter">
          <div className="hero__frame">
            <img
              style={{ transform: `translate3d(0, ${shift * 0.08}px, 0) scale(1.08)` }}
            src={despacho}
            alt="Despacho de El Plantinar con mesa de madera, sillas verdes y un gran ventanal a una calle arbolada"
            width="1206"
            height="1508"
            fetchPriority="high"
            />
          </div>
          <figcaption className="hero__note" style={{ transform: `translate3d(0, ${shift * -0.05}px, 0)` }}>
            <LogoMark size={30} />
            <span className="hero__note-quote">«{site.tagline}»</span>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <ul className="hero__facts hero__facts--enter" aria-label="Lo esencial de El Plantinar">
          <li>
            <strong>Psicólogas generales sanitarias</strong>
            <span>Equipo de cinco profesionales</span>
          </li>
          <li>
            <strong>Jóvenes y adultos jóvenes</strong>
            <span>Etapa universitaria y cambios vitales</span>
          </li>
          <li>
            <strong>Atención individualizada</strong>
            <span>Objetivos acordados contigo</span>
          </li>
          <li>
            <strong>En el barrio de El Plantinar</strong>
            <span>Un espacio cercano en Sevilla</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
