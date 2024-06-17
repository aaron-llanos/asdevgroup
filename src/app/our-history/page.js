'use client';

import './page.scss'
import 'animate.css';

import { useInView } from "react-intersection-observer";

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';

import { dynamicClass } from '@/helpers/dynamic-class';

export default function History() {
  // Texts animations
  const { ref: ref01, inView: inView01 } = useInView();
  const { ref: ref02, inView: inView02 } = useInView();

  return (
    <Menu css="history">
      <section className="history">
        <div className="overlay"></div>
        <div className="historytext">
          <div className="historytext-slider__info">
            <h2><strong>Our History</strong></h2>
            <h3>PILLARS THAT SHAPE US UP</h3>
          </div>
        </div>
      </section>

      <section className="container-h">
        <h2
          className={dynamicClass(inView01, 'animate__animated animate__fadeInLeft')}
          style={{ opacity: `${inView01 ? '1' : '0'}` }}
          ref={ref01}
        ><strong>Welcome to</strong> Agador Spartacus Development</h2>
        {/* <h3><strong>Where Vision Meets Excellence in Florida Real Estate</strong></h3> */}
        <p>At <strong>Agador Spartacus Development</strong>, we don’t just build properties; we craft communities. With a laser focus on Build-To-Rent (BTR) and Multi-Family Communities, we are at the forefront of creating vibrant living spaces that cater to the dynamic lifestyles of Florida.</p>

        <h2 style={{ margin: '3rem auto', textAlign: 'center' }}><strong>Our </strong>expertise</h2>

        <div className="card-container">
          <div className="card">
            <p className="initial">Land Acquisition</p>
            <p className="on-hover">We navigate the complex landscape of South Florida real estate to secure prime locations for development.</p>
          </div>
          <div className="card">
            <p className="initial">Site Development</p>
            <p className="on-hover">From untouched land to groundbreaking, we manage every detail with precision.</p>
          </div>
          <div className="card">
            <p className="initial">Project Management & Oversight</p>
            <p className="on-hover">Our meticulous approach ensures that every projectis delivered on time and to the highest standards.</p>
          </div>
          <div className="card">
            <p className="initial">Investor Relations</p>
            <p className="on-hover">Building trust through transparent partnerships and consistent returns.</p>
          </div>
          {/* <div className="card">
            <p className="initial">Lender Financing & Construction Loan Management</p>
            <p className="on-hover">We secure the funding necessary to transform blueprints into reality.</p>
          </div> */}
        </div>

        {/* <div className="card-container">
          <div className="card">
            <p className="initial">Project Budget Controls</p>
            <p className="on-hover">Keeping a tight rein on finances, we deliver value without compromise.</p>
          </div>
          <div className="card">
            <p className="initial">Project Equity Management</p>
            <p className="on-hover">Ensuring a balanced investment approach for long-term success.</p>
          </div>
          <div className="card">
            <p className="initial">Financial Reporting & Oversight</p>
            <p className="on-hover">With rigorous oversight, we maintain financial integrity at every stage.</p>
          </div>
        </div> */}

        <h2
          ref={ref02}
          className={dynamicClass(inView02, 'animate__animated animate__fadeInLeft')}
          style={{ opacity: `${inView02 ? '1' : '0'}`, textAlign: 'center', margin: '2rem auto 4rem' }}
        ><strong>Unrivaled</strong> results</h2>

        <p style={{ marginTop: '2rem', textAlign: 'center' }}>&#34;At Agador Spartacus, our success lies in our diversity, which serves as our competitive advantage. With a talented team comprising of construction, development operations, and investment professionals, we have established ourselves as leaders in the real estate development industry.</p>

        <p style={{ marginTop: '2rem', marginBottom: '22rem', textAlign: 'center' }}>Our comprehensive expertise across various asset classes enables us to deliver exceptional results in every project we undertake. By fostering a collaborative and team-oriented approach, we maximize investment returns by harnessing the synergies of our platform. At Agador Spartacus, we don&#39;t just develop properties; we shape communities and redefine standards of excellence in the real estate sector.&#34;</p>

        {/* <p className="margin why"><strong>Why choose Agador Spartacus Development?</strong></p>
        <p className="margin">Top 5 reasons to choose <strong>Agador Spartacus Development</strong> for your Real Estate Ventures in Florida.</p>

        <div className="list">
          <p>1. Statewide Impact, Local Experience the best of both worlds with Agador Spartacus Development. While we’re based in the bustling city of Aventura, our projects span across Florida, including Kissimmee, Wildwood, Ocala, Jacksonville, Bradenton, Lake Hamilton, Winter Haven and so many more! Each project is infused with local expertise and designed to complement its community.</p>
          <p>2. Diverse Portfolio Our work isn’t limited to a single type of development. We’re proud creators of multi-family communities, commercial hotspots, and industrial parks. Whatever your real estate needs, we have the experience and the portfolio to back it up.</p>
          <p>3. Integrated Development Approach From land acquisition and site development to project management and budget controls, our integrated approach ensures seamless execution at every phase of the development process.</p>
          <p>4. Financial Acumen Financial stewardship is at the core of our operations. With strategic lender financing, construction loan management, and rigorous financial oversight, we turn fiscal responsibility into profitable investments.</p>
          <p>5. Community and Investor Focus We believe in building relationships just as much as we do in building properties. Our commitment to investor relations and equity management is matched only by our dedication to creating living spaces that enhance communities.</p>
          <p>Discover why <strong>Agador Spartacus Development</strong> is the right partner for your next Real Estate endeavor.</p>
        </div> */}
      </section>
      <Footer />
    </Menu>
  );
}
