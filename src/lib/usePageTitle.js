import { useEffect } from 'react';
import { site } from '../data/site.js';

const defaultTitle = `${site.name} · Gabinete de psicología en El Plantinar, Sevilla`;

export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : defaultTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description || site.description);
  }, [title, description]);
}
