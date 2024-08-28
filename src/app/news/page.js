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
  const { isMobile } = useWidth()

  const limitNews = news.slice(0,4);
  const [lastNew, ...restNews] = limitNews;
  const { id, slug, name, date, description, gallery } = lastNew;

  return (
    <Menu css="news-principal">
      <section className="news">
        {/* <img src="/news-bg.jpg" alt="house" width="100%" /> */}
        <div className="title">

          <div className="title-slider__info">
            <h2>Recent news</h2>
            <h3>PROJECT RELEASES AND MORE</h3>
          </div>
        </div>
      </section>

      <section className="container">
        {!isMobile && (
          <div className="principal">
            <div className="grid-item">
              <img src={`/news/${id}-${slug}/${gallery[0]}`} alt="new" />
            </div>
            <div className="content">
              <p className="date">{date}</p>
              <h3>{name}</h3>
              <p className="text">{description[0]}</p>
              <Link href={`/new/${slug}`}>
                <Underline text="LEER MÁS" />
              </Link>
            </div>
          </div>
        )}

        <div className="grid-container">
          {isMobile ? (
            <MultipleSlider newsConfig={limitNews} folder="news" />
          ) : (
            <>
              {restNews.map((newItem, key) => (
                <Link href={`/new/${newItem.slug}`} key={key}>
                  <div className="grid-item">
                    <div className="overlay"></div>
                    <img
                      alt="House"
                      src={`/news/${newItem.id}-${newItem.slug}/${newItem.gallery[0]}`}
                    />
                    <div className="info">
                      <h3>{newItem.name}</h3>
                      <p className="date">{newItem.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>
      <Footer />
    </Menu>
  );
}
