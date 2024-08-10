'use client';

import 'swiper/css/bundle'
import 'swiper/css';

import './mobile-slider.scss'

import Link from 'next/link'

import Image from 'next/image'

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MobileSlider({ slug, folder, gallery, id, newsConfig }) {

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
        {newsConfig ? (
          <>
            {newsConfig.map((newItem, key) => (
              <SwiperSlide key={key}>
                <Link href={`/new/${newItem.slug}`}>
                  <Image
                    width={550}
                    height={300}
                    alt="property"
                    src={`/${folder}/${newItem.id}-${newItem.slug}/${newItem.gallery[0]}`}
                  />
                </Link>
                <p className="date">{newItem.date}</p>
                <h3>{newItem.name}</h3>
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            {gallery.map((img, key) => (
              <SwiperSlide key={key}>
                <Image
                  width={550}
                  height={300}
                  alt="property"
                  src={`/${folder}/${id}-${slug}/${img}`}
                />
              </SwiperSlide>
            ))}
        </>
        )}
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
