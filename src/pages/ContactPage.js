import React from 'react'
import HeroHeader from '../layout/HeroHeader'
import Booking from '../components/Booking'
import ContactUS from '../components/ContactUS'

const ContactPage = () => {
  return (
    <>
    <HeroHeader title={'Contact Us'}/>
    <Booking />
    <ContactUS />
        
    </>
  )
}

export default ContactPage