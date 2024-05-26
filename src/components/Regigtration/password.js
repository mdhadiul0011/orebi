import React from 'react'

export default function Password() {
  return (
    <div className='w-full border-b border-solid border-[#F0F0F0] pb-[60px]'>
        <h3 className='font-primaryFont font-bold text-[30px] text-black mt-28 mb-10'>Password</h3>
        <div className='sm:flex sm:justify-between wrap'>
        <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0'>
            <label className='font-primaryFont font-bold text-[18px] text-black'>Password</label><br/>
            <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='password' placeholder='Enter Your Password'/>
        </div>
        <div className='w-[90%] sm:w-[50%]'>
            <label className='font-primaryFont font-bold text-[18px] text-black'>Confirm Password</label><br/>
            <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='password' placeholder='Enter Your Confirm Password'/>
        </div>
        </div>
    </div>
  )
}
