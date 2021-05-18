import React from 'react'
import './../../styles/App.css'
import { Button, Card, Row, Col } from 'react-materialize'

import portrait from '../elements/profile.png'
import laptop from '../elements/laptop.png'

function Hero() {
  return (
    <main className="main">
      <section className="Hero">
        <section className="section1 ">
          <div className="content-box">
            <div>
              <p id="title-name">
                Hello, I’m <span>Adrian Perdomo</span>
              </p>
              <p id="title-bold">Full Stack Dev</p>
              <p id="title-description">
                Full stack dev with a passion for Web Design\Automatization and
                AI
              </p>
            </div>
            <div className="button-field">
              <Button>test</Button>
              <Button>test</Button>
            </div>
          </div>
          <div id="laptop-box">
            <img src={laptop} id="laptop" />
          </div>
        </section>
        <section className="section-shape">
          <div className="hero-stripe">
            <div className="normalize-box">
              <div className="content-box">
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
            <div className="content-box">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              libero ratione illum officia delectus molestias ea nobis pariatur
              nesciunt? Eius exercitationem laudantium autem necessitatibus
              totam magni voluptate, recusandae minus quae!
            </div>
          </div>
        </section>
        <section id="contact-me" className="section-shape">
          <div id="attenuator">
            <div className="hero-stripe"></div>
            <div className="hero-content">
              <div className="content-box">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, libero ratione illum officia delectus molestias ea
                nobis pariatur nesciunt? Eius exercitationem laudantium autem
                necessitatibus totam magni voluptate, recusandae minus quae!
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Hero
