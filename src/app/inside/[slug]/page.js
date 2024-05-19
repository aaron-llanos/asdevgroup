"use client";

import './page.scss'
import 'animate.css';

import Image from "next/image";

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav/Nav";
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';
import Underline from '@/components/Underline/Underline';

import { properties } from '@/helpers/properties';

export default function Home({params}) {
  const [showInfo, setShowInfo] = useState(false);

  const filterProperty = properties.find(({ slug }) => slug === params.slug);
  const { name, size, unit, description, location, details } = filterProperty;

  // Texts animations
  const { ref: ref01, inView: inView01 } = useInView();
  const { ref: ref02, inView: inView02 } = useInView();
  const { ref: ref03, inView: inView03 } = useInView();

  useEffect(() => {
    const body = document.querySelector('body')
    if (showInfo) {
      body.classList.remove('not-scroll')
    } else {
      body.classList.add('not-scroll')
    }
  }, [showInfo]);

  return (
    <>
      <section className="home" style={{ overflowY: 'hidden' }}>
        <Nav />

        <div className="home-slider__info">
          <div
            className={`line ${inView01 && 'animate__animated animate__fadeInLeft'}`}
            style={{ opacity: `${inView01 ? '1' : '0'}` }}
            ref={ref01}
          >
            <div></div>
            <h3>OVERVIEW</h3>
          </div>
          <h2>{name}</h2>
          {!showInfo && (
            <div
              ref={ref02}
              style={{ opacity: `${inView03 ? '1' : '0'}` }}
              className={inView02 && 'animate__animated animate__fadeInLeft'}
            >
              <h3>UNDER CONSTRUCTION</h3>
              <p className="btn-red">Multifamily</p>
            </div>
          )}
        </div>
      </section>

      <section className={`topics ${!showInfo && 'translation'}`}>
        <h3 style={{ visibility: !showInfo ? 'inherit' : 'hidden' }}>PROJECT CHARACTERISTICS</h3>
        <div className="arrow" onClick={() => setShowInfo(!showInfo)}>
          <Image
            src="/inside/arrow.png"
            alt="Vercel Logo"
            height={12}
            width={15}
            priority
          />
        </div>
        <h3 style={{ visibility: 'hidden' }}>PROJECT CHARACTERISTICS</h3>

        {showInfo && (
          <>
            <h4>PROJECT CHARACTERISTICS</h4>
            <div className="buttons">
              <p className="black">UNDER CONSTRUCTION</p>
              <p className="btn-red">Multifamily</p>
            </div>

            <div className="character-container">
              <div className="character">
                <h5>LOCATION</h5>
                <p><strong>{location}</strong></p>
              </div>
              <div className="character">
                <h5>PROJECT SIZE</h5>
                <p><strong>{`${size} ${unit}`}</strong></p>
              </div>
              <div className="character">
                <h5>DATE</h5>
                <p><strong>March 2024</strong></p>
              </div>
            </div>
          </>
        )}
      </section>

      {showInfo && (
        <>
          <section className="about">
            <h4
              className={inView03 && 'animate__animated animate__fadeInLeft'}
              style={{ opacity: `${inView03 ? '1' : '0'}` }}
              ref={ref03}
            ><strong>About</strong> Project</h4>
            <p>{description}</p>

            <p style={{ marginTop: '1rem' }}>Amenities include:</p>
            <ul>
              {details.map((detail, key) => (
                <li key={key}>{detail}</li>
              ))}
            </ul>
          </section>

          <section className="gallery">
            <h4><strong>Project</strong> Gallery</h4>
            <div className="gallery-grid">
              <Image
                src="/inside/gallery.jpg"
                alt="Vercel"
                height={333}
                width={545}
              />
              <Image
                src="/inside/gallery.jpg"
                alt="Vercel"
                height={333}
                width={545}
              />

              <Image
                src="/inside/gallery.jpg"
                alt="Vercel"
                height={333}
                width={545}
              />
              <Image
                src="/inside/gallery.jpg"
                alt="Vercel"
                height={333}
                width={545}
              />

              <Image
                src="/inside/gallery.jpg"
                alt="Vercel"
                height={333}
                width={545}
              />
              <Image
                src="/inside/gallery.jpg"
                alt="Vercel"
                height={333}
                width={545}
              />
            </div>
          </section>

          <Underline text="RETURN TO PROJECTS" />

          <Button text="Request more information" />

          <Footer />
        </>
      )}
    </>
  );
}
