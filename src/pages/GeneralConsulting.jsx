import { verticals, serviceTypes, dataCollection } from '../data/siteData';

const verticalIcons = [
  <svg key="energy" viewBox="0 0 24 24" width="40" height="40" fill="var(--color-accent)" aria-hidden="true">
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>,
  <svg key="healthcare" viewBox="0 0 24 24" width="40" height="40" fill="var(--color-accent)" aria-hidden="true">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
  </svg>,
  <svg key="manufacturing" viewBox="0 0 24 24" width="40" height="40" fill="var(--color-accent)" aria-hidden="true">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
  </svg>,
];

const dataCollectionIcons = {
  survey: (
    <svg viewBox="0 0 24 24" width="60" height="60" fill="var(--color-accent)" aria-hidden="true">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm-5 6H7v-2h5v2z" />
    </svg>
  ),
  geospatial: (
    <svg viewBox="0 0 24 24" width="60" height="60" fill="var(--color-accent)" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
};

export default function GeneralConsulting() {
  return (
    <div className="general-consulting-page">
      <section className="page-hero page-hero-consulting">
        <div className="container page-hero-inner">
          <h1 className="page-title">General Consulting</h1>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Our Verticals</h2>
          <div className="verticals-grid">
            {verticals.map((item, index) => (
              <article
                key={item.title}
                className="vertical-card fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="vertical-card-icon">{verticalIcons[index]}</div>
                <h3 className="card-title card-title--italic">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <h2 className="section-title">Types of Services</h2>
          <div className="service-types-grid">
            {serviceTypes.map((item, index) => (
              <article
                key={item.title}
                className="service-type-card fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="card-title card-title--italic">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Primary Data Collection</h2>
          <div className="service-types-grid service-types-grid--flex-pair">
            {dataCollection.map((item, index) => (
              <article
                key={item.title}
                className="service-type-card service-type-card--row fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <h3 className="card-title card-title--italic">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
                <div className="data-collection-icon" aria-hidden="true">
                  {dataCollectionIcons[item.icon]}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
