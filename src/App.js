import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './routes/landing/Landing'
import Resume from './routes/resume/Resume'
import NavBar from './components/navBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/resume' component={Resume} />
        <Route path='/' component={Landing} />
      </Switch>
    </Router>
  )
}

export default App
