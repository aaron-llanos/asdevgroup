'use client';

import './page.scss'

import Image from 'next/image'

import Menu from '@/components/Menu/Menu';
// import TeamSlider from '../../components/TeamSlider/TeamSlider';
import Footer from '@/components/Footer/Footer';

import useFlashlight from '@/hooks/useFlashlight';

export default function Team() {

  const { ref: ref01 } = useFlashlight();
  const { ref: ref02 } = useFlashlight();
  const { ref: ref03 } = useFlashlight();
  const { ref: ref04 } = useFlashlight();
  const { ref: ref05 } = useFlashlight();
  const { ref: ref06 } = useFlashlight();
  const { ref: ref07 } = useFlashlight();
  const { ref: ref08 } = useFlashlight();
  const { ref: ref09 } = useFlashlight();
  //  const { ref: ref10 } = useFlashlight();

  return (
    <Menu css="team">
      <section className="team">
        <div className="team-content">
          <h1><strong>Meet the team</strong></h1>
          {/* <h2>MEET THE TEAM</h2> */}
        </div>

        <div className="team-photos">
  <div className="image-container">
    <div className="team-photos__item">
      <Image
        alt="Alan"
        src="/team/Alan-Benenson.jpg"
        width="210"
        height="210"
      />
      <div className="flashlight" ref={ref01}></div>
    </div>
    <div className="team-photos__item contenedor">
      <h3>Alan Benenson</h3>
      <p>PRINCIPAL</p>
    </div>
  </div>
          

  <div className="image-container">
    <div className="team-photos__item">
      <Image
        alt="Alberto"
        src="/team/Alberto-Dichi.jpg"
        width="210"
        height="210"
      />
      <div className="flashlight" ref={ref02}></div>
    </div>
    <div className="team-photos__item contenedor">
      <h3>Alberto Dichi</h3>
      <p>PRINCIPAL</p>
    </div>
  </div>

          

  <div className="image-container">
    <div className="team-photos__item">
      <Image
        alt="Samy"
        src="/team/Samy-Cohen.jpg"
        width="210"
        height="210"
      />
      <div className="flashlight" ref={ref03}></div>
    </div>

    <div className="team-photos__item contenedor">
    <h3>Samy Cohen</h3>
    <p>PRINCIPAL</p>
              </div>
  </div>

      <div className="image-container">
          <div className="team-photos__item">
            <Image
              alt="helen"
              src="/team/Helen-L-Cruz.jpg"
               width="210"
               height="210"
              className="team-image"
            />
            <div className="flashlight" ref={ref04}></div>
            </div>
            <div className="team-photos__item contenedor">
                <h3>Helen L. Cruz</h3>
                <p>CHIEF FINANCIAL OFFICER</p>
              </div>
            </div>
       

            <div className="image-container">
          <div className="team-photos__item">
            <Image
              alt="Nico"
              src="/team/Chami.jpg"
               width="210"
               height="210"
              className="team-image"
            />
            <div className="flashlight" ref={ref05}></div>
            </div>
              <div className="team-photos__item contenedor">
                <h3>Nico Chami</h3>
                <p>DIRECTOR OF ACQUISITIONS</p>
              </div>
            </div>
          
            <div className="image-container">
          <div className="team-photos__item">
            <Image
              alt="Nika"
              src="/team/Nika-Zyryanova.jpg"
              width={210}  // Proporciona un ancho predeterminado requerido
      height={210}
              className="team-image"
            />
            <div className="flashlight" ref={ref06}></div>
            </div>
              <div className="team-photos__item contenedor">
                <h3>Nika Zyryanova</h3>
                <p>DIRECTOR OF LAND ENTITLEMENT</p>
              </div>
            
          </div>

          <div className="image-container">
          <div className="team-photos__item">
            <Image
              alt="Aaron"
              src="/team/Aaron-Benenson.jpg"
              width={210}  // Proporciona un ancho predeterminado requerido
              height={210}
              className="team-image"
            />
            <div className="flashlight" ref={ref07}></div>
            </div>
              <div className="team-photos__item contenedor">
                <h3>Aaron Benenson</h3>
                <p>SENIOR ACQUISITION ANALYST</p>
              </div>
            </div>
           
        
            <div className="image-container">
          <div className="team-photos__item">
            <Image
              alt="Stephanie"
              src="/team/Stephanie-Roque.jpg"
              width={210}  // Proporciona un ancho predeterminado requerido
      height={210}
              className="team-image"
            />
            <div className="flashlight" ref={ref08}></div>
            </div>
              <div className="team-photos__item contenedor">
                <h3>Stephanie Roque</h3>
                <p>EXECUTIVE ASSISTANT</p>
              </div>
          </div>
          

          <div className="image-container">
          <div className="team-photos__item">
            <Image
              alt="Shopia Serur"
              src="/team/Sophia-Serur.jpg"
              width={210}  // Proporciona un ancho predeterminado requerido
              height={210}
              className="team-image"
            />
            <div className="flashlight" ref={ref09}></div>
            </div>
              <div className="team-photos__item contenedor">
                <h3>Sophia Serur</h3>
                <p>MARKETING DIRECTOR</p>
              </div>
          </div>

         

         

          {/* <div className="team-photos__item">
            <Image
              alt="Sophia"
              src="/team/Sophia.jpg"
              width={210}  // Proporciona un ancho predeterminado requerido
      height={210}
              className="team-image"
            />
            <div className="flashlight" ref={ref09}>
              <div className="description">
                <h3>Sophia Serur</h3>
                <p>MARKETING DIRECTOR</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* <TeamSlider /> */}

        {/* <div className="team-content">
          <div className="strong">
            <p>Agador Spartacus Development is a regional, professionally-run, privately-owned company that has been doing business in the U.S. and Mexico.</p>
            <br />
            <p>Since its beginnings, Agador Spartacus has distinguished itself through innovation and excellence in property investment.</p>
          </div>
        </div> */}
      </section>
      <Footer />
    </Menu>
  );
}
