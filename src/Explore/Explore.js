import React from 'react';
import "./Explore.css";
import {Link} from "react-router-dom";

function Explore() {
  return <div className="explore-button-home">
      <Link to="/home"><div  className="explore">Explore</div></Link>
      <div className="group-106">
          <div className="group-106">
              <div className="path-container-1">
                  <img className="path-234" src="images/explore.png" alt="path"/>
                  <img className="path-235" src="images/arrow.png" alt="path"/>
              </div>
          </div>
      </div>
  </div> ;
}

export default Explore;
