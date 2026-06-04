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
            <div className="col-img home-who-we-are-media">
              <div className="home-video-wrap">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={media.homeWhoWeArePoster}
                  src={media.homeWhoWeAreVideo}
                  aria-label="Who We Are — Cantor Dust overview video"
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
            <div className="col-text">
              <h2 className="section-title col-section-title">Who We Are</h2>
              <p className="card-text">
                At Cantor Dust, our team of experts helps organizations solve complex operational
                and analytical challenges across energy and climate, healthcare, manufacturing,
                and Physical AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">We make sure you get what you need.</p>

          <div className="steps-grid">
            {howWeWorkSteps.map((step, index) => (
              <article
                key={step.title}
                className="step-card fade-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <h3 className="card-title card-title--italic">{step.title}</h3>
                <p className="card-text">{step.text}</p>
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
            <h3>Private Sector</h3>
          </div>
          <LogoMarquee logos={privateSectorLogos} duration={36} direction="left" />
        </div>

        <div className="logo-grid-section">
          <div className="container">
            <h3>Development Sector</h3>
          </div>
          <LogoMarquee logos={developmentLogos} duration={28} direction="right" />
        </div>
      </section>
    </>
  );
}
