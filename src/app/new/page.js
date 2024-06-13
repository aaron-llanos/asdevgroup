import './page.scss'

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';

export default function News() {

  return (
    <Menu css="new">
      <section className="container">
        <div className="information">
          <h2>March 19, 2024</h2>
          <h1>Groundbreaking Ceremony Event - Crela Spring Hill</h1>
        </div>
      </section>

      <div className="grid-container">
        <div className="grid-item">
          <img src="/news/01.jpg" alt="House" />
          <div className="info">
            <h3>Groundbreaking Ceremony Event Crela Spring Hill</h3>
            <p className="date">March 19, 2024</p>
          </div>
        </div>
        <div className="grid-item">
          <img src="/news/01.jpg" alt="House" />
          <div className="info">
            <h3>Groundbreaking Ceremony Event Crela Spring Hill</h3>
            <p className="date">March 19, 2024</p>
          </div>
        </div>
        <div className="grid-item">
          <img src="/news/01.jpg" alt="House" />
          <div className="info">
            <h3>Groundbreaking Ceremony Event Crela Spring Hill</h3>
            <p className="date">March 19, 2024</p>
          </div>
        </div>
      </div>

      <section className="container text">
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero&#39;s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn&#39;t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it&#39;s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero&#39;s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn&#39;t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it&#39;s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
      </section>

      <Underline text="SIGUIENTE NOTICIA" />

      <Footer />
    </Menu>
  );
}
