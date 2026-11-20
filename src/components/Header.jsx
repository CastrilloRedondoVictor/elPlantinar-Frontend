import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { navItems } from '../data/navigation.js';
import { useActiveSection } from '../lib/motion.js';

const sectionIds = navItems.map((i) => i.hash.slice(1));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const active = useActiveSection(sectionIds, location.pathname === '/');

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 12);
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  // Cierra el menú al navegar
  useEffect(() => setOpen(false), [location]);

  // Escape cierra el menú y se bloquea el scroll del fondo mientras está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label="El Plantinar & Co., ir al inicio">
          <Logo compact />
        </Link>

        <nav className="nav" aria-label="Principal">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  className={`nav__link${active === item.hash.slice(1) ? ' is-active' : ''}`}
                  to={{ pathname: '/', hash: item.hash }}
                  aria-current={active === item.hash.slice(1) ? 'true' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="btn btn--primary btn--sm header__cta" to={{ pathname: '/', hash: '#cita' }}>
          Pedir cita
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
        </button>
      </div>

      <span className="header__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Menú móvil">
          <ul>
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link to={{ pathname: '/', hash: item.hash }}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/recursos">Recursos</Link>
            </li>
          </ul>
        </nav>
        <Link className="btn btn--primary btn--block" to={{ pathname: '/', hash: '#cita' }}>
          Pedir cita
        </Link>
      </div>
    </header>
  );
}
