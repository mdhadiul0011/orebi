'use client'
import React from 'react'
import Heading from '../Heading'
import Container from '../container'
import Flex from '../Flex'
import Badge from '../badge'
import Images from './img'
import Hover from './hover'
import BottomText from './bottomtext'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideNextButton from './nextbtns'
import SlidePrevButton from './prevBtn'

export default function Arrivals_3({badge}) {
  return (
    <div className='mb-32 relative'>
      <Container>
        <Heading>Special Offers</Heading>
        <Swiper
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>           
        <div className='max-w-[370px] mr-8'>
            <div className=' relative group overflow-y-hidden'>
                <Images src='./imgs/arraivals 1.png' alt='arrivals_1'/>
                <Badge title='20%' badge={true}/>
                <Hover/>
            </div>
            <BottomText/>
        </div></SwiperSlide>
      <SwiperSlide>
            <div className='max-w-[370px] mr-8'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arrivals 2.png' alt='arrivals_1'/>
                    <Badge title='50%' badge={true}/>
                    <Hover/>
                </div>
                <BottomText/>
           </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='max-w-[370px] mr-8'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 4.png' alt='arrivals_1'/>
                    <Badge title='10%' badge={true}/>
                    <Hover/>
                </div>
                <BottomText/>
           </div>
      </SwiperSlide>
      <div className='z-30 w-[42px] h-[42px] absolute top-[137px] right-[40px] bg-gray p-[10px] rounded-full text-center text-white font-bold text-[20px]'>
      <SlideNextButton/>
      </div>
      <SwiperSlide>
            <div className='max-w-[370px] mr-8'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 5.png' alt='arrivals_1'/>
                    <Badge title='new' badge={true}/>
                    <Hover/>
                </div>
                <BottomText/>
           </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='max-w-[370px] mr-8'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 7.png' alt='arrivals_1'/>
                    <Badge title='30%' badge={false}/>
                    <Hover/>
                </div>
                <BottomText/>
           </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='max-w-[370px] mr-8'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 6.png' alt='arrivals_1'/>
                    <Badge title='new' badge={true}/>
                    <Hover/>
                </div>
                <BottomText/>
           </div>
      </SwiperSlide>
      <div className='z-30 w-[42px] h-[42px] absolute top-[137px] left-[10px] bg-gray p-[10px] rounded-full text-center text-white font-bold text-[20px]'>
        <SlidePrevButton/>
      </div>
    </Swiper>
      </Container>
    </div>
  )
}
