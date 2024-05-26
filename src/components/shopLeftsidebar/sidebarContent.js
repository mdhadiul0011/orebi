'use client'
import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import SubDropDown from './subDrop';

export default function SidebarContent({dropDown, MTitle, data}) {
    const [drop, setDrop] = useState(dropDown)
    const [show, setShow] = useState(true)
  return (
    <div className='mb-7'>
      {drop? <div onClick={()=>setShow(!show)} className='flex items-center justify-between cursor-pointer'>
        <h2 className='font-primaryFont font-bold text-xl text-black'>{MTitle}</h2>
        <GoTriangleDown/>
      </div> 
      : <div className='flex items-center justify-between cursor-pointer'>
      <h2 className='font-primaryFont font-bold text-xl text-black'>{MTitle}</h2>
    </div> }

      {
        show && 
        <div>
          {data.map((item)=>(
              <SubDropDown catagoryDrop={item.subCatagory ? true : false} title={item.name} color=''>
                {item.subCatagory && 
                  item.subCatagory.map((items)=>(
                    <p className='font-primaryFont font-normal text-base text-gray cursor-pointer mt-5 border-b border-solid border-gray pl-3 pb-4'>{items.name}</p>
                  ))
                }
            </SubDropDown>    
          ))}

            
      </div>
      }
    </div>
  )
}
