import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { faq } from '../data/faq.js';

function FaqItem({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className={`faq__item${open ? ' is-open' : ''}`}>
      <h3>
        <button
          type="button"
          className="faq__question"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <Plus className="faq__icon" size={20} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </h3>
      <div className="faq__panel" id={`${id}-panel`} role="region" aria-labelledby={`${id}-button`}>
        <div className="faq__panel-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="preguntas" className="section faq">
      <div className="container faq__grid">
        <header className="faq__head" data-reveal>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="section-title">
            Lo que muchas personas <em>se preguntan antes de venir.</em>
          </h2>
        </header>
        <div className="faq__list" data-reveal style={{ '--d': '120ms' }}>
          {faq.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
