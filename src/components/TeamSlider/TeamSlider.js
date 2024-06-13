'use client';

import 'swiper/css/bundle'
import 'swiper/css';

import './team-slider.scss'

import Image from 'next/image'

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function TeamSlider() {
  useEffect(() => {
    localStorage.getItem('theme') || 'light';
  }, []);

  const swiperRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="team-slider">
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        slidesPerView={'auto'}
        className="custom-slider"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => setCurrentSlide(swiperRef.current.realIndex)}
      >
        <SwiperSlide>
          <Image
            alt="Alan"
            src="/team/Alan.jpg"
            width="300"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Alan"
            src="/team/Alberto.jpg"
            width="300"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Alan"
            src="/team/Samy.jpg"
            width="300"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Alan"
            src="/team/Helen.jpg"
            width="300"
            height="300"
          />
        </SwiperSlide>
      </Swiper>

      <div className="btn-container">
        <button
          className="btn-slider"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image alt="arrow" src="/team/left.png" width="20" height="30" />
        </button>
        <button
          className="btn-slider"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image alt="arrow" src="/team/right.png" width="20" height="30" />
        </button>
      </div>

      <div className="team-content">
        {currentSlide === 0 && (
          <div className="light">
            <p><strong>Alan Benenson</strong>, co-founder and principal of A.S. Development, has a rich background in real estate investment and land entitlements. A University of Florida alumnus with a B.S. in Building Construction, he excels in land acquisition, project valuation, and development across various asset classes.</p>
            <br />
            <p>Alan’s career includes co-founding Universal Storage Group and founding Futurex Construction, showcasing his versatility in commercial and residential projects. A licensed general contractor and real estate developer, he has been pivotal in acquiring and developing over 3 million square feet of real estate.</p>
          </div>
        )}
        {currentSlide === 1 && (
          <div className="light">
            <p><strong>Alberto Dichi</strong>, co-founder and principal of A.S. Development, brings over 25 years of experience in real estate development and construction. His portfolio includes more than 1,400 units and 2.5 million square feet of diverse projects. A graduate of Universidad Iberoamericana in Business Administration, Alberto’s expertise lies in efficient project management and development, honed through his successful ventures in Mexico City. He is recognized for his strategic approach, backed by a robust network of international investors.</p>
          </div>
        )}
        {currentSlide === 2 && (
          <div className="light">
            <p><strong>Samy Cohen</strong>, co-founder and principal of A.S. Development, is a seasoned professional with over 20 years in real estate construction development. He graduated from Universidad Iberoamericana with a degree in Business Administration and International Relations. Before co-founding A.S. Development, he played a pivotal role at a prominent real estate firm, developing over $200 million in assets. Known for his construction acumen, market insight, and investor relations, Samy has an impressive track record in the industry, backed by a strong network of international investors.</p>
          </div>
        )}
        {currentSlide === 3 && (
          <div className="light">
            <p><strong>Helen L. Cruz</strong>, Chief Financial Officer of A.S. Development is a seasoned Financial and Organizational leader with an illustrious career spanning over 15 years. Helen holds a distinguished academic record, achieving a dual major from Ashford University’s Forbes School of Business. Her educational background includes a master’s degree in business administration (MBA) and Organizational Finance Management, complemented by a minor in Human Resources. She champions innovative strategies, steering the organization towards unprecedented growth and value. Her expertise empowers the Principals in making astute, profit-driven decisions.</p>
            <br />
            <p>In her current capacity as CFO, Helen oversees crucial accounting and finance functions, which include expertise in analyzing construction loan budgets, meticulously assessing loan documents, managing lender sources and uses, and excelling in fostering strong relationships with both lenders and investors. She ensures seamless communication and collaboration throughout the financial process. Additionally, Helen adeptly handles the monthly financial funding and skillfully manages the intricate financial and legal processes inherent too each real estate development project. Her unwavering dedication lies in propelling the organization towards sustained profitability and long-term successes!</p>
          </div>
        )}
      </div>
    </div>
  );
}
