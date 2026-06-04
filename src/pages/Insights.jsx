import { insights } from '../data/siteData';

export default function Insights() {
  return (
    <>
      <section className="page-hero page-hero-insights">
        <div className="container insights-hero">
          <h1 className="page-title insights-hero-title">Insights</h1>
          <p className="lead-text fade-up insights-hero-lead">
            Our research combines advanced analytical techniques with thorough market research and
            holistic thinking.
          </p>
        </div>
      </section>

      <section className="section section-dark insights-section">
        <div className="container">
          <div className="insights-grid">
            {insights.map((item, index) => (
              <article
                key={item.title}
                className="insight-card fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className="insight-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <h3 className="insight-card-title">{item.title}</h3>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
