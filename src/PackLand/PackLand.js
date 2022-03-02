import React from 'react';
import "./PackLand.css";

function PackLand() {
  return <div >
      <div className="overlap-group-container">
          <div className="overlap-group30">
            <img className="insurance" src="images/insurance.png" alt="insurance" />
          </div>
          <div className="overlap-group32">
            <img className="maintenance" src="images/maintenance.png" alt="maintenance" />
          </div>
       
        <div className="ance-container">
          <div className="insurance-1">
            Insurance
          </div>
          <div className="maintenance-repairs">
           Maintenance & Repairs
          </div>
        </div>
        </div>
        <div className="flex-row-5">
          <div className="our">
            Our cars are fully
          </div>
          <div className="you">
           You don't have to
          </div>
        </div>
        <div className="overlap-group-container-1">
          <div className="overlap-group31">
            <img className="assistance" src="images/assistance.png" alt="assistance"/>
          </div>
          <div className="overlap-group29">
            <img className="switch-1" src="images/switch.png" alt="switch" />
          </div>
        </div>
        <div className="flex-row-6">
          <div className="roadside-assistance">
            road side assistance
          </div>
          <div className="switch-cars">
           switch cars
          </div>
        </div>
        <div className="flex-row-7">
          <div className="our">
          Our team is on hand
          </div>
          <div className="you">
           you have access to
          </div>
        </div>
  </div>;
}

export default PackLand;
