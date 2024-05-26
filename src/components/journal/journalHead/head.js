import Heading from '@/components/Heading'
import Container from '@/components/container'
import Link from 'next/link'
import React from 'react'

export default function Head() {
  return (
    <div className='mt-28'>
      <Container>
        <Heading>
            Journal
            <p className='text-sm text-gray font-primaryFont font-normal'><Link href='/'>Home</Link> / Journal</p>
        </Heading>
        
      </Container>
    </div>
  )
}
