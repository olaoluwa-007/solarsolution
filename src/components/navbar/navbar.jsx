import React from 'react'
import SolarLogo from '../../assets/icons/solarlogo'

const Navbar = () => {
  return (
    <header className='flex w-full bg-black px-15 py-4'>
        <div className='w-1/4'>
            <SolarLogo/> 
            <span className='text-white'>Solar Solutions</span>
        </div>
    </header>
  )
}

export default Navbar