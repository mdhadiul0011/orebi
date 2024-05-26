import React from 'react'
import { prices } from './data'

export default function Prices() {
  return (
    <div className='mt-10'>
        <div className='flex items-center justify-between cursor-pointer'>
            <h3 className='font-primaryFont font-bold text-base md:text-xl text-black'>Shop by Price</h3>
        </div>
        {
            prices.map((item, i)=>(
                <div key={i} className='flex items-center cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                    <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>{item.range}</h2>
                </div>
            ))
        }
    </div>
  )
}
