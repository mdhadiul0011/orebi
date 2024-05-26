import React from 'react'

export default function DetailsForm() {
  return (
    <div>
        <div className='w-full border-b border-solid border-[#F0F0F0] pb-[60px]'>
            <h3 className='font-primaryFont font-bold text-[30px] text-black mt-28 mb-10'>Your Personal Details</h3>
            <div className='sm:flex sm:justify-between flex-wrap'>
                <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>First Name</label><br/>
                <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your First Name'/>
                </div>
                <div className='w-[90%] sm:w-[50%]'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Last Name</label><br/>
                <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Last Name'/>
                </div>
                <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0 mt-8'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Email address</label><br/>
                <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='email' placeholder='Enter Your Email'/>
                </div>
                <div className='w-[90%] sm:w-[50%] mt-8'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Telephone</label><br/>
                <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Telephone'/>
                </div>
            </div>
        </div>
    </div>
  )
}
