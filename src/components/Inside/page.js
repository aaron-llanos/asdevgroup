'use client';

import './page.scss';
import 'animate.css';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from "react-intersection-observer";
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';
import Underline from '@/components/Underline/Underline';
import MultipleSlider from '../MultipleSlider/MultipleSlider';
import { dynamicClass } from '@/helpers/dynamic-class';
import { API_URL } from '@/app/config';
import { useEffect, useState } from 'react';

export default function Inside({ item, isMX }) {
  const [loading, setLoading] = useState(true); // Estado de carga

  
  

  // Desestructuración de los datos de la propiedad
  const {
    TitlePageSliderDesktop = {},
    Gallery = [],
    id,
    Name: name,
    video_url,
    Location: location,
    Progress: progress,
    Description: description,
    Unit: unit,
    Quantity: size,
    Type: type,
    Amenities: amenities,
  } = item;


  

  // Construcción de URLs de las imágenes
  const galleryUrls = Gallery.map(img => `${API_URL}${img.url}`);
  const backgroundImageUrl = TitlePageSliderDesktop ? `${API_URL}${TitlePageSliderDesktop.url}` : '';

  // Props para el componente de slider de múltiples imágenes
  const galleryProps = {
    id: id,
    slug: item.slug,
    folder: 'inside',
    gallery: galleryUrls,
  };

  // Hooks para la visibilidad
  const { ref: ref01, inView: inView01 } = useInView();
  const { ref: ref03, inView: inView03 } = useInView();

  useEffect(() => {
    // Simulando la carga de datos
    const fetchData = async () => {
      setLoading(true);
      // Aquí se realizaría la carga de tus datos
      // Simulando un retraso de carga
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula carga de 2 segundos
      setLoading(false);
    };

    fetchData();
  }, []); // Se ejecuta solo una vez al montar el componente

  // Renderiza el skeleton loading si está cargando
  if (loading) {
    return (
      <div className="loading-container">
      <div className="skeleton skeleton-title pulse"></div>
      <div className="skeleton skeleton-text pulse"></div>
      <div className="skeleton skeleton-image pulse"></div>
      <div className="skeleton skeleton-text pulse"></div>
    </div>
    );
  }
  

  // Función para renderizar las amenidades
  const renderAmenities = (amenities) => {
    if (Array.isArray(amenities)) {
      return amenities.flatMap(item => 
        item.children.map(child => <li key={child.text}>{child.text}</li>)
      );
    } else if (typeof amenities === 'string') {
      return amenities.split('\n').map((line, index) => (
        <li key={index}>{line}</li>
      ));
    } else {
      return <li key="no-description">No description available.</li>;
    }
  };


  

  // Formateo de la descripción
  let formatteddescription;
  if (Array.isArray(description)) {
    formatteddescription = description.map(item => 
      item.children.map(child => child.text).join('')
    ).join('<br />');
  } else if (typeof description === 'string') {
    formatteddescription = description.replace(/\n/g, '<br />');
  } else {
    formatteddescription = "No description available.";
  }

  return (
    <Menu css="inside">
      <section className="inside" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
        <div className="inside-slider__info">
          <div className={`line ${dynamicClass(inView01, 'animate__animated animate__fadeInLeft')}`} style={{ opacity: `${inView01 ? '1' : '0'}` }} ref={ref01}>
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
        </div>

        {video_url && (
          <div className="character">
            {/* <h5>YOU CAN FOLLOW THE LIVE PROCESS IN THE LINK BELOW:</h5> */}
            
            <h2>LEASING NOW</h2>
            {/* <Link href={video_url} target="_blank" aria-label="Follow live process">
              <Image width={250} height={50} alt="Live camera link" src="/Camera-02.png" className="live" />
            </Link> */}
          </div>
        )}
      </section>

      <section className="about">
        <h4 className={dynamicClass(inView03, 'animate__animated animate__fadeInLeft')} style={{ opacity: `${inView03 ? '1' : '0'}` }} ref={ref03}>
          <strong>About</strong> Project
        </h4>

        {description ? (
         <p dangerouslySetInnerHTML={{ __html: formatteddescription }} />
        ) : (
          <p>No description available.</p>
        )}

        <p style={{ marginTop: '3.4rem' }}>Amenities include:</p>
        <ul>
          {renderAmenities(amenities)}
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
