import React from 'react'
import Container from '../container'
import Fmenu from '../fMenu/fMenu'
import Flex from '../Flex'
import Shop from '../fMenu/shop'
import Help from '../fMenu/help'
import Contact from '../fMenu/contact'
import Orebi from '../fMenu/logo'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

export default function Footer() {
  return (
    <div className='mt-28 bg-light p-14'>
        <Container>
        <div className='block sm:flex sm:justify-between'>
                <div className='mb-[20px] md:mb-0'>
                    <Fmenu/>
                </div>
                <div  className='mb-[20px] md:mb-0'>
                    <Shop/>
                </div>
                <div  className='mb-[20px] md:mb-0'>
                    <Help/>
                </div>
                <div  className='mb-[20px] md:mb-0'>
                    <Contact/>
                </div>
                <div  className='mb-[20px] md:mb-0'>
                    <Orebi/>
                </div>
            </div>
            <Flex className='justify-between'>
                <div className='mt-16'>
                    <Flex className='gap-6'>
                        <FaFacebookF/>
                        <BiLogoLinkedin/>
                        <AiOutlineInstagram/>
                    </Flex>
                </div>
                <div className='mt-16'>
                    <p className='text-sm font-normal text-gray font-primaryFont'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Flex>
        </Container>
    </div>
  )
}
