// Logotipo de El Plantinar & Co.: brote en maceta dentro de un círculo + nombre.
export function LogoMark({ size = 44, inverse = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="32" fill={inverse ? '#F4EFE6' : '#E3E9DC'} />
      <path d="M32 46V22" stroke="#2F4A3C" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M32 14c2.6 3 2.6 7.4 0 10.4-2.6-3-2.6-7.4 0-10.4Z" fill="#2F4A3C" />
      <path d="M31.4 36.5c-5.8.4-10.2-2.7-11.8-8 5.7-.6 10.3 2.6 11.8 8Z" fill="#5F8A68" />
      <path d="M32.6 31c1.8-5.9 6.6-9.1 12.6-8.6-1.7 5.7-6.6 9-12.6 8.6Z" fill="#9DB89A" />
      <path d="M24 44h16l-1.7 7.2a2 2 0 0 1-1.9 1.5h-8.8a2 2 0 0 1-1.9-1.5L24 44Z" fill="#C0754D" />
    </svg>
  );
}

export default function Logo({ inverse = false, compact = false }) {
  return (
    <span className={`logo${inverse ? ' logo--inverse' : ''}`}>
      <LogoMark size={compact ? 38 : 44} inverse={inverse} />
      <span className="logo__text">
        <span className="logo__kicker">Gabinete</span>
        <span className="logo__name">
          El Plantinar <em>&amp; Co.</em>
        </span>
      </span>
    </span>
  );
}
