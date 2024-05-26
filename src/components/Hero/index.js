'use client'
import React from  'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

export default function Hero() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };

  return (
    <div  className='overflow-hidden'>
        <Slider {...settings}>
          <div className='cursor-pointer'>
            <Link href='/'>
              <img src='./imgs/Frame 10.png' />
            </Link>
          </div>
          <div className='cursor-pointer'>
            <Link href='/'>
              <img src='./imgs/Frame 10.png' />
            </Link>
          </div>
          <div className='cursor-pointer'>
            <Link href='/'>
              <img src='./imgs/Frame 10.png' />
            </Link>
          </div>
        </Slider>
    </div>
  )
}
