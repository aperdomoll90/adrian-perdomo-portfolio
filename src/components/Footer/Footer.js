import React from 'react'
import './../../styles/App.css'
import 'materialize-css';

import facebook from '../elements/facebooklogo.png'

function Footer(){
    return (
        <section className="footer">
          <p>© 2021 Adrian Perdomo. All rights reserved.</p>
          <div className="footer-icon-area">
          <img className="footer-icon" src={facebook} alt="linkicon"/>
          <img className="footer-icon" src={facebook} alt="linkicon"/>
          <img className="footer-icon" src={facebook} alt="linkicon"/>
          <img className="footer-icon" src={facebook} alt="linkicon"/>
          </div>
        </section>
      )
}

export default Footer