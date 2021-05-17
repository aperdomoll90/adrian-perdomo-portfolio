import React from 'react'
import './../../styles/App.css'
import 'materialize-css'
import portrait from '../elements/profile.png'
import laptop from '../elements/laptop.png'

function Hero() {
  return (
    <main className="main">
      <section className="Hero">
        <section className="section1 ">
          <div className="text-box">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            libero ratione illum officia
          </div>
          <div id="laptop-box">
            <img src={laptop} id="laptop" />
          </div>
        </section>
        <section className="section-shape">
          <div className="hero-stripe">
            <div className="normalize-box">
              <div className="text-box">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, libero ratione illum officia delectus molestias ea
                nobis pariatur nesciunt? Eius exercitationem laudantium autem
                necessitatibus totam magni voluptate, recusandae minus quae!
              </div>
              <div id="portrait-box">
                <img src={portrait} id="portrait" />
              </div>
            </div>
          </div>
          <div className="hero-content">
          <div className="content-text-box">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            libero ratione illum officia delectus molestias ea nobis pariatur
            nesciunt? Eius exercitationem laudantium autem necessitatibus totam
            magni voluptate, recusandae minus quae!
            </div>
          </div>
        </section>
        <section id="contact-me" className="section-shape">
          <div id="attenuator">
          <div className="hero-stripe"></div>
          <div  className="hero-content">
          <div className="content-text-box">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            libero ratione illum officia delectus molestias ea nobis pariatur
            nesciunt? Eius exercitationem laudantium autem necessitatibus totam
            magni voluptate, recusandae minus quae!
          </div>
          </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Hero
