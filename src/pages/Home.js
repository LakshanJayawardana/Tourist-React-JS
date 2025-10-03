import React from 'react'

import AboutUs from '../components/AboutUs';
import Booking from '../components/Booking';
import Destination from '../components/Destination';
import OurServices from '../components/OurServices';
import Packages from '../components/Packages';
import Team from '../components/Team';
import HeroHeader from '../layout/HeroHeader';

const Home = () => {
    return (
        <>
            <HeroHeader title={'Build Better Products with DevStudio'} dese={'We help startups and teams ship well-crafted software — from discovery and design to engineering and launch.'}/>
            <AboutUs />
            <OurServices />
            <Packages />
            <Destination />
            <Booking />
            <Team />
        </>
    )
}

export default Home