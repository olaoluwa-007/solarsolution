import React from 'react'

const Cards = ({id, name, desc}) => {
  return (
    <div>
        <div className='bg-white pl-5 pr-2 pt-15 pb-10 font-sans rounded-2xl'>
            <h1 className='text-brandedRed font-bold text-4xl py-3'>{id}</h1>
            <h2 className='text-brandedZinc text-2xl py-2'>{name}</h2>
            <p className='text-gray pr-7'>{desc}</p>
        </div>
    </div>
  )
}

export default Cards