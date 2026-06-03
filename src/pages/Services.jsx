import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="section section-dark services-page">
      <div className="container services-offer">
        <h2
          className="services-offer-title"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
          }}
        >
          We offer:
        </h2>

        <ol className="services-offer-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li className="fade-up" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 400, lineHeight: 1.4 }}>
              <span>1) </span>
              <Link to="/generalconsulting">General consulting</Link> for analytical solutions and
              insights
            </h2>
          </li>
          <li className="fade-up" style={{ animationDelay: '0.1s' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 400, lineHeight: 1.4 }}>
              <span>2) </span>
              <Link to="/physicalai">Curated datasets</Link> for Physical AI
            </h2>
          </li>
        </ol>
      </div>
    </section>
  );
}
