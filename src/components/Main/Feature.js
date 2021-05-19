import React from 'react'
import './../../styles/App.css'
import { Button} from 'react-materialize'
import laptop from '../elements/laptop.png'

function Feature(){
    return(
        <section id="section1" class="container">
          <div className="titleBox">
            <div>
              <p className="titleBox-name">
                Hello, I’m <span>Adrian Perdomo</span>
              </p>
              <p className="titleBox-bold">Full Stack Dev</p>
              <p className="titleBox-description">
                Full stack dev with a passion for Web Design\Automatization and
                AI
              </p>
            </div>
            <div className="titleBox-buttonField">
            <a class="waves-effect waves-light btn-large">Button</a>
            <a class="waves-effect waves-light btn-large">Button</a>
            </div>
          </div>
          <div id="laptopBox">
            <img src={laptop} alt="Purple Laptop" />
          </div>
        </section>
    )
}

export default Feature