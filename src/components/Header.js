import React from 'react'
import '../styles/_main.scss'
import 'materialize-css'
import { Icon, Button, SideNav, SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navBar">
      <Link to='/'>
        <div className='navBarIcon'>
          <i className='material-icons navBarIcon-img'>home</i>
          <div className='navBarIcon-overlay'>
            <div className='navBarIcon-title personalLinks-title'>Home </div>
          </div>
        </div>
      </Link>
      <Link to='/resume'>
        <div className='navBarIcon'>
          <i className='material-icons navBarIcon-img'>business_center</i>
          <div className='navBarIcon-overlay'>
            <div className='navBarIcon-title personalLinks-title'>Resume</div>
          </div>
        </div>
      </Link>
      <a href='https://firebasestorage.googleapis.com/v0/b/bocacode-fb.appspot.com/o/candidates%2Fresumes%2Fperdomo_resume_2021.pdf?alt=media' target='_Blank'>
        <div className='navBarIcon'>
          <i className='material-icons navBarIcon-img'>attach_file</i>
          <div className='navBarIcon-overlay'>
            <div className='navBarIcon-title personalLinks-title'>Download<br/>Resume </div>
          </div>
        </div>
      </a>
    </div>

  )
}

export default Header
