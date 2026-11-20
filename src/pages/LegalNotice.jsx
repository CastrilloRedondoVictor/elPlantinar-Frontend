import { site } from '../data/site.js';
import { usePageTitle } from '../lib/usePageTitle.js';
import LegalLayout from '../components/LegalLayout.jsx';

export default function LegalNotice() {
  usePageTitle('Aviso legal');
  const l = site.legal;

  return (
    <LegalLayout title="Aviso legal" updated={l.lastUpdated}>
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
      </p>
      <ul>
        {l.owner && (
          <li>
            <strong>Titular:</strong> {l.owner}
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
            <strong>Correo electrónico:</strong> <a href={`mailto:${l.email}`}>{l.email}</a>
          </li>
        )}
        {site.contact.phone && (
          <li>
            <strong>Teléfono:</strong> {site.contact.phone}
          </li>
        )}
        {l.registry && (
          <li>
            <strong>Datos registrales:</strong> {l.registry}
          </li>
        )}
        {l.healthCenterId && (
          <li>
            <strong>Registro de Centros Sanitarios de Andalucía:</strong> {l.healthCenterId}
          </li>
        )}
      </ul>
      <p>
        La actividad sanitaria del gabinete se presta por psicólogas habilitadas como psicólogas generales
        sanitarias.
      </p>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene como finalidad informar sobre los servicios de psicología de {site.name} y facilitar
        el contacto con el gabinete. El acceso y uso del sitio atribuye la condición de persona usuaria e implica
        la aceptación de este aviso legal.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        La persona usuaria se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para
        actividades ilícitas o contrarias a la buena fe. Los contenidos de este sitio tienen carácter informativo
        y no sustituyen en ningún caso una evaluación o un tratamiento psicológico individualizado.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, fotografías, logotipos, diseño gráfico y demás elementos de este sitio son titularidad de{' '}
        {l.owner || site.name} o cuentan con la autorización correspondiente. Queda prohibida su reproducción,
        distribución o transformación sin autorización expresa.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños que pudieran derivarse de interrupciones del servicio,
        errores técnicos o del uso indebido de los contenidos. Los enlaces a sitios de terceros se ofrecen a
        título informativo; el titular no controla ni se responsabiliza de su contenido.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Este sitio web no utiliza cookies propias ni de terceros con fines analíticos o publicitarios. El mapa de
        la sección de contacto se carga desde OpenStreetMap, que puede registrar datos técnicos de la conexión
        según su propia política.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten
        a los juzgados y tribunales que correspondan conforme a la normativa vigente.
      </p>
    </LegalLayout>
  );
}
