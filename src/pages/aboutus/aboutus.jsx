import React from 'react'
import About from "../../assets/img/about.png"

const AboutUs = () => {
  return (
    <section className='w-full flex bg-brandedRed justify-center py-10'>
        <div className='flex justify-around items-center w-[80%] '>
            <div className=' flex flex-col text-white gap-5'>
                <h1 className='text-5xl font-bold'>Who We Are</h1>
                <p className='text-md'>Welcome to our sales and marketing company, where we specialize in helping customers snag great deals from the leading solar and cable companies in the DC, Maryland, and Virginia area.We understand that finding the right solar and cable solutions for your needs can be a daunting task, which is why we're here to make the process easier and more affordable for you.</p>
                <div className='flex gap-10'>
                    <button className='py-5 px-10 bg-white text-black rounded-full'>Read More</button>
                    <button className='py-5 px-10 bg-black text-white rounded-full'>Contact us today</button>
                </div>
            </div>

            <img src={About} alt="about us" />
        </div>
    </section>
  )
}

export default AboutUs