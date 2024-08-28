/* eslint-disable react/jsx-no-duplicate-props */
'use client';

import './page.scss'
import 'animate.css';

import Link from 'next/link'

import { useInView } from "react-intersection-observer";

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';
import Underline from '@/components/Underline/Underline';
import MultipleSlider from '../MultipleSlider/MultipleSlider';

import { properties as propertiesUS, propertiesMX } from '@/helpers/properties';
import { dynamicClass } from '@/helpers/dynamic-class';

export default function Inside({ params, isMX }) {
  const properties = isMX ? propertiesMX : propertiesUS;

  const filterProperty = properties.find(({ slug }) => slug === params.slug);
  const {
    id,
    name,
    video_url,
    size,
    type,
    unit,
    slug,
    image,
    details,
    gallery,
    location,
    progress,
    description,
  } = filterProperty;

  const galleryProps = {
    id: id,
    slug: slug,
    folder: 'inside',
    gallery: gallery,
  }

  // Texts animations
  const { ref: ref01, inView: inView01 } = useInView();
  const { ref: ref03, inView: inView03 } = useInView();

  return (
    <Menu css="inside">
      <section className="inside" style={{ backgroundImage: `url('/inside/${id}-${slug}/${image}')` }}>
        <div className="inside-slider__info">
          <div
            className={`line ${dynamicClass(inView01, 'animate__animated animate__fadeInLeft')}`}
            style={{ opacity: `${inView01 ? '1' : '0'}` }}
            ref={ref01}
          >
            <div></div>
            <h3>OVERVIEW</h3>
          </div>
          <h2>{name}</h2>
        </div>
      </section>

      <section className="topics">
        <h4>PROJECT CHARACTERISTICS</h4>
        <div className="buttons">
          <p className="black">{progress}</p>
          <p className="btn-red">{type}</p>
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
          {/* <div className="character">
            <h5>DATE</h5>
            <p><strong>March 2024</strong></p>
          </div> */}
        </div>

        
        {video_url && (
  <div className="character">
    <h5>YOU CAN FOLLOW THE LIVE PROCESS IN THE LINK BELOW:</h5>
    <Link href={video_url} target="_blank">
    <Image
      width={250}
      height={50}
      alt="property"
      src="/Camera-02.png"
      className="live"
    />
  
      {/* <Button text="Go to Live Camera" /> */}
    </Link>
  </div>
)}
          {/* <p><strong>March 2024</strong></p> */}
      </section>
      <section className="about">
        <h4
          className={dynamicClass(inView03, 'animate__animated animate__fadeInLeft')}
          style={{ opacity: `${inView03 ? '1' : '0'}` }}
          ref={ref03}
        ><strong>About</strong> Project</h4>
        <p>{description}</p>

        {details.length > 0 && (
          <p style={{ marginTop: '1rem' }}>Amenities include:</p>
        )}
        <ul>
          {details.map((detail, key) => (
            <li key={key}>{detail}</li>
          ))}
        </ul>
      </section>

      <MultipleSlider {...galleryProps} />

      <Link href={isMX ? '/portfolio/mx' : '/portfolio/us'}>
        <Underline text="RETURN TO PROJECTS" />
      </Link>

      <Link href="/contact">
        <Button text="Request more information" />
      </Link>

      <Footer />
    </Menu>
  );
}


