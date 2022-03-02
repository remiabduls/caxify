import React from 'react';
import "./Testimonials.css";

function Testimonials() {
  return <div>
      <div className="testimonials-head">
      <div className='testimonials_1'>
          <span className='test'>Testimonials</span>
          <img className="line-6" src="images/line.png" alt="line" />
      </div>
      </div><div className="testimo">
      <div className="test-rectangle" >
      <div className="test-1"></div>
      <img class="test-ying" src="images/profile-1.jpeg" alt="ying"/>
      <div className="name"> Micheal K.</div>
      <div className="carxify-future">Carxify is the future of mobility. Now I don't have to worry about paying a huge amount of money just to own or drive any car of my choice.</div></div>
      <div className="test-rectangle-2">
      <div className="test-1-1"></div>
      <img class="test-fidele" src="images/profile-2.jpeg" alt="fidele"/>
      <div className="dr-samuel">Dr Samuel A.</div>
      <div className="carxify-eliminates">Carxify eliminates the worst parts about owning a car and offers customers peace of mind.</div></div>
      <div className="test-rectangle-3">
      <div className="test-1-2"></div>
      <img class="test-prince" src="images/profile-3.jpeg" alt="prince"/>
      <div className="chioma">Chioma E.</div>
      <div className="carxify-made">Carxify made me feel special. Subscription, car delivery and return were seamless. Worth every penny .</div></div>
      </div>
  </div>;
}

export default Testimonials;

 