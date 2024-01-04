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
            <HeroHeader title={'Enjoy Your Vacation With Us'} dese={'Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit'}/>
            <AboutUs />
            <OurServices />
            <Destination />
            <Packages />
            <Booking />
            <Team />
        </>
    )
}

export default Home