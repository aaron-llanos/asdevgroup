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
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Inside({ item, isMX }) {
  const { data: property, error } = useSWR(
    item ? `${API_URL}/api/propiedades?filters[slug][$eq]=${item.slug}&populate=*` : null,
    fetcher
  );

  // Hooks para la visibilidad
  const { ref: ref01, inView: inView01 } = useInView();
  const { ref: ref03, inView: inView03 } = useInView();

  // Manejo de error si no hay datos
  if (error) {
    return <div>Error fetching property: {error.message}</div>;
  }

  if (!property) {
    return <div>Loading property data...</div>; // Mensaje de carga
  }

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
    Details: details,
  } = property.data[0]; // Suponiendo que `data` es un array

  // Construcción de URLs de las imágenes
  const galleryUrls = Gallery.map(img => `${API_URL}${img.url}`);
  const backgroundImageUrl = TitlePageSliderDesktop ? `${API_URL}${TitlePageSliderDesktop.url}` : '';

  const galleryProps = {
    id: id,
    slug: item.slug, // Asegúrate de que este slug esté correcto
    folder: 'inside',
    gallery: galleryUrls,
  };

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
            <h5>YOU CAN FOLLOW THE LIVE PROCESS IN THE LINK BELOW:</h5>
            <Link href={video_url} target="_blank">
              <Image width={250} height={50} alt="property" src="/Camera-02.png" className="live" />
            </Link>
          </div>
        )}
      </section>

      <section className="about">
        <h4 className={dynamicClass(inView03, 'animate__animated animate__fadeInLeft')} style={{ opacity: `${inView03 ? '1' : '0'}` }} ref={ref03}>
          <strong>About</strong> Project
        </h4>
        <p>{description}</p>

        <p style={{ marginTop: '1rem' }}>Amenities include:</p>
        <ul>
          {details}
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
