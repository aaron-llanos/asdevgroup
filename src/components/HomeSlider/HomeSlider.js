'use client';

import './home-slider.scss'

import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

import { properties } from '@/helpers/properties';
import { dynamicClass } from '@/helpers/dynamic-class';

export default function HomeSlider() {
  const limitSlides = 7;

  const limitProperties = properties.slice(0,limitSlides)

  const [counter, setCounter] = useState(1);
  const currentProperty = limitProperties.filter(property => property.id === counter);
  const [property, setProperty] = useState(currentProperty[0]);


  // Animations
  const [flash, setFlash] = useState(false);
  const [enableBTN, setEnableBTN] = useState(true);
  const [animation, setAnimation] = useState('animate__fadeInDown');
  const { ref: ref01, inView: inView01 } = useInView();
  const [firstClick, setFirstClick] = useState(false);

  useEffect(() => {
    setAnimation('animate__fadeInDown')
  }, [property]);

  useEffect(() => {
    setEnableBTN(false)
    setTimeout(() => {
      setFlash(false)
      setEnableBTN(true)
    }, 1000);
    setTimeout(() => {
      setProperty(currentProperty[0])
    }, 500);
    let timer1 = setTimeout(() => handleNext(false), 4000);
    return () => {
      clearTimeout(timer1);
    };
  }, [counter]);

  const handleNext = () => {
    setAnimation('animate__fadeOutDown')
    setFlash(true)
    if (counter === limitSlides) {
      setCounter(1)
    } else {
      setCounter(counter + 1)
    }
  }

  const handlePrev = () => {
    setAnimation('animate__fadeOutDown')
    setFlash(true)
    if (counter === 1) {
      setCounter(limitSlides)
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <section className="home-slider"
      style={{ backgroundImage: `url(/home/slider/${property.image})` }}
    >
      {flash && (<div className="black-flash"></div>)}

      <div className="overlay"></div>

      <div
        ref={ref01}
        className={`home-slider__info ${dynamicClass(inView01, `animate__animated ${animation}`)}`}
        style={{ opacity: `${inView01 ? '1' : '0'}` }}
      >
        <h3>{property.location}</h3>
        <h2>{property.name}</h2>
        <h3 className="progress">{property.progress}</h3>
        <button>{property.type}</button>
      </div>

      <div className="home-slider__buttons"
        style={{ zIndex: '1', pointerEvents: `${enableBTN ? 'all' : 'none'}` }}
      >
        <div className="btn one" onClick={handleNext}>
          <p>NEXT</p>
          <img src="/arrow-left.png" alt="arrow" width="10px" />
          <div className="btn-animated one">
            <div className="circle"></div>
          </div>
        </div>
        <div className="btn two" onClick={handlePrev}>
          <img src="/arrow-right.png" alt="arrow" width="10px" />
          <p>PREV</p>
        </div>
      </div>

      <div className="home-slider__count" style={{ zIndex: '1' }}>
        <p>{counter}</p>
        <div className="line"></div>
        <p>{limitSlides}</p>
      </div>
    </section>
  );
}
