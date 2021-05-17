import React from 'react'
import './../../styles/App.css'
import 'materialize-css'

function Header() {
  return (
    <section className="header">
      <div id="logo" className="title-font">AP.</div>
      <div id="nav" className="nav">
        <a className="navlink">Home</a>
        <a className="navlink">Resume</a>
        <a className="navlink">Portfolio</a>
        <a className="navlink">Contact me</a>
      </div>

    </section>
  )
}

export default Header
