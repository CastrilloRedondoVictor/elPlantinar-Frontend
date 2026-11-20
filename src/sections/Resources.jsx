import { Link } from 'react-router-dom';
import { posts } from '../data/posts.js';
import PostCard from '../components/PostCard.jsx';

export default function Resources() {
  const selection = posts.slice(0, 3);

  return (
    <section id="recursos" className="section resources">
      <div className="container">
        <header className="section-head section-head--split" data-reveal>
          <div>
            <p className="eyebrow">Blog y recursos</p>
            <h2 className="section-title">
              Lecturas breves <em>para tu nueva etapa.</em>
            </h2>
          </div>
          <Link className="link-arrow" to="/recursos">
            Ver todos los artículos
          </Link>
        </header>

        <div className="post-grid">
          {selection.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
