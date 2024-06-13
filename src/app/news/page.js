import './page.scss'

import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';
import Menu from '@/components/Menu/Menu';

export default function News() {
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
        <div className="principal">
          <div className="grid-item">
            <img src="/news/01.jpg" alt="House" />
          </div>
          <div className="content">
            <p className="date">March 19, 2024</p>
            <h3>Groundbreaking Ceremony Event - Crela Spring Hill</h3>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Underline text="LEER MÁS" />
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <img src="/news/01.jpg" alt="House" />
            <div className="info">
              <h3>Groundbreaking Ceremony Event Crela Spring Hill</h3>
              <p className="date">March 19, 2024</p>
            </div>
          </div>
          <div className="grid-item">
            <img src="/news/01.jpg" alt="House" />
            <div className="info">
              <h3>Groundbreaking Ceremony Event Crela Spring Hill</h3>
              <p className="date">March 19, 2024</p>
            </div>
          </div>
          <div className="grid-item">
            <img src="/news/01.jpg" alt="House" />
            <div className="info">
              <h3>Groundbreaking Ceremony Event Crela Spring Hill</h3>
              <p className="date">March 19, 2024</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Menu>
  );
}
