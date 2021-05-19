import React from 'react'
import './styles/_main.scss'
import 'materialize-css';
import Header from './components/Header/Header'
import Main from './components/Main/Main.js'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id="All">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
