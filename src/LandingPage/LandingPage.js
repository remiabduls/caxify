import React , { useState, useEffect } from 'react';
import Header from '../Header/Header'
import HeadPage from '../HeadPage/HeadPage';
import MinHeader from '../MinHeader/MinHeader';
import MiniHome from '../MiniHome/MiniHome';
import MiniLanding from '../MiniLanding/MiniLanding';
import MiniLandingText from '../MiniLandingText/MiniLandingText';
import BottomLanding from '../BottomLanding/BottomLanding';
import BottomCard from '../BottomCard/BottomCard';
import Package from '../Package/Package';
import PackLand from '../PackLand/PackLand';
import Subscription from '../Subscription/Subscription';
import SubscriptionPlan from '../SubscriptionPlan/SubscriptionPlan';
import Explore from "../Explore/Explore"
import Footer from '../Footer/Footer.jsx';
import { Switch, Route } from "react-router";


import SomeQuestions from '../SomeQuestions/SomeQuestions';
import Testimonials from '../Testimonials/Testimonials';


function LandingPage() {
    const [width, setWindowWidth] = useState(0);

    // componentDidMount...runs only once
    useEffect( () => {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, [])
  
    const updateDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };
  
    const responsive = {
      showTopNavMenu: width > 1023
    }
  
  return <div>
      <Header showTopNavMenu={responsive.showTopNavMenu}/>
     <HeadPage/>
     <MinHeader/>
     <MiniHome/>
     <MiniLanding/>
     <MiniLandingText/>
     <BottomLanding/>
    <BottomCard/>
    <Package/>
    <PackLand/>
    <Subscription/>
    <SubscriptionPlan/>
    <Explore/>
    
    <SomeQuestions/>
    <Testimonials/>
 
   
    <Footer/>
    

  </div>;
}

export default LandingPage;
