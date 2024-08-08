import './page.scss'

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Underline from '@/components/Underline/Underline';
import { news } from '@/helpers/news';

export default function New({ params }) {

  const filterNew = news.find(({ slug }) => slug === params.slug);
  const { name, date, description, gallery  } = filterNew;

  return (
    <Menu css="new">
      <section className="title-container">
        <div className="information">
          <h2>{date}</h2>
          <h1>{name}</h1>
        </div>
      </section>

      <div className="grid-container">
        <div className="grid-item">
          <img src="/news/01.jpg" alt="House" />
        </div>
        <div className="grid-item">
          <img src="/news/01.jpg" alt="House" />
        </div>
        <div className="grid-item">
          <img src="/news/01.jpg" alt="House" />
        </div>
      </div>

      {/* <section className="container text">
        {description}
      </section> */}
      <section className="container text">
        {description.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
      </section>

      <Underline text="SIGUIENTE NOTICIA" />

      <Footer />
    </Menu>
  );
}
