import { Outlet } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
import { Footer, Navbar } from '.';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <main className='App'>
        <GlobalStyles />
        <ScrollToTop />
        <Navbar />

        <Outlet />

        <Footer />
      </main>
    </>
  );
};

export default Layout;
