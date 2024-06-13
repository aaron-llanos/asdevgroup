import './page.scss'

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Social from '@/components/Social/Social';
import Button from '@/components/Button/Button';

export default function Contact() {
  return (
    <Menu css="contact">
      <section className="contact-main">
        <div className="overlay"></div>
        <div className="text">
          <div className="text-slider__info">
            <h2>Contact</h2>
            <h3>GET IN TOUCH</h3>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>SOCIAL MEDIA</h2>
        <Social contact />
        <h2>CONTACT</h2>

        <div className="contact-info">
          <div className="contact-info__container">
            <div className="contact-info__item">
              <p><strong>Office Adress</strong></p>
              <p>2875 NW 191st Street, Suite 305, Aventura, FL 33180</p>
            </div>
            <div className="contact-info__item">
              <p><strong>Main Office Line</strong></p>
              <p>(305)974-2418</p>
            </div>
            <div className="contact-info__item">
              <p><strong> info@asdevgroup.com</strong></p>
              <p>info@asdevgroup.com</p>
            </div>
          </div>

          <form>
            <div className="row">
              <input placeholder="First Name" className="input" />
              <input placeholder="Last Name" className="input" />
            </div>
            <input placeholder="Email" className="input" />
            <input placeholder="Subject" className="input" />

            <Button text="Submit" />
          </form>
        </div>
      </section>
      <Footer />
    </Menu>
  );
}
