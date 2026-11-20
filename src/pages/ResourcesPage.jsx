import { posts } from '../data/posts.js';
import PostCard from '../components/PostCard.jsx';
import { usePageTitle } from '../lib/usePageTitle.js';

export default function ResourcesPage() {
  usePageTitle(
    'Recursos',
    'Artículos breves del Equipo El Plantinar sobre adaptación a la universidad, estrés académico, convivencia y bienestar emocional.',
  );

  return (
    <div className="page">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Blog y recursos</p>
          <h1 className="page-hero__title">
            Lecturas breves <em>para tu nueva etapa.</em>
          </h1>
          <p className="page-hero__lead">
            Ideas sencillas sobre la vida universitaria, los cambios y el bienestar emocional, escritas por el
            Equipo El Plantinar.
          </p>
        </div>
      </header>
      <section className="section section--tight">
        <div className="container post-grid">
          {posts.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
