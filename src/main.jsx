import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/fraunces/full-italic.css';
import '@fontsource-variable/figtree';
import './styles/base.css';
import './styles/layout.css';
import './styles/sections.css';
import './styles/forms.css';
import './styles/pages.css';
import './styles/motion.css';
import App from './App.jsx';

// Activa las animaciones de entrada antes del primer render para evitar parpadeos
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reveal-ready');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
