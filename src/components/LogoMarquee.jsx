import BoxImage from './BoxImage';

export default function LogoMarquee({ logos, duration = 32, direction = 'left' }) {
  if (!logos?.length) return null;

  const track = [...logos, ...logos];
  const directionClass = direction === 'right' ? ' logo-marquee--right' : '';

  return (
    <div
      className={`logo-marquee${directionClass}`}
      style={{ '--marquee-duration': `${duration}s` }}
    >
      <div className="logo-marquee-track">
        {track.map((logo, index) => (
          <div key={`${logo}-${index}`} className="logo-marquee-item">
            <BoxImage
              src={logo}
              alt=""
              loading="lazy"
              draggable="false"
              wrapperClassName="box-image--logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
