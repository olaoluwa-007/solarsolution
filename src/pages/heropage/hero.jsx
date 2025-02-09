import React from 'react'
import "./hero.css"
// import solar from "../../assets/img/solar2.jpg"

const HeroPage = () => {
  return (
    <section className= "herosection w-full flex bg-lightgray mt-2">
        <div className= "herocontainer w-full pb-30 pt-10  flex items-center">
            <h1 className='text-white text-7xl font-extrabold font-montserrat pl-9'>SOLAR <span className='text-brandedRed'>SOLUTIONS</span> <br/>FOR A SUSTAINABLE <br />TOMORROW<span className='text-brandedRed'>.</span></h1>
        </div>
    </section>
  )
}

export default HeroPage