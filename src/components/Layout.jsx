import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const isHome = useLocation().pathname === '/';

  return (
    <div className={`site${isHome ? ' site--home' : ''}`}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
