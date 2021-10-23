import React from 'react'
import '../styles/_portfolio.scss'
import 'materialize-css'

import Sapphire from '../elements/sapphireFeature/sapphire'
import affirmations from '../elements/affirma.png'
import Rockval from '../elements/RockvalApp.mov'

import AnimatedLink from './AnimatedLink'

function Portfolio() {

  return (
    <div id='portfolioMainContainer' className="columnHeight">
      <div className='featureBox'>
        <p className='featureBox-title'>Mind Sapphire</p>
        <Sapphire />
        <div className='featureLinks'>
          <a href='https://mindsapphire.com/' rel='noreferrer' target='_Blank'>
            <AnimatedLink label='Demo' />
          </a>
          <a href='https://github.com/aperdomoll90/mindsapphire' rel='noreferrer' target='_Blank'>
            <AnimatedLink label='Github' />
          </a>
          <a href='https://github.com/aperdomoll90/mindsapphire-api' rel='noreferrer' target='_Blank'>
            <AnimatedLink label='API' />
          </a>
        </div>
      </div>

      <div className='featureBox'>
        <p className='featureBox-title'>Sweet Affirmations</p>
        <img alt='stars and hearts Icon' src={affirmations} />
        <div className='featureLinks'>
          <a href='https://afirmap-fc6fa.web.app/' rel='noreferrer' target='_Blank'>
            <AnimatedLink label='Demo' />
          </a>
          <a href='https://github.com/aperdomoll90/AffirmationsApp' rel='noreferrer' target='_Blank'>
            <AnimatedLink label='Github' />
          </a>
          <a href='https://github.com/aperdomoll90/Affirmations-api' rel='noreferrer' target='_Blank'>
            <AnimatedLink label='API' />{' '}
          </a>
        </div>
      </div>

      <div className='featureBox'>
        <p className='featureBox-title'>Rockval Mobile</p>
        <video src={Rockval} className='video' width='200' height='200' controls='controls' autoplay='true' />
        <div className='featureLinks'>
          <div className='regularLink'>PRESS PLAY</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
