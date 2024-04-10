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
        <div className="home">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="/agador-logo.png" atl="Agador logo"/>
            <nav>
              <p>Portfolio</p>
              <p>Contact</p>
              <p>Hamburger</p>
            </nav>
          </div>

          <div className="slider-info">
            <h3>Palm Bay, FL</h3>
            <h2>Solamar Palm Bay</h2>
            <h3>UNDER CONSTRUCTION</h3>
            <button>Multifamily</button>
          </div>

        </div>
      )}
    </>
  );
}
