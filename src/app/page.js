"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import './home.scss'
import { useState } from "react";
import Nav from "@/components/Nav/Nav";
import Social from "@/components/Social";
import Footer from "@/components/Footer/Footer";
import Underline from "@/components/Underline/Underline";

export default function Home() {

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <div className="home-modal">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="/agador-white-logo.png" atl="Agador logo" style={{ 'width': '250px' }} />
            <img src="/close.png" alt="close" width="30" onClick={() => setShowModal(false)} />
          </div>
          <ul>
            <li><h2>About Us</h2></li>
            <li><h2>Portfolio</h2></li>
            <li><h2>Investors</h2></li>
            <li><h2>News</h2></li>
            <li><h2>Contact</h2></li>
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
      ) : (
        <>
          <section className="home">
            <Nav />

            <div className="home-slider__info">
              <h3>Palm Bay, FL</h3>
              <h2>Solamar Palm Bay</h2>
              <h3 style={{ letterSpacing: '2px', fontSize: '20px' }} >UNDER CONSTRUCTION</h3>
              <button>Multifamily</button>
            </div>

            <div className="home-slider__buttons">
              <div className="btn">
                <p>NEXT</p>
                <img src="/arrow-left.png" alt="arrow" width="10px" />
              </div>
              <div className="btn">
                <img src="/arrow-right.png" alt="arrow" width="10px" />
                <p>PREV</p>
              </div>
            </div>

            <div className="home-slider__count">
              <p>01</p>
              <div className="line"></div>
              <p>10</p>
            </div>
          </section>

          <section className="home-welcome">
            <div className="home-welcome__container">
              <div className="step-one">
                <div style={{ marginRight: '3rem' }}>
                  <h2>Welcome to <strong>Agador Spartacus Development</strong></h2>

                  <h3>Where Vision Meets Excellence in Florida Real Estate</h3>
                  <p>At Agador Spartacus Development, we don’t just build properties; we craft communities. With a laser focus on Build-To-Rent (BTR) Multi-Family Communities, we are at the forefront of creating vibrant living spaces that cater to the dynamic lifestyles of Florida.</p>

                  <Underline text="PORTFOLIO" width="90%" />
                </div>

                <img src="/home/wc-01.jpg" atl="Agador logo"/>
              </div>

              <h3 style={{
                margin: '5rem 0', fontSize: '34px', textAlign: 'center', fontWeight: '300'
              }}><strong>Our</strong> highlights</h3>

              <div className="cards-container">
                <div className="card">
                  <p className="text"><strong>PROJECTS</strong> IN PROGESS</p>
                  <p className="number mt">09</p>
                </div>
                <div className="card">
                  <p className="number" style={{ fontSize: '70px', marginBottom: '-8px' }} >15</p>
                  <p className="text mt"><strong>PROJECTS</strong> IN PROGESS</p>
                </div>
                <div className="card">
                  <p className="text"><strong>PROJECTS</strong> IN PROGESS</p>
                  <p className="number mt">35</p>
                </div>
              </div>

              <p
                style={{ marginTop: '6rem', fontWeight: '300', fontSize: '18px' }}
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
              <h3><strong>Featured</strong> Projects</h3>

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
        </>
      )}
    </>
  );
}
