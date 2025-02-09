import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HeroPage from './pages/heropage/hero'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroPage/>
      <Expertise/>
    </>
  )
}

export default App