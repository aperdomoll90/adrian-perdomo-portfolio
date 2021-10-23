import React from 'react'
import '../styles/_navBar.scss'
import 'materialize-css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div id='backGroundGradient'>
    <div className='nav'>
          <Link to='/' className='linkPosition'>
            <div className='linksBullet'>
              <h2>
                Portfolio
                <span> Portfolio</span>
                <span> Portfolio</span>
                {/* <span> See what we're cooking up</span> */}
              </h2>
            </div>
          </Link>

          <Link to='/resume' className='linkPosition'>
            <div className='linksBullet'>
              <h2>
                Resume
                <span> Resume</span>
                <span> Resume</span>
                {/* <span> Meet our team</span> */}
              </h2>
            </div>
          </Link>

          <a className='linkPosition' href='https://firebasestorage.googleapis.com/v0/b/bocacode-fb.appspot.com/o/candidates%2Fresumes%2Fperdomo_resume_2021.pdf?alt=media' rel='noreferrer' target='_Blank'>
            <div className='linksBullet'>
              <h2>
                Download
                <span> Download</span>
                <span> Download</span>
                {/* <span> Get in touch</span> */}
              </h2>
            </div>
          </a>
      </div>
        </div>

  )
}

export default NavBar
