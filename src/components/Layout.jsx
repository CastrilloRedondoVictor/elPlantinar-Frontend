import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FloatingActions from './FloatingActions.jsx';
import { useReveal } from '../lib/motion.js';

// Desplaza a la sección indicada en el hash o al principio de la página al cambiar de ruta.
function useScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    // Espera un fotograma para que la página de destino esté pintada
    const id = requestAnimationFrame(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return;
      el.scrollIntoView({ block: 'start' });
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash, key]);
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollToHash();
  useReveal([pathname]);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
