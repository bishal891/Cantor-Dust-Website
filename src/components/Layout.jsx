import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

export default function Layout() {
  const isHome = useLocation().pathname === '/';

  return (
    <div className={`site${isHome ? ' site--home' : ''}`}>
      <SEO />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
