import { React } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}><BsArrowLeft/></button>
  );
}