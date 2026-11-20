import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { author, posts } from '../data/posts.js';
import PostCard from '../components/PostCard.jsx';
import NotFound from './NotFound.jsx';
import { usePageTitle } from '../lib/usePageTitle.js';

function Block({ block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if (block.h) return <h2>{block.h}</h2>;
  if (block.list)
    return (
      <ul>
        {block.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  return null;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];
  usePageTitle(post?.title, post?.excerpt);

  if (!post) return <NotFound />;

  const related = [posts[(index + 1) % posts.length], posts[(index + 2) % posts.length]];

  return (
    <article className="page article">
      <header className="page-hero page-hero--article">
        <div className="container container--narrow">
          <Link className="back-link" to="/recursos">
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
            Todos los artículos
          </Link>
          <p className="eyebrow">{post.category}</p>
          <h1 className="page-hero__title page-hero__title--article">{post.title}</h1>
          <p className="article__byline">
            {author} · {post.minutes} min de lectura
          </p>
        </div>
      </header>

      <div className="container container--narrow prose">
        <p className="prose__lead">{post.excerpt}</p>
        {post.body.map((b, i) => (
          <Block key={i} block={b} />
        ))}

        <aside className="article__cta">
          <p>
            Si te has sentido identificado o identificada con lo que cuenta este artículo y quieres hablarlo, en El
            Plantinar podemos acompañarte.
          </p>
          <Link className="btn btn--primary" to={{ pathname: '/', hash: '#cita' }}>
            Pedir cita
          </Link>
        </aside>
      </div>

      <section className="section section--tight article__related" aria-labelledby="related-title">
        <div className="container">
          <h2 id="related-title" className="related-title">
            Sigue leyendo
          </h2>
          <div className="post-grid post-grid--2">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
