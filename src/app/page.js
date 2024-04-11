"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import './home.scss'
import { useState } from "react";

export default function Home() {

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <div className="home-modal">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="/agador-white-logo.png" atl="Agador logo"/>
            <p
              style={{ fontSize: '24px', fontWeight: '500' }}
              onClick={() => setShowModal(false)}
            >X</p>
          </div>
          <ul>
            <li><h2>About Us</h2></li>
            <li><h2>Portfolio</h2></li>
            <li><h2>Investors</h2></li>
            <li><h2>News</h2></li>
            <li><h2>Contact</h2></li>
          </ul>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem'}}>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>CONTACT DETAILS</h3>
              <p>EMAIL: INFO@ASDEVGROUP.COM</p>
              <p>PHONE: <span style={{ textDecoration: 'underline' }}>(305)-974-2418</span></p>
            </div>
            <div className="social-logos">
              <img src="/facebook-logo.png" atl="facebook logo"/>
              <img src="/instagram-logo.png" atl="instagram logo"/>
              <img src="/linkedin-logo.png" atl="linkedin logo"/>
              <img src="/x-logo.png" atl="x logo"/>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section className="home">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <img src="/agador-logo.png" atl="Agador logo"/>
              <nav>
                <p>Portfolio</p>
                <p>Contact</p>
                <p>Hamburger</p>
              </nav>
            </div>

            <div className="home-slider__info">
              <h3>Palm Bay, FL</h3>
              <h2>Solamar Palm Bay</h2>
              <h3>UNDER CONSTRUCTION</h3>
              <button>Multifamily</button>
            </div>

            <div className="home-slider__buttons">
              <div className="btn">
                <p>NEXT</p><p className="sign">&#62;</p>
              </div>
              <div className="btn">
                <p className="sign">&#60;</p><p>PREV</p>
              </div>
            </div>
          </section>

          <section className="home-welcome">
            <div className="home-welcome__container">
              <div className="step-one">
                <div style={{ marginRight: '3rem' }}>
                  <h2><strong>Welcome to</strong> Agador Spartacus Development</h2>

                  <h3>Where Vision Meets Excellence in Florida Real Estate</h3>
                  <p>At Agador Spartacus Development, we don’t just build properties; we craft communities. With a laser focus on Build-To-Rent (BTR) Multi-Family Communities, we are at the forefront of creating vibrant living spaces that cater to the dynamic lifestyles of Florida.</p>

                  <p className="underline">PORTFOLIO</p>
                </div>

                <img src="/home/wc-01.jpg" atl="Agador logo"/>
              </div>

              <h3 style={{
                margin: '5rem 0', fontSize: '28px', textAlign: 'center', fontWeight: '300'
              }}><strong>Our</strong> highlights</h3>

              <div className="cards-container">
                <div className="card">
                  <p className="text"><strong>PROJECTS</strong> IN PROGESS</p>
                  <p className="number">10</p>
                </div>
                <div className="card">
                  <p className="text"><strong>PROJECTS</strong> IN PROGESS</p>
                  <p className="number">10</p>
                </div>
                <div className="card">
                  <p className="text"><strong>PROJECTS</strong> IN PROGESS</p>
                  <p className="number">10</p>
                </div>
              </div>

              <p
                style={{ marginTop: '6rem', fontWeight: '300' }}
              >Agador is stated as a balanced name; derived from Arabic to relate to ancient wisdom or an independent leader.  Spartacus meaning "from the city of Sparta" in Latin. Famously the name of a Roman slave who led a slave revolt in Italy in the 1st century BC. Today, Agador Spartacus is a dynamic, expanding real estate development company with a portfolio that includes a wealth of:</p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
