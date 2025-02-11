import React from 'react'
import SolarLogo from '../../assets/icons/solarlogo'
import ContactIcon from '../../assets/icons/contact'
import MailIcon from '../../assets/icons/mail'
import FacebookIcon from '../../assets/icons/facebook'
import XIcon from '../../assets/icons/x'
import InstagramIcon from '../../assets/icons/instagram'

const Footer = () => {
  return (
    <footer className=' w-full flex bg-black text-white flex-col justify-center items-center'>
        <div className='flex items-center w-[80%] py-5'>
            <p className='font-thin text-sm'>Whether you're looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help. Contact us today to start saving on your energy bills and enjoy reliable connectivity from the leading solar and cable companies in the DC, Maryland, and Virginia area. Snag the best deals with us and embrace a brighter and more connected future.</p>
        </div>
        <div className='h-0.5 w-full bg-white'></div>

        <div className='flex w-[90%] py-10 justify-center gap-10'>
            <div className='flex flex-col w-[40%] gap-4'>
                <div className='flex'>
                    <SolarLogo/>              
                    <div className='text-white flex flex-col font-bold'>
                        <p>Solar</p>
                        <p>Solutions</p>
                    </div>
                </div>
                
                <p className='font-thin text-sm'>Contact us today to explore our services and take advantage of the great deals available from the leading solar and cable companies in the DC, Maryland, and Virginia area. Let us be your trusted partner in finding the best solutions for your energy and connectivity needs.</p>
                
            </div>

            <div className='h-30 w-0.5 bg-white'></div>

            <div className='flex flex-col gap-5'>
                <h4 className='text-md font-bold'>Quick Links</h4>
                <div>
                    <ul className='flex flex-col font-sans text-sm gap-2 font-thin'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Solar Initiatives</li>
                        <li>Our Services</li>
                        <li>Community</li>
                    </ul>
                </div>
            </div>

            <div className='h-30 w-0.5 bg-white'></div>
            
            <div className='flex flex-col gap-5'>
                <h4 className='text-md font-bold'>Services</h4>
                <div>
                    <ul className='flex flex-col font-sans text-sm gap-2 font-thin'>
                        <li>Solar Solution</li>
                        <li>Cable Services</li>
                        <li>Deals and Promotions</li>
                        <li>Consultation and Support</li>
                    </ul>
                </div>
               
            </div>

            <div className='h-30 w-0.5 bg-white'></div>
           
            <div className='flex flex-col gap-5'>
                <h4 className='text-md font-bold'>Contact</h4>
                <div className='flex flex-col text-sm font-thin gap-4'>
                    <div className='flex gap-2'>
                        <ContactIcon/>
                        <p>0123456789</p>
                    </div>
                    <div className='flex gap-2'>
                        <MailIcon/>
                        <p>company@gmail.com</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FacebookIcon/>
                        <XIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='h-0.5 w-full bg-white'></div>
        <div>
            <p className='py-5'>© 2023 Company Name  -  developed by Roots Digital Marketing</p>
        </div>
        <div className='h-0.5 w-full bg-white'></div>
    </footer>
  )
}

export default Footer
