import React from 'react'
import Cards from "../../components/card/cards"
import { cardsData } from '../../data/card'

const FAQ = () => {
  return (
    <section className='bg-lightgray flex w-full justify-center items-center py-20 flex-wrap'>
        <div className='grid grid-cols-3 gap-4 w-[80%] flex-wrap'>
           <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl font-extrabold'>Why Choose Us?</h1>
                <p className='pt-3 pr-10 text-md font-medium text-zinc'>Whether you're looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help.</p>
            </div>
            {cardsData.length && cardsData.map((card, index)=>(
                <Cards
                    key={index}
                    id={card.id}
                    name={card.title}
                    desc={card.description}
                />
            ))}
        </div>   
    </section>
  )
}

export default FAQ