import './page.scss'

import Nav from "@/components/Nav/Nav";
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';

export default function Home() {

  return (
    <>
      <section className="investors">
        <Nav light />

        <div className="investors-container">
          <h1>Quick access to the Juniper Square portal</h1>
          <h2>Juniper Square</h2>

          <Button text="Go to Juniper Square Portal" />
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
      </section>
      <img src="/investors.jpg" alt="investors" />
      <Footer />
    </>
  );
}
