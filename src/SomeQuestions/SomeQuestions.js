import "./SomeQuestions.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Faq from "react-faq-component";
import NewQuestions from "./NewQuestions";
import { Link } from "react-router-dom";
import "./SomeQuestions.css";



const data = {
    title: "Frequently Asked Questions",
    rows: [
      {
        title: "what is CARXIFY?",
        content:
          "illo.mx is a nft marketplace dapp running on the tao blockchain."
      },
      {
        title: "How long does it take to get my car?",
        content:
          "illo.mx is currently in public aplha and much about it is subject to change. please do not use it for more than testing and amusement for now."
      },
      {
        title: "what are my liabilities?",
        content: "tao is a smaller EVM compatible blockchain."
      },
      {
        title: "Are the prices negotiable?",
        content: "tao is a smaller EVM compatible blockchain."
      }
    ]
  };
  
  const styles = {
      
     bgColor: '#add8e6',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentPaddingBottom: "20px",
    rowContentPaddingLeft: "20px",
    rowContentPaddingRight: "20px",
   
    //rowContentColor: 'grey',
    // arrowColor: "red",
  };
  
  const config = {
    animate: true,
    //arrowIcon: "V",
     tabFocus: true
  };
  
  export default class App extends Component {
    render() {
      return (
        <div>
            <NewQuestions/>
           
          <div class="px-5 md:px-64 lg:px-96 ">
            <Faq data={data} styles={styles} config={config} />
            <div className="view-button-home">
     <Link> <div className="view">View More</div></Link>
      <div className="view-106">
          <div className="view-106">
              <div className="view-container-1">
                  <img className="path-234" src="images/explore.png" alt="path"/>
                  <img className="path-235" src="images/arrow.png" alt="path"/>
              </div>
          </div>
      </div>
  </div>
          </div>
         
        </div>
      );
    }
  }