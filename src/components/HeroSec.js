import React from 'react'
import "./HeroSec.css"
import But from './But.js'


function HeroSec() {
  return (
    <>
      <div className='hero'>
        <div className='cont'>
            <h1>ADVENTURE AWITS</h1>
            <p>What are you waiting for</p>
            <div>
              <But className="left  btn">GET STARTED</But>
              <But className="right btn">WATCH NOW</But>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSec
