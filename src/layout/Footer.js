import React from 'react'
import package1 from '../img/package-1.jpg'
import package2 from '../img/package-2.jpg'
import package3 from '../img/package-3.jpg'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-3 col-md-6 text-center">
                            <h4 className="text-white mb-3">Company</h4>
                            <Link className="btn btn-link" to={'/about'}>About Us</Link>
                            <Link className="btn btn-link" to={'/contact'}>Contact Us</Link>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Gampaha, Sri Lanka</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+94 76 61 42 827</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>webwavesdigitalnco@gmail.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <Link className="border-bottom" href="#">WebWaves Digital</Link>, All Right Reserved.

                                Designed By <Link className="border-bottom" href="https://www.linkedin.com/in/lakshanjayawardana/">WebWaves Digital</Link>



                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link to={'/'}>Home</Link>
                                    <Link to={'/'}>Cookies</Link>
                                    <Link to={'/'}>Help</Link>
                                    <Link to={'/'}>FQAs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Link href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
           

        </>
    )
}

export default Footer