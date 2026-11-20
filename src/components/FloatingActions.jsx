import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, CalendarHeart } from 'lucide-react';
import { useScrollY } from '../lib/motion.js';

// Botón "volver arriba" y, en móvil, barra fija con "Pedir cita".
export default function FloatingActions() {
  const y = useScrollY();
  const { pathname } = useLocation();
  const [formVisible, setFormVisible] = useState(false);

  // Oculta la barra de cita cuando el formulario ya está en pantalla
  useEffect(() => {
    const form = document.getElementById('contacto');
    if (!form) {
      setFormVisible(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting));
    observer.observe(form);
    return () => observer.disconnect();
  }, [pathname]);

  const showTop = y > 900;
  const showCta = y > 500 && !formVisible;

  return (
    <>
      <button
        type="button"
        className={`to-top${showTop ? ' is-shown' : ''}`}
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Volver arriba"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={20} strokeWidth={1.8} aria-hidden="true" />
      </button>

      <div className={`mobile-cta${showCta ? ' is-shown' : ''}`} aria-hidden={!showCta}>
        <p>
          <strong>¿Hablamos?</strong>
          <span>Primera sesión de valoración</span>
        </p>
        <Link
          className="btn btn--primary btn--sm"
          to={{ pathname: '/', hash: '#cita' }}
          tabIndex={showCta ? 0 : -1}
        >
          <CalendarHeart size={17} strokeWidth={1.8} aria-hidden="true" />
          Pedir cita
        </Link>
      </div>
    </>
  );
}
