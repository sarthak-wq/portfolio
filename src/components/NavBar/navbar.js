import React from 'react'
import './navbar.css'
import logo from '../../assets/cat.jpg'
import {Link} from 'react-scroll';
import contactImg from '../../assets/cat.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className='logo'/>
      <div className="navbarItems">
        <Link className="navbarItem">Home</Link>
        <Link className="navbarItem">Clients</Link>
        <Link className="navbarItem">About</Link>
        <Link className="navbarItem">Portfolio</Link>
      </div>
      <button className="contactBtn">
        <img src={contactImg} alt="" className="navbarImg"/>
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar;
