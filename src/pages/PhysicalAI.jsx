import BoxImage from '../components/BoxImage';
import SectionHeading from '../components/SectionHeading';
import { annotationSteps, physicalAiIntro } from '../data/siteData';
import { media } from '../data/wixMedia';

const annotationIcons = [
  <svg key="seg" viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
  </svg>,
  <svg key="frame" viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v2H5z" />
  </svg>,
  <svg key="time" viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>,
  <svg key="gran" viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
    <path d="M12 2l-5.5 9h11L12 2zm0 11.5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
  </svg>,
  <svg key="tools" viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
  </svg>,
  <svg key="qa" viewBox="0 0 24 24" width="36" height="36" fill="var(--color-accent)" aria-hidden="true">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" />
  </svg>,
];

export default function PhysicalAI() {
  return (
    <div className="physical-ai-page">
      <section className="section section-dark physical-intro">
        <div className="container">
          <div className="physical-intro-layout">
            <p className="physical-intro-text fade-up">{physicalAiIntro}</p>
            <div className="physical-intro-media fade-up delay-1">
              <BoxImage
                src={media.physicalAnnotation}
                alt="Annotation workflow"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gradient physical-annotate">
        <div className="container">
          <SectionHeading title="How We Annotate Data" />
          <div className="annotation-grid">
            {annotationSteps.map((step, index) => (
              <article
                key={step.title}
                className="annotation-card fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="annotation-card-icon">{annotationIcons[index]}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark physical-video">
        <div className="container">
          <h2 className="physical-section-title fade-up">Example Video</h2>
          <div className="physical-video-wrap fade-up delay-1">
            <video
              controls
              playsInline
              preload="metadata"
              src={media.physicalExampleVideo}
            >
              <track kind="captions" />
            </video>
          </div>
        </div>
      </section>

      <section className="section section-gradient physical-example">
        <div className="container">
          <h2 className="physical-section-title fade-up">Annotation Example</h2>
          <div className="physical-example-media fade-up delay-1">
            <BoxImage
              src={media.physicalAnnotationExample}
              alt="Annotation example diagram"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
