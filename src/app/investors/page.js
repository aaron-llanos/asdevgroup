import './page.scss'

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';

export default function Investors() {

  return (
    <Menu css="investors">
      <section className="investors">
        <img src="/agador-big.png" alt="Agador Logo" className="agador" />

        <div className="investors-slider__info">
          <h2>Quick access to the <span>Juniper Square</span> portal:</h2>
          <a href="https://www.junipersquare.com/login" target="_blank">
            <Button text="Investors Login" />
          </a>
        </div>
      </section>

      <br /><br /><br /><br /><br />

      {/* <section className="investors">
        <div className="investors-container">
          <h3>Want to change your contact information?</h3>
          <h4>Fill the form below</h4>

          <form>
            <div className="row">
              <input placeholder="First Name" className="input" />
              <input placeholder="Last Name" className="input" />
            </div>
            <input placeholder="Street Address" className="input" />
            <input placeholder="City/Town" className="input" />
            <div className="row">
              <input placeholder="State" className="input" />
              <input placeholder="Zip" className="input" />
            </div>
            <input placeholder="Country" className="input" />
            <input placeholder="Current Email" className="input" />
            <input placeholder="New Email" className="input" />
            <input placeholder="Phone" className="input" />

            <Button text="Change" />
          </form>
        </div>
      </section> */}

      <Footer />
    </Menu>
  );
}
