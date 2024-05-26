import React from 'react'
import Container from '../container'
import Flex from '../Flex'
import Link from 'next/link'

export default function Sale() {
  return (
    <div className='mb-12 md:mb-32'>
        <Container>
            <Flex className='items-center justify-between'>
                <div className='w-[48%] cursor-pointer'>
                    <Link href='/'>
                        <img src='../imgs/ad_1.png' alt='ad_1'/>
                    </Link>
                </div>
                <div className='w-[48%]'>
                    <div className='cursor-pointer mb-[6%]'>
                        <Link href='/'>
                            <img src='../imgs/ad_2.png' alt='ad_2'/>
                        </Link>
                    </div>
                    <div className=' cursor-pointer'>
                        <Link href='/'>
                            <img src='../imgs/ad_3.png' alt='ad_3'/>
                        </Link>
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}
