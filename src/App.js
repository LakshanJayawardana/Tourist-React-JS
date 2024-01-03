
import './App.css';
import AboutUs from './components/AboutUs';
import Booking from './components/Booking';
import Destination from './components/Destination';
import OurServices from './components/OurServices';
import Packages from './components/Packages';
import Team from './components/Team';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <OurServices />
      <Destination />
      <Packages />
      <Booking />
      <Team />

      <Footer />
    </>
  );
}

export default App;
