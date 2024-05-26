import React from 'react'
import Flex from '../Flex'
import H5 from '../h5'
import { FaShoppingCart } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import { AiFillHeart } from 'react-icons/ai'

export default function Hover() {
  return (
    <div>
    <div className='z-50 w-full group-hover:bottom-0 hover:transition duration-500 ease-in-out h-[50%] bg-white absolute bottom-[-51%]'>
        <Flex className='justify-end items-center gap-4 mr-[30px] mt-6 pb-3 sm:pb-5 '>
            <H5 className='font-primaryFont font-regular text-sm xl:text-base text-gray hover:text-black hover:font-bold duration-500 ease-out'>Add to Wish List</H5>
            <div><AiFillHeart/></div>
        </Flex>
        <Flex className='justify-end items-center gap-4 mr-[30px] pb-3 sm:pb-5 '>
            <H5 className='font-primaryFont font-regular text-sm xl:text-base text-gray hover:text-black hover:font-bold duration-500 ease-out'>Compare</H5>
            <div><TfiReload/></div>
        </Flex>
        <Flex className='justify-end items-center gap-4 mr-[30px] pb-3 sm:pb-5 '>
            <H5 className='font-primaryFont font-regular text-sm xl:text-base text-gray hover:text-black hover:font-bold duration-500 ease-out'>Add to Cart</H5>
            <div><FaShoppingCart/></div>
        </Flex>
      </div>
    </div>
  )
}
