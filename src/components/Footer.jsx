import { Link } from 'react-router-dom';
import { contact } from '../data/siteData';
import { media } from '../data/wixMedia';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <div className="footer-contact">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span className="btn-pill" style={{ background: '#2f356c', borderColor: 'transparent', padding: '0.5rem 1.5rem' }}>Contact</span>
            <div style={{ background: '#2f356c', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
            </div>
          </div>
          
          <div className="contact-row" style={{ marginBottom: '0.5rem' }}>
            <a href={`mailto:${contact.emailAlt}`}>{contact.emailAlt}</a>
          </div>
          <div className="contact-row">
            <span>{contact.phone}</span>
          </div>
        </div>

        <div className="footer-brand">
          <Link to="/">
            <img src={media.logo} alt="Cantor Dust" className="footer-logo" />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; All Rights Reserved.</p>
      </div>
    </footer>
  );
}
