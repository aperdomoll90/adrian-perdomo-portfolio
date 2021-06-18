import React from 'react'
import './styles/_main.scss'
import 'materialize-css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import ContactMe from './routes/ContactMe'
import Resume from './routes/Resume'


function App() {
  return (
    <>
      <Router>
      <Header />
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/ContactMe" component={ContactMe} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
     
    </>
  )
}

export default App
