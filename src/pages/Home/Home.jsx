import React from 'react'
import Hero from '../Home/HomeContent/Hero'
import Features from '../Home/HomeContent/Features'
import PersonaSection from '../Home/HomeContent/PersonaSection'
import Pricing from '../Home/HomeContent/Pricing'
import Partners from '../Home/HomeContent/Partners'
import Testimonials from '../Home/HomeContent/Testimonials'
import Subscribe from '../Home/HomeContent/Subscribe'
import Footer from '../Home/HomeContent/Footer'

function Home() {
  return (
    <div>
     <Hero />
      <Features />
      <PersonaSection />
      <Pricing />
      <Partners />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home