import React from 'react'
import About from "../../assets/img/about.png"

const AboutUs = () => {
  return (
    <section className='w-full flex bg-brandedRed justify-center py-10'>
        <div className='flex justify-around items-center w-[80%]'>
            <div className=' flex flex-col text-white gap-5'>
                <h1 className='text-5xl font-bold md:text-4xl'>Who We Are</h1>
                <p className='text-md md:text-sm'>Welcome to our sales and marketing company, where we specialize in helping customers snag great deals from the leading solar and cable companies in the DC, Maryland, and Virginia area.We understand that finding the right solar and cable solutions for your needs can be a daunting task, which is why we're here to make the process easier and more affordable for you.</p>
                <div className='flex gap-10 md:flex-col gap-5'>
                    <button className='py-4 px-8 bg-white text-black rounded-full md:py-4'>Read More</button>
                    <button className='py-5 px-8 bg-black text-white rounded-full md:py-4'>Contact us today</button>
                </div>
            </div>
            <div className='flex w-[350%] md:w-[300%]'>
                <img src={About} alt="about us" />
            </div>
           
        </div>
    </section>
  )
}

export default AboutUs