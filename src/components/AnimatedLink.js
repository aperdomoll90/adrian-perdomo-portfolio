import React from 'react'
import '../styles/_animatedLink.scss'
import 'materialize-css'

function AnimatedLink({label}) {
  return (
    <div className='linkContainer'>
            <div className='links'>
              <h2>
                {label}
                <span> {label}</span>
                <span> {label}</span>
              </h2>
            </div>
        </div>

  )
}

export default AnimatedLink
