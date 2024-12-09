/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Qualities />
      <Menu />
      <Team />
      <Testimonials />
      <WhoAreWe />
      <Reservation />
      <Footer />
    </>
  )
}

export default Home