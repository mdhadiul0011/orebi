'use client'
import React, { useRef, useState } from 'react'
import Heading from '@/components/Heading'
import Container from '@/components/container'
import Flex from '../Flex'
import Pagination from '../paginate/pagination'
import Link from 'next/link'
import ShopLeftSidebar from '../shopLeftsidebar'
import ShopLeftPart from '../shopLeftPart'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import useClickOutside from '@/helpers'

export default function ShopArea() {
  const [showNumber, setShowNumber] = useState(12)
  const [show, setShow] = useState(false)
  const sidebarRef = useRef(null)


  useClickOutside(sidebarRef , ()=>{
    setShow(false)
  })

  const handleShow = () => {
    setShow(true)
  }


  return (
    <div className='mt-28 relative'>
      <Container>
        <Heading>
            Product
            <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / Shop</p>
        </Heading>
        <Flex className='gap-x-5 md:gap-x-15'>
            {
              show && 
              <div className='w-full md:w-[25%] bg-slate-400 sm:bg-transparent absolute top-0 left-0 sm:static z-50 p-8 sm:p-0 ' ref={sidebarRef}>
              <ShopLeftPart/>
              <div className='flex items-center justify-center cursor-pointer w-7 h-7 rounded-full bg-white sm:hidden text-xl absolute top-3 right-3'>
                <IoCloseSharp onClick={()=>setShow(!show)} className='block sm:hidden'/>
              </div>
            </div>
            }
            <div className='hidden sm:block'>
              <div className='w-full bg-slate-400 sm:bg-transparent absolute top-0 left-0 sm:static z-50 p-8 sm:p-0 ' ref={sidebarRef}>
                <ShopLeftPart/>
                <div className='flex items-center justify-center cursor-pointer w-7 h-7 rounded-full bg-white sm:hidden text-xl absolute top-3 right-3'>
                  <IoCloseSharp onClick={()=>setShow(!show)} className='block sm:hidden'/>
                </div>
              </div>
            </div>
            <div className='w-[75%] ml-[18%] sm:ml-10 relative'>
                <div className='block sm:flex mb-4 justify-end gap-x-10 items-center'>
                  <div className='flex items-center gap-x-3.5 mb-4 sm:mb-0' >
                      <span>Sort by:</span>
                      <select class="w-[140px] md:w-[240px] bg-gray-50 border border-[#f0f0f0] text-gray-900 rounded-lg focus:ring-black focus:border-black block p-2.5 font-primaryFont font-normal text-base">
                          <option selected>Featured</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                      </select>
                  </div>
                  <div className='flex items-center gap-x-3.5' >
                      <span>Show:</span>
                      <select onChange={(e)=>setShowNumber(e.target.value)} class="w-[140px] md:w-[200px] bg-gray-50 border border-[#f0f0f0] text-gray-900 rounded-lg focus:ring-black focus:border-black block p-2.5 font-primaryFont font-normal text-base">
                          <option value="12">12</option>
                          <option value="24">24</option>
                          <option value="36">36</option>
                          <option value="48">48</option>
                          <option value="60">60</option>
                          <option value="72">72</option>
                          <option value="84">84</option>
                          <option value="96">96</option>
                          <option value="108">108</option>
                      </select>
                  </div>
                  <div onClick={handleShow} className='text-xl block sm:hidden absolute right-0 top-0 cursor-pointer'>
                    <HiBars3CenterLeft/>
                  </div>
                </div>
                <Pagination itemsPerPage={showNumber} />
            </div>
        </Flex>
      </Container>
    </div>
  )
}
