import React from 'react';
import package1 from '../img/package-1.jpg';
import package2 from '../img/package-2.jpg';
import package3 from '../img/package-3.jpg';

const packagesData = [
  {
    img: package1,
    location: 'Thailand',
    duration: '3 days',
    persons: '2 Person',
    price: '$149.00',
    rating: 5,
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
  },
  {
    img: package2,
    location: 'Indonesia',
    duration: '3 days',
    persons: '2 Person',
    price: '$139.00',
    rating: 5,
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
  },
  {
    img: package3,
    location: 'Malaysia',
    duration: '3 days',
    persons: '2 Person',
    price: '$189.00',
    rating: 5,
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
  },
];


const Packages = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {packagesData.map((packageItem, index) => (
            <PackageItem key={index} packageItem={packageItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PackageItem = ({ packageItem }) => {
    return (
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src={packageItem.img} alt="" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2"></i>
              {packageItem.location}
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2"></i>
              {packageItem.duration}
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2"></i>
              {packageItem.persons}
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">{packageItem.price}</h3>
            <div className="mb-3">
              {[...Array(packageItem.rating)].map((_, index) => (
                <small key={index} className="fa fa-star text-primary"></small>
              ))}
            </div>
            <p>{packageItem.description}</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end">
                Read More
              </a>
              <a href="#" className="btn btn-sm btn-primary px-3">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Packages;