import React from 'react'
import '../styles/_main.scss'
import portrait from '../elements/profile.png'
import Sapphire from '../elements/sapphireFeature/sapphire'
import affirmations from '../elements/affirma.png'
import linkedin from '../elements/linkedin.png'
import github from '../elements/github.png'

function ContactMe() {
  return (
    <main >
      <section className='area1'>
        <div className='titleBox'>
          <div>
            <p className='titleBox-name'>
              Hello, I’m <span>Adrian Perdomo</span>
            </p>
            <p className='titleBox-bold'>Full Stack Dev</p>
            <p className='titleBox-description'>
              Welcome to my portfolio. I am a Full-stack Software Engineer, certified EMT, fluent in English and Spanish, has worked in medical data and medical finance as well as IT at a medical school. I love art, cooking, baking, medical applications of technology, nanotechnology, automation, AI,
              and I hope to improve lives through my work.
            </p>
          </div>
        </div>
        <div className="personalLinks">
         <a href="https://www.linkedin.com/in/adrian-perdomo-12997474/" target="_Blank"><img src={linkedin}  className="btn btn-floating btn-large waves-effect waves-light "/></a> 
         <a href="https://github.com/aperdomoll90" target="_Blank"> <img src={github}className="btn btn-floating btn-large waves-effect waves-light "/></a> 
        </div>

        <img src={portrait} id='portrait' />
      </section>

      <div className='Stripe'>
        <div className='featureBox'>
          <p>Mind Sapphire</p>
          <Sapphire />
          <div className="featureLinks">
              <a href="https://mindsapphire.com/" target="_Blank">Demo</a>
              <a href="https://github.com/aperdomoll90/mindsapphire" target="_Blank">Github</a>
              <a href="https://github.com/aperdomoll90/mindsapphire-api" target="_Blank">API</a>
          </div>
        </div>
        <div className='featureBox'>
          <p>Sweet Affirmation</p>
         <img src={affirmations} className=""/>
          <div className="featureLinks">
              <a href="https://afirmap-fc6fa.web.app/" target="_Blank">Demo</a>
              <a href="https://github.com/aperdomoll90/AffirmationsApp" target="_Blank">Github</a>
              <a href="https://github.com/aperdomoll90/Affirmations-api" target="_Blank">API</a>
          </div>
        </div>
        <div className='featureBox featureBox-f3'>Feature 3</div>
      </div>

      <section className='area3'>
        <div className='area3-2dividers'>
          <div className='titleBox-name'>Education</div>
          <div className='featureBox-schoolSkill'>
            <ul>
              <li>Software Engineering Career Course Boca Code 04/2020 - 06/2020</li>
              <li>Associate in Arts Degree (Marketing) Palm Beach State College</li>
              <li>09/2014 – Present EMT, Certification Palm Beach State College</li>
              <li>03/2015 – 09/2015 Bachelor of Science, Information Technology</li>
              <li>Institute Polytechnic Informatics Raul Cepero Bonilla 09/2005 – 07/2008</li>
            </ul>
          </div>
        </div>
        <div className='area3-2dividers'>
          <p className='titleBox-name'>Most used Skills</p>
          <div className='area3-skillArea'>
            <div className='area3-skill area3-yellow'>React</div>
            <div className='area3-skill area3-blue'>React Native</div>
            <div className='area3-skill area3-orange'>Electron</div>
            <div className='area3-skill area3-purple'>JavaScript</div>
            <div className='area3-skill area3-yellow'>SQL / NoSQL</div>
            <div className='area3-skill area3-red'>HTML</div>
            <div className='area3-skill area3-blue'>CSS</div>
            <div className='area3-skill area3-yellow'>SASS</div>
            <div className='area3-skill area3-green'>Node</div>
            <div className='area3-skill area3-purple'>Express</div>
            <div className='area3-skill area3-green'>Mongo db</div>
            <div className='area3-skill area3-purple'>Firebase</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactMe
