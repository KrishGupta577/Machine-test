import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="logo-title">
            <p>
            Exclusive
            </p> 
        </div>

        <div className="nav-links">
            <a href="#home" className="home">Home</a>
            <a href="#contact" className="contact">Contact</a>
            <a href="about" className="about">About</a>
            <a href="" className="signup">Sign Up</a>
        </div>

        <div className="search-bar">
            <input type="text" placeholder='What are you looking for?' />
                
        </div>

    </div>
  )
}

export default Header