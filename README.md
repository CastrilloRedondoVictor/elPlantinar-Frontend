# El Plantinar & Co. · Web

Web del gabinete de psicología El Plantinar & Co. (Sevilla). React + Vite, sitio estático.

## Uso

```bash
npm install
npm run dev       # desarrollo en http://127.0.0.1:5180
npm run build     # build de producción en dist/
npm run preview   # sirve la build localmente
```

## Dónde se edita el contenido

| Archivo | Contenido |
| --- | --- |
| `src/data/site.js` | Contacto, horario, mapa, datos legales y endpoint del formulario |
| `src/data/team.js` | Equipo (textos, titulaciones, fotos) |
| `src/data/services.js` | Servicios y áreas de trabajo |
| `src/data/pricing.js` | Tarifas |
| `src/data/faq.js` | Preguntas frecuentes |
| `src/data/posts.js` | Artículos de la sección Recursos |

Si un campo de contacto se deja vacío, el elemento correspondiente deja de mostrarse.

### Formulario

Con `form.endpoint` vacío, el formulario valida los datos y muestra la confirmación, pero no envía nada.
Para recibir las solicitudes, crea un formulario en un servicio como Formspree y pega su URL en `form.endpoint`.
A partir de ese momento, la confirmación solo se muestra si el servicio responde correctamente.

### Imágenes

Las fotos originales están en `../Consulta_Images`. Para regenerar las versiones optimizadas:

```bash
node scripts/optimize-images.mjs
```

## Azure Static Web Apps

- App location: `frontend`
- API location: (vacío)
- Output location: `dist`
- Build preset: React (o Custom)

`public/staticwebapp.config.json` redirige cualquier ruta a `index.html` para que funcionen las URLs de React Router (`/recursos`, `/privacidad`…).
