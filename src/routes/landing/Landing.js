import React from 'react'
import './styles.css'
import Hero from '../../components/hero'

function Landing() {
  return (
    <main>
      <Hero />
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
