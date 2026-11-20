import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import UrgentHelp from './UrgentHelp.jsx';
import { navItems } from '../data/navigation.js';
import { site, telHref } from '../data/site.js';

export default function Footer() {
  const c = site.contact;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo inverse />
            <p>{site.tagline}</p>
          </div>

          <nav className="footer__col" aria-label="Secciones">
            <h2>Secciones</h2>
            <ul>
              {navItems.slice(1).map((item) => (
                <li key={item.hash}>
                  <Link to={{ pathname: '/', hash: item.hash }}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to={{ pathname: '/', hash: '#tarifas' }}>Tarifas</Link>
              </li>
              <li>
                <Link to="/recursos">Recursos</Link>
              </li>
            </ul>
          </nav>

          {(c.street || c.phone || c.email) && (
            <div className="footer__col">
              <h2>Contacto</h2>
              <ul>
                {c.street && (
                  <li>
                    {c.street}
                    <br />
                    {c.postalCode} {c.city}
                  </li>
                )}
                {c.phone && (
                  <li>
                    <a href={telHref(c.phone)}>{c.phone}</a>
                  </li>
                )}
                {c.email && (
                  <li>
                    <a href={`mailto:${c.email}`}>{c.email}</a>
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="footer__col">
            <h2>Legal</h2>
            <ul>
              <li>
                <Link to="/aviso-legal">Aviso legal</Link>
              </li>
              <li>
                <Link to="/privacidad">Política de privacidad</Link>
              </li>
            </ul>
          </div>
        </div>

        <UrgentHelp variant="footer" />

        <div className="footer__bottom">
          <p>
            © {year} {site.legal.owner || site.name}
          </p>
          <p>Gabinete de psicología en {c.area}, {c.city}</p>
        </div>
      </div>
    </footer>
  );
}
