import React from 'react'
import './../../styles/App.css'
import { Button} from 'react-materialize'

import portrait from '../elements/profile.png'
import Feature from './Feature'

function Main() {
  return (
    <main className="main">
       <Feature/>
        <section className="hero-content">
          <div className="Stripe">
            <div className="Stripe-normalizedBox">
              <div className="Stripe-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, libero ratione illum officia delectus molestias ea
                nobis pariatur nesciunt? Eius exercitationem laudantium autem
                necessitatibus totam magni voluptate, recusandae minus quae!
              </div>
              <div className="portraitBox">
                <img src={portrait} className="portraitBox-portrait" />
              </div>
            </div>
          </div>


          
            <div className="content-box">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              libero ratione illum officia delectus molestias ea nobis pariatur
              nesciunt? Eius exercitationem laudantium autem necessitatibus
              totam magni voluptate, recusandae minus quae!
            
          </div>
        </section>

        
        <section className="heroContent">
          <div id="attenuator">
            <div className="Stripe">
            <div className="Stripe-normalizedBox">
              <div className="Stripe-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, libero ratione illum officia delectus molestias ea
                nobis pariatur nesciunt? Eius exercitationem laudantium autem
                necessitatibus totam magni voluptate, recusandae minus quae!
              </div>
              </div>
            </div>
          </div>


          <div className="heroContent heroContent-contactMe">
            <div className="content-box">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              libero ratione illum officia delectus molestias ea nobis pariatur
              nesciunt? Eius exercitationem laudantium autem necessitatibus
              totam magni voluptate, recusandae minus quae!
            </div>
          </div>
        </section>
       
    </main>
  )
}

export default Main
