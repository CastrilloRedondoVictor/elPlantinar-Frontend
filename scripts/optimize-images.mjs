// Convierte las imágenes de ../Consulta_Images a WebP optimizado en src/assets/img.
// Uso: node scripts/optimize-images.mjs
import sharp from 'sharp';
import path from 'node:path';

const src = path.resolve('../Consulta_Images');
const out = path.resolve('src/assets/img');

const jobs = [
  ['PHOTO-2026-11-18-19-49-00.jpg', 'despacho', 1400],
  ['PHOTO-2026-11-18-19-28-03.jpg', 'recepcion', 1200],
  ['PHOTO-2026-11-18-19-10-58.jpg', 'fachada', 1200],
  ['Imagen_Jimena.jpg', 'jimena', 640],
  ['Imagen_Beatriz.jpg', 'beatriz', 640],
  ['Imagen_Marta.jpg', 'marta', 640, { left: 76, top: 86, width: 296, height: 374 }],
  ['Imagen_Naiara.jpg', 'naiara', 640, { left: 0, top: 170, width: 725, height: 797 }],
  ['Imagen_Abril.jpg', 'abril', 640],
];

for (const [file, name, width, crop] of jobs) {
  let img = sharp(path.join(src, file));
  if (crop) img = img.extract(crop);
  await img
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(out, `${name}.webp`));
  console.log('ok', name);
}

// Logotipo: favicon e imagen social
await sharp(path.join(src, 'PHOTO-2026-11-18-19-14-13.jpg'))
  .extract({ left: 540, top: 330, width: 520, height: 520 })
  .resize(192).png().toFile(path.resolve('public/favicon.png'));
await sharp(path.join(src, 'PHOTO-2026-11-18-19-14-13.jpg'))
  .resize(1200, 630, { fit: 'contain', background: '#F4EFE6' })
  .jpeg({ quality: 82 }).toFile(path.resolve('public/og-image.jpg'));
console.log('ok favicon/og');
