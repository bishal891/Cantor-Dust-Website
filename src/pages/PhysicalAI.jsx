import { annotationSteps, media } from '../data/siteData';

export default function PhysicalAI() {
  return (
    <>
      <section className="page-hero page-hero-physical">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Physical AI</h1>
          <p className="lead-text fade-up" style={{ maxWidth: '900px', marginInline: 'auto' }}>
            Our work focuses on building reliable datasets from real-world environments to support robotics and embodied AI. By collecting extensive video and sensor data from industrial settings, we enable the training of models capable of understanding and operating in complex physical environments.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', fontFamily: 'var(--font-heading)' }}>How We Annotate</h2>
          
          <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {annotationSteps.map((step, index) => (
              <article
                key={step.title}
                className="step-card fade-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius)',
                  padding: '2.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontStyle: 'italic' }}>{index + 1}. {step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="two-col fade-up">
            <div className="col-img">
              <img 
                src={media.insightHydropower} 
                alt="Annotation Example" 
                style={{ borderRadius: 'var(--radius)', width: '100%' }}
              />
            </div>
            <div className="col-text">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Data Quality Assurance</h2>
              <p style={{ color: 'var(--color-text-muted)' }}>
                All annotations go through multiple review stages to ensure accuracy, consistency, and high-quality datasets before delivery to the client. We use industry-standard tools such as CVAT to perform scalable video annotation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
