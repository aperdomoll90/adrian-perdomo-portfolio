import React from 'react'
import '../styles/_main.scss'
import 'materialize-css'
import { Link } from 'react-router-dom'

function Header() {
  return (
<nav>
    <div class="nav-wrapper header">
      <a href="#!" class="brand-logo header-logo">AP.</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down header-nav">
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/">Contact me</Link></li>
        
      </ul>
    </div>
  </nav>

  // <ul class="sidenav" id="mobile-demo">
  //   <li><a href="sass.html">Sass</a></li>
  //   <li><a href="badges.html">Components</a></li>
  //   <li><a href="collapsible.html">Javascript</a></li>
  //   <li><a href="mobile.html">Mobile</a></li>
  // </ul>

  // <ul class="sidenav" id="mobile-demo">
  //   <li><a href="sass.html">Sass</a></li>
  //   <li><a href="badges.html">Components</a></li>
  //   <li><a href="collapsible.html">Javascript</a></li>
  //   <li><a href="mobile.html">Mobile</a></li>
  // </ul>

  )
}

export default Header
