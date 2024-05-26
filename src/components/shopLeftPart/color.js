'use client'
import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

export default function Color() {
    const [drop, setDrop] = useState(true)
  return (
    <div className='mt-10'>
        <div onClick={()=>setDrop(!drop)} className='flex items-center justify-between cursor-pointer'>
            <h3 className='font-primaryFont font-bold text-base md:text-xl text-black'>Shop by Color</h3>
            {drop ? <GoTriangleDown/> : <GoTriangleUp/>}
        </div>
    {
        drop && 
        <div>
            <div className='flex items-center cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <span className='w-3 h-3 bg-black rounded-full inline-block mr-3'></span>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>color 1</h2>
            </div>
            <div className='flex items-center cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <span className='w-3 h-3 bg-red-500 rounded-full inline-block mr-3'></span>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>color 2</h2>
            </div>
            <div className='flex items-center cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <span className='w-3 h-3 bg-green-500 rounded-full inline-block mr-3'></span>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>color 3</h2>
            </div>
            <div className='flex items-center cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <span className='w-3 h-3 bg-gray rounded-full inline-block mr-3'></span>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>color 4</h2>
            </div>
            <div className='flex items-center cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <span className='w-3 h-3 bg-teal-500 rounded-full inline-block mr-3'></span>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>color 5</h2>
            </div>
        </div>
    }
    </div>
  )
}
