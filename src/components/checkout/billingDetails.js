import React from 'react'

export default function BDetails() {
  return (
      <div className='w-full border-b border-solid border-[#F0F0F0] pb-[60px]'>
            <h3 className='font-primaryFont font-bold text-[30px] text-black mt-28 mb-10'>Billing Details</h3>
            <div className='sm:flex sm:justify-between wrap'>
                <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>First Name</label><br/>
                <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your First Name'/>
                </div>
                <div className='w-full sm:w-[50%]'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Last Name</label><br/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Last Name'/>
                </div>
            </div>
            <div className='w-full mt-5'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Company Name</label><br/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Company Name'/>
            </div>
            <div className='w-full mt-5'>
            <label className='font-primaryFont font-bold text-[18px] text-black'>Country*</label><br/>
                <select className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3 font-primaryFont font-normal text-base text-black'>
                    <option>Bangladesh</option>
                    <option>America</option>
                    <option>Uganda</option>
                    <option>United Kingdom</option>
                    <option>Japan</option>
                </select>
            </div>
            <div className='w-full mt-5'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Street Address*</label><br/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='House Number and Street Name'/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Apartment, suite, unit etc.(Optional)'/>
            </div>
            <div className='w-full mt-5'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Town/City*</label><br/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Town/City'/>
            </div>
            <div className='w-full mt-5'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Post Code</label><br/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Post Code'/>
            </div>
            <div className='w-full mt-5'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Phone</label><br/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='text' placeholder='Enter Your Phone'/>
            </div>
            <div className='w-full mt-5'>
                <label className='font-primaryFont font-bold text-[18px] text-black'>Email Address</label><br/>
                <input className='w-full mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='email' placeholder='Enter Your Email'/>
            </div>
            <div>
                <h3 className='font-primaryFont font-bold text-[30px] text-black mt-28'>Additional Information</h3>
                <h4 className='font-primaryFont font-bold text-base text-black mt-10'>Other Notes (optional)</h4>
                <p className='font-primaryFont font-normal text-sm text-gray mt-3'>Notes about your order, e.g. special notes for delivery.</p>
            </div>
        </div>
  )
}
