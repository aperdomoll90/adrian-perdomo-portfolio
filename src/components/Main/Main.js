import React from 'react'
import './../../styles/App.css'
import { Button} from 'react-materialize'


import ContactMe from '../../routes/ContactMe'
import Portfolio from '../../routes/Portfolio'



function Main() {
  return (
    <main className="main">
       {/* <ContactMe /> */}
       {/* <Portfolio/> */}
       <ContactMe/>
        
    </main>
  )
}

export default Main
