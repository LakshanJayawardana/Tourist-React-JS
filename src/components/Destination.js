import React from 'react'


import destination1 from '../img/destination-1.jpg'
import destination2 from '../img/destination-2.jpg'
import destination3 from '../img/destination-3.jpg'
import destination4 from '../img/destination-4.jpg'
import { Link } from 'react-router-dom'

const Destination = () => {
  return (
    <>
        <div className="container-xxl py-5 destination">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Projects</h6>
                <h1 className="mb-5">Featured Projects</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <Link className="position-relative d-block overflow-hidden" to={'/'}>
                                <img className="img-fluid" src={destination1} alt="Project screenshot" /> 
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">SaaS Platform</div>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <Link className="position-relative d-block overflow-hidden" to={'/'}>
                                <img className="img-fluid" src={destination2} alt="Project screenshot" /> 
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Mobile App</div>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <Link className="position-relative d-block overflow-hidden" to={'/'}>
                                <img className="img-fluid" src={destination3} alt="Project screenshot" /> 
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">API & Integrations</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn mh-350" data-wow-delay="0.7s">
                    <Link className="position-relative d-block h-100 overflow-hidden" to={'/'}>
                        <img className="img-fluid position-absolute w-100 h-100 object-fit-cover" src={destination4}  alt="Project screenshot" />
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Design System</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Destination