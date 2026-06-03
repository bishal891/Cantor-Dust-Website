import LogoMarquee from '../components/LogoMarquee';
import { media } from '../data/wixMedia';
import {
  howWeWorkSteps,
  privateSectorLogos,
  developmentLogos,
} from '../data/siteData';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title fade-up">
            Intelligence for complex real-world environments.
          </h1>
          <a href="#contact" className="btn-pill fade-up delay-1">
            Contact Us
          </a>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="two-col fade-up">
            <div className="col-img">
              <img
                src={media.homeWhoWeAre}
                alt="Who We Are"
                style={{
                  borderRadius: 'var(--radius)',
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
            <div className="col-text" style={{ textAlign: 'left' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Who We Are
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                &ldquo;At Cantor Dust, our team of experts helps organizations solve complex
                operational and analytical challenges across Energy, Healthcare, Manufacturing,
                and Physical AI.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              How We Work
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
              We make sure you get what you need!
            </p>
          </div>

          <div className="steps-grid">
            {howWeWorkSteps.map((step, index) => (
              <article
                key={step.title}
                className="step-card fade-up"
                style={{
                  animationDelay: `${index * 0.12}s`,
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 'var(--radius)',
                  padding: '3rem 2rem',
                }}
              >
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-engagements" id="engagements">
        <div className="container">
          <h2 className="engagements-title">Our Team&apos;s Past Engagements</h2>
        </div>

        <div className="logo-grid-section">
          <div className="container">
            <h3>Private Sectors</h3>
          </div>
          <LogoMarquee logos={privateSectorLogos} duration={36} />
        </div>

        <div className="logo-grid-section">
          <div className="container">
            <h3>Development Works</h3>
          </div>
          <LogoMarquee logos={developmentLogos} duration={40} />
        </div>
      </section>
    </>
  );
}
