export default function LegalLayout({ title, updated, children }) {
  return (
    <article className="page legal">
      <header className="page-hero page-hero--legal">
        <div className="container container--narrow">
          <p className="eyebrow">Información legal</p>
          <h1 className="page-hero__title">{title}</h1>
          {updated && <p className="article__byline">Última actualización: {updated}</p>}
        </div>
      </header>
      <div className="container container--narrow prose">{children}</div>
    </article>
  );
}
