import React from 'react'
import But from './But'
import { Link } from 'react-router-dom'
import "./Footer.css"
import ins from "../imges/instagram-svgrepo-com(2).svg"
import li from"../imges/linkedin-svgrepo-com.svg"  
import tw from"../imges/twitter-svgrepo-com.svg"
import yo from"../imges/youtube-168-svgrepo-com.svg"
import fa from "../imges/facebook-svgrepo-com.svg"
import { useState } from 'react'

function Footer() {
  const [myInput, setMyInput] = useState("");
  function inputChange(e){
    setMyInput(e.target.value);
  }
  return (
    <div className='footer'>
      <section className='sub'>
        <p className='head'>Join the Adventure to receive our best vacation deals</p>
        <p>You can unsubscribe any time.</p>
        <form>
          <input type='email' placeholder='Your Email' value={myInput} onChange={inputChange}></input>
          <But className="left  btn">Sucbscribe</But>
        </form>
      </section>
      <section className='footer-links'>
      <div className='footer-wrap'>
        <div className='footer-items'>
            <h2>About us</h2>
            <Link to="/Sign">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of service</Link>
          </div>
          <div className='footer-items'>
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
      </div>
       <div className='footer-wrap'>
        <div className='footer-items'>
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
          <div className='footer-items  marg'>
            <h2>Videos</h2>
            <Link to="/">Submit Videos</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
       </div>
      </section>
      <section className='Social'>
        <small>TRVL</small>
        <div className='icon'>
          <Link to="/" target='_blank' aria-label='facebook'><img src={fa}></img></Link>
          <Link to="/" target='_blank' aria-label="instgram"><img src={ins}></img></Link>
          <Link to="/" target='_blank' aria-label='twitter'><img src={tw}></img></Link>
          <Link to="/" target='_blank' aria-label='linkin'><img src={li}></img></Link>
          <Link to="/" target='_blank' aria-label='Youtub'><img src={yo}></img></Link>
          
        </div>
      </section>
    </div>
  )
}

export default Footer
