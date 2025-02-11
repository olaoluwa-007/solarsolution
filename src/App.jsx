import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/footer/footer'
import Home from './pages/homepage/home'
import AboutUs from './pages/aboutus/aboutus'
import Expertise from './pages/expertisepage/expertise'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
            errorElement={
              <div>
                <p>Opps!</p>
              </div>
            }
          />

          <Route 
            path="/about"
            element={<AboutUs/>}
          />

          <Route
            path="/expertise"
            element={<Expertise/>}
          />
        </Routes>

      </Router>
      
      
      <Footer/>
    </>
  )
}

export default App