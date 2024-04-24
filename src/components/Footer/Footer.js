import './footer.scss'
import Image from "next/image";

import Social from '../Social';

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="content">
          <img src="/agador-logo.png" atl="Agador logo"/>

          <div className="social">
            <p><strong>Where Vision Meets Excellence in Florida Real Estate</strong></p>
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
            <p>About Us</p>
            <p>Portfolio</p>
            <p>Investors</p>
            <p>Contact</p>
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
