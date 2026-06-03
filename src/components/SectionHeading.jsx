export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
