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
          <h2>Our History</h2>
          <h3>PILLARS THAT SHAPE US UP</h3>
        </div>
      </section>

      <section className="container">
        <h2><strong>Welcome to</strong> Agador Spartacus Development</h2>
        <h3>Where Vision Meets Excellence in Florida Real Estate</h3>
        <p>At <strong>Agador Spartacus Development</strong> , we don’t just build properties; we craft communities. With a laser focus on Build-To-Rent (BTR) Multi-Family Communities, we are at the forefront of creating vibrant living spaces that cater to the dynamic lifestyles of Florida.</p>

        <h2 style={{ margin: '3rem auto', textAlign: 'center' }}><strong>Our </strong>expertise</h2>

        <div className="card-container">
          <div className="card">
            <p>Land Acquisition</p>
          </div>
          <div className="card">
            <p>site development</p>
          </div>
          <div className="card">
            <p>project management & oversight</p>
          </div>
          <div className="card">
            <p>LENDER FINANCING & CONSTRUCTION LOAN MANAGEMENT</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <p>Land Acquisition</p>
          </div>
          <div className="card">
            <p>site development</p>
          </div>
          <div className="card">
            <p>project management & oversight</p>
          </div>
          <div className="card">
            <p>LENDER FINANCING & CONSTRUCTION LOAN MANAGEMENT</p>
          </div>
        </div>

        <p>Join us in redefining the South Florida skyline. Explore our projects, learn about our methods, and discover opportunities to invest in the future of real estate development!</p>

        <p className="margin why">Why choose Agador Spartacus Development?</p>
        <p className="margin">Top 5 reasons to choose <strong>Agador Spartacus Development</strong> for your Real Estate Ventures in Florida.</p>
      </section>
    </>
  );
}
