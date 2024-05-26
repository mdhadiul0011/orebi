'use client'
import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { brand } from './data';

export default function Brand() {
    const [drop, setDrop] = useState(true)
  return (
    <div className='mt-10'>
        <div onClick={()=>setDrop(!drop)} className='flex items-center justify-between cursor-pointer'>
            <h3 className='font-primaryFont font-bold text-base md:text-xl text-black'>Shop by Brand</h3>
            {drop ? <GoTriangleDown/> : <GoTriangleUp/>}
        </div>
    {
        drop && 
        <div>
           {
            brand.map((item, i)=>(
                <div key={i} className='flex items-center cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                    <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>{item.bName}</h2>
                </div>
            ))
           }
        </div>
    }
    </div>
  )
}
