import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import Swal from 'sweetalert2';
import { site, telHref } from '../data/site.js';
import { team } from '../data/team.js';
import { submitAppointment } from '../lib/submitAppointment.js';
import { alertError, alertSuccess, alertWarning, showLoading } from '../lib/alerts.js';

const reasons = [
  'Adaptación a la universidad o a una nueva ciudad',
  'Estrés académico o ansiedad',
  'Autoestima y desarrollo personal',
  'Relaciones sociales y convivencia',
  'Psicología infantojuvenil u orientación familiar',
  'Primera valoración',
  'Todavía no lo tengo claro',
];

const schedules = ['Mañanas', 'Tardes', 'Indiferente'];
const channels = ['Teléfono', 'Correo electrónico'];

const empty = {
  name: '',
  email: '',
  phone: '',
  reason: '',
  professional: '',
  schedule: '',
  channel: '',
  message: '',
  privacy: false,
};

const fieldLabels = {
  name: 'Nombre y apellidos',
  email: 'Correo electrónico',
  phone: 'Teléfono',
  reason: 'Motivo de contacto',
  schedule: 'Preferencia de horario',
  channel: 'Preferencia de contacto',
  privacy: 'Política de privacidad',
};

function validate(v) {
  const e = {};
  if (v.name.trim().length < 3) e.name = 'Escribe tu nombre y apellidos.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Escribe un correo electrónico válido.';
  const digits = v.phone.replace(/[\s.-]/g, '').replace(/^(\+34|0034)/, '');
  if (!/^[6-9]\d{8}$/.test(digits)) e.phone = 'Escribe un teléfono de 9 cifras.';
  if (!v.reason) e.reason = 'Elige el motivo que más se acerque.';
  if (!v.schedule) e.schedule = 'Elige una franja horaria.';
  if (!v.channel) e.channel = 'Elige cómo prefieres que te contactemos.';
  if (v.message.length > 600) e.message = 'El mensaje puede tener como máximo 600 caracteres.';
  if (!v.privacy) e.privacy = 'Necesitamos que aceptes la política de privacidad.';
  return e;
}

function Field({ id, label, error, hint, optional, children }) {
  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {optional && <span className="field__optional"> (opcional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

function Choice({ name, legend, options, value, error, onChange }) {
  return (
    <fieldset className={`field choice${error ? ' field--error' : ''}`} aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="field__label">{legend}</legend>
      <div className="choice__options">
        {options.map((o) => (
          <label key={o} className="choice__pill">
            <input type="radio" name={name} value={o} checked={value === o} onChange={onChange} />
            <span>{o}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="field__error" id={`${name}-error`}>
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function AppointmentForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [sending, setSending] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [params] = useSearchParams();

  // Preselecciona motivo o profesional cuando se llega desde un servicio o una ficha del equipo
  useEffect(() => {
    const motivo = params.get('motivo');
    const con = params.get('con');
    const person = team.find((p) => p.id === con);
    if (!reasons.includes(motivo) && !person) return;
    setValues((v) => ({
      ...v,
      ...(reasons.includes(motivo) ? { reason: motivo } : {}),
      ...(person ? { professional: person.name } : {}),
    }));
    setHighlight(true);
    const t = setTimeout(() => setHighlight(false), 1600);
    return () => clearTimeout(t);
  }, [params]);

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    const next = { ...values, [name]: type === 'checkbox' ? checked : value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  };

  const describedBy = (name, hint) =>
    errors[name] ? `${name}-error` : hint ? `${name}-hint` : undefined;

  const onSubmit = async (e) => {
    e.preventDefault();
    setAttempted(true);
    const found = validate(values);
    setErrors(found);

    const keys = Object.keys(found);
    if (keys.length) {
      await alertWarning(
        'Revisa algunos datos',
        `<p>Faltan o no son correctos estos campos:</p><ul class="ep-alert__list">${keys
          .map((k) => `<li>${fieldLabels[k] ?? 'Mensaje'}</li>`)
          .join('')}</ul>`,
      );
      const first = document.getElementById(`f-${keys[0]}`) ?? document.querySelector(`[name="${keys[0]}"]`);
      first?.focus();
      return;
    }

    setSending(true);
    showLoading('Enviando tu solicitud…');
    try {
      await submitAppointment({
        nombre: values.name.trim(),
        email: values.email.trim(),
        telefono: values.phone.trim(),
        motivo: values.reason,
        profesional: values.professional || 'Sin preferencia',
        horario: values.schedule,
        contacto: values.channel,
        mensaje: values.message.trim(),
      });
      Swal.close();
      await alertSuccess(
        'Solicitud recibida',
        '¡Gracias por contactar con El Plantinar! Hemos recibido tu solicitud. En breve nos pondremos en contacto contigo.',
      );
      setValues(empty);
      setErrors({});
      setAttempted(false);
    } catch {
      Swal.close();
      const alt = [
        site.contact.phone && `llámanos al <a href="${telHref(site.contact.phone)}">${site.contact.phone}</a>`,
        site.contact.email && `escríbenos a <a href="mailto:${site.contact.email}">${site.contact.email}</a>`,
      ].filter(Boolean);
      await alertError(
        'No hemos podido enviar tu solicitud',
        `<p>Ha habido un problema de conexión y tu solicitud no se ha enviado.${
          alt.length ? ` Puedes intentarlo de nuevo o ${alt.join(' o ')}.` : ' Inténtalo de nuevo en unos minutos.'
        }</p>`,
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <form className={`form${highlight ? ' form--highlight' : ''}`} noValidate onSubmit={onSubmit} aria-labelledby="form-title">
      <div className="form__head">
        <h3 id="form-title">Solicitar información o cita</h3>
        <p>Solo necesitamos unos datos básicos para poder contactarte. No hace falta que des detalles personales.</p>
      </div>

      <div className="form__row">
        <Field id="f-name" label="Nombre y apellidos" error={errors.name}>
          <input
            id="f-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            required
          />
        </Field>
      </div>

      <div className="form__row form__row--2">
        <Field id="f-email" label="Correo electrónico" error={errors.email}>
          <input
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={update}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            required
          />
        </Field>
        <Field id="f-phone" label="Teléfono" error={errors.phone}>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={update}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            required
          />
        </Field>
      </div>

      <Field id="f-reason" label="Motivo de contacto" error={errors.reason}>
        <div className="select">
          <select
            id="f-reason"
            name="reason"
            value={values.reason}
            onChange={update}
            aria-invalid={Boolean(errors.reason)}
            aria-describedby={describedBy('reason')}
            required
          >
            <option value="" disabled>
              Elige una opción
            </option>
            {reasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </Field>

      <Field id="f-professional" label="¿Con quién te gustaría hablar?" optional>
        <div className="select">
          <select id="f-professional" name="professional" value={values.professional} onChange={update}>
            <option value="">Sin preferencia, que me oriente el equipo</option>
            {team.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} · {p.role}
              </option>
            ))}
          </select>
        </div>
      </Field>

      <div className="form__row form__row--2">
        <Choice
          name="schedule"
          legend="Preferencia de horario"
          options={schedules}
          value={values.schedule}
          error={errors.schedule}
          onChange={update}
        />
        <Choice
          name="channel"
          legend="¿Cómo prefieres que te contactemos?"
          options={channels}
          value={values.channel}
          error={errors.channel}
          onChange={update}
        />
      </div>

      <Field
        id="f-message"
        label="Mensaje"
        optional
        error={errors.message}
        hint="Si quieres, cuéntanos brevemente qué te gustaría trabajar. No incluyas información médica."
      >
        <textarea
          id="f-message"
          name="message"
          rows={4}
          maxLength={600}
          value={values.message}
          onChange={update}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message', true)}
        />
      </Field>

      <div className={`field checkbox${errors.privacy ? ' field--error' : ''}`}>
        <label className="checkbox__label">
          <input
            id="f-privacy"
            type="checkbox"
            name="privacy"
            checked={values.privacy}
            onChange={update}
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? 'privacy-error' : undefined}
          />
          <span>
            He leído y acepto la{' '}
            <Link to="/privacidad" target="_blank">
              política de privacidad
            </Link>
            .
          </span>
        </label>
        {errors.privacy && (
          <p className="field__error" id="privacy-error">
            {errors.privacy}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={sending}>
        {sending ? 'Enviando…' : 'Enviar solicitud'}
        <Send size={17} strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  );
}
