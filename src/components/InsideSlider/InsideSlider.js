'use client';

import 'swiper/css/bundle'
import 'swiper/css';

import './inside-slider.scss'

import Image from 'next/image'

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function InsideSlider({ slug, gallery, id }) {

  useEffect(() => {
    localStorage.getItem('theme') || 'light';
  }, []);

  const swiperRef = useRef();

  return (
    <div className="inside-slider">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        className="custom-slider"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
          {gallery.map((img, key) => (
            <SwiperSlide key={key}>
              <Image
                width={550}
                height={300}
                alt="property"
                src={`/inside/${id}-${slug}/${img}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="btn-container">
        <div
          className="btn-slider"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image className="arrow" alt="arrow" src="/team/left.png" width="20" height="30" />
        </div>
        <div
          className="btn-slider"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image className="arrow" alt="arrow" src="/team/right.png" width="20" height="30" />
        </div>
      </div>
    </div>
  );
}
