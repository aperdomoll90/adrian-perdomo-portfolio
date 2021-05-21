import React from 'react'
import './styles/_main.scss'
import 'materialize-css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactMe from './routes/ContactMe'
import Portfolio from './routes/Portfolio'
import Resume from './routes/Resume'


function App() {
  return (
    <div id="All">
      <Router>
      <Header />
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={ContactMe} />
      </Switch>
      <Footer />
    </Router>
     
    </div>
  )
}

export default App
