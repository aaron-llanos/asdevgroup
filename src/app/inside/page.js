import './page.scss'

import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import Footer from '@/components/Footer/Footer';

export default function Home() {

  return (
    <>
      <section className="home">
        <Nav />

        <div className="home-slider__info">
          <div className="line">
            <div></div>
            <h3>OVERVIEW</h3>
          </div>
          <h2>Solamar Palm Bay</h2>
          <h3>UNDER CONSTRUCTION</h3>
          <button>Multifamily</button>
        </div>
      </section>

      <section className="topics">
        <div className="arrow">
          <Image
            src="/inside/arrow.png"
            alt="Vercel Logo"
            height={12}
            width={15}
            priority
          />
        </div>
        <h4>PROJECT CHARACTERISTICS</h4>
        <div className="buttons">
          <p className="black">UNDER CONSTRUCTION</p>
          <p className="red">Multifamily</p>
        </div>

        <div className="character-container">
          <div className="character">
            <h5>LOCATION</h5>
            <p><strong>Palm Bay, FL</strong></p>
          </div>
          <div className="character">
            <h5>PROJECT SIZE</h5>
            <p><strong>90 units</strong></p>
          </div>
          <div className="character">
            <h5>DATE</h5>
            <p><strong>March 2024</strong></p>
          </div>
        </div>
      </section>

      <section className="about">
        <h4><strong>About</strong> Project</h4>
        <p>The Solamar project is a new 210 residential townhome rental community located in Kissimmee near Orlando, the heart of Florida! This project is currently under construction and scheduled to be completed in early Spring 2023 . The property will feature private terraces with luxury amenities including a resort style pool & clubhouse area.</p>
      </section>

      <section className="gallery">
        <h4><strong>Project</strong> Gallery</h4>
        <div className="gallery-grid">
          <Image
            src="/inside/gallery.jpg"
            alt="Vercel"
            height={333}
            width={545}
          />
          <Image
            src="/inside/gallery.jpg"
            alt="Vercel"
            height={333}
            width={545}
          />

          <Image
            src="/inside/gallery.jpg"
            alt="Vercel"
            height={333}
            width={545}
          />
          <Image
            src="/inside/gallery.jpg"
            alt="Vercel"
            height={333}
            width={545}
          />

          <Image
            src="/inside/gallery.jpg"
            alt="Vercel"
            height={333}
            width={545}
          />
          <Image
            src="/inside/gallery.jpg"
            alt="Vercel"
            height={333}
            width={545}
          />
        </div>
      </section>

      <p className="return">RETURN TO PROJECTS</p>

      <p className="more-info">Request more information</p>

      <Footer />
    </>
  );
}
