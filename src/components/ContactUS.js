import React from 'react'

const ContactUS = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const payload = Object.fromEntries(data.entries());
        console.log('Contact message:', payload);
        alert('Thanks! Your message has been sent. We will respond shortly.');
        e.target.reset();
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Contact DevStudio</h6>
                    <h1 className="mb-5">Get expert help for your product</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h5>Get In Touch</h5>
                        <p className="mb-4">Tell us about your requirements — product scope, timeline and key goals. We'll get back with next steps.</p>
                        <div className="d-flex align-items-center mb-4">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary w-50 h-50">
                                <i className="fa fa-map-marker-alt text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h5 className="text-primary">Office</h5>
                                <p className="mb-0">Gampaha, Sri Lanka</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary w-50 h-50">
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h5 className="text-primary">Mobile</h5>
                                <p className="mb-0">+94 72 61 42 827</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary w-50 h-50">
                                <i className="fa fa-envelope-open text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h5 className="text-primary">Email</h5>
                                <p className="mb-0">webwavesdigitalnco@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input name="name" required type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input name="email" required type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea name="message" required className="form-control" placeholder="Leave a message here" id="message"></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUS