"use client";

// import Image from "next/image";
import './home.scss'
import 'animate.css';

import Link from 'next/link'

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

// import gsap from "gsap";
import Menu from '@/components/Menu/Menu';
import Footer from "@/components/Footer/Footer";
import Underline from "@/components/Underline/Underline";
import HomeSlider from '@/components/HomeSlider/HomeSlider';

import { properties } from '@/helpers/properties';

export default function Home() {
  const limitProperties = properties.slice(0,4)

  // Texts animations
  const { ref: ref01, inView: inView01 } = useInView();
  const { ref: ref02, inView: inView02 } = useInView();

  // Change Background types
  const [backImage, setBackImage] = useState('multifamily');

  return (
    <Menu>
      <HomeSlider />

      <section className="home-welcome">
        <div className="home-welcome__container">
          <div className="step-one">
            <div
              style={{ marginRight: '3rem', opacity: `${inView01 ? '1' : '0'}`  }}
              className={`${inView01 && 'animate__animated animate__fadeInLeft'}`}
              ref={ref01}
            >
              <h2 className="tiggers">Welcome to <strong>Agador Spartacus Development</strong>
              </h2>

              <h3>Where Vision Meets Excellence in Florida Real Estate</h3>
              <p>At Agador Spartacus Development, we don’t just build properties; we craft communities. With a laser focus on Build-To-Rent (BTR) Multi-Family Communities, we are at the forefront of creating vibrant living spaces that cater to the dynamic lifestyles of Florida.</p>

              <Link href="/portfolio/us">
                <Underline text="PORTFOLIO" width="90%" />
              </Link>
            </div>

            <img
              atl="Agador logo"
              src="/home/wc-02.jpg"
              // src="/home/wc-01.jpg"
            />
          </div>

          <h3 style={{
            margin: '5rem 0', fontSize: '38px', textAlign: 'center', fontWeight: '300'
          }}><strong>Our</strong> highlights</h3>

          <div className="cards-container">
            <div className="card">
              <p className="text"><strong>PROJECTS</strong> IN PROGESS</p>
                <div className="mt">
                  <CountUp
                    end={9}
                    start={0}
                    duration={5}
                    className="number"
                    enableScrollSpy={true}
                    style={{ fontSize: '70px' }}
                  />
                </div>
            </div>
            <div className="card">
              <p className="text"><strong>COMBINED YEARS</strong> OF EXPERIENCE</p>
              <div className="">
                <CountUp
                  end={60}
                  start={0}
                  duration={5}
                  className="number"
                  enableScrollSpy={true}
                  style={{ fontSize: '70px' }}
                />
              </div>
              {/* <p className="text mt"><strong>PROJECTS</strong> IN PROGESS</p> */}
            </div>
            <div className="card">
              <p className="text"><strong>COMPLETED</strong> PROJECTS</p>
              <div className="mt">
                <CountUp
                  end={35}
                  start={0}
                  duration={5}
                  className="number"
                  enableScrollSpy={true}
                  style={{ fontSize: '70px' }}
                />
              </div>
            </div>
          </div>

          <h3 style={{
            margin: '6rem 0 1rem', fontSize: '38px', textAlign: 'center', fontWeight: '300'
          }}><strong>Property</strong> types</h3>
        </div>
      </section>

      <section className="home-benefits" style={{ backgroundImage: `url('/types/${backImage}.jpg')` }}>
        <div
          className="home-benefits__bg multifamily"
          style={{ opacity: backImage === 'multifamily' ? '1': '0' }}
        ></div>
        <div
          className="home-benefits__bg industrial"
          style={{ opacity: backImage === 'industrial' ? '1': '0' }}
        ></div>
        <div
          className="home-benefits__bg hospitality"
          style={{ opacity: backImage === 'hospitality' ? '1': '0' }}
        ></div>
        <div
          className="home-benefits__bg residential"
          style={{ opacity: backImage === 'residential' ? '1': '0' }}
        ></div>

        <div className="home-benefits__container">
          <div
            className="home-benefits__column"
            onMouseEnter={() => setBackImage('multifamily')}
          >
            <h4>Multi-family</h4>
          </div>
          <div
            className="home-benefits__column"
            onMouseEnter={() => setBackImage('industrial')}
          >
            <h4>Industrial</h4>
          </div>
          <div
            className="home-benefits__column"
            onMouseEnter={() => setBackImage('hospitality')}
          >
            <h4>Hospitality</h4>
          </div>
          <div
            className="home-benefits__column"
            onMouseEnter={() => setBackImage('residential')}
          >
            <h4>Residential</h4>
          </div>
        </div>
      </section>

      <section className="home-featured">
        <div className="home-featured__content">
          <h3
            className={inView02 && 'animate__animated animate__fadeInLeft'}
            style={{ opacity: `${inView02 ? '1' : '0'}` }}
            ref={ref02}
          ><strong>Featured</strong> Projects</h3>

          <p>Our portfolio currently exceeds 5 million square feet, both domestic and international of commercial, multi-family, hospitality and retail assets —with another million square feet in our development pipeline—all concentrated in attractive submarkets in Florida.</p>
          <p>Our creativity and scale enable us to be more than developers—we are placemakers who shape inspiring and engaging places, which we believe create value and have a positive impact in every community we touch.</p>
        </div>

        <div className="home-featured__grid">
          {limitProperties.map((property, key) => (
            <div className="grid-item" key={key}>
              <div className="overlay"></div>
              <img src={`/inside/${property.id}-${property.slug}/${property.gallery[0]}`} alt="property" />
              <Link href={`/inside/us/${property.slug}`}>
                <div className="view">
                  <p>VIEW</p>
                </div>
              </Link>
              <div className="info">
                <div>
                  <h4>{property.name}</h4>
                  <p className="type">{property.type}</p>
                </div>
                <p className="location">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </Menu>
  );
}
