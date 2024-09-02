import React, { useState } from 'react';
import "../App.css"
import "../components/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => 
    setIsOpen(!isOpen);
  ;

  let  CloseMune = () => setIsOpen(!isOpen);
  return (
    
    <nav className="navbar">
      <div className='navbar-cont' >
        <Link to='/' className='navbar-logo' >
          TRVL
        </Link>
        <div className="toggleablemenu">
          <button className="toggle-button" onClick={toggleMenu }>
            <p style={{display:(isOpen ? "flex" :"none")}}>x</p>
            <p  style={{display:(isOpen ? "none" :"block")}} ><span></span></p>
            <div className style={{display:(isOpen ? "none" :"flex")}}></div>
          </button>
            <div  className={isOpen ? "flex" + " nav-menu":  " nav-menu"}  >
                <div className='navbar-container' >
                  <Link to="/" className='nav-links'  onClick={CloseMune}>
                    Home
                  </Link>
                  <Link to="/services" className=' nav-links'  onClick={CloseMune}>
                    Services
                  </Link>
                  <Link to="/products" className=' nav-links'  onClick={CloseMune}>
                    Products
                  </Link>
                  <button className='sin-up'>
                    <Link to="/Sign" className=' nav-links'  onClick={CloseMune}>
                      Sign-up
                    </Link>
                  </button>
                </div>
            </div>
          
        </div>
      </div>
  </nav>
  );
};
export default Navbar;
