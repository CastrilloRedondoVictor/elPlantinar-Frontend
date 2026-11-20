import { site } from '../data/site.js';
import { usePageTitle } from '../lib/usePageTitle.js';
import LegalLayout from '../components/LegalLayout.jsx';

export default function PrivacyPolicy() {
  usePageTitle('Política de privacidad');
  const l = site.legal;

  return (
    <LegalLayout title="Política de privacidad" updated={l.lastUpdated}>
      <p>
        En {site.name} cuidamos la confidencialidad de las personas que se ponen en contacto con nosotros. Esta
        política explica cómo tratamos los datos personales que nos facilitas a través de este sitio web, de
        acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales
        y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        {l.owner && (
          <li>
            <strong>Responsable:</strong> {l.owner}
          </li>
        )}
        {l.taxId && (
          <li>
            <strong>CIF:</strong> {l.taxId}
          </li>
        )}
        {l.address && (
          <li>
            <strong>Domicilio:</strong> {l.address}
          </li>
        )}
        {l.email && (
          <li>
            <strong>Contacto:</strong> <a href={`mailto:${l.email}`}>{l.email}</a>
          </li>
        )}
      </ul>

      <h2>2. Qué datos tratamos</h2>
      <p>
        A través del formulario de solicitud de cita recogemos: nombre y apellidos, correo electrónico, teléfono,
        motivo general de contacto, preferencia de horario y de contacto y, de forma opcional, un breve mensaje.
        No solicitamos información clínica a través de la web; te pedimos que no la incluyas en el mensaje.
      </p>

      <h2>3. Finalidad</h2>
      <p>
        Utilizamos tus datos exclusivamente para responder a tu solicitud, orientarte sobre el servicio más
        adecuado y, en su caso, concertar una cita. No los usaremos para enviarte comunicaciones comerciales.
      </p>

      <h2>4. Legitimación</h2>
      <p>
        La base jurídica del tratamiento es tu consentimiento, que otorgas al marcar la casilla de aceptación
        antes de enviar el formulario, y la aplicación de medidas precontractuales a petición tuya. Puedes
        retirar tu consentimiento en cualquier momento.
      </p>

      <h2>5. Conservación</h2>
      <p>
        Conservaremos los datos durante el tiempo necesario para atender tu solicitud. Si finalmente inicias un
        proceso psicológico con nosotros, los datos pasarán a formar parte de tu historia clínica y se
        conservarán durante los plazos que establece la normativa sanitaria.
      </p>

      <h2>6. Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros, salvo obligación legal. Los proveedores tecnológicos que nos dan
        servicio (por ejemplo, alojamiento web o correo electrónico) actúan como encargados del tratamiento con
        las garantías exigidas por el RGPD.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad escribiendo a {l.email ? <a href={`mailto:${l.email}`}>{l.email}</a> : 'nuestro correo de contacto'}
        {l.address ? ` o por correo postal a ${l.address}` : ''}, indicando el derecho que deseas ejercer.
      </p>
      <p>
        Si consideras que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la
        Agencia Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
        ).
      </p>

      <h2>8. Seguridad y confidencialidad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos. Todas las profesionales del
        gabinete están sujetas al deber de secreto profesional.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Este sitio no utiliza cookies propias ni de terceros con fines analíticos o publicitarios, por lo que no
        se muestra ningún aviso de cookies.
      </p>
    </LegalLayout>
  );
}
