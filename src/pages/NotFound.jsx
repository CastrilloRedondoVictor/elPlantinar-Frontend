import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle.js';
import { LogoMark } from '../components/Logo.jsx';

export default function NotFound() {
  usePageTitle('Página no encontrada');
  return (
    <section className="page not-found">
      <div className="container container--narrow">
        <LogoMark size={72} />
        <h1 className="page-hero__title">Esta página no existe.</h1>
        <p className="page-hero__lead">Puede que el enlace haya cambiado. Te dejamos el camino de vuelta.</p>
        <Link className="btn btn--primary" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
