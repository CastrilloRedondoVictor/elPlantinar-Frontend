import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function PostCard({ post, index = 0 }) {
  return (
    <article className="post-card" data-reveal style={{ '--d': `${(index % 3) * 110}ms` }}>
      <p className="post-card__meta">
        <span>{post.category}</span>
        <span aria-hidden="true">·</span>
        <span>{post.minutes} min de lectura</span>
      </p>
      <h3 className="post-card__title">
        <Link to={`/recursos/${post.slug}`} className="post-card__link">
          {post.title}
        </Link>
      </h3>
      <p className="post-card__excerpt">{post.excerpt}</p>
      <span className="post-card__more" aria-hidden="true">
        Leer artículo <ArrowUpRight size={16} strokeWidth={2} />
      </span>
    </article>
  );
}
