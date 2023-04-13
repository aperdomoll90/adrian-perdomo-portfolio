import React from 'react'
import './styles.css'
import linkedin from '../../media/linkedin.png'
import github from '../../media/github.png'
import river from '../../media/river.svg'

function Landing() {
  return (
    <main>
      <div className='firstContainer'>
        <img src={river} className='river' data-speed='-0.8' alt='artistic rendition of a river' />

        {/* <div className='personalLinks'>
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
          </div> */}
        <div className='titleBox translate' data-speed='0.1'>
          <div>
            <p className='intro-name'>
              Hello, my name is <span>Adrian Perdomo</span>
            </p>
            <p className='slogan'>Yeah, I can build it.</p>
            <p className='titleBox-description'>I am a Full-Stack Software Engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>
          </div>
        </div>
      </div>
      <div id='skills'>
        <div className='shadow' />
      </div>

      <div id='footer' className='container'>
        <p className='footerText'>© 2021 Adrian Perdomo Portfolio. All Rights Reserved. Published with React</p>
      </div>
    </main>
  )
}

export default Landing
