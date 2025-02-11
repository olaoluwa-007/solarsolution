import React from 'react'
import "./expertise.css"

const Expertise = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center py-10'>
        <div>
            <h1 className='text-black text-5xl text-center font-bold md:text-4xl'>Our Expertise and Experience</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-5 gap-5 pt-10'>
            <div className='solarsolutions'>
                <h1 className='text-white pl-5 pt-5 pr-20 text-2xl font-extrabold'>Solar Solutions</h1>
                <p className='text-white px-5 pt-5 text-lg font-semibold'>Harness the power of the sun and  embrace clean, renewable energy with our solar solutions.</p>
            </div>
            <div className='cableservices'>
                <h1 className='text-white pl-5 pt-5 pr-20 text-2xl font-extrabold'>Cable Services</h1>
                <p className='text-white px-5 pt-5 text-lg font-semibold'>Stay connected with high-quality cable services that deliver reliable and fast internet, television.</p>
            </div>
            <div className='internetsolutions'>
            <h1 className='text-white pl-5 pt-5 pr-20 text-2xl font-extrabold'>Internet Solutions</h1>
            <p className='text-white px-5 pt-5 text-lg font-semibold'>From fast broadband to fiber-optic connections, we'll help you find the internet service provider.</p>
            </div>
            <div className='phoneservices'>
                <h1 className='text-white pl-5 pt-5 pr-20 text-2xl font-extrabold'>Phone Services</h1>
                <p className='text-white px-5 pt-5 text-lg font-semibold'>Discover cost-effective and feature-rich phone services that keep you connected to your loved ones.</p>
            </div>
        </div>
    </section>
  )
}

export default Expertise