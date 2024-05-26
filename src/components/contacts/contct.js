import React from 'react'
import Container from '../container'
import Heading from '../Heading'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className='mt-28'>
      <Container>
        <Heading>
            Contact
            <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / Contact</p>
        </Heading>
        <div>
          <h2 className='font-primaryFont font-bold text-[30px] text-black mt-28 mb-10'>Fill up a Form</h2>

          <form>
            <div className='mt-5 w-[50%]'>
              <level className='font-primaryFont font-bold text-base text-black'>Name</level><br/>
              <input className='mt-3 outline-none border-b border-solid border-gray w-full' type='text' placeholder='Type Your Name..'/>
            </div>
            <div className='mt-6 w-[50%]'>
              <level className='font-primaryFont font-bold text-base text-black'>Email</level><br/>
              <input className='mt-3 outline-none border-b border-solid border-gray w-full' type='text' placeholder='Type Your Email..'/>
            </div>
            <div className='mt-6 w-[50%]'>
              <level className='font-primaryFont font-bold text-base text-black'>Message</level><br/>
              <textarea className='mt-3 outline-none border-b border-solid border-gray w-full h-20' type='text' placeholder='Type Your Message..'/>
            </div>

            <button className='bg-black px-20 py-5 text-white font-primaryFont font-bold text-base mt-8'>Post</button>
          </form>
        </div>
        
      </Container>
    </div>
  )
}
