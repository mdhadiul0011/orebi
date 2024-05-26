import React from 'react'
import Container from '../container'
import Flex from '../Flex'
import { FaTruck } from 'react-icons/fa';
import { TbReload } from 'react-icons/tb';


export default function Warrenty() {
  return (
    <div  className='mt-6 mb-12 md:mb-32 border border-x-transparent border-solid border-slate-200 py-6'>
        <Container>
            <div className='block w-[180px] sm:w-full m-auto sm:m-0 sm:flex sm:items-center sm:justify-between'>
                <div>
                    <span className='font-bold text-base text-black font-primaryfont'>2</span>
                    <span className='font-normal text-gray font-primaryFont text-sm pl-[10px]'>Two Years Warrenty</span>
                </div>
                <div>
                    <Flex className='items-center'>
                        <FaTruck/>
                        <span className='font-normal text-gray font-primaryFont text-sm pl-[10px]'>Free shipping</span>
                    </Flex>
                </div>
                <div>
                    <Flex className='items-center'>
                        <TbReload/>
                        <span className='font-normal text-gray font-primaryFont text-sm pl-[10px]'>Return policy in 30 days</span>
                    </Flex>
                </div>
            </div>
        </Container>
    </div>
  )
}
