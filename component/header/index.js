import React from 'react';
import './header.css';
// import Logo from './images/Zomato-Logo.png';
import Logo from "./images/Zomato-Logo.png";
const Header = () => {
  return (
    <div className='header'>
      <nav>
        <span>
          Get The App
        </span>
        <div className='right'>
          <span>Investor Relations</span>
          <span>Add restaurant</span>
          <span>Log in</span>
          <span>Sign in</span>
        </div>
      </nav>
      <div className='headerContent'>
        <img src={Logo} alt='Logo_img' />
        <h3>Discover the best food & drinks in world</h3>
        <div className='input'>
          <select name='' id=''>
            <option value="chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          <input type="text" placeholder='Search for restaurant, cuisine or a dish' />
        </div>
      </div>
    </div>

  );
};

export default Header;