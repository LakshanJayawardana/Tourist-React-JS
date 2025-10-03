import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

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
      
      <div className="container-fluid position-relative p-0">
        <nav className={`navbar navbar-expand-lg navbar-light  px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-code me-3"></i>DevStudio
            </h1>
            {/* <img src={logo} alt="Logo" /> */}
          </NavLink>
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
              <NavLink exact to="/" activeClassName="active-nav-item" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" activeClassName="active-nav-item" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/service" activeClassName="active-nav-item" className="nav-item nav-link">
                Services
              </NavLink>
              <NavLink to="/package" activeClassName="active-nav-item" className="nav-item nav-link">
                Products
              </NavLink>
              {/* <div className="nav-item dropdown">
                  <NavLink to="/d" activeClassName="active-nav-item" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Pages
                  </NavLink>
                  <div className="dropdown-menu m-0">
                    <NavLink to="/destination" className="dropdown-item">
                      Destination
                    </NavLink>
                    <NavLink to="/booking" className="dropdown-item">
                      Booking
                    </NavLink>
                    <NavLink to="/team" className="dropdown-item">
                      Travel Guides
                    </NavLink>
                    <NavLink to="/testimonial" className="dropdown-item">
                      Testimonial
                    </NavLink>
                  </div>
                </div> */}
              <NavLink to="/contact" activeClassName="active-nav-item" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>


            <NavLink to="/account" className="btn btn-primary rounded-pill py-2 px-4">
              My Account
            </NavLink>


          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header