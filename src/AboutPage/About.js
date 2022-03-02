import React from 'react';
import { Button } from '@material-ui/core';
import "./About.css";
import Footer from '../Footer/Footer';
import {Link,NavLink} from "react-router-dom";

function About() {
  return <div className="About">
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
         <NavLink to="/faq"><span className="header__optionLineOne1">FAQ</span></NavLink>
        
       </div>
       <div className="header__option1">
         <Button variant='outlined'>Login</Button>
        
       </div>
       
       <div className="header__options1">
         <Button variant='outlined'>Get In Touch</Button>
        
       </div>
       

  </div>
  <div className="About-head">
         <h1 >About Us</h1>
         <p> Carxify is an on-demand car subscription service, offering short-term or long-term all-inclusive and hassle-free mobility experience.
      With us, you enjoy all the benefits of car ownership without the long-term commitment, down payment, high maintenance cost or the
      problems associated with owning a car.
      <br />
      <br />
      Carxify was founded on the simple premise of revolutionizing car ownership. We know the difficulty of saving up for a one time
      purchase, the paperwork laden process of car loan and the high cost of owning and maintaining a car.
      <br />
      <br />
      Carxify simplifies the complexity of automotive acquisition through out flexible, all-inclusive pocket friendly offers that includes
      insurance, maintenance, roadside assistance, car switching, delivery and pickup. <br />
      We want you to enjoy the car experience, not go through the car troubles.</p>
       </div>
       <div className="valueHeader">
      <div className='valueHeader1'>
          <span className='valueHeader_one'>Our Values</span>
          <img className="line8" src="images/line.png" alt="line" />
      </div>
  </div>
  <div className='overlay-excellence'>
  <div className="ellipse-container3"> 
  <div className="ellipse-57"></div>
  <div className="ellipse-58"></div>
  <div className="ellipse-59"></div>

  </div></div>
  <div className="excellence-words">
  <p className="excellence">Excellence</p>
  <p className="customers">Customers</p>
  <p className="innovation"> Innovation</p></div>
 
  <div className="customers-words">
  <div className="we-inspire">We inspire excellence and are commited to creating exceptional experiences that satisfies our customers</div>
  <div className="we-consider">We consider our customers as the central and most important part of all our descisions</div>
  <div className=" we-creative">We are creative and always striving to connect new ideas with business realities</div></div>

  <div className="missionHeader">
      <div className='missionHeader1'>
          <span className='missionHeader_one'>Our mission</span>
          <img className="line9" src="images/line.png" alt="line" />
      </div>
  </div>
  <div className="flex-row-mission">
    <img className="office" src="images/office.png" alt="office"/>
    <div className="we-believe">
    <h1 className="that-car">
      We believe that car subscription is the future of <br />
      mobility and we want to give more people access <br />
      to own or drive cars without the hassles of <br />
      owning one.
      <br />
      Our business was born out of the need for <br />
      customers to have a viable alternative to <br />
      traditional car rental or lease. With that in mind, <br />
      we work to create a service tailored to our <br />
      customers daily needs and lifestyle with out <br />
      flexible car subscription experience.
    </h1>
    </div>
  </div>
  <div className="valueHeader">
      <div className='valueHeader1'>
          <span className='valueHeader_one'>Teams</span>
          <img className="line8" src="images/line.png" alt="line" />
      </div>
  </div>
  <div className="flexy-team">
    <div className="flex-team1">
      <div className="ellipse-team"></div>
      <div className="name-team">Kate Adlin</div>
      <div className="ceo">CEO</div>
    </div>
    <div className="flex-team2">
      <div className="ellipse-team"></div>
      <div className="name-team2">John Smith</div>
      <div className="ceo-2">CEO</div>

    </div>
    <div className="flex-team2">
      <div className="ellipse-team"></div>
      <div className="name-team3">Layer Frank</div>
      <div className="ceo-3">CEO</div>

    </div>

  <div className="flex-team2">
      <div className="ellipse-team"></div>
      <div className="name-team4">Joseph Nerd</div>
      <div className="ceo-4">CEO</div>
    </div>  </div>
    <Footer/>
  
  </div>;
  
}

export default About;
