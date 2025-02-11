import React from 'react'
import "./hero.css"
// import solar from "../../assets/img/solar2.jpg"

const HeroPage = () => {
  return (
    <section className= "herosection w-full flex bg-lightgray">
        <div className= "herocontainer w-full flex items-center">
            <h1 className='text-white text-7xl font-extrabold font-montserrat pl-9 md:text-6xl'>SOLAR <span className='text-brandedRed'>SOLUTIONS</span> <br/>FOR A SUSTAINABLE <br />TOMORROW<span className='text-brandedRed'>.</span></h1>
        </div>
    </section>
  )
}

export default HeroPage