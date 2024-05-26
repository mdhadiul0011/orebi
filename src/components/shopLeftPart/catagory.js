'use client'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { catagory, catagory2 } from './data';
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

export default function Catagory() {
    const [drop, setDrop] = useState(true)
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)
  return (
    <div>
      <div className='flex items-center justify-between cursor-pointer'>
        <h3 className='font-primaryFont font-bold text-base md:text-xl text-black'>Shop by Catagory</h3>
      </div>
      {
        drop && 
        <div>
            <div onClick={()=>setShow(!show)} className='flex items-center justify-between cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>Catagory 1</h2>
                {show ? <FaMinus className='text-gray'/> : <FaPlus className='text-gray'/>}


            </div>
            {
                show && 
                <div>
                    {
                        catagory.map((item, i)=>(
                            <p key={i} className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer mt-5 border-b border-solid border-gray pl-3 pb-4'>{item.name}</p>
                        ))
                    }
                </div>
            }
            <div className='flex items-center justify-between cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>Catagory 2</h2>
            </div>

            <div onClick={()=>setOpen(!open)} className='flex items-center justify-between cursor-pointer border-b border-solid border-gray pb-5 mt-9'>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>Catagory 3</h2>
                {open ? <FaMinus className='text-gray'/> : <FaPlus className='text-gray'/>}
            </div>
            {
                open && 
                <div>
                    {
                        catagory2.map((item, i)=>(
                            <p key={i} className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer mt-5 border-b border-solid border-gray pl-3 pb-4'>{item.name}</p>
                        ))
                    }
                </div>
            }

            <div className='flex items-center justify-between cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>Catagory 4</h2>
            </div>

            <div className='flex items-center justify-between cursor-pointer border-b border-solid border-gray pb-5 mt-6'>
                <h2 className='font-primaryFont font-normal text-sm md:text-base text-gray cursor-pointer'>Catagory 5</h2>
            </div>
        </div>
      }
    </div>
  )
}
