import React from 'react'
import Container from '../container'
import Heading from '../Heading'
import Link from 'next/link'
import DetailsForm from './details'
import Customar from './newcustomar'
import Password from './password'

export default function Signup() {
  return (
    <div className='mt-28'>
      <Container>
        <Heading>
            Sign Up
            <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / Signup</p>
        </Heading>
        <div className='mt-28 border-b border-solid border-[#F0F0F0] pb-[60px]'>
            <p className='w-[90%] md:w-[50%] font-primaryFont font-normal text-base text-gray'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div>
            <DetailsForm/>
            <Customar/>
            <Password/>
        </div>
        <div className='mt-[70px]'>
            <input className='border border-gray p-2' type='checkbox'/>
            <span className='font-primaryFont font-normal text-sm text-gray pl-4'>I have read and agree to the Privacy Policy</span>
            <div className='mt-5'>
                <span className='font-primaryFont font-normal text-sm text-gray'>Subscribe Newsletter</span>
                <input className='ml-4' type='checkbox'/> <span className='font-primaryFont font-normal text-sm text-gray pl-4'>Yes</span>
                <input className='ml-4' type='checkbox'/> <span className='font-primaryFont font-normal text-sm text-gray pl-4'>No</span>
                <div>
                    <button className='bg-black border border-solid border-black px-20 py-5 text-white font-primaryFont font-bold text-base mt-8'>Login</button>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}
