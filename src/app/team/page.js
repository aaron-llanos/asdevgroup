import './page.scss'

import Menu from '@/components/Menu/Menu';
import TeamSlider from '../../components/TeamSlider/TeamSlider';
import Footer from '@/components/Footer/Footer';

export default function Team() {
  return (
    <Menu css="team">
      <section className="team">
        <div className="team-content">
          <h1><strong>The Driving Forces Behind Our Success</strong></h1>
          <h2>MEET THE TEAM</h2>
        </div>

        <TeamSlider />

        <div className="team-content">
          <div className="strong">
            <p>Agador Spartacus Development is a regional, professionally-run, privately-owned company that has been doing business in the U.S. and Mexico.</p>
            <br />
            <p>Since its beginnings, Agador Spartacus has distinguished itself through innovation and excellence in property investment.</p>
          </div>
        </div>
      </section>
      <Footer />
    </Menu>
  );
}
