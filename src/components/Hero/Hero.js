import React from 'react'
import './../../styles/App.css'
import 'materialize-css'
import portrait from '../elements/profile.png'
import laptop from '../elements/laptop.png'

function Hero() {
  return (
    <section className="Hero">
      <section className="section1 ">
        <div className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          libero ratione illum officia  
        </div>

        <img src={laptop} id="laptop" />
      </section>
      <section className="section-shape">
        <div className="hero-stripe">
          <div className="normalize-box">
            <div className="text-box">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              libero ratione illum officia delectus molestias ea nobis pariatur
              nesciunt? Eius exercitationem laudantium autem necessitatibus
              totam magni voluptate, recusandae minus quae!
            </div>
            <img src={portrait} id="portrait" />
          </div>
        </div>
        <div className="hero-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          libero ratione illum officia delectus molestias ea nobis pariatur
          nesciunt? Eius exercitationem laudantium autem necessitatibus totam
          magni voluptate, recusandae minus quae!
        </div>
      </section>
      <section className="section-shape">
        <div className="hero-stripe"></div>
        <div className="hero-content contact-me">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          libero ratione illum officia delectus molestias ea nobis pariatur
          nesciunt? Eius exercitationem laudantium autem necessitatibus totam
          magni voluptate, recusandae minus quae!
        </div>
      </section>
    </section>
  )
}

export default Hero
