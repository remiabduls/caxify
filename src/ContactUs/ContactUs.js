import React from 'react';
import Contact from './contact';
import { Button } from '@material-ui/core';
import "./ContactUs.css";
import Footer from '../Footer/Footer';
import {Link, NavLink} from "react-router-dom";

function ContactUs() {
  return <div className="contact">
      <div className='header1'>
  <img
    className="header__logo1"
      src="images/caxlogo.png" alt="logo"
    />
    <div className="header__option1">
     
     <NavLink to="/"><span className="header__optionLineOne1">Home</span></NavLink>

   </div>
   <div className="header__option1">
     <NavLink to="/about"><span className="header__optionLineOne1">About</span></NavLink>

   </div>

   <div className="header__option1">
     <NavLink to="/contact-us"><span className="header__optionLineOne1">Become A Partner</span></NavLink>
     
   </div>

   <div className="header__option1">
    <NavLink to="/faq"> <span className="header__optionLineOne1">FAQ</span></NavLink> 
    
   </div>
   <div className="header__option1">
     <Button variant='outlined'>Login</Button>
    
   </div>
   
   <div className="header__options1">
     <Button variant='outlined'>Get In Touch</Button>
    
   </div>
   

</div>

<div className="contact-text">


<h1 className="contact-me">Contact Us
</h1></div>
<div className="contacted-text">
<h2 className="contacted"> Reach out to us for more information on issues and questions ranging from subscription to partnership. Suggestions are also very
      welcome.</h2></div>
      <div className="contacted-line"><img className="line10" src="images/line-10.png" alt="line" /><img className="line12" src="images/line-12.png" alt="line" /></div>
<Contact/>
<Footer/>
</div>;
}

export default ContactUs;
