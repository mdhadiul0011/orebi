import Heading from '@/components/Heading'
import Container from '@/components/container'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <div className='mt-28'>
      <Container>
        <Heading>
            About
            <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / About</p>
        </Heading>
        <div className='block mt-20 sm:mt-32 sm:flex justify-between gap-x-4'>
          <div className='w-full mt-10 sm:mt-0 sm:w-2/4'>
            <Link href='/'>
              <img src='./imgs/about_2.png' alt='about' className='w-full'/>
            </Link>
          </div>
          <div className='w-full mt-10 sm:mt-0 sm:w-2/4'>
            <Link href='/'>
              <img src='./imgs/about_1.png' alt='about' className='w-full'/>
            </Link>
          </div>
        </div>
        <div  className='mt-20 md:mt-32'>
          <p className='text-black font-primaryFont font-normal text-5 md:text-[39px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
        </div>
        <div className='block sm:flex justify-between gap-x-10 mt-28'>
          <div className='mt-10 sm:mt-0'>
            <h3 className='font-primaryFont font-bold text-black text-xl md:text-2xl mb-3'>Our Vision</h3>
            <p className='font-primaryFont font-normal text-gray text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='mt-10 sm:mt-0'>
            <h3 className='font-primaryFont font-bold text-black text-xl md:text-2xl mb-3'>Our Story</h3>
            <p className='font-primaryFont font-normal text-gray text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>
          <div className='mt-10 sm:mt-0'>
            <h3 className='font-primaryFont font-bold text-black text-xl md:text-2xl mb-3'>Our Brands</h3>
            <p className='font-primaryFont font-normal text-gray text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>
        </div>
      </Container>
    </div>
    </div>
  )
}