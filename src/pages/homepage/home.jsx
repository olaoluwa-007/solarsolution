import React from 'react'
import HeroPage from '../heropage/hero'
import Expertise from '../expertisepage/expertise'
import FAQ from '../faq/faq'
import AboutUs from '../aboutus/aboutus'
import Service from '../services/service'

const Home = () => {
  return (
    <>
        <HeroPage/>
        <Expertise/>
        <FAQ/>
        <AboutUs/>
        <Service/>
    </>
  )
}

export default Home