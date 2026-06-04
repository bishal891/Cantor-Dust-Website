import BoxImage from './BoxImage';

export default function LogoGrid({ logos }) {
  if (!logos?.length) return null;

  return (
    <div className="logo-grid">
      {logos.map((logo, index) => (
        <div key={logo || index} className="logo-cell">
          <BoxImage src={logo} alt="" loading="lazy" wrapperClassName="box-image--logo" />
        </div>
      ))}
    </div>
  );
}
