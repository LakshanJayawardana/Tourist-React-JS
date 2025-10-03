import React from 'react';

const services = [
  {
    icon: 'fa-file-alt',
    title: 'CV Review',
    description: 'Professional CV review and optimization to improve interview conversion and highlight your strengths.',
  },
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Mentorship',
    description: 'One-on-one mentorship to accelerate your learning, career projects, and technical growth.',
  },
  {
    icon: 'fa-briefcase',
    title: 'Career Guidance',
    description: 'Personalized career planning, interview preparation and role-targeting strategies.',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Advanced Level ICT Classes(Edexel/Cambridge & Local) ',
    description: 'Structured Advanced Level ICT lessons and exam preparation with practical coding exercises.',
  },
];


const OurServices = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const ServiceItem = ({ icon, title, description }) => {
    return (
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className={`fa fa-3x ${icon} text-primary mb-4`}></i>
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };

export default OurServices;