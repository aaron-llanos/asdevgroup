"use client";

import './home-slider.scss'

import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

export default function HomeSlider() {
  const data = [
    {
      id: 1,
      location: 'Palm Bay, FL',
      name: 'Apartments at Palm Bay',
      state: 'UNDER CONSTRUCTION',
      image: '/home/s-01.jpg'
    },
    {
      id: 2,
      location: 'Palm Bay, FL',
      name: 'Miami',
      state: 'UNDER CONSTRUCTION',
      image: 'https://soyarquitectura.mx/wp-content/uploads/2021/09/casas-de-lujo-blogc10.jpg'
    },
    {
      id: 3,
      location: 'Palm Bay, FL',
      name: 'LA',
      state: 'UNDER CONSTRUCTION',
      image: 'https://realestatemarket.com.mx/images/2023/08-agosto/01-08/Ciudades-de-EU-con-mayor-cantidad-de-casas-de-lujo-en-venta-II.jpeg'
    },
  ]

  const [counter, setCounter] = useState(1);

  const currentProperty = data.filter(property => property.id === counter);

  const [property, setProperty] = useState(currentProperty[0]);


  // Animations
  const [flash, setFlash] = useState(false);
  const [enableBTN, setEnableBTN] = useState(true);
  const { ref: ref01, inView: inView01 } = useInView();
  const [animation, setAnimation] = useState('animate__fadeInDown');

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
  }, [counter]);

  const handleNext = () => {
    setAnimation('animate__fadeOutDown')
    setFlash(true)
    if (counter === 3) {
      setCounter(1)
    } else {
      setCounter(counter + 1)
    }
  }

  const handlePrev = () => {
    setAnimation('animate__fadeOutDown')
    setFlash(true)
    if (counter === 1) {
      setCounter(3)
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <section className="home-slider"
      style={{ backgroundImage: `url(${property.image})` }}
    >
      {flash && (<div className="black-flash"></div>)}

      <div className="overlay"></div>

      <div
        ref={ref01}
        className={`home-slider__info ${inView01 && `animate__animated ${animation}`}`}
        style={{ padding: '4rem 6rem 0', zIndex: '1', opacity: `${inView01 ? '1' : '0'}` }}
      >
        <h3>{property.location}</h3>
        <h2>{property.name}</h2>
        <h3 style={{ letterSpacing: '2px', fontSize: '26px' }} >{property.state}</h3>
        <button>Multifamily</button>
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
        <p>10</p>
      </div>
    </section>
  );
}
