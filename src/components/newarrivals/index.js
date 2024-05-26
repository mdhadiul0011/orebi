'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import Images from "./img";
import Badge from "../badge";
import Hover from "./hover";
import BottomText from "./bottomtext";
import Container from "../container";
import Heading from "../Heading";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Container>
          <div
      className={className}
      style={{ display: "block", background: "gray", fontSize: '50px', width: '50px', height: '50px', textAlign:'center', paddingTop: '17px', borderRadius: '50%', marginTop: "-25px", marginRight: '50px'}}
      onClick={onClick}
    >
    </div>
    </Container>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "gray", fontSize: '50px', width: '50px', height: '50px', textAlign:'center', paddingTop: '17px', borderRadius: '50%', marginLeft: '35px', marginTop: "-25px", zIndex: '50'}}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 736,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 684,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 412,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <div className="ml-[10%] sm:ml-0 mb-24 md:mb-32">
        <Container>
        <Heading>New Arrivals</Heading>
        <Slider {...settings}>
            <div className='max-w-[300px]  md:ml-8 lg:ml-0  '>
             <div className=' relative group overflow-y-hidden'>
               <Images src='./imgs/arraivals 1.png' alt='arrivals_1'/>
                <Badge title='20%' badge={true}/>
                 <Hover/>
            </div>
            <BottomText/>
           </div>
           <div className='max-w-[300px] md:ml-8 lg:ml-0'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arrivals 2.png' alt='arrivals_1'/>
                     <Badge title='12%' badge={true}/>
                     <Hover/>
                 </div>
                 <BottomText/>
            </div>
            <div className='max-w-[300px] md:ml-8 lg:ml-0'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 7.png' alt='arrivals_1'/>
                     <Badge title='new' badge={false}/>
                     <Hover/>
                 </div>
                 <BottomText/>
            </div>
            <div className='max-w-[300px] md:ml-8 lg:ml-0'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 4.png' alt='arrivals_1'/>
                     <Badge title='14%' badge={true}/>
                     <Hover/>
                 </div>
                 <BottomText/>
            </div>
            <div className='max-w-[300px] md:ml-8 lg:ml-0'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 5.png' alt='arrivals_1'/>
                     <Badge title='new' badge={true}/>
                     <Hover/>
                 </div>
                 <BottomText/>
            </div>
            
            <div className='max-w-[300px] md:ml-8 lg:ml-0'>
                <div className=' relative group overflow-y-hidden'>
                    <Images src='./imgs/arraivals 6.png' alt='arrivals_1'/>
                     <Badge title='new' badge={true}/>
                     <Hover/>
                 </div>
                 <BottomText/>
            </div>
        </Slider>
        </Container>
      </div>
    );
  }
}
