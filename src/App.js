import React from 'react'
import './styles/App.css'
import 'materialize-css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
