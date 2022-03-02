import React from 'react';
import { Button } from '@material-ui/core';
import {NavLink, Link} from "react-router-dom";
import "./Header.css";



function Header() {
  return <div className='header'>

      <img
        className="header__logo"
          src="images/caxlogo.png" alt="logo"
        />
        <div className="header__option">
         
         <NavLink to="/"><span className="header__optionLineOne">Home</span></NavLink>
 
       </div>
       <div className="header__option">
        <NavLink to="/about"> <span className="header__optionLineOne">About</span></NavLink>
 
       </div>

       <div className="header__option">
         <NavLink to="/contact-us"><span className="header__optionLineOne">Become A Partner</span></NavLink>
         
       </div>

       <div className="header__option">
         <NavLink to="/faq"><span className="header__optionLineOne">FAQ</span></NavLink>
        
       </div>
       <div className="header__option">
        <Button component={Link} to="/login"variant='outlined' style={{background: '#4169e1',
    border: '2px solid #1e90ff',
    color:'white',
    borderRadius:'12%',
    padding:' 15px 30px',}}>Login</Button>
        
       </div>
       
       <div className="header__options">
         <Button component={Link} to="/signup" variant='outlined' style={{ border: '2px solid #1e90ff',
    color:'black',
    borderRadius:'12%',
    padding:' 15px 30px',
    background: '#fff',
    marginRight: '10px'}}>Get In Touch</Button>
        
       </div>

  </div>;
}

export default Header;
