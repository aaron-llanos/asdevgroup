'use client';

// import './home-slider.scss'

import 'swiper/css/bundle'
// import 'swiper/css';
// import 'swiper/scss'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HomeSlider() {
  const swiperRef = useRef();

  return (
    <>
    <div className="custom-slider">
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        // modules={[Navigation]}
        // spaceBetween={50}
        // slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
      <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
    </div>  
    </>
  );
}
