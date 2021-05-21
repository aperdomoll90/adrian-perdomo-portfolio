import React from 'react'
import '../styles/_main.scss'
import laptop from '../components/elements//laptop.png'
import portrait from '../components/elements/profile.png'

function ContactMe() {
  return (
    <>
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
        <div className="contactMe">
          <div>
            <p className="titleBox-name">Most used Technologies</p>
            <ul>
              <li>JavaScript</li>
              <li>Node</li>
              <li>Sql</li>
              <li>React</li>
              <li>React Native</li>
              <li>Electron</li>
            </ul>
          </div>
          <div>
            {' '}
            <p className="titleBox-name ">Contact me</p>
            <ul>
              <li>Email</li>
              <li>Phone Number</li>
              <li>Linked</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactMe
