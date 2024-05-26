import { React } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}><BsArrowRight/></button>
  );
}