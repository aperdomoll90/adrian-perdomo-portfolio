import React from 'react'
import mail from '../elements/mail.png'
import phone from '../elements/phone.png'
import linkedin from '../elements/linkedin.png'
import github from '../elements/github.png'
import cooking from '../elements/cooking.png'
import gym from '../elements/gym.png'
import gardening from '../elements/gardening.png'
import karaoke from '../elements/karaoke.png'
import baking from '../elements/baking.png'
import painting from '../elements/painting.png'
import traveling from '../elements/traveling.png'

function Right() {
  return (
    <div className='right'>
      <div className='experience'>
        <h4>EDUCATION</h4>
        <div>
          <p className='position'>Software Engineering Career Course</p>
          <p className='company'>Boca Code</p>
          <p>04/2020 - 06/2020</p>
        </div>
        <br />
        <div>
          <p className='position'>Associate in Arts Degree (Marketing) </p>
          <p className='company'>Palm Beach State College</p>
          <p>09/2014 – Present</p>
        </div>
        <br />
        <div>
          <p className='position'>EMT, Certification </p>
          <p className='company'>Palm Beach State College</p>
          <p>03/2015 – 09/2015</p>
        </div>
        <br />
        <div>
          <p className='position'>Bachelor of Science, Information Technology </p>
          <p className='company'>Institute Polytechnic Informatics Raul Cepero Bonilla </p>
          <p>09/2005 – 07/2008</p>
        </div>
        <br />
      </div>
      <div>
        <h4>SKILLS</h4>
        <div className='resumeSkills'>
          <p className='position'>React</p>
          <p className='position'>JavaScrip</p>
          <p className='position'>HTML</p>
          <p className='position'>CSS</p>
          <p className='position'>SASS</p>
          <p className='position'>SQL</p>
          <p className='position'>NoSQL</p>
          <p className='position'>Node</p>
          <p className='position'>Express</p>
          <p className='position'>Typescript</p>
          <p className='position'>React Native</p>
          <p className='position'>Electron</p>
        </div>
      </div>
      <br />
      <div>
        <h4>CONTACT INFO</h4>
        <ul className='contactMe'>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={phone} alt='phone icon' />
            (305) 343-9033
          </li>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={mail} alt='mail icon' />
            adrianperdomollerena@gmail.com
          </li>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={github} alt='linkedin icon' />
            <a href='https://github.com/aperdomoll90' rel="noreferrer" target='_Blank'>
              https://github.com/aperdomoll90
            </a>
          </li>
          <li className='contactMe-line'>
            <img className='contactMe-icon' src={linkedin} alt='linkedin icon' />
            <a href='https://www.linkedin.com/in/adrian-perdomo-12997474/' rel="noreferrer" target='_Blank'>
              https://www.linkedin.com/in/adrian-perdomo-12997474/
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h4>HOBBIES</h4>
        <div className='hobbyArea'>
          <div className='imageOverlay'>
            <img className='imageOverlay-img' alt='Icon of a dumbbell' src={gym} />
            <div className='imageOverlay-overlay'>
              <div className='imageOverlay-title'>GYM </div>
            </div>
          </div>
          <div className='imageOverlay'>
            <img className='imageOverlay-img' alt='Icon of cooking tools' src={cooking} />
            <div className='imageOverlay-overlay'>
              <div className='imageOverlay-title'>Cooking </div>
            </div>
          </div>
          <div className='imageOverlay'>
            <img className='imageOverlay-img' alt='icon of gardening tools' src={gardening} />
            <div className='imageOverlay-overlay'>
              <div className='imageOverlay-title'>Gardening </div>
            </div>
          </div>
          <div className='imageOverlay'>
            <img className='imageOverlay-img' alt='icon of karaoke microphone' src={karaoke} />
            <div className='imageOverlay-overlay'>
              <div className='imageOverlay-title'>Karaoke </div>
            </div>
          </div>
          <div className='imageOverlay'>
            <img className='imageOverlay-img' alt='icon of baking tools' src={baking} />
            <div className='imageOverlay-overlay'>
              <div className='imageOverlay-title'>Baking </div>
            </div>
          </div>
          <div className='imageOverlay'>
            <img className='imageOverlay-img' alt='icon of a painting brush' src={painting} />
            <div className='imageOverlay-overlay'>
              <div className='imageOverlay-title'>Painting </div>
            </div>
          </div>
          <div className='imageOverlay'>
            <img className='imageOverlay-img' alt='Icon of a plane flying' src={traveling} />
            <div className='imageOverlay-overlay'>
              <div className='imageOverlay-title'>Traveling </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Right
