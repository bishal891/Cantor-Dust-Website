import { insights } from '../data/siteData';

export default function Insights() {
  return (
    <>
      <section className="page-hero page-hero-insights">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '3.5rem',
              marginBottom: '2rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
            }}
          >
            Insights
          </h2>
          <p
            className="lead-text fade-up"
            style={{ maxWidth: '800px', marginInline: 'auto', color: 'var(--color-text-muted)' }}
          >
            Our research combines advanced analytical techniques with thorough market research and
            wholistic thinking.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div
            className="insights-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '4rem',
            }}
          >
            {insights.map((item, index) => (
              <article
                key={item.title}
                className="insight-card fade-up"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  background: 'transparent',
                  border: 'none',
                }}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div
                    className="insight-image"
                    style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '2rem' }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      lineHeight: 1.4,
                      fontWeight: 400,
                      borderBottom: '1px solid rgba(255,255,255,0.3)',
                      paddingBottom: '1rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    {item.title}
                  </h3>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
