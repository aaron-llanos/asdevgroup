'use client';

import './page.scss';
import Link from 'next/link';
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';
import MultipleSlider from '../MultipleSlider/MultipleSlider';
import Image from 'next/image';
import useWidth from '@/hooks/useWidth';
import { API_URL } from '@/app/config';

export default function New({ item, allNews }) {
  const { isMobile } = useWidth();

  if (!item) {
    return <p>No se encontró la noticia.</p>; // Manejo de error si no se pasa el item
  }

  const { id, slug, URL, Name, Date, Description, gallery } = item;

  const galleryProps = {
    id: id,
    slug: slug,
    folder: 'news',
    gallery: gallery,
  };

  // Encuentra el siguiente artículo basado en el id actual
  const slugNextNew = () => {
    if (!allNews) return undefined; // Asegúrate de que allNews esté definido

    const nextId = id + 1;
    const findNew = allNews.find(({ id }) => id === nextId);
    return findNew?.slug || undefined; // Devuelve el slug si existe, o undefined
  };

  const nextSlug = slugNextNew(); // Guarda el slug del siguiente artículo

  // Reemplaza los saltos de línea con <br />
  const formattedDescription = Description.replace(/\n/g, '<br />');

  return (
    <Menu css="new">
      <section className="title-container">
        <div className="information">
          <h2>{Date}</h2>
          <h1><b>{Name}</b></h1>
        </div>
      </section>

      <div className="grid-container">
        <div className="grid-item" key={item.id}>
          <img src={`${API_URL}${item.gallery[1].url}`} alt={`${API_URL}${item.gallery[1].url}`} />
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

      {nextSlug && ( // Solo muestra el enlace si nextSlug existe
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
