import React from 'react'
import '../styles/_landing.scss'
import Laptop from '../elements/laptop.png'
import Profile from '../elements/profile.png'
import Cellphone from '../elements/cellphone.png'
import Overview from '../components/Overview'
import Portfolio from '../components/Portfolio'
import linkedin from '../elements/linkedin.png'
import github from '../elements/github.png'

function Landing() {

  return (
    <main>
      <div id='firstImage' className='firstContainer'>
      <div className='personalLinks'>
            <a href='https://www.linkedin.com/in/adrian-perdomo-12997474/' rel='noreferrer' target='_Blank'>
              <div className='navBarIcon'>
                <img alt='linkedIn Icon' src={linkedin} className='navBarIcon-img' />
                <div className='navBarIcon-overlay personalLinks-overlay'>
                  <div className='navBarIcon-title'>LinkedIn </div>
                </div>
              </div>
            </a>

            <a href='https://github.com/aperdomoll90' rel='noreferrer' target='_Blank'>
              <div className='navBarIcon'>
                <img alt='github Icon' src={github} className='navBarIcon-img' />
                <div className='navBarIcon-overlay personalLinks-overlay'>
                  <div className='navBarIcon-title'>Github </div>
                </div>
              </div>
            </a>
          </div>
        <img src={Laptop} className='laptop translate' data-speed='0.45' alt='laptop' />       <img src={Profile} className='profile translate' data-speed='0.4' alt='profile' />
        <img src={Cellphone} className='cellphone translate' data-speed='-0.8' alt='cellphone' />
        <div className='titleBox translate' data-speed='0.1'>
          <div>
            <p className='titleBox-name'>
              Hello, I’m <span>Adrian Perdomo</span>
            </p>
            <p className='titleBox-bold'>Full Stack Dev</p>
            <p className='titleBox-description'>
              Welcome to my portfolio. I am a Full-stack Software Engineer, mobile developer, certified EMT, fluent in English and Spanish, has worked in medical data and medical finance as well as IT at a medical school. I love art, cooking, baking, medical applications of technology,
              nanotechnology, automation, AI, and I hope to improve lives through my work.
            </p>
          </div>
        </div>
      </div>
      <div id='skills'>
        <div className='shadow'/>
        <div id='leftColumn'>
          <Overview />
        </div>
        <div id='rightColumn'>
          <Portfolio />
        </div>
      </div>

      <div id='footer' className='container'>
        <p className='footerText'>© 2021 Adrian Perdomo Portfolio. All Rights Reserved. Published with React</p>
      </div>
    </main>
  )
}

export default Landing
