import { site } from '../data/site.js';

/**
 * Envía la solicitud de cita.
 * - Si `site.form.endpoint` tiene valor, hace un POST JSON (compatible con Formspree y servicios similares)
 *   y solo se resuelve si el servicio responde correctamente.
 * - Si está vacío, no se envía nada: se resuelve tras una breve pausa.
 */
export async function submitAppointment(data) {
  const { endpoint } = site.form;

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Respuesta ${response.status}`);
  }
}
