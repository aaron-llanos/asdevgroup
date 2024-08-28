'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './multiple-slider.scss'

import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Modal from '../Modal/Modal';

import useWidth from '@/hooks/useWidth';
import useModal from '@/hooks/useModal';

export default function MultipleSlider({ slug, folder, gallery, id, newsConfig }) {
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const { isMobile } = useWidth()

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    localStorage.getItem('theme') || 'light';
  }, []);

  const swiperRef = useRef();
  const swiperFullRef = useRef();

  return (
    <>
      <section className="gallery">
        {!isMobile ? (
          <div className="gallery-grid">
            {gallery.map((img, key) => (
              <Image
                key={key}
                width={550}
                height={300}
                alt="property"
                src={`/inside/${id}-${slug}/${img}`}
                onClick={openModal}
              />
            ))}
          </div>
        ) : (
          <>
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
                          onClick={openModal}
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
          </>
        )}
      </section>

      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="swiper-full__container">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="swiper-full"
            onBeforeInit={(swiper) => {
              swiperFullRef.current = swiper;
            }}
          >
            {gallery.map((img, key) => (
              <SwiperSlide key={key}>
                <img
                  alt="property"
                  src={`/${folder}/${id}-${slug}/${img}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {!isMobile && (
            <div className="btn-container">
              <div
                className="btn-slider"
                onClick={() => swiperFullRef.current?.slidePrev()}
              >
                <Image className="arrow" alt="arrow" src="/team/left.png" width="20" height="30" />
              </div>
              <div
                className="btn-slider"
                onClick={() => swiperFullRef.current?.slideNext()}
              >
                <Image className="arrow" alt="arrow" src="/team/right.png" width="20" height="30" />
              </div>
            </div>
          )}
        </div>

        <Swiper
          spaceBetween={0}
          slidesPerView={isMobile ? 4 : 8}
          freeMode={true}
          className="swiper-selector"
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {gallery.map((img, key) => (
            <SwiperSlide key={key}>
              <img
                alt="property"
                src={`/${folder}/${id}-${slug}/${img}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
}
