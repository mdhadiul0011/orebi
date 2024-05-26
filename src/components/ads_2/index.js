import React from 'react'
import Container from '../container'
import Link from 'next/link'

export default function Ads() {
  return (
    <Container>
        <div className='mb-32'>
            <Link href='/'>
              <img src='./imgs/ads_2.png'/>
            </Link>
        </div>
    </Container>
  )
}
