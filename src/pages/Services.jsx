import { Link } from 'react-router-dom';
import { serviceOffers } from '../data/siteData';

const serviceOfferIcons = {
  '/generalconsulting': (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </svg>
  ),
  '/physicalai': (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
    </svg>
  ),
};

export default function Services() {
  return (
    <>
      <section className="page-hero page-hero-services">
        <div className="container services-hero">
          <h1 className="page-title services-hero-title">Services</h1>
          <p className="lead-text services-hero-lead">
            We help organizations solve complex challenges through consulting and curated data for
            Physical AI.
          </p>
        </div>
      </section>

      <section className="section section-dark services-section">
        <div className="container">
          <h2 className="services-offer-heading">What we offer</h2>
          <div className="services-offer-grid">
            {serviceOffers.map((offer, index) => (
              <article
                key={offer.path}
                className="service-offer-card fade-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="service-offer-icon" aria-hidden="true">
                  {serviceOfferIcons[offer.path]}
                </div>
                <div className="service-offer-card-body">
                  <h3>
                    <Link to={offer.path}>{offer.title}</Link>
                  </h3>
                  <p>{offer.description}</p>
                  <Link to={offer.path} className="service-offer-card-link">
                    View more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
