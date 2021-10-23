import React from 'react'
import '../styles/_main.scss'
import portrait from '../elements/profile.png'
import Sapphire from '../elements/sapphireFeature/sapphire'
import affirmations from '../elements/affirma.png'
import linkedin from '../elements/linkedin.png'
import github from '../elements/github.png'
import Rockval from '../elements/RockvalApp.mov'
import Overview from '../components/Overview'

function ContactMe() {
  return (
    <main>
      <section className='area1'>
        <div className='titleBox'>
          <div>
            <p className='titleBox-name'>
              Hello, I’m <span>Adrian Perdomo</span>
            </p>
            <p className='titleBox-bold'>Full Stack Dev</p>
            <p className='titleBox-description'>
              Welcome to my portfolio. I am a Full-stack Software Engineer, mobile developer, certified EMT, fluent in English and Spanish, has worked in medical data and medical finance as well as IT at a medical school. I love art, cooking, baking, medical applications of technology, nanotechnology, automation, AI,
              and I hope to improve lives through my work.
            </p>
          </div>
        </div>
        <div className='personalLinks'>
          <a href='https://www.linkedin.com/in/adrian-perdomo-12997474/' rel="noreferrer" target='_Blank'>
            <div className='navBarIcon'>
              <img alt='linkedIn Icon' src={linkedin} className='navBarIcon-img' />
              <div className='navBarIcon-overlay personalLinks-overlay'>
                <div className='navBarIcon-title'>LinkedIn </div>
              </div>
            </div>
          </a>

          <a href='https://github.com/aperdomoll90' rel="noreferrer" target='_Blank'>
            <div className='navBarIcon'>
              <img alt='github Icon' src={github} className='navBarIcon-img' />
              <div className='navBarIcon-overlay personalLinks-overlay'>
                <div className='navBarIcon-title'>Github </div>
              </div>
            </div>
          </a>
        </div>

        <img alt=' Adrian perdomo portrait' src={portrait} id='portrait' />
      </section>

      <div className='Stripe'>
        <div className='featureBox'>
          <p className="featureBox-title">Mind Sapphire</p>
          <Sapphire />
          <div className='featureLinks'>
            <a href='https://mindsapphire.com/' rel="noreferrer" target='_Blank'>
              Demo
            </a>
            <a href='https://github.com/aperdomoll90/mindsapphire' rel="noreferrer" target='_Blank'>
              Github
            </a>
            <a href='https://github.com/aperdomoll90/mindsapphire-api' rel="noreferrer" target='_Blank'>
              API
            </a>
          </div>
        </div>
        <div className='featureBox'>
          <p className="featureBox-title">Sweet Affirmations</p>
          <img alt='stars and hearts Icon' src={affirmations}  />
          <div className='featureLinks'>
            <a href='https://afirmap-fc6fa.web.app/' rel="noreferrer" target='_Blank'>
              Demo
            </a>
            <a href='https://github.com/aperdomoll90/AffirmationsApp' rel="noreferrer" target='_Blank'>
              Github
            </a>
            <a href='https://github.com/aperdomoll90/Affirmations-api' rel="noreferrer" target='_Blank'>
              API
            </a>
          </div>
        </div>
        <div className='featureBox'>
          <p className="featureBox-title">Rockval Mobile</p>
          <video src={Rockval} width="200" height="320" controls="controls" autoplay="true" />
          {/* <div className='featureLinks'>
            <a href='https://nikkis-restaurant-app.web.app/' rel="noreferrer" target='_Blank'>
              Demo
            </a>
            <a href='https://github.com/aperdomoll90/restaurantes-by-nikki' rel="noreferrer" target='_Blank'>
              Github
            </a>
            <a href='https://github.com/aperdomoll90/restaurantes-by-nikki' rel="noreferrer" target='_Blank'>
              API
            </a>
          </div> */}
      </div>
      </div>

     <Overview/>
    </main>
  )
}

export default ContactMe
