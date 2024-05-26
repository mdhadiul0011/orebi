import React from 'react'
import Heading from '../Heading'
import Link from 'next/link'
import Container from '../container'

export default function Log() {
  return (
    <div className='mt-28'>
        <Container>
            <Heading>
                Login
                <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / Login</p>
            </Heading>
            <div className='mt-28 border-b border-solid border-[#F0F0F0] pb-[60px]'>
                <p className='w-[90%] md:w-[50%] font-primaryFont font-normal text-base text-gray'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            <div className='w-full border-b border-solid border-[#F0F0F0] pb-[60px]'>
                <h3 className='font-primaryFont font-bold text-[30px] text-black mt-28 mb-10'>Returning Customer</h3>
                <div className='sm:flex sm:justify-between wrap'>
                  <div className='w-[90%] sm:w-[50%] mb-10 sm:mb-0'>
                    <label className='font-primaryFont font-bold text-[18px] text-black'>Email address</label><br/>
                    <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='email' placeholder='Enter Your Email'/>
                  </div>
                  <div className='w-[90%] sm:w-[50%]'>
                    <label className='font-primaryFont font-bold text-[18px] text-black'>Password</label><br/>
                    <input className='w-[90%] mt-5 outline-none border-b border-solid border-[#F0F0F0] pb-3' type='password' placeholder='Enter Your Password'/>
                  </div>
                </div>
                <div>
                  <button className='bg-white border border-solid border-black px-20 py-5 text-black font-primaryFont font-bold text-base mt-8'>Login</button>
                </div>
            </div>
            <div className='mt-[58px]'>
                <h3 className='font-primaryFont font-bold text-[30px] text-black mt-28 mb-10'>New Customer</h3>
                <p className='w-[90%] md:w-[50%] font-primaryFont font-normal text-base text-gray'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <button className='bg-black px-20 py-5 text-white font-primaryFont font-bold text-base mt-8'>Continue</button>
                <p className='w-[90%] md:w-[50%] font-primaryFont font-normal text-base text-gray mt-10'>If you not sign up you Id so kindly do <span className='font-bold text-black border-b solid border-black'> <Link href='/SignUp'>Sign Up</Link></span></p>
            </div>
        </Container>
    </div>
  )
}
