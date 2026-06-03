import SectionHeading from '../components/SectionHeading';
import { verticals, serviceTypes, dataCollection } from '../data/siteData';

export default function GeneralConsulting() {
  const icons = [
    <svg key="1" viewBox="0 0 24 24" width="40" height="40" fill="var(--color-accent)"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>,
    <svg key="2" viewBox="0 0 24 24" width="40" height="40" fill="var(--color-accent)"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"></path></svg>,
    <svg key="3" viewBox="0 0 24 24" width="40" height="40" fill="var(--color-accent)"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></svg>
  ];

  return (
    <>
      <section className="page-hero page-hero-consulting">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>General Consulting</h1>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Our Verticals</h2>
          <div className="verticals-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {verticals.map((item, index) => (
              <article
                key={item.title}
                className="vertical-card fade-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius)',
                  padding: '3rem 2rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  {icons[index] || icons[0]}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: '#fff', fontStyle: 'italic' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Types of Services</h2>
          <div className="service-types-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {serviceTypes.map((item, index) => (
              <article
                key={item.title}
                className="service-type-card fade-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius)',
                  padding: '3rem'
                }}
              >
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#fff', fontStyle: 'italic' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Primary Data Collection</h2>
          <div className="service-types-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {dataCollection.map((item, index) => (
              <article
                key={item.title}
                className="service-type-card fade-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius)',
                  padding: '3rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#fff', fontStyle: 'italic' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>{item.text}</p>
                </div>
                <div style={{ marginLeft: '2rem' }}>
                  <svg viewBox="0 0 24 24" width="60" height="60" fill="var(--color-border)"><path d="M21 15.46l-5.27-.61-2.52-4.76L10.69 14.85 7 13.04l-3.31 6.42h18.31l-1-4zM22 2H2v20h20V2zM12 18H4v-1l4.5-8.5L12 11l3-5.5 5 9.5v3h-8z"></path></svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
