import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AllPackages from './pages/AllPackages';
import ContactPage from './pages/ContactPage';
import Loading from './layout/Loading';
// Account pages removed

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin',
    confirmPassword: 'admin',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/package" element={<AllPackages />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Account routes removed */}
          </Routes>

          <ScrollToTop />

          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;