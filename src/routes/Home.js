import React from 'react'
import '../styles/_main.scss'
import portrait from '../elements/profile.png'

function ContactMe() {
  return (
    <main className='main'>
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

        <img src={portrait} id='portrait' />
      </section>

      <div className='Stripe'>
        <div className='featureBox featureBox-f1'>Feature 1</div>
        <div className='featureBox featureBox-f2'>Feature 2</div>
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
            <p className='titleBox-name'>Most used Technologies</p>
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