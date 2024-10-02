'use client';

import './page.scss'

import Link from 'next/link'

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';
import MultipleSlider from '../MultipleSlider/MultipleSlider';
import Image from 'next/image';

import useWidth from '@/hooks/useWidth';

import { news } from '@/helpers/news';

export default function New({ params }) {
  const { isMobile } = useWidth()

  const filterNew = news.find(({ slug }) => slug === params.slug);
  const { id, slug, url, name, date, description, gallery } = filterNew;

  const galleryProps = {
    id: id,
    slug: slug,
    folder: 'news',
    gallery: gallery
  }

  const slugNextNew = () => {
    const nextId = id + 1
    const findNew = news.find(({ id }) => id === nextId);

    return findNew?.slug || undefined
  }

  return (
    <Menu css="new">
      <section className="title-container">
        <div className="information">
          <h2>{date}</h2>
          <h1><b>{name}</b></h1>
        </div>
      </section>

      {/* <div className="grid-container">
      {isMobile ? (
        <MultipleSlider {...galleryProps} />
      ) : (
        <>
          {gallery.map((img, key) => (
            <div className="grid-item" key={key}>
              <img src={`/news/${id}-${slug}/${img}`} alt="new" />
            </div>
          ))}
        </>
      )}

      </div> */}

<div className="grid-container">
  {isMobile ? (
    <MultipleSlider {...galleryProps} />
  ) : (
    <>
      {gallery.slice(1, 2).map((img, key) => ( // Aquí cambiamos el mapeo para seleccionar solo el primer elemento
        <div className="grid-item" key={key}>
          <img src={`/news/${id}-${slug}/${img}`} alt="new" />
        </div>
      ))}
    </>
  )}

  
</div>

      {/* <section className="container text">
        {description}
      </section> */}
      <section className="container text">
        {description.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}

   


      </section>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
      <a href={url} target='_blank'>
<Image 
  
  alt="boton"
  src="/news/boton_continues.png"
  width="210"
  height="50" 
/>
</a>
</div>
 


      {slugNextNew() && (
        <Link href={`/new/${slugNextNew()}`}>
          <Underline text="NEXT NEW" />
        </Link>
      )}

      <Link href={'/news'}><Underline text="RETURN TO NEWS" />
      </Link>



      <Footer />
    </Menu>
  );
}
