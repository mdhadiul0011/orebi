'use client'
import React, { useState } from 'react'
import Container from '../container'
import Link from 'next/link'
import Heading from '../Heading'
import { RxCross2 } from "react-icons/rx";

export default function CartPage() {
  const [plas, setPlas] = useState(0)

  const handlePlas = () =>{
    if(plas == 10){
      setPlas(10)
    }
    else{
      setPlas(plas + 1)
    }
  }

  const handleMinus = () => {
    if(plas == 0){
      setPlas(0)
    }
    else{
      setPlas(plas - 1)
    }
  }
  return (
    <div className='mt-28'>
      <Container>
        <div className='relative'>
          <Heading>
              Cart
              <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / Cart</p>
          </Heading>
          <div className='hidden lg:block'>
            <div className='w-full flex justify-between bg-[#f0f0f0] py-3'>
              <div className='w-[25%] pl-5'>
                <p className=' font-primaryFont font-bold text-base text-black'>Product</p>
              </div>
              <div className='w-[25%] pl-5'>
                <p className=' font-primaryFont font-bold text-base text-black'>Price</p>
              </div>
              <div className='w-[25%] pl-5'>
                <p className=' font-primaryFont font-bold text-base text-black'>Quantity</p>
              </div>
              <div className='w-[25%] pl-5'>
                <p className=' font-primaryFont font-bold text-base text-black'>Total</p>
              </div>
            </div>
          </div>
          <div className='relative w-full flex justify-between items-center bg-white py-3 border border-solid border-[#f0f0f0]'>
            <div className='w-full lg:w-[25%] flex items-center'>
              <div className='pl-5'>
                <RxCross2 className='text-sm font-bold text-black cursor-pointer'/>
              </div>
              <div className=' pl-3 flex items-center'>
                <img className='w-20 h-20 lg:w-[60px] lg:h-[60px]' src='./imgs/arraivals 4.png' alt='product'/>
                <span className='mt-[-40px] lg:mt-0 pl-3 font-primaryFont font-bold text-sm text-black'>Product Name</span>
              </div>
            </div>
            <div className='w-0 lg:w-[25%] absolute left-[118px] top-[45%]  lg:static  pl-5'>
              <p className='font-primaryFont font-normal lg:font-bold text-sm text-gray lg:text-black'>$44.00</p>
            </div>
            <div className='w-[25%] pl-5 absolute right-5 top-[60%]  lg:static '>
              <div className='w-full lg:w-[30%] flex justify-between px-3 border border-solid border-[#f0f0f0]'>
                <span onClick={handleMinus} className='cursor-pointer'>-</span>
                <span>{plas}</span>
                <span onClick={handlePlas} className='cursor-pointer'>+</span>
              </div>
            </div>
            <div className='w-0 lg:w-[25%] absolute left-[118px] top-[70%]  lg:static pl-5'>
              <p className='font-primaryFont font-bold text-sm text-black'>$44.00</p>
            </div>
          </div>
          <div className='w-full bg-white block lg:flex justify-between items-center py-3 border border-solid border-[#f0f0f0]'>
              <div className='w-full lg:w-[30%] pl-4 block lg:flex items-center'>
                <select className='w-[97%] lg:w-[60%] border border-solid border-[#f0f0f0] px-2 py-2 outline-none font-primaryFont font-normal text-sm text-gray'>
                  <option>Size</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <p className='font-primaryFont font-semibold text-sm text-black pl-0 mt-3 lg:mt-0 lg:pl-4'>Apply Coupon</p>
              </div>
              <div className='font-primaryFont font-semibold text-sm text-black pl-4 lg:pl-0 pr-4 mt-3 lg:mt-0'>Update Cart</div>
          </div>
          <div className='w-[80%] lg:w-[30%] m-0 lg:ms-auto mt-[54px]'>
              <p className='font-primaryFont font-semibold text-base text-black text-left lg:text-right'>Cart Total</p>
              <div className='w-full flex items-center flex-wrap justify-between mt-6'>
                <div className='w-[90%] lg:w-[50%]  border border-solid border-[#f0f0f0] p-3'>
                    <p className='font-primaryFont font-semibold text-sm text-black'>SubTotal</p>
                </div>
                <div className='w-[90%] lg:w-[50%]  border border-solid border-[#f0f0f0] p-3'>
                <p className='font-primaryFont font-normal text-sm text-gray'>$44.00</p>
                </div>
                <div className='w-[90%] lg:w-[50%]  border border-solid border-[#f0f0f0] p-3'>
                <p className='font-primaryFont font-semibold text-sm text-black'>Total</p>
                </div>
                <div className='w-[90%] lg:w-[50%]  border border-solid border-[#f0f0f0] p-3'>
                <p className='font-primaryFont font-normal text-sm text-black'>$44.00</p>
                </div>
              </div>
              <div className='flex justify-start lg:justify-end'>
                <Link href='/CheckOut'>
                  <button className='bg-black border border-solid border-black px-10 py-3 text-white font-primaryFont font-bold text-base mt-8'>Proceed to Checkout</button>
                </Link>
              </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}
