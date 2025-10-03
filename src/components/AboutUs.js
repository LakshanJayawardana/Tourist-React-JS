import React from 'react'

import about from '../img/about.jpg'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s mh-400">
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100 object-fit-cover" src={about} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">WebWaves Digital</span></h1>
                    <p className="mb-4">We design and build web and mobile products that help businesses grow. Our team combines product thinking, engineering excellence, and modern UX to deliver scalable solutions.</p>
                    <p className="mb-4">From MVPs to enterprise platforms, we partner with organizations to deliver fast, reliable, and maintainable software tailored to real user needs.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Product strategy & discovery</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Custom web & mobile apps</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Cloud & DevOps</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>UI/UX design</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Scalable architecture</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Ongoing support & maintenance</p>
                        </div>
                    </div>
                    <Link className="btn btn-primary py-3 px-5 mt-2" to={'/about'}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs