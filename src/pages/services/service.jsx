import React from 'react'
import ServiceImage from "../../assets/img/ourservices.png"
import SolutionsIcon from '../../assets/icons/solutionsicon'
import CableIcon from '../../assets/icons/cableicon'
import PromotionsIcon from '../../assets/icons/promotionsicon'
import SupportIcon from '../../assets/icons/supporticon'
import './service.css'

const Service = () => {
  return (
    <section className='w-full flex flex-col justify-around items-center py-5'>
       <div className='text-center'>
            <h6 className='text-2xl font-bold text-brandedRed'>Our Services</h6>
            <h1 className='text-5xl font-extrabold font-sans pb-10'>What We Do</h1>
        </div>

        <div className='flex w-[80%] gap-5 items-center '>
            <div className='w-[40%] flex flex-col gap-5 '>
                <div className='py-5 pl-5 pr-9 bg-midgray rounded-2xl'>
                    <SolutionsIcon/>
                    <h1 className='text-thickgray text-2xl font-bold py-2'>Solar Solutions</h1>
                    <p className='text-gray'>Harness the power of the sun and embrace clean, renewable energy with our solar solutions.</p>
                </div>

                <div className='py-5 pl-5 pr-9 bg-midgray rounded-2xl'>
                    <CableIcon/>
                    <h1 className='text-thickgray text-2xl font-bold py-2'>Cable Services</h1>
                    <p className='text-gray'>Stay connected with high-quality cable services that deliver reliable and fast internet, television.</p>
                </div>
            </div>

            <div className='img'>
                <img src={ServiceImage} alt="image" />
            </div>
            
            
            <div className='w-[40%] flex flex-col gap-5'>
                <div  className='py-5 pl-5 pr-9 bg-midgray rounded-2xl'>
                    <PromotionsIcon/>
                    <h1 className='text-thickgray text-2xl font-bold py-2'>Deals and Promotions</h1>
                    <p className='text-gray pr-5'>We pride ourselves on securing great deals and promotions for our customers.</p>
                </div>
                <div className='py-5 pl-5 pr-9 bg-midgray rounded-2xl'>
                    <SupportIcon/>
                    <h1 className='text-thickgray text-2xl font-bold py-2'>Consultation and Support</h1>
                    <p className='text-gray pr-5'>We understand that navigating the solar and cable landscape can be overwhelming.</p>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Service