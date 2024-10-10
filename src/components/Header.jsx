import React from 'react'
import logoImg from '../assets/guavalogo.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div id="logo">
           <img src={logoImg} alt="guava-logo" class="guava-logo" />
        </div>
        <p class="logo-text">Guava Holdings</p>
        <nav class="navlinks">
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Brands</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
        <div id="menu-nav-burger">
          <div id="menu">
            <p>Menu</p>
            <div id="burger"></div>
          </div>
        </div>

    </div>
  )
}

export default Header