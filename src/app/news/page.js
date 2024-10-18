'use client';

import './page.scss';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';
import Menu from '@/components/Menu/Menu';
import useWidth from '@/hooks/useWidth';
import { API_URL } from '../config';
import { useState, useEffect } from 'react';

async function getNews() {
  const res = await fetch(`${API_URL}/api/news?populate[gallery][fields][0]=url`);
  if (!res.ok) {
    throw new Error('Something is wrong');
  }

  const { data } = await res.json();
  return data; 
}

export default function News() {
  const { isMobile } = useWidth();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNoticias(newsData); 
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC', // Asegúrate de especificar la zona horaria
    });
  };

  return (
    <Menu css="news-principal">
      <section className="container">
        <h1 className="news-title">Recent News</h1>
        <div className="news-grid">
          {noticias.length > 0 ? (
            noticias.map((item) => (
              <div className="news-card" key={item.id}>
                {item.gallery && item.gallery.length > 0 && (
                  <img src={`${API_URL}${item.gallery[0].url}`} alt={`${API_URL}${item.gallery[0].url}`} />
                )}
                
                <div className="news-info">
                  <p className="date">{formatDate(item.Date)}</p> {/* Formatea la fecha aquí */}
                  <h3>{item.Name}</h3>
                  <Link href={`/new/${item.slug}`}>
                    <Underline text="READ MORE" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </section>
      <Footer className="footer" />
    </Menu>
  );
}
