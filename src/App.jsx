import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HeroPage from './pages/heropage/hero'
import Expertise from './pages/expertisepage/expertise'
import FAQ from './pages/faq/faq'
import AboutUs from './pages/aboutus/aboutus'
import Service from './pages/services/service'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroPage/>
      <Expertise/>
      <FAQ/>
      <AboutUs/>
      <Service/>
      <Footer/>
    </>
  )
}

export default App