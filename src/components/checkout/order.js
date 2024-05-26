import React from 'react'
import Flex from '../Flex'

export default function Order() {
  return (
    <div className='mt-28'>
      <h3 className='text-black text-[30px] font-bold font-primaryFont'>Your Order</h3>
        <div className='mt-12'>
            <Flex>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-black text-sm font-bold font-primaryFont border border-solid border-[#f0f0f0] '>Product</div>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-gray text-sm font-normal font-primaryFont border border-solid border-[#f0f0f0] '>Total</div>
            </Flex>
            <Flex>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-black text-sm font-bold font-primaryFont border border-solid border-[#f0f0f0] '>Product name x 1</div>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-gray text-sm font-normal font-primaryFont border border-solid border-[#f0f0f0] '>389.99 $</div>
            </Flex>
            <Flex>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-black text-sm font-bold font-primaryFont border border-solid border-[#f0f0f0] '>Subtotal</div>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-gray text-sm font-normal font-primaryFont border border-solid border-[#f0f0f0] '>389.99 $</div>
            </Flex>
            <Flex>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-black text-sm font-bold font-primaryFont border border-solid border-[#f0f0f0] '>Total</div>
                <div className='w-[50%] lg:w-[20%] px-5 py-3 text-gray text-sm font-normal font-primaryFont border border-solid border-[#f0f0f0] '>389.99 $</div>
            </Flex>
        </div>
    </div>
  )
}
