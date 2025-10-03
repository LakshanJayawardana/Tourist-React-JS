import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = Object.fromEntries(data.entries());
    // For now just log and show a friendly message. Integrate with your API when ready.
    console.log('Consultation request:', payload);
    alert('Thanks! Your consultation request was received. We will be in touch shortly.');
    e.target.reset();
  };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Let's collaborate</h6>
              <h1 className="text-white mb-4">Request a Consultation</h1>
              <p className="mb-4">
                Tell us about your challenge and we'll match you with the right engineer or mentor. We help
                startups and teams ship reliable software, improve developer workflows, and accelerate product
                roadmaps.
              </p>
              <p className="mb-4">
                Whether you need a short CV review or ongoing mentorship, book a time to discuss scope, budget,
                and next steps.
              </p>
              <Link className="btn btn-outline-primary py-3 px-5 mt-2" to="/services">
                Learn More
              </Link>
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Tell us about your needs</h2>
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
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        name="datetime"
                        type="datetime-local"
                        className="form-control"
                        id="datetime"
                        placeholder="Date & Time"
                      />
                      <label htmlFor="datetime">Preferred Date & Time (optional)</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select name="service" className="form-select" id="select1">
                        <option value="cv-review">CV Review</option>
                        <option value="mentorship">Mentorship</option>
                        <option value="career-guidance">Career Guidance</option>
                        <option value="al-ict-classes">A/L ICT Classes</option>
                        <option value="project-work">Project / Contract Work</option>
                      </select>
                      <label htmlFor="select1">Service Required</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Notes, goals, or special requests"
                        id="message"
                      ></textarea>
                      <label htmlFor="message">Notes or special requests</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Request Consultation
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;