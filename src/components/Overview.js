import React from 'react'
import '../styles/_overview.scss'
import 'materialize-css'

function Overview() {
  window.addEventListener('scroll', () => {
    const section = document.querySelector('section')
    const section_height = document.querySelector('section').offsetHeight
    let sectionY = section.getBoundingClientRect()

    console.log('sectionY', sectionY.top)

    document.querySelector(".content").style.transform = `translateY(${(window.pageYOffset / (section_height + sectionY.top)) * 75 - 60}px)`
    document.querySelector(".content").style.opacity = - window.pageYOffset / (document.querySelector(".overviewMainContainer").offsetHeight /2)+4.6;
    document.querySelector(".skillsColumn").style.transform = `translateY(${(window.pageYOffset / (section_height + sectionY.top)) * -75 + 60}px)`
    document.querySelector(".skillsColumn").style.opacity = - window.pageYOffset / (document.querySelector(".overviewMainContainer").offsetHeight /2)+ 4.6;


    document.querySelector(".overviewMainContainer ").style.height = `${window.pageYOffset * - 0.5 - 50}px`;
    document.querySelector(".verticalDivider ").style.height = `${window.pageYOffset * 0.3 + 200}px`;
    document.querySelector(".leftDivider").style.width = `${window.pageYOffset * 0.2 + 50}px`;
    document.querySelector(".rightDivider").style.width = `${window.pageYOffset * 0.2 + 50}px`;
  })

  return (
    <section className='overviewMainContainer'>
      <div className='overviewMainContainer-column content'>
        <div className='titleBox-name titlePosition'>Education</div>
        <div className='divider leftDivider' />
        <div className='content-school'>
          <ul>
            <li>04/2020 - 06/2020 Software Engineering Career Course Boca Code </li>
            <li>Associate in Arts Degree (Marketing) Palm Beach State College</li>
            <li>09/2014 – Present EMT, Certification Palm Beach State College</li>
            <li>03/2015 – 09/2015 Bachelor of Science, Information Technology</li>
            <li>09/2005 – 07/2008 Institute Polytechnic Informatics Raul Cepero Bonilla </li>
          </ul>
        </div>
      </div>
      <div className='verticalDivider' />
      <div className='overviewMainContainer-column skillsColumn'>
        <p className='titleBox-name titlePosition'>Most used Skills</p>
        <div className='divider rightDivider ' />
        <div className='skillsColumn-skillArea'>
          <div className='skillsColumn-skill skillsColumn-yellow'>React</div>
          <div className='skillsColumn-skill skillsColumn-blue'>React Native</div>
          <div className='skillsColumn-skill skillsColumn-orange'>Electron</div>
          <div className='skillsColumn-skill skillsColumn-purple'>TypeScript</div>
          <div className='skillsColumn-skill skillsColumn-yellow'>SQL / NoSQL</div>
          <div className='skillsColumn-skill skillsColumn-red'>HTML</div>
          <div className='skillsColumn-skill skillsColumn-blue'>CSS</div>
          <div className='skillsColumn-skill skillsColumn-yellow'>SASS</div>
          <div className='skillsColumn-skill skillsColumn-green'>Node</div>
          <div className='skillsColumn-skill skillsColumn-purple'>Express</div>
          <div className='skillsColumn-skill skillsColumn-green'>Styled Components</div>
          <div className='skillsColumn-skill skillsColumn-purple'>Firebase</div>
        </div>
      </div>
    </section>
  )
}

export default Overview
