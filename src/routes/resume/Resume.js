import React from 'react'
import './styles.css'
import Left from './Left'
import Right from './Right'

import resumeProfile from '../../media/resumeProfile.png'

function Resume() {
  return (
    <div id='resume-grid-container'>
      <div className='header'>
        <div className='profileField'>
          <p>ADRIAN</p>
          <div className='profileField-profile'>
            <img alt='Adrian Perdomo Profile' src={resumeProfile} />
          </div>
          <p>PERDOMO</p>
        </div>
        <h3>FULL STACK SOFTWARE DEVELOPER</h3>
      </div>

      <Left />
      <div id="divider"></div>
      <Right />
    </div>
  )
}

export default Resume
