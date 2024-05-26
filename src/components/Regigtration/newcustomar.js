import React from 'react'

export default function Customar() {
  return (
    <div className='w-full border-b border-solid border-[#F0F0F0] pb-[60px]'>
    <h3 className='font-primaryFont font-bold text-[30px] text-black mt-28 mb-10'>New Customer</h3>
    <div className='sm:flex sm:justify-between flex-wrap'>
        <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0'>
        <label className='font-primaryFont font-bold text-[18px] text-black'>Address</label><br/>
        <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Address'/>
        </div>
        <div className='w-[90%] sm:w-[50%]'>
        <label className='font-primaryFont font-bold text-[18px] text-black'>Address2</label><br/>
        <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Address2'/>
        </div>
        <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0 mt-8'>
        <label className='font-primaryFont font-bold text-[18px] text-black'>City</label><br/>
        <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your City'/>
        </div>
        <div className='w-[90%] sm:w-[50%] mt-8'>
        <label className='font-primaryFont font-bold text-[18px] text-black'>Postcode</label><br/>
        <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Postcode'/>
        </div>
        <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0 mt-8'>
        <label className='font-primaryFont font-bold text-[18px] text-black'>Division</label><br/>
        <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your City'/>
        </div>
        <div className='w-[90%] sm:w-[50%] mt-8'>
        <label className='font-primaryFont font-bold text-[18px] text-black'>District</label><br/>
        <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Postcode'/>
        </div>
    </div>
    </div>
  )
}
