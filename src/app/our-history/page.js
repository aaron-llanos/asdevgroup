"use client";

import './page.scss'
import 'animate.css';

import { useInView } from "react-intersection-observer";

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';

export default function History() {
  // Texts animations
  const { ref: ref01, inView: inView01 } = useInView();

  return (
    <Menu>
      <section className="history">
        <img src="/border.jpg" alt="house" width="100%" />
        <div className="home">
          <div className="home-slider__info">
            <h2><strong>Our History</strong></h2>
            <h3>PILLARS THAT SHAPE US UP</h3>
          </div>
        </div>
      </section>

      <section className="container-h">
        <h2
          className={inView01 && 'animate__animated animate__fadeInLeft'}
          style={{ opacity: `${inView01 ? '1' : '0'}` }}
          ref={ref01}
        ><strong>Welcome to</strong> Agador Spartacus Development</h2>
        <h3><strong>Where Vision Meets Excellence in Florida Real Estate</strong></h3>
        <p>At <strong>Agador Spartacus Development</strong> , we don’t just build properties; we craft communities. With a laser focus on Build-To-Rent (BTR) Multi-Family Communities, we are at the forefront of creating vibrant living spaces that cater to the dynamic lifestyles of Florida.</p>

        <h2 style={{ margin: '3rem auto', textAlign: 'center' }}><strong>Our </strong>expertise</h2>

        <div className="card-container">
          <div className="card">
            <p className="initial">Land acquisition</p>
            <p className="on-hover">we navigate the complex landscape of South Florida real estate to secure prime locations for development.</p>
          </div>
          <div className="card">
            <p className="initial">Site development</p>
            <p className="on-hover">from untouched land to groundbreaking, we manage every detail with precision.</p>
          </div>
          <div className="card">
            <p className="initial">Project management & oversight</p>
            <p className="on-hover">our meticulous approach ensures that every projectis delivered on time and to the highest standards.</p>
          </div>
          <div className="card">
            <p className="initial">Lender financing & Construction loan management</p>
            <p className="on-hover">our meticulous approach  ensures that every project is delivered on time and  to the highest standards.</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <p className="initial">Project budget controls</p>
            <p className="on-hover">keeping a tight rein on finances, we deliver value without compromise.</p>
          </div>
          <div className="card">
            <p className="initial">Investor relation</p>
            <p className="on-hover">building trust through transparent partnerships and consistent returns.</p>
          </div>
          <div className="card">
            <p className="initial">Project equity management</p>
            <p className="on-hover">ensuring a balanced investment approach for long-term success.</p>
          </div>
          <div className="card">
            <p className="initial">Financial reporting & oversight</p>
            <p className="on-hover">With rigorous oversight, we maintain financial integrity at every stage.</p>
          </div>
        </div>

        <p style={{ marginTop: '2rem', marginBottom: '5rem' }}>Join us in redefining the South Florida skyline. Explore our projects, learn about our methods, and discover opportunities to invest in the future of real estate development!</p>

        <p className="margin why"><strong>Why choose Agador Spartacus Development?</strong></p>
        <p className="margin">Top 5 reasons to choose <strong>Agador Spartacus Development</strong> for your Real Estate Ventures in Florida.</p>

        <div className="list">
          <p>1. Statewide Impact, Local Experience the best of both worlds with Agador Spartacus Development. While we’re based in the bustling city of Aventura, our projects span across Florida, including Kissimmee, Wildwood, Ocala, Jacksonville, Bradenton, Lake Hamilton, Winter Haven and so many more! Each project is infused with local expertise and designed to complement its community.</p>
          <p>2. Diverse Portfolio Our work isn’t limited to a single type of development. We’re proud creators of multi-family communities, commercial hotspots, and industrial parks. Whatever your real estate needs, we have the experience and the portfolio to back it up.</p>
          <p>3. Integrated Development Approach From land acquisition and site development to project management and budget controls, our integrated approach ensures seamless execution at every phase of the development process.</p>
          <p>4. Financial Acumen Financial stewardship is at the core of our operations. With strategic lender financing, construction loan management, and rigorous financial oversight, we turn fiscal responsibility into profitable investments.</p>
          <p>5. Community and Investor Focus We believe in building relationships just as much as we do in building properties. Our commitment to investor relations and equity management is matched only by our dedication to creating living spaces that enhance communities.</p>
          <p>Discover why <strong>Agador Spartacus Development</strong> is the right partner for your next Real Estate endeavor.</p>
        </div>
      </section>
      <Footer />
    </Menu>
  );
}
