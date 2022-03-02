import React from 'react';
import './App.css';
import GlobalStyle from './globalStyles';
import LandingPage from './LandingPage/LandingPage';
import About from './AboutPage/About';
import ContactUs from './ContactUs/ContactUs';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Faq from './FAQ/Faq';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Explore from './Explore.jsx';
import ResetPassword from './ResetPassword.jsx';
import Verify from "./Verify/Verify";
import Home from "./Home.jsx";



function MyApp() { 
  return (
    <div className="App"> 
   <Router>
   <GlobalStyle/>
    <Switch>
      
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/explore">
        <Explore/>
      </Route>
      <Route path="/reset-password">
        <ResetPassword/>
      </Route>
      <Route path="/verify">
        <Verify/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/contact-us"> <ContactUs/></Route>
      <Route path="/faq"> <Faq/></Route>
      <Route path="/"> <LandingPage/></Route>
    </Switch>
    </Router>
    

    </div>
  );
}

export default MyApp;
