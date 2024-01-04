
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
// import HeroHeader from './layout/HeroHeader';
import Services from './pages/Services';
import AllPackages from './pages/AllPackages';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <HeroHeader title={'Enjoy Your Vacation With Us'} dese={'Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit'} /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/package' element={<AllPackages />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
