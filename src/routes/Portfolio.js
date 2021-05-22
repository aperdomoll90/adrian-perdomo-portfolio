import React from 'react'
import '../styles/_main.scss'
import laptop from '../components/elements//laptop.png'
import portrait from '../components/elements/profile.png'

function Portfolio() {
  return (
    <main className="main">
      <section className="section section-feature">
        <div className="titleBox">
          <div>
            <p className="titleBox-portfolio">
              Check my <span>Work</span>
            </p>
            <p className="titleBox-portfolio-content">
              “I wanted to create a responsive site that looks great on both
              mobile and PC. I chose to incorporate animation-on-scroll effects
              and a sans-serif font (Lato). I utilized whitespace and a simple
              color palette for a minimalistic modern look.”
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
        <div className="featureBox featureBox-f1">Feature 1</div>
        <div className="featureBox featureBox-f2">Feature 2</div>
        <div className="featureBox featureBox-f3">Feature 3</div>
      </div>

      <section className="section section-bottom">
        <div className="contactMe">
          <div className="contactMe-projectGrid ">
            <div className="contactMe-projectCard ">PROJECT 1</div>
            <div className="contactMe-projectCard ">PROJECT 2</div>
            <div className="contactMe-projectCard ">PROJECT 3</div>
            <div className="contactMe-projectCard ">PROJECT 3</div>
            <div className="contactMe-projectCard ">PROJECT 2</div>
            <div className="contactMe-projectCard ">PROJECT 1</div>
            <div className="contactMe-gridHero ">PROJECT 1</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
