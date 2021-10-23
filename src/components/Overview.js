import React from 'react'
import '../styles/_overview.scss'
import 'materialize-css'


function Overview() {
  return (
    <section className='area3'>
        <div className='area3-2dividers'>
          <div className='titleBox-name titlePosition'>Education</div>
          <div className="divider"/>
          <div className='area3-school'>
            <ul>
              <li>04/2020 - 06/2020 Software Engineering Career Course Boca Code </li>
              <li>Associate in Arts Degree (Marketing) Palm Beach State College</li>
              <li>09/2014 – Present EMT, Certification Palm Beach State College</li>
              <li>03/2015 – 09/2015 Bachelor of Science, Information Technology</li>
              <li>09/2005 – 07/2008 Institute Polytechnic Informatics Raul Cepero Bonilla </li>
            </ul>
          </div>
        </div>
        <div className="verticalDivider"/>
        <div className='area3-2dividers'>
          <p className='titleBox-name titlePosition'>Most used Skills</p>
          <div className="divider"/>
          <div className='area3-skillArea'>
            <div className='area3-skill area3-yellow'>React</div>
            <div className='area3-skill area3-blue'>React Native</div>
            <div className='area3-skill area3-orange'>Electron</div>
            <div className='area3-skill area3-purple'>TypeScript</div>
            <div className='area3-skill area3-yellow'>SQL / NoSQL</div>
            <div className='area3-skill area3-red'>HTML</div>
            <div className='area3-skill area3-blue'>CSS</div>
            <div className='area3-skill area3-yellow'>SASS</div>
            <div className='area3-skill area3-green'>Node</div>
            <div className='area3-skill area3-purple'>Express</div>
            <div className='area3-skill area3-green'>Styled Components</div>
            <div className='area3-skill area3-purple'>Firebase</div>
          </div>
        </div>
      </section>
  )
}

export default Overview
