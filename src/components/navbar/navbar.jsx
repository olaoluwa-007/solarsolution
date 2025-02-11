import React from 'react'
import SolarLogo from '../../assets/icons/solarlogo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-black w-full py-4 flex justify-center  lg'>
        <div className='flex w-[90%] justify-between'>
            <div className=' flex justify-center items-center'>
            <SolarLogo/>
            <div className='text-white flex flex-col font-montserrat font-bold'>
                <p>Solar</p>
                <p>Solutions</p>
            </div>
            </div>

            <nav className=' flex text-white items-center'>
                <ul className='flex gap-10 font-sans text-sm md:gap-5'>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT US</Link>
                    </li>
                    <li>
                        SOLAR INITIATIVES
                    </li>
                    <li>OUR SERVICES</li>
                    <li>COMMUNITY</li>
                </ul>
            </nav>
        </div>
        
       
    </header>
  )
}

export default Navbar