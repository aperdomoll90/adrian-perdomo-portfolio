import React from 'react'

import NavBar from '../components/NavBar'
import '../styles/_landing.scss'
import Laptop from '../elements/test/laptop.png'
import Profile from '../elements/test/profile.png'
import Cellphone from '../elements/test/cellphone.png'
import Overview from '../components/Overview'

const translate =document.querySelectorAll(".translate");
window.addEventListener('scroll', ()=>{
let scroll = window.pageYOffset;
translate.forEach(element => {
let speed = element.dataset.speed;
element.style.transform = `translateY(${scroll * speed}px)`;
})
})
 
function Landing() {
  return (
    <main>
      <div id='firstImage' className='parallaxBackground'>
        <img src={Laptop} className='laptop translate' data-speed="0.25" alt='laptop'/>
        <img src={Profile} className='profile translate'data-speed="0.4" alt='profile'/>
        <img src={Cellphone} className='cellphone translate' data-speed="-0.8" alt='cellphone'/>
       <NavBar className='translate' data-speed="-0.30"/>
       <div className='titleBox'>
          <div>
            <p className='titleBox-name'>
              Hello, I’m <span>Adrian Perdomo</span>
            </p>
            <p className='titleBox-bold'>Full Stack Dev</p>
            <p className='titleBox-description'>
              Welcome to my portfolio. I am a Full-stack Software Engineer, mobile developer, certified EMT, fluent in English and Spanish, has worked in medical data and medical finance as well as IT at a medical school. I love art, cooking, baking, medical applications of technology, nanotechnology, automation, AI,
              and I hope to improve lives through my work.
            </p>
          </div>
        </div>
      </div>
      <div id='skills' className='container'>
        <div className="shadow"></div>
      <Overview/>
      </div>
      <div id='secondImage' className='container'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nesciunt id delectus excepturi esse unde repellat voluptate, alias consequatur placeat dolor voluptatibus nulla repellendus laudantium doloribus, vel eligendi! Atque, nam.</p>
      </div>
      <div id='footer' className='container'>
        <p className='footerText'>© 2021 Adrian Perdomo Portfolio. All Rights Reserved. Published with React</p>
      </div>
    </main>
    
  )
}

export default Landing
