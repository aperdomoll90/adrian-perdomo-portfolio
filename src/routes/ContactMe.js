import React from 'react'
import '../styles/_main.scss'
import mail from '../elements/mail.png'
import phone from '../elements/phone.png'
import linkedin from '../elements/linkedin.png'
import insta from '../elements/Instagram.svg'

function ContactMe() {
  return (
    <main className="main">
<div className="contactMe-2dividers contactInfo">
            <p className="titleBox-name ">Contact me</p>
            <ul>
              <li><img className="contactMe-icon" src={mail} alt="mail icon"/>Email</li>
              <li><img className="contactMe-icon" src={phone} alt="phone icon"/>Phone Number</li>
              <li><img className="contactMe-icon" src={linkedin} alt="linkedin icon"/>Linked</li>
              <li><img className="contactMe-icon" src={insta} alt="insta icon"/>Instagram</li>
            </ul>
          </div>
    </main>
  )
}

export default ContactMe
