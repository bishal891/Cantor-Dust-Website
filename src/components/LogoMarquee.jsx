export default function LogoMarquee({ logos, duration = 32 }) {
  if (!logos?.length) return null;

  const track = [...logos, ...logos];

  return (
    <div className="logo-marquee" style={{ '--marquee-duration': `${duration}s` }}>
      <div className="logo-marquee-track">
        {track.map((logo, index) => (
          <div key={`${logo}-${index}`} className="logo-marquee-item">
            <img src={logo} alt="" loading="lazy" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
}
