import React, { useState } from 'react'
import logo from'../assets/images/logo.svg'
import { Link } from 'react-router-dom'


function Header() {


  return (
    <div>
        <header className="navbar">
  <img src={logo} alt="Entri newa logo" className="logo" />
  <nav className="links">
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <a href="#" className="link">
          New
        </a>
      </li>
      <li>
        <a href="#" className="link">
          Populer
        </a>
      </li>
      <li>
      <Link to="/trending" className="link">Trending</Link>
      </li>
    <li>
      <Link to="/signup" className="link">SignUp</Link>
      </li> 
      
    </ul>
  </nav>
</header>
    </div>
  )
}

export default Header