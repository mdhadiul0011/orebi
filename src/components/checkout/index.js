import React from 'react'
import Container from '../container'
import Heading from '../Heading'
import Link from 'next/link'
import BDetails from './billingDetails'
import Order from './order'

export default function CheckOutPage() {
  return (
    <div className='mt-28'>
      <Container>
        <Heading>
            Checkout
            <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / CheckOut</p>
        </Heading>
        <div className='mt-28'>
            <p className='text-base text-gray font-primaryFont font-normal'>Have a coupon?<span className='text-base text-black font-primaryFont font-normal'> Click here to enter your code</span></p>
        </div>
        <div className='mt-28'>
            <BDetails/>
        </div>
        <Order/>
      </Container>
    </div>
  )
}
