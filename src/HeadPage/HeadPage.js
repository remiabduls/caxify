import { Button } from '@material-ui/core';
import React from 'react';
import "./HeadPage.css";
import { Link} from "react-router-dom";


function HeadPage() {
  return <div className='home'>
  <div className='landing'>
      <div className='landing__One'>
      <h1>Subscribe to car freedom</h1>
      <p> Enjoy the car experience not the troubles with help from the ultimate car subscription service.</p>
      <div className='flex-row'>
      <div className='land_tick'>
  <img className='landing_tick' src="images/tick.png" alt="tick"/></div>
  <div className='land_text'>All Inclusive</div>
  </div>
  <div className='flex-row1'>
      <div className='land_tick'>
  <img className='landing_tick' src="images/tick.png" alt="tick"/></div>
  <div className='land_text'>No security deposit</div>
  </div>
  <div className='flex-row'>
      <div className='land_tick'>
  <img className='landing_tick' src="images/tick.png" alt="tick"/></div>
  <div className='land_text'>No long-term commitment</div>
  </div>
      </div> 
       <img
        className="landing_car"
          src="images/cars.png" alt="car"
        />
        
       
  </div> 
  
  <div className='land_button'><Button component={Link} to="/explore"variant='outlined' style={{background: '#4169e1',
    border: '2px solid #1e90ff',
    color:'white',
    borderRadius:'12%',
   
     padding: '15px 32px'}}>Explore Cars</Button></div>
 
  </div>

}

export default HeadPage;
