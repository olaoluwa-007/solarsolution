import React from 'react'
import SolarLogo from '../../assets/icons/solarlogo'

const Navbar = () => {
  return (
    <header className='bg-black w-full py-4 flex gap-40'>
        <div className='w-1/4 flex justify-center items-center'>
          <SolarLogo className='w-20 h-10' />
          <div className='text-white flex flex-col font-montserrat font-bold'>
            <p>Solar</p>
            <p>Solutions</p>
          </div>
        </div>

        <nav className='w-3/4 flex justify-between text-white items-center'>
            <ul className='flex justify-between gap-9 font-mono'>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">SOLAR INITIATIVES</a></li>
                <li><a href="#">OUR SERVICES</a></li>
                <li><a href="#">COMMUNITY</a></li>
                <li><a href="#">AESTHETICS</a></li>
            </ul>
        </nav>
       
    </header>
  )
}

export default Navbar