import './page.scss'

import Nav from "@/components/Nav/Nav";
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';

export default function portfolio() {

  return (
    <>
      <section className="home">
        <Nav />
        <h1>Our developments are built in the most attractive areas in Florida</h1>

        <div className="filter">
          <div className="filter-row">
            <p>FILTER:</p>
            <Button text="Multifamily" />
            <Button text="Mixed-Use" />
            <Button text="Residential" />
            <Button text="Industrial" />
          </div>
          <div className="filter-row" style={{ maxWidth: '300px' }}>
            <Button text="In Progress" />
            <Button text="Completed" />
            <Button text="All" />
          </div>
        </div>

        <div className="grid">
          <div className="row">
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
            <div className="card">
              <p className="title">Lorem ipsum dolor sit amet</p>
              <p className="city">Nunc non euismod</p>
            </div>
          </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
