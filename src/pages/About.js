import React from 'react'
import HeroHeader from '../layout/HeroHeader'
import AboutUs from '../components/AboutUs'
import Team from '../components/Team'

const About = () => {
  return (
    <>
    <HeroHeader title={'About Us'}/>
    <AboutUs />
    <Team />
        
    </>
  )
}

export default About