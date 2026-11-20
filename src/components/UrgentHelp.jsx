import { LifeBuoy } from 'lucide-react';

export default function UrgentHelp({ variant = 'card' }) {
  return (
    <p className={`urgent urgent--${variant}`}>
      <LifeBuoy size={18} strokeWidth={1.8} aria-hidden="true" />
      <span>
        Si necesitas ayuda urgente, llama al <a href="tel:112">112</a>. Si estás pasando por un momento de mucho
        sufrimiento, puedes llamar al <a href="tel:024">024</a>, la línea de atención a la conducta suicida.
      </span>
    </p>
  );
}
