import React from 'react'
import './styles/_main.scss'
import 'materialize-css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './routes/Landing'
import ContactMe from './routes/ContactMe'
import Resume from './routes/Resume'
import NavBar from './components/NavBar';



function App() {
  window.addEventListener('scroll', ()=>{
    const section = document.querySelector('section')
    const section_height = document.querySelector('section').offsetHeight

    let sectionY = section.getBoundingClientRect()

  document.querySelectorAll(".translate").forEach(element => {
  element.style.transform = `translateY(${window.pageYOffset * element.dataset.speed}px)`;
  })
  document.querySelectorAll(".divider").forEach(element => {
    element.style.width = `${window.pageYOffset * 0.1}%`;
    })

  document.querySelector('.titleBox').style.opacity = -window.pageYOffset / (document.querySelector('.firstContainer').offsetHeight / 2) + 1.5
  // document.querySelector(".profile").style.opacity = - window.pageYOffset / (document.querySelector(".firstContainer").offsetHeight /2)+1.6;
  document.querySelector('.cellphone').style.opacity = -window.pageYOffset / (document.querySelector('.firstContainer').offsetHeight / 2) + 1
  document.querySelector('.personalLinks').style.opacity = -window.pageYOffset / (document.querySelector('.firstContainer').offsetHeight / 2) + 1
  document.querySelector('.shadow').style.height = `${window.pageYOffset * 0.5 + 500}px`
  document.querySelector(".content").style.transform = `translateY(${(window.pageYOffset / (section_height + sectionY.top)) * 75 - 60}px)`
  document.querySelector(".content").style.opacity = - window.pageYOffset / (document.querySelector(".overviewMainContainer").offsetHeight /2)+4.6;
  document.querySelector(".skillsColumn").style.transform = `translateY(${(window.pageYOffset / (section_height + sectionY.top)) * -75 + 60}px)`
  document.querySelector(".skillsColumn").style.opacity = - window.pageYOffset / (document.querySelector(".overviewMainContainer").offsetHeight /2)+ 4.6;
  // document.querySelector(".overviewMainContainer ").style.height = `${window.pageYOffset * - 0.5 - 50}px`;
  document.querySelector(".verticalDivider ").style.height = `${window.pageYOffset * 0.09}%`;
  })

  

  return (
    <>
      <Router>
    <NavBar/>
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/ContactMe" component={ContactMe} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
     
    </>
  )
}

export default App
