import React from 'react'
import '../styles/_landing.scss'
import Laptop from '../elements/test/laptop.png'
import Profile from '../elements/test/profile.png'
import Cellphone from '../elements/test/cellphone.png'
import Overview from '../components/Overview'
import Portfolio from '../components/Portfolio'



function Landing() {
  
  window.addEventListener('scroll', ()=>{
    document.querySelectorAll(".translate").forEach(element => {
    element.style.transform = `translateY(${window.pageYOffset * element.dataset.speed}px)`;
    })
    document.querySelector(".titleBox").style.opacity = - window.pageYOffset / (document.querySelector(".firstContainer").offsetHeight /2)+1.5;
    // document.querySelector(".profile").style.opacity = - window.pageYOffset / (document.querySelector(".firstContainer").offsetHeight /2)+1.6;
    document.querySelector(".cellphone").style.opacity = - window.pageYOffset / (document.querySelector(".firstContainer").offsetHeight /2)+1;
    document.querySelector(".shadow").style.height = `${window.pageYOffset * 0.5 + 500}px`;

    })

  
  return (
    <main>
      <div id='firstImage' className='firstContainer'>
        <img src={Laptop} className='laptop translate' data-speed="0.45" alt='laptop'/>
        <img src={Profile} className='profile translate'data-speed="0.4" alt='profile'/>
        <img src={Cellphone} className='cellphone translate' data-speed="-0.8" alt='cellphone'/>
       
       <div className='titleBox translate' data-speed="0.1">
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
      <div id='skills' >
        <div className="shadow"/>
        <div id='leftColumn' >
      <Overview/>
      </div>
      <div id='rightColumn' >
       <Portfolio/>
      </div>
      </div>
      
      <div id='footer' className='container'>
        <p className='footerText'>© 2021 Adrian Perdomo Portfolio. All Rights Reserved. Published with React</p>
      </div>
    </main>
    
  )
}

export default Landing
