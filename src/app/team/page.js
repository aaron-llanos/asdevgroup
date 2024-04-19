import './page.scss'

import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import Footer from '@/components/Footer/Footer';
import Social from '@/components/Social';

export default function Home() {

  return (
    <>
      <section className="home">
        <Nav />

        <div className="home-slider__info">
          <h2>Contact</h2>
          <h3>GET IN TOUCH</h3>
        </div>
      </section>

      <section className="container">
      </section>
      <Footer />
    </>
  );
}
