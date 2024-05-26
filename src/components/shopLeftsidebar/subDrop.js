'use client'
import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function SubDropDown(props) {
    const [drop, setDrop] = useState(props.catagoryDrop)
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState()
  return (
    <div>
      {
      drop ? <div onClick={()=>setShow(!show)} className='flex items-center justify-between cursor-pointer border-b border-solid border-gray pb-5 mt-9'>
        <h2 className='font-primaryFont font-normal text-base text-gray cursor-pointer'>
          {
            props.color && <span className='inline-block mr-5 w-3 h-3 rounded-full' style={{background: props.color}}></span>
          }
          {props.title}
        </h2>
          
          {show ? <FaMinus className='text-gray'/> : <FaPlus className='text-gray'/>}
      </div> 
      : <div className='flex items-center justify-between cursor-pointer border-b border-solid border-gray pb-5 mt-9'>
      <h2 className='font-primaryFont font-normal text-base text-gray cursor-pointer'>{props.title}</h2>
        
    </div> 
    }

      {
        show && 
        <div>
            {props.children}
      </div>
      }
    </div>
  )
}
