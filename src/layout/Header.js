import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 45) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header>

            <Topbar />

            <div class="container-fluid position-relative p-0">
                <nav className={`navbar navbar-expand-lg navbar-light  px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
                    <a href="/" className="navbar-brand p-0">
                        <h1 className="text-primary m-0">
                            <i className="fa fa-map-marker-alt me-3"></i>Tourist
                        </h1>
                        {/* <img src={logo} alt="Logo" /> */}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link active">
                                Home
                            </a>
                            <a href="/about" className="nav-item nav-link">
                                About
                            </a>
                            <a href="/service" className="nav-item nav-link">
                                Services
                            </a>
                            <a href="/package" className="nav-item nav-link">
                                Packages
                            </a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Pages
                                </a>
                                <div className="dropdown-menu m-0">
                                    <a href="/destination" className="dropdown-item">
                                        Destination
                                    </a>
                                    <a href="/booking" className="dropdown-item">
                                        Booking
                                    </a>
                                    <a href="/team" className="dropdown-item">
                                        Travel Guides
                                    </a>
                                    <a href="/testimonial" className="dropdown-item">
                                        Testimonial
                                    </a>
                                
                                </div>
                            </div>
                            <a href="/contact" className="nav-item nav-link">
                                Contact
                            </a>
                        </div>
                        <a href="/" className="btn btn-primary rounded-pill py-2 px-4">
                            Register
                        </a>
                    </div>
                </nav>
                <HeroHeader />

            </div>
        </header>
    )
}

const HeroHeader = () => {
    return (
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Cox's Bazar" />
                <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2 mt-2">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header