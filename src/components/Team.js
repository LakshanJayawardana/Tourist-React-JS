import React from 'react';

import team1 from '../img/team-1.jpg'

import team2 from '../img/team-2.jpg'

import team3 from '../img/team-3.jpg'

import team4 from '../img/team-4.jpg'

const Team = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            designation: 'Tour Guide',
            imageSrc: team1,
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
            },
        },
        {
            name: 'Jane Smith',
            designation: 'Tour Guide',
            imageSrc: team2,
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
            },
        },
        {
            name: 'Bob Johnson',
            designation: 'Tour Guide',
            imageSrc: team3,
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
            },
        },
        {
            name: 'Alice Williams',
            designation: 'Tour Guide',
            imageSrc: team4,
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#',
            },
        },
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                    <h1 className="mb-5">Meet Our Guide</h1>
                </div>
                <div className="row g-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={0.1 + 0.2 * index + 's'}>
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={member.imageSrc} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href={member.socialMedia.facebook}><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href={member.socialMedia.twitter}><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href={member.socialMedia.instagram}><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">{member.name}</h5>
                                    <small>{member.designation}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;