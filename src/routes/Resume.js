import React from 'react'
import '../styles/_main.scss'
import Left from '../components/Left'
import Right from '../components/Right'

import resumeProfile from '../elements/resumeProfile.png'

function Resume() {
  return (
    <main >
      
      <section className='header'>
        <a href="https://firebasestorage.googleapis.com/v0/b/bocacode-fb.appspot.com/o/candidates%2Fresumes%2Fperdomo_resume_2021.pdf?alt=media" target="_Blank"className='btn-floating btn-large waves-effect waves-light downloadButton' node='button'>
          <i className='material-icons'>attach_file</i>
        </a>
        <div className='profileField'>
          <p>ADRIAN</p>
          <div className='profileField-profile'>
            <img src={resumeProfile} />
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
