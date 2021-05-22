import React from 'react'
import '../styles/_main.scss'
import laptop from '../components/elements//laptop.png'
import portrait from '../components/elements/profile.png'

import mail from '../components/elements/mail.png'
import phone from '../components/elements/phone.png'
import linkedin from '../components/elements/linkedin.png'
import insta from '../components/elements/Instagram.svg'

function ContactMe() {
  return (
    <main className="main">
      <section className="section section-feature">
        <div className="titleBox">
          <div>
            <p className="titleBox-name">
              Hello, I’m <span>Adrian Perdomo</span>
            </p>
            <p className="titleBox-bold">Full Stack Dev</p>
            <p className="titleBox-description">
              Full stack dev with a passion for Web Design\Automatization and AI
            </p>
          </div>
          <div className="titleBox-buttonField">
            <a class="waves-effect waves-light btn-large">Button</a>
          </div>
        </div>
        <div id="laptopBox">
          <img src={laptop} alt="Purple Laptop" />
        </div>
      </section>

      <div className="Stripe section">
        <div className="Stripe-normalizedBox">
          <div className="Stripe-content">
            <u>
              <p className="Stripe-title"> Why Choose me?</p>
            </u>
            <p>
              {' '}
              Adrian is an EMT, has worked in medical data and medical finance
              as well as IT at a medical school. He loves art, cooking, baking,
              medical applications of technology, nanotechnology, automation,
              AI, and hopes to improve lives through his work.
            </p>
          </div>
          <div className="portraitBox ">
            <img src={portrait} className="portraitBox-portrait" />
          </div>
        </div>
      </div>

      <section className="section section-bottom">
        <div className="contactMe  contactMe-shadow">
          <div className="contactMe-2dividers ">
            <p className="titleBox-name">Most used Technologies</p>
            <div className="contactMe-skillArea">
              <div className="contactMe-skill contactMe-purple">JavaScript</div>
              <div className="contactMe-skill contactMe-yellow">Node</div>
              <div className="contactMe-skill contactMe-red">Sql</div>
              <div className="contactMe-skill contactMe-red">React</div>
              <div className="contactMe-skill contactMe-blue">React Native</div>
              <div className="contactMe-skill contactMe-orange">Electron</div>
              <div className="contactMe-skill contactMe-green">Mongo db</div>
              <div className="contactMe-skill contactMe-purple">Firebase</div>
              <div className="contactMe-skill contactMe-yellow">SASS</div>
            </div>
          </div>

          <div className="contactMe-2dividers contactInfo">
            <p className="titleBox-name ">Contact me</p>
            <ul>
              <li><img className="contactMe-icon" src={mail} alt="mail icon"/>Email</li>
              <li><img className="contactMe-icon" src={phone} alt="phone icon"/>Phone Number</li>
              <li><img className="contactMe-icon" src={linkedin} alt="linkedin icon"/>Linked</li>
              <li><img className="contactMe-icon" src={insta} alt="insta icon"/>Instagram</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactMe
