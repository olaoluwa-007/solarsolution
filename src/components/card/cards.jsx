import React from 'react'

const Cards = ({id, name, desc}) => {
  return (
    <div>
        <div className='bg-white pl-5 pr-2 pt-15 pb-10 font-sans rounded-2xl h-[90%] w-[90%]'>
            <h1 className='text-brandedRed font-bold text-4xl py-3 md:text:2xl lg:text-3xl'>{id}</h1>
            <h2 className='text-brandedZinc text-2xl py-2 md:text-md lg:text-xl'>{name}</h2>
            <p className='text-gray pr-7 md:text-sm pr-0'>{desc}</p>
        </div>
    </div>
  )
}

export default Cards