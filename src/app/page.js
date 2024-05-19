"use client";

// import Image from "next/image";
import './home.scss'
import 'animate.css';

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

// import gsap from "gsap";
import Link from 'next/link'
import Social from "@/components/Social";
import Footer from "@/components/Footer/Footer";
import Underline from "@/components/Underline/Underline";
import HomeSlider from '@/components/HomeSlider/HomeSlider';

export default function Home() {

  // Manu animation
  const [showMenu, setShowMenu] = useState(true);
  const [translateMenu, setTranslateMenu] = useState('20');
  const [translatePage, setTranslatePage] = useState('100');
  const [zIndex, setZIndex] = useState('0');
  const [time, setTime] = useState('1');

  const closeMenu = () => {
    setShowMenu(false)
    setTimeout(() => {
      setTime('0')
      setTranslateMenu('100')
      setTranslatePage('20')
      setZIndex('1')
    }, 1000);
    setTime(1)
  }

  const openMenu = () => {
    setShowMenu(true)
    setTimeout(() => {
      setTime('0')
      setTranslateMenu('20')
      setTranslatePage('100')
      setZIndex('0')
    }, 1000);
    setTime(1)
  }

  // Texts animations
  const { ref: ref01, inView: inView01 } = useInView();
  const { ref: ref02, inView: inView02 } = useInView();

  return (
    <div className="home-container">
      <div className="animation-reference"></div>

      <div
        className="home-modal"
        style={{
          transform: showMenu ? 'translate(0%, 0px)' : `translate(${translateMenu}%, 0px)`,
          zIndex: zIndex,
          transitionDuration: `${time}s`
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/agador-white-logo.png" atl="Agador logo" style={{ 'width': '250px' }} />
          <img src="/close.png" alt="close" width="30" onClick={closeMenu} />
        </div>
        <ul>
          <li><h2><Link href="/our-history">About Us</Link></h2></li>
          <li><h2><Link href="/portfolio">Portfolio</Link></h2></li>
          <li><h2><Link href="/investors">Investors</Link></h2></li>
          <li><h2><Link href="/team">Team</Link></h2></li>
          <li><h2><Link href="/team">News</Link></h2></li>
          <li><h2><Link href="/contact">Contact</Link></h2>
          </li>
        </ul>

        <div className="details">
          <div>
            <h3>CONTACT DETAILS</h3>
            <p>EMAIL: INFO@ASDEVGROUP.COM</p>
            <p>PHONE: <span style={{ textDecoration: 'underline' }}>(305)-974-2418</span></p>
          </div>
          <Social />
        </div>
      </div>

      <div
        className="home-principal"
        style={{
          transform: showMenu ? `translate(-${translatePage}%, 0px)` : 'translate(0%, 0px)',
          transitionDuration: `${time}s`
        }}
      >

        <HomeSlider openMenu={openMenu} />

        <section className="home-welcome">
          <div className="home-welcome__container">
            <div className="step-one">
              <div style={{ marginRight: '3rem' }}>
                <h2
                  className={`tiggers ${inView01 && 'animate__animated animate__fadeInLeft'}`}
                  style={{ opacity: `${inView01 ? '1' : '0'}` }}
                  ref={ref01}
                >Welcome to <strong>Agador Spartacus Development</strong>
                </h2>

                <h3>Where Vision Meets Excellence in Florida Real Estate</h3>
                <p>At Agador Spartacus Development, we don’t just build properties; we craft communities. With a laser focus on Build-To-Rent (BTR) Multi-Family Communities, we are at the forefront of creating vibrant living spaces that cater to the dynamic lifestyles of Florida.</p>

                <Underline text="PORTFOLIO" width="90%" />
              </div>

              <img src="/home/wc-01.jpg" atl="Agador logo"/>
            </div>

            <h3 className="testing" style={{
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
                    />
                  </div>
              </div>
              <div className="card">
                <div className="">
                  <CountUp
                    end={15}
                    start={0}
                    duration={5}
                    className="number"
                    enableScrollSpy={true}
                    style={{ fontSize: '70px' }}
                  />
                </div>
                <p className="text mt"><strong>PROJECTS</strong> IN PROGESS</p>
              </div>
              <div className="card">
                <p className="text"><strong>PROJECTS</strong> IN PROGESS</p>
                <div className="mt">
                  <CountUp
                    end={35}
                    start={0}
                    duration={5}
                    className="number"
                    enableScrollSpy={true}
                  />
                </div>
              </div>
            </div>

            <p
              style={{ marginTop: '6rem', fontWeight: '300', fontSize: '20px' }}
            >Agador is stated as a balanced name; derived from Arabic to relate to ancient wisdom or an independent leader.  Spartacus meaning "from the city of Sparta" in Latin. Famously the name of a Roman slave who led a slave revolt in Italy in the 1st century BC. Today, Agador Spartacus is a dynamic, expanding real estate development company with a portfolio that includes a wealth of:</p>
          </div>
        </section>

        <section className="home-benefits">
          <div className="home-benefits__column">
            <h4>Multi-family</h4>
          </div>
          <div className="home-benefits__column">
            <h4>Industrial</h4>
          </div>
          <div className="home-benefits__column">
            <h4>Hospitality</h4>
          </div>
          <div className="home-benefits__column">
            <h4>Residential</h4>
          </div>
          <div className="home-benefits__column">
            <h4>Commercial or Mixed Use</h4>
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
            <div className="grid-item">
              <img src="/home/grid-01.jpg" alt="House" />
              <div className="view">
                <p>VIEW</p>
              </div>
              <div className="info">
                <div>
                  <h4>Solamar Palm Bay</h4>
                  <p className="type">Multifamily</p>
                </div>
                <p className="location">Melbourne, FL</p>
              </div>
            </div>

            <div className="grid-item">
              <img src="/home/grid-01.jpg" alt="House" />
              <div className="view">
                <p>VIEW</p>
              </div>
              <div className="info">
                <div>
                  <h4>Solamar Palm Bay</h4>
                  <p className="type">Multifamily</p>
                </div>
                <p className="location">Melbourne, FL</p>
              </div>
            </div>

            <div className="grid-item">
              <img src="/home/grid-01.jpg" alt="House" />
              <div className="view">
                <p>VIEW</p>
              </div>
              <div className="info">
                <div>
                  <h4>Solamar Palm Bay</h4>
                  <p className="type">Multifamily</p>
                </div>
                <p className="location">Melbourne, FL</p>
              </div>
            </div>

            <div className="grid-item">
              <img src="/home/grid-01.jpg" alt="House" />
              <div className="view">
                <p>VIEW</p>
              </div>
              <div className="info">
                <div>
                  <h4>Solamar Palm Bay</h4>
                  <p className="type">Multifamily</p>
                </div>
                <p className="location">Melbourne, FL</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
