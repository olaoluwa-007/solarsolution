import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HeroPage from './pages/heropage/hero'
import Expertise from './pages/expertisepage/expertise'
import FAQ from './pages/faq/faq'
import AboutUs from './pages/aboutus/aboutus'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroPage/>
      <Expertise/>
      <FAQ/>
      <AboutUs/>
    </>
  )
}

export default App