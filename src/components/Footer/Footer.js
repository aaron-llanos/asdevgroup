import './footer.scss'

import Link from 'next/link'

import Social from '../Social/Social';

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="content">
          <Link href="/">
            <img
              width="200px"
              atl="Agador logo"
              src="/agador-logo.png"
              style={{ cursor: 'pointer' }}
            />
          </Link>


          <div className="social">
            {/* <p><strong>Where Vision Meets Excellence in Florida Real Estate</strong></p> */}
            <Social />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content info">
          <div className="contact">
            <h4><strong>CONTACT DETAILS</strong></h4>
            <p>Email: info@asdevgroup.com</p>
            <p>Phone: (305)-974-2418</p>
          </div>
          <div className="menu">
            <Link href="/our-history">
              <p>About Us</p>
            </Link>
            <Link href="/portfolio/us">
              <p>Portfolio</p>
            </Link>
            <Link href="/investors">
              <p>Investors login</p>
            </Link>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="content rights">
        <div style={{visibility: 'hidden'}} >Website by Next Evolution</div>
        <p>© 2024 by Agador Spartacus Development Group</p>
        <p>Website by Next Evolution</p>
      </div>
    </footer>
  );
}
