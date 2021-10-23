import React from 'react'
import '../styles/_main.scss'
import Left from '../components/Left'
import Right from '../components/Right'

import resumeProfile from '../elements/resumeProfile.png'

function Resume() {
  return (
    <main >
      
      <section className='header'>
        <div className='profileField'>
          <p>ADRIAN</p>
          <div className='profileField-profile'>
            <img alt='Adrian Perdomo Profile' src={resumeProfile} />
          </div>
          <p>PERDOMO</p>
        </div>
        <h3>FULL STACK SOFTWARE DEVELOPER</h3>
      </section>
      <section className='portfolioContent'>
        <Left />
        <div className='vertical'></div>
        <Right />
      </section>
      <section className='footer'></section>
    </main>
  )
}

export default Resume
