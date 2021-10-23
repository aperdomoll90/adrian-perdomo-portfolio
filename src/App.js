import React from 'react'
import './styles/_main.scss'
import 'materialize-css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import Landing from './routes/Landing'
import ContactMe from './routes/ContactMe'
import Resume from './routes/Resume'
import NavBar from './components/NavBar';



function App() {
  window.addEventListener('scroll', ()=>{
  document.querySelectorAll(".translate").forEach(element => {
  element.style.transform = `translateY(${window.pageYOffset * element.dataset.speed}px)`;
  })
  })

  return (
    <>
      <Router>
    <NavBar/>
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/home" component={Home} />
        <Route path="/ContactMe" component={ContactMe} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
     
    </>
  )
}

export default App
