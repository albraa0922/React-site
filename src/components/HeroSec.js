import React from 'react'
import "./HeroSec.css"
import But from './But.js'
import { Link } from 'react-router-dom'


function HeroSec() {
  return (
    <>
      <div className='hero'>
        <div className='cont'>
            <h1>ADVENTURE AWITS</h1>
            <p>What are you waiting for</p>
            <div>
              <Link to="/Sign">
                <But className="left  btn">GET STARTED</But>
              </Link>
              <Link to="/products">
                <But className="right btn">WATCH NOW</But>
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSec
