import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Account from './pages/account';
import LoginPage from './pages/account/LoginPage';
import RegisterPage from './pages/account/RegisterPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds before hiding the spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Services />} />
            <Route path='/package' element={<AllPackages />} />
            <Route path='/contact' element={<ContactPage />} />
            
            <Route path='/account' element={<Account user={user} setUser={setUser} />} />
            
            <Route path='/login' element={<LoginPage user={user} />} />
            
            <Route path='/register' element={<RegisterPage setUser={setUser}/>} />
          </Routes>

          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;