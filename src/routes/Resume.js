import React from 'react'
import '../styles/_main.scss'
import laptop from '../components/elements//laptop.png'
import portrait from '../components/elements/profile.png'

function Resume() {
  return (
    <main className="main">
      <main className="main">
        <section className="section section-feature">
          <div className="titleBox">
            <div>
              <p className="titleBox-portfolio">
              <span>Resume</span> overview
              </p>
              <p className="titleBox-portfolio-content">
                Certified EMT, has worked in medical data and medical finance as
                well as IT at a medical school. I love art, cooking, baking,
                medical applications of technology, nanotechnology, automation,
                AI, and I hope to improve lives through my work. Fluent in
                English and Spanish with over 11 years of experience exceeding
                customer expectations and providing customized client
                experiences to build and maintain customer loyalty.
              </p>
            </div>
            <div className="titleBox-buttonField">
              <a class="waves-effect waves-light btn-large">PDF</a>
            </div>
          </div>
          <div id="laptopBox">
            <img src={laptop} alt="Purple Laptop" />
          </div>
        </section>

        <div className="Stripe section ">
          <div className="featureBox featureBox-schoolSkill">Feature 1</div>
          <div className="featureBox featureBox-schoolSkill">Feature 2</div>
         
        </div>

        <section className="section section-bottom">
          <div className="contactMe">
            <div className="contactMe-expGrid ">
              <div className="contactMe-projectCard ">PROJECT 1</div>
              <div className="contactMe-gridHero ">PROJECT 1</div>
            </div>
          </div>
        </section>
      </main>
    </main>
  )
}

export default Resume
