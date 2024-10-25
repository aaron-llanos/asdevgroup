'use client';

import './page.scss';
import Link from 'next/link';
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';
import Image from 'next/image';
import useWidth from '@/hooks/useWidth';
import { API_URL } from '@/app/config';
import { useEffect, useState } from 'react';

export default function New({ item, allNews }) {
  const { isMobile } = useWidth();
  const [loading, setLoading] = useState(true);

   // Hook useEffect para manejar el estado de carga
   useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 900));
      setLoading(false);
    };

    fetchData();
  }, []);

  // Condicional de carga
  if (loading) {
    return (
      <div className="loading-container"> 
        <div className="skeleton skeleton-date pulse"></div>
        <div className="skeleton skeleton-title pulse"></div>
        <div className="skeleton skeleton-image pulse"></div>
        <div className="skeleton skeleton-text pulse"></div>
      </div>
    );
  }

  // Manejo de error si no se pasa el item
  if (!item) {
    return (
      <Menu css="new">
        <p>No se encontró la noticia.</p>
      </Menu>
    ); // Asegúrate de devolver el Menu incluso en el caso de error
  }

  const { id, slug, URL, Name, Date: newsDate, Description, gallery } = item; 

  const galleryProps = {
    id: id,
    slug: slug,
    folder: 'news',
    gallery: gallery,
  };

  const slugNextNew = () => {
    if (!allNews) return undefined;
    const nextId = id + 1;
    const findNew = allNews.find(({ id }) => id === nextId);
    return findNew?.slug || undefined;
  };

  const nextSlug = slugNextNew();

  const formattedDate = new Date(newsDate).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  });

  // Formateo de la descripción
  let formattedDescription;
  if (Array.isArray(Description)) {
    formattedDescription = Description.map(item => 
      item.children.map(child => child.text).join('')
    ).join('<br />');
  } else if (typeof Description === 'string') {
    formattedDescription = Description.replace(/\n/g, '<br />');
  } else {
    formattedDescription = "No description available.";
  }

 

  return (
    <Menu css="new">
      <section className="title-container">
        <div className="information">
          <h2>{formattedDate}</h2>
          <h1><b>{Name}</b></h1>
        </div>
      </section>

      <div className="grid-container">
        <div className="grid-item" key={item.id}>
          <img src={`${API_URL}${item.gallery[0].url}`} alt={`${API_URL}${item.gallery[0].url}`} />
        </div>
      </div>

      <section className="container text">
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
        <a href={URL} target='_blank' rel="noopener noreferrer">
          <Image 
            alt="boton"
            src="/news/boton_continues.png"
            width="210"
            height="50" 
          />
        </a>
      </div>

      {nextSlug && (
        <Link href={`/new/${nextSlug}`}>
          <Underline text="NEXT ARTICLE" />
        </Link>
      )}

      <Link href={'/news'}>
        <Underline text="RETURN TO NEWS" />
      </Link>

      <Footer />
    </Menu>
  );
}
