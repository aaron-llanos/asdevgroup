'use client';

import './page.scss'

import Link from 'next/link'

import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';
import Menu from '@/components/Menu/Menu';
import MultipleSlider from '@/components/MultipleSlider/MultipleSlider';

import useWidth from '@/hooks/useWidth';

import { news } from '@/helpers/news';


export default function News() {
  const { isMobile } = useWidth();
  const limitNews = news.slice(0, 5);

  return (
    <Menu css="news-principal">
     
      <section className="container">
      <h1 className="news-title">Recent News</h1>
        <div className="news-grid">
          {limitNews.map((item) => (
            <div className="news-card" key={item.id}>
              <img src={`/news/${item.id}-${item.slug}/${item.gallery[0]}`} alt={item.name} />
              <div className="news-info">
                <p className="date">{item.date}</p>
                <h3>{item.name}</h3>
                <Link href={`/new/${item.slug}`}>
                  <Underline text="LEER MÁS" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </Menu>
  );
}
